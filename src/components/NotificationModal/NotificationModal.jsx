import { useEffect, useState } from 'react';
import styles from './NotificationModal.module.scss';

function NotificationModal({ isOpen, children, onClose, duration = 3000 }) {
	const [visible, setVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let showTimer, hideTimer;

		if (isOpen) {
			setShouldRender(true);
			showTimer = setTimeout(() => {
				setVisible(true);
			}, 10);
			hideTimer = setTimeout(() => {
				setVisible(false);

				setTimeout(() => {
					setShouldRender(false);
					onClose();
				}, 500);
			}, duration);
		} else {
			setVisible(false);
			setTimeout(() => setShouldRender(false), 500);
		}

		return () => {
			clearTimeout(showTimer);
			clearTimeout(hideTimer);
		};
	}, [isOpen, duration, onClose]);

	if (!shouldRender) return null;

	return (
		<div className={styles.overlay}>
			<div
				className={`${styles.modal} ${
					visible ? styles.fadeIn : styles.fadeOut
				}`}
			>
				{children}
			</div>
		</div>
	);
}

export default NotificationModal;
