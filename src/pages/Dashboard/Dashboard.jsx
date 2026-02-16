import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { ROUTES } from '../../routes/routes'
import styles from './Dashboard.module.css'

const cards = [
  {
    title: 'Saldo do mês',
    value: 'R$ 4.250,00',
    description: 'Receitas - despesas',
  },
  {
    title: 'Atividades concluídas',
    value: '17',
    description: 'Total desta semana',
  },
  {
    title: 'Sequência de hábitos',
    value: '8 dias',
    description: 'Rotina matinal ativa',
  },
]

function Dashboard() {
  const navigate = useNavigate()

  return (
    <>
      <section className={styles.cardsGrid}>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </section>

      <button type="button" className={styles.logoutButton} onClick={() => navigate(ROUTES.LOGIN)}>
        Sair
      </button>
    </>
  )
}

export default Dashboard