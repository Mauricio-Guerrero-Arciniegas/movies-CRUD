import styles from './MovieCard.module.scss';
import { Star, Edit, Trash } from 'lucide-react';

function MovieCard({ movie, onDelete, onEdit }) {
	const { title, director, releaseYear, genre, image_url, rating, comments } =
		movie;

	return (
		<div className={styles['movie-card']}>
			<div className={styles['movie-card__image-wrapper']}>
				<img
					className={styles['movie-card__image']}
					src={image_url || 'https://via.placeholder.com/300x420?text=No+Image'}
					alt={title}
				/>
				<span className={styles['movie-card__rating']}>
					<Star size={16} color="#FFD700" /> {rating}/10
				</span>
			</div>
			<div className={styles['movie-card__content']}>
				<h3 className={styles['movie-card__title']}>{title}</h3>
				<p>
					<strong>Director:</strong> {director}
				</p>
				<p>
					<strong>Año:</strong> {releaseYear}
				</p>
				<p>
					<strong>Género:</strong> {genre}
				</p>
				<p>
					<strong>Comentarios:</strong> {comments}
				</p>

				<div className={styles['movie-card__buttons']}>
					<button onClick={() => onEdit(movie)}>
						<Edit size={16} /> Editar
					</button>
					<button onClick={() => onDelete(movie.id)}>
						<Trash size={16} /> Eliminar
					</button>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
