import { useState } from 'react';
import MovieForm from './components/MovieForm/MovieForm';
import MovieCard from './components/MovieCard/MovieCard';
import Modal from './components/Modal/Modal';
import { useMoviesCrud } from './hooks/useMoviesCrud';

function App() {
	const {
		movies,
		selectedMovie,
		formRef,
		addMovie,
		deleteMovie,
		updateMovie,
		handleEdit,
	} = useMoviesCrud();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openForm = (movie = null) => {
		handleEdit(movie); // actualiza selectedMovie
		setIsModalOpen(true);
	};

	const closeForm = () => {
		handleEdit(null); // limpia el formulario
		setIsModalOpen(false);
	};

	return (
		<div className="app">
			<h1>Películas Favoritas</h1>

			<button onClick={() => openForm()} style={{ marginBottom: '1rem' }}>
				Agregar película
			</button>

			<Modal isOpen={isModalOpen} onClose={closeForm}>
				<MovieForm
					onSubmit={(movie) => {
						selectedMovie ? updateMovie(movie) : addMovie(movie);
						closeForm();
					}}
					selectedMovie={selectedMovie}
				/>
			</Modal>

			<div className="movies-container">
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						onEdit={openForm}
						onDelete={deleteMovie}
					/>
				))}
			</div>
		</div>
	);
}

export default App;