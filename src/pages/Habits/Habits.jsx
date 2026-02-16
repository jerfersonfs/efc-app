import { useState } from 'react'
import styles from './Habits.module.css'

const initialHabits = [
  { id: 1, name: 'Beber água (2L)', streak: 12, doneToday: true },
  { id: 2, name: 'Meditar 10 minutos', streak: 6, doneToday: false },
  { id: 3, name: 'Ler 20 páginas', streak: 9, doneToday: false },
]

function Habits() {
  const [habits, setHabits] = useState(initialHabits)
  const [newHabit, setNewHabit] = useState('')

  const toggleHabit = (id) => {
    setHabits((current) =>
      current.map((habit) => {
        if (habit.id !== id) {
          return habit
        }

        const nextDone = !habit.doneToday

        return {
          ...habit,
          doneToday: nextDone,
          streak: nextDone ? habit.streak + 1 : Math.max(habit.streak - 1, 0),
        }
      }),
    )
  }

  const handleAddHabit = (event) => {
    event.preventDefault()

    if (!newHabit.trim()) {
      return
    }

    setHabits((current) => [
      {
        id: Date.now(),
        name: newHabit.trim(),
        streak: 0,
        doneToday: false,
      },
      ...current,
    ])

    setNewHabit('')
  }

  const doneCount = habits.filter((habit) => habit.doneToday).length

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <h2>Resumo do dia</h2>
        <p>
          Você concluiu <strong>{doneCount}</strong> de <strong>{habits.length}</strong> hábitos hoje.
        </p>
      </article>

      <article className={styles.card}>
        <h2>Novo hábito</h2>
        <form onSubmit={handleAddHabit} className={styles.form}>
          <input
            type="text"
            placeholder="Ex.: Caminhar 20 minutos"
            value={newHabit}
            onChange={(event) => setNewHabit(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
      </article>

      <article className={styles.card}>
        <h2>Meus hábitos</h2>
        <ul className={styles.list}>
          {habits.map((habit) => (
            <li key={habit.id} className={styles.item}>
              <div>
                <p className={styles.name}>{habit.name}</p>
                <small>Sequência: {habit.streak} dias</small>
              </div>

              <button
                type="button"
                className={`${styles.toggleButton} ${habit.doneToday ? styles.done : ''}`}
                onClick={() => toggleHabit(habit.id)}
              >
                {habit.doneToday ? 'Concluído hoje' : 'Marcar como feito'}
              </button>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Habits