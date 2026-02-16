import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import styles from './Login.module.css'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(ROUTES.DASHBOARD)
  }

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>
        <h1>Bem-vindo ao EFC App</h1>
        <p>Organize atividades, finanças e hábitos em um só lugar.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="seuemail@exemplo.com" required />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="••••••••" required />

          <button type="submit">Entrar</button>
        </form>
      </section>
    </main>
  )
}

export default Login