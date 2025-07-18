import styles from './Card.module.scss';

function Card() {
	return (
		<div className={styles['card__container']}>
			<p className={styles['card__subtitle']}>/ SEVEN SUMMITS /</p>
			<h1 className={styles['card__title']}>KILIMANJARO</h1>
			<p className={styles['card__location']}>AFRICA 5.895 m</p>
		</div>
	);
}

export default Card;
