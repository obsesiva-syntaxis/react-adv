import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useState } from 'react';

export const ProductCard = () => {
    const [counter, setCounter] = useState(0);

const increaseBy = (value: number) => {
    setCounter( prev => Math.max( prev + value, 0) );
}

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" />
            {/* <img className={ styles.productImg } src={ noImage } alt="Coffe Mug" /> */}
            <span className={styles.productDescription}>Coffee Mug</span>
            <div className={styles.buttonsContainer}>
                <button className={ styles.buttonMinus }>
                    -
                </button>
                <div className={ styles.countLabel }>
                    0
                </div>
                <button className={ styles.buttonAdd }>
                    +
                </button>
            </div>
        </div>
    )
}
