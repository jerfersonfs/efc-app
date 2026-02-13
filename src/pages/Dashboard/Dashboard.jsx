import Card from '../../components/Card/Card'
import Sidebar from '../../components/Sidebar/SIdebar'
import Header from '../../components/Header/Header'
import styles from './Dashboard.module.css'

const cards = [
  {
    title: 'Saldo do mês',
    value: 'R$ 4.250,00',
    description: 'Receitas - despesas (dados mockados)',
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

function Dashboard({ onNavigate }) {
  return (
    <div className={styles.dashboardPage}>
      <Sidebar />

      <main className={styles.dashboardMain}>
        <Header
          title="Dashboard"
          subtitle="Resumo rápido da sua organização pessoal"
        />

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

        <button type="button" className={styles.logoutButton} onClick={() => onNavigate('/login')}>
          Sair
        </button>
      </main>
    </div>
  )
}

export default Dashboard