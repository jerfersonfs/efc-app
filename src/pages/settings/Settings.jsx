import styles from './Settings.module.css'
import {ROUTES} from '../../routes/routes'
import { useNavigate } from 'react-router-dom'

function Settings() {

  const navigate = useNavigate()
  return (
    <section className={styles.container}>
      <h2>Configurações da conta</h2>
      <p>Esta página está pronta para receber as configurações reais do usuário.</p>
      <button type="button" className={styles.logoutButton} onClick={() => navigate(ROUTES.LOGIN)}>
        Sair
      </button>
    </section>
  )
  
}

export default Settings