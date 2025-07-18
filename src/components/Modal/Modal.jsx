import styles from  './Modal.module.scss';

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button className={styles.close} onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;