import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styles from './MovieForm.module.scss';

function MovieForm({ onSubmit, selectedMovie, clearSelected }) {
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		if (selectedMovie) {
			reset(selectedMovie);
		} else {
			reset({
				title: '',
				director: '',
				releaseYear: '',
				genre: '',
				image_url: '',
				rating: '',
				comments: '',
			});
		}
	}, [selectedMovie, reset]);

	const submit = (data) => {
		onSubmit(data);
		reset();
	};

	return (
		<form className={styles['movie-form']} onSubmit={handleSubmit(submit)}>
			<h2 className={styles['movie-form__title']}>
				{selectedMovie ? 'Editar película' : 'Nueva película'}
			</h2>

			<input placeholder="Título" {...register('title')} required />
			<input placeholder="Director" {...register('director')} required />
			<input
				type="number"
				placeholder="Año de estreno"
				{...register('releaseYear')}
				required
			/>
			<input placeholder="Género" {...register('genre')} required />
			<input
				placeholder="URL de la imagen (opcional)"
				{...register('image_url')}
			/>
			<input
				type="number"
				step="0.1"
				min="1"
				max="10"
				placeholder="Calificación (1 a 10)"
				{...register('rating')}
				required
			/>
			<textarea
				placeholder="Comentarios"
				{...register('comments')}
				rows="3"
			/>

			<div className={styles['movie-form__buttons']}>
				<button type="submit">
					{selectedMovie ? 'Guardar cambios' : 'Agregar película'}
				</button>
				{selectedMovie && (
					<button type="button" onClick={clearSelected}>
						Cancelar
					</button>
				)}
			</div>
		</form>
	);
}

export default MovieForm;
