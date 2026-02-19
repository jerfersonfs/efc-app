import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import styles from './FinanceDetail.module.css'

const contentMap = {
  income: {
    title: 'Detalhes de Receitas',
    description: 'Aqui você poderá acompanhar as entradas, fontes e evolução mensal das receitas.',
  },
  expense: {
    title: 'Detalhes de Despesas',
    description: 'Aqui você poderá analisar saídas, categorias de gastos e oportunidades de economia.',
  },
  investment: {
    title: 'Detalhes de Investimentos',
    description: 'Aqui você poderá acompanhar aportes, tipos de investimento e histórico de evolução.',
  },
  balance: {
    title: 'Detalhes de Saldo',
    description: 'Aqui você poderá visualizar a composição do saldo com base em receitas, despesas e investimentos.',
  },
}

function FinanceDetail() {
  const { section } = useParams()
  const current = contentMap[section] ?? {
    title: 'Detalhes financeiros',
    description: 'Conteúdo em preparação para esta seção.',
  }

  return (
    <section className={styles.container}>
      <h2>{current.title}</h2>
      <p>{current.description}</p>
      <Link className={styles.backLink} to={ROUTES.FINANCE}>
        Voltar para finanças
      </Link>
    </section>
  )
}

export default FinanceDetail
