import { useMemo, useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'

import SummarySection from '../../components/Finance/SummarySection/SummarySection.jsx'
import FinanceForm from '../../components/Finance/FinanceForm/FinanceForm.jsx'
import TransactionList from '../../components/Finance/TransactionList/TransactionList.jsx'

const initialTransactions = [
  { id: 1, type: 'income', category: 'Salário', amount: 4800, date: '2026-02-01' },
  { id: 2, type: 'expense', category: 'Mercado', amount: 620, date: '2026-02-03' },
  { id: 3, type: 'expense', category: 'Transporte', amount: 180, date: '2026-02-05' },
  { id: 4, type: 'investment', category: 'Tesouro Direto', amount: 500, date: '2026-02-07'}
]

export default function Finance() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [hideValues, setHideValues] = useState(false)

  const formatCurrency = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

  const hideFinancialValue = (shouldHide, value, formatter) =>
    shouldHide ? '••••••' : formatter(value)

  const formatCardValue = (value) =>
    hideFinancialValue(hideValues, value, formatCurrency)

  const summary = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((a,b)=>a+b.amount,0)
    const expense = transactions.filter(t => t.type === 'expense').reduce((a,b)=>a+b.amount,0)
    const investment = transactions.filter(t => t.type === 'investment').reduce((a,b)=>a+b.amount,0)

    return {
      income,
      expense,
      investment,
      balance: income - expense - investment,
    }
  }, [transactions])

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedAmount = Number(amount)
    if (!category.trim() || !parsedAmount) return

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

  return (
    <Box
      sx={{
        display: "grid",
        gap: "1.2rem",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        p: "1.5rem"
      }}
    >
      
      {/* TOGGLE */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setHideValues(p => !p)}>
          {hideValues ? "Mostrar valores" : "Esconder valores"}
        </Button>
      </Box>

      {/* SUMMARY */}
      <SummarySection
        summary={summary}
        formatCardValue={formatCardValue}
      />

      {/* FORM */}
      <FinanceForm
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        amount={amount}
        setAmount={setAmount}
        handleSubmit={handleSubmit}
      />

      {/* LIST */}
      <TransactionList
        transactions={transactions}
        hideValues={hideValues}
        formatCurrency={formatCurrency}
        hideFinancialValue={hideFinancialValue}
      />
    </Box>
  )
}