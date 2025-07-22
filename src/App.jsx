import { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm/MovieForm';
import MovieCard from './components/MovieCard/MovieCard';
import Modal from './components/Modal/Modal';
import NotificationModal from './components/NotificationModal/NotificationModal';
import { useMoviesCrud } from './hooks/useMoviesCrud';
import LoaderM from './components/LoaderM/LoaderM';

import styles from './App.module.scss';

function App() {
	const {
		movies,
		selectedMovie,
		addMovie,
		deleteMovie,
		updateMovie,
		handleEdit,
	} = useMoviesCrud();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [notification, setNotification] = useState('');
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 4000);
		return () => clearTimeout(timer);
	}, []);

	const showNotification = (message) => {
		setNotification(message);
		setIsNotificationOpen(true);
		setTimeout(() => {
			setIsNotificationOpen(false);
		}, 2000);
	};

	const openForm = (movie = null) => {
		handleEdit(movie);
		setIsModalOpen(true);
	};

	const closeForm = () => {
		handleEdit(null);
		setIsModalOpen(false);
	};

	if (isLoading) return <LoaderM />;

	return (
		<div className={styles.app}>
			<h1>CRUD DE PELICULAS</h1>
			<h2>¡Agrega tu favorita!</h2>

			<button className={styles.button} onClick={() => openForm()}>
				+ Agregar película
			</button>

			<NotificationModal
				isOpen={isNotificationOpen}
				onClose={() => setIsNotificationOpen(false)}
			>
				<p>{notification}</p>
			</NotificationModal>

			<Modal isOpen={isModalOpen} onClose={closeForm}>
				<MovieForm
					onSubmit={(movie) => {
						if (selectedMovie) {
							updateMovie(movie);
							showNotification('✅ Película actualizada');
						} else {
							addMovie(movie);
							showNotification('✅ Película agregada');
						}
						closeForm();
					}}
					selectedMovie={selectedMovie}
					clearSelected={closeForm}
				/>
			</Modal>

			<div className={styles.moviesContainer}>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						onEdit={openForm}
						onDelete={(id) => {
							deleteMovie(id);
							showNotification('🗑️ Película eliminada');
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
