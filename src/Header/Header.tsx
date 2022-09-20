import styles from './Header.module.css'
import RocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.logoWrapper}>
                <img
                    src={RocketLogo}
                />
                <p>to<span>do</span></p>
            </div>
        </div>
    )
}