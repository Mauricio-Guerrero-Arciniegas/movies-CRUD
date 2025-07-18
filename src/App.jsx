import MovieForm from './components/MovieForm/MovieForm';
import MovieCard from './components/MovieCard/MovieCard';
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

	return (
		<div>
			<h1>Películas Favoritas</h1>

			<div ref={formRef}>
				<MovieForm
					onSubmit={selectedMovie ? updateMovie : addMovie}
					selectedMovie={selectedMovie}
				/>
			</div>

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
					marginTop: '2rem',
				}}
			>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						onEdit={handleEdit}
						onDelete={deleteMovie}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
