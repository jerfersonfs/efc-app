import { useMemo, useState, useEffect } from 'react'
import styles from './Finance.module.css'
import Card from '../../components/Card/Card'
import { ROUTES } from '../../routes/routes'

const initialTransactions = [
  { id: 1, type: 'income', category: 'Salário', amount: 4800, date: '2026-02-01' },
  { id: 2, type: 'expense', category: 'Mercado', amount: 620, date: '2026-02-03' },
  { id: 3, type: 'expense', category: 'Transporte', amount: 180, date: '2026-02-05' },
  { id: 4, type: 'investment', category: 'Tesouro Direto', amount: 500, date: '2026-02-07'}
]

const HIDE_VALUES_STORAGE_KEY = 'efc.finance.hideValues'

const getStoredHideValuesPreference = () => {
  if (typeof window === 'undefined') {
    return false
  }

  const savedPreference = window.localStorage.getItem(HIDE_VALUES_STORAGE_KEY)

  if (savedPreference === null) {
    return false
  }

  return savedPreference === 'true'
}

const persistHideValuesPreference = (value) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(HIDE_VALUES_STORAGE_KEY, String(value))
}

const hideFinancialValue = (shouldHide, value, formatter) =>
  shouldHide ? '••••••' : formatter(value)

function Finance() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [hideValues, setHideValues] = useState(getStoredHideValuesPreference)

  useEffect(() => {
    persistHideValuesPreference(hideValues)
  }, [hideValues])

  const summary = useMemo(() => {
    const income = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0)

    const expense = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0)

    const investment = transactions
      .filter((transaction)=> transaction.type === 'investment')
      .reduce((total,transaction)=> total + transaction.amount, 0)

    return {
      income,
      expense,
      balance: income - expense,
      investment,
      balance: income - expense - investment,
    }
  }, [transactions])

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedAmount = Number(amount)

    if (!category.trim() || !parsedAmount) {
      return
    }

    setTransactions((current) => [
      {
        id: Date.now(),
        type,
        category: category.trim(),
        amount: parsedAmount,
        date: new Date().toISOString().slice(0, 10),
      },
      ...current,
    ])

    setCategory('')
    setAmount('')
    setType('expense')
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

  const formatCardValue = (value) => hideFinancialValue(hideValues, value, formatCurrency)
  return (
    <section className={styles.container}>
      <div className={styles.headerActions}>
        <button type='button' onClick={()=> setHideValues((current)=> !current)} className={styles.toggleValuesButton}>
          {hideValues ? 'Mostrar valores' : 'Esconder valores'}
        </button>
      </div>
        <div className={styles.summaryGrid}>
          <Card
          title="Receitas"
          value={formatCardValue(summary.income)}
          description="Entradas registradas"
          actionText="Ver detalhes"
          actionTo={`${ROUTES.FINANCE}/details/income`}
        />

        <Card
          title="Despesas"
          value={formatCardValue(summary.expense)}
          description="Saídas registradas"
          actionText="Ver detalhes"
          actionTo={`${ROUTES.FINANCE}/details/expense`}
        />

        <Card
          title="Investimentos"
          value={formatCardValue(summary.investment)}
          description="Aportes aplicados"
          actionText="Ver detalhes"
          actionTo={`${ROUTES.FINANCE}/details/investment`}
        />

        <Card
          title="Saldo"
          value={formatCardValue(summary.balance)}
          description="Receitas - Despesas - Investimentos"
          actionText="Ver detalhes"
          actionTo={`${ROUTES.FINANCE}/details/balance`}
        />
        </div>

      <div className={styles.card}>
        <h2>Novo lançamento</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="income">Entrada</option>
            <option value="expense">Despesa</option>
            <option value="••••••">Investimento</option>
          </select>

          <input
            type="text"
            value={category}
            placeholder="Categoria (Ex.: Aluguel)"
            onChange={(event) => setCategory(event.target.value)}
          />

          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            placeholder="Valor"
            onChange={(event) => setAmount(event.target.value)}
          />

          <button type="submit">Salvar</button>
        </form>
      </div>

      <div className={styles.card}>
        <h2>Últimos lançamentos</h2>
        <ul className={styles.list}>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={styles.item}>
              <div>
                <p className={styles.category}>{transaction.category}</p>
                <small>{transaction.date}</small>
              </div>
              <span
                className={
                  transaction.type === 'income'
                    ? styles.income
                    : transaction.type === 'investment'
                      ? styles.investment
                      : styles.expense
                }
              >
                {transaction.type === 'income' ? '+' : '-'}{' '}
                {hideFinancialValue(hideValues, transaction.amount, formatCurrency)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Finance