import styles from './MovieCard.module.scss';

function MovieCard({ movie, onDelete, onEdit }) {
  const { title, director, releaseYear, genre, image_url, rating, comments } = movie;

  return (
    <div className={styles['movie-card']}>
      <img
        className={styles['movie-card__image']}
        src={image_url || 'https://via.placeholder.com/150x220?text=No+Image'}
        alt={title}
      />
      <div className={styles['movie-card__content']}>
        <h2 className={styles['movie-card__title']}>{title}</h2>
        <p className={styles['movie-card__info']}><strong>Director:</strong> {director}</p>
        <p className={styles['movie-card__info']}><strong>Año:</strong> {releaseYear}</p>
        <p className={styles['movie-card__info']}><strong>Género:</strong> {genre}</p>
        <p className={styles['movie-card__info']}><strong>⭐:</strong> {rating}/10</p>
        <p className={styles['movie-card__info']}><strong>Comentarios:</strong> {comments}</p>
        <div className={styles['movie-card__buttons']}>
          <button onClick={() => onEdit(movie)}>Editar</button>
          <button onClick={() => onDelete(movie.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;