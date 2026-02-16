import { useMemo, useState } from 'react'
import styles from './Finance.module.css'

const initialTransactions = [
  { id: 1, type: 'income', category: 'Salário', amount: 4800, date: '2026-02-01' },
  { id: 2, type: 'expense', category: 'Mercado', amount: 620, date: '2026-02-03' },
  { id: 3, type: 'expense', category: 'Transporte', amount: 180, date: '2026-02-05' },
]

function Finance() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const summary = useMemo(() => {
    const income = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0)

    const expense = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0)

    return {
      income,
      expense,
      balance: income - expense,
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

  return (
    <section className={styles.container}>
      <div className={styles.summaryGrid}>
        <article className={styles.card}>
          <p>Receitas</p>
          <strong>{formatCurrency(summary.income)}</strong>
        </article>
        <article className={styles.card}>
          <p>Despesas</p>
          <strong>{formatCurrency(summary.expense)}</strong>
        </article>
        <article className={styles.card}>
          <p>Saldo</p>
          <strong>{formatCurrency(summary.balance)}</strong>
        </article>
      </div>

      <div className={styles.card}>
        <h2>Novo lançamento</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="income">Receita</option>
            <option value="expense">Despesa</option>
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
              <span className={transaction.type === 'income' ? styles.income : styles.expense}>
                {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Finance