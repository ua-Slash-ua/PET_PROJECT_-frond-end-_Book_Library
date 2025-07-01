import styles from './LogoComponent.module.css'
export default function LogoComponent() {
    return (
        <div className={styles.logo_container}>
            <div className={styles.logo_icon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 12C10 10.8954 10.8954 10 12 10H30C31.1046 10 32 10.8954 32 12V52C32 53.1046 31.1046 54 30 54H12C10.8954 54 10 53.1046 10 52V12Z"
                        fill="#C7E3F5" stroke="#2D3748" strokeWidth="2"/>
                    <path
                        d="M54 12C54 10.8954 53.1046 10 52 10H34C32.8954 10 32 10.8954 32 12V52C32 53.1046 32.8954 54 34 54H52C53.1046 54 54 53.1046 54 52V12Z"
                        fill="#E2E8F0" stroke="#2D3748" strokeWidth="2"/>
                    <line x1="32" y1="10" x2="32" y2="54" stroke="#2D3748" strokeWidth="2"/>
                    <path d="M10 12L32 20L54 12" stroke="#2D3748" strokeWidth="2"/>
                </svg>
            </div>
            <div className={styles.logo_text_container}>
                <span className={styles.logo_text}>
                Book Library
            </span>
            </div>

        </div>
    )
}