import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import styles from './Login.module.css'
import logo from "../../assets/elc-logo2.png"

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(ROUTES.DASHBOARD)
  }

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginShell}>
        <div className={styles.welcomePanel}>
          <div className={`${styles.blob} ${styles.blobTop}`} />
          <div className={`${styles.blob} ${styles.blobMid}`} />
          <div className={`${styles.blob} ${styles.blobBottom}`} />

          <div className={styles.welcomeContent}>
            <p className={styles.logo}><img src={logo} alt="" /></p>
            <h1>Bem vindo ao ELC</h1>
            <p>Sua melhor performance e controle de vida está aqui</p>
          </div>
        </div>

        <div className={styles.formPanel}>
          <h2>Cadastre-se</h2>
          <p className={styles.formSubtitle}>Cadastre-se para ter a melhor performance e controle de sua vida</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input id="email" type="email" placeholder="Email" required />
            <input id="password" type="password" placeholder="Senha" required />
            <button type="submit" className={styles.continueButton}>
              CONTINUE →
            </button>
          </form>

          <p className={styles.divider}>Ou se conecte com uma mídia social</p>

          <button type="button" className={`${styles.socialButton} ${styles.google}`}>
             Google
          </button>
          <button type="button" className={`${styles.socialButton} ${styles.facebook}`}>
             Facebook
          </button>
        </div>
      </section>
    </main>
  )
}

export default Login