import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export function useMoviesCrud() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const formRef = useRef(null);

	// Cargar películas al inicio como getAll
	useEffect(() => {
		axios
			.get('http://localhost:4000/movies')
			.then((res) => setMovies(res.data))
			.catch((err) => console.error('Error al cargar películas:', err));
	}, []);

	// Agregar película - imagen por defecto si no se ingresa una url valida
	const addMovie = async (movie) => {
		try {
			const movieWithDefaultImage = {
				...movie,
				image_url:
					movie.image_url?.trim() ||
					'https://www.oaktreeproductions.co.uk/media/3212/imdb.png?anchor=center&mode=crop&width=440&height=440&rnd=132081108920000000',
			};

			const response = await axios.post(
				'http://localhost:4000/movies',
				movieWithDefaultImage,
			);
			setMovies((prev) => [...prev, response.data]);
		} catch (error) {
			console.error('Error al agregar película:', error);
		}
	};

	// Actualizar película
	const updateMovie = async (updatedMovie) => {
		try {
			const res = await axios.put(
				`http://localhost:4000/movies/${updatedMovie.id}`,
				updatedMovie,
			);
			setMovies((prev) =>
				prev.map((movie) => (movie.id === updatedMovie.id ? res.data : movie)),
		);
		setSelectedMovie(null);
	} catch (error) {
		console.error('Error al actualizar película:', error);
	}
};

// Eliminar película
const deleteMovie = async (id) => {
	try {
		await axios.delete(`http://localhost:4000/movies/${id}`);
		setMovies((prev) => prev.filter((movie) => movie.id !== id));
	} catch (error) {
		console.error('Error al eliminar película:', error);
	}
};

// Dirigir al formulario al oprimir "Editar"
	const handleEdit = (movie) => {
		setSelectedMovie(movie);
		if (formRef.current) {
			formRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return {
		movies,
		selectedMovie,
		formRef,
		addMovie,
		deleteMovie,
		updateMovie,
		handleEdit,
	};
}
