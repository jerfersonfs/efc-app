import { useMemo, useState } from 'react'
import styles from './Activities.module.css'
import { Box, Card , Typography, Input, Button } from '@mui/material'

const initialActivities = [
  {
    id: 1,
    title: 'Treino de força',
    priority: 'Alta',
    status: 'doing',
  },
  {
    id: 2,
    title: 'Estudar React Router',
    priority: 'Média',
    status: 'todo',
  },
  {
    id: 3,
    title: 'Ler 20 páginas',
    priority: 'Baixa',
    status: 'done',
  },
]

function Activities() {
  const [activities, setActivities] = useState(initialActivities)
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Média')
  const [filter, setFilter] = useState('all')

  const filteredActivities = useMemo(() => {
    if (filter === 'all') {
      return activities
    }

    return activities.filter((activity) => activity.status === filter)
  }, [activities, filter])

  const handleAdd = (event) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    setActivities((current) => [
      {
        id: Date.now(),
        title: title.trim(),
        priority,
        status: 'todo',
      },
      ...current,
    ])

    setTitle('')
    setPriority('Média')
  }

  const updateStatus = (id, status) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id ? { ...activity, status } : activity,
      ),
    )
  }

  return (
    <Box container>
        <Card>
         <Typography variant='h6'>Nova atividade</Typography>
            <form onSubmit={handleAdd} className={styles.form}>
              <Input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Ex.: Revisar orçamento semanal"
              />

              <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>

              <Button type="submit">Adicionar</Button>
            </form>
        </Card>


      <Card>
        <Box className={styles.headerRow}>
          <Typography>Atividades</Typography>
          <select value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="all">Todas</option>
            <option value="todo">A fazer</option>
            <option value="doing">Em andamento</option>
            <option value="done">Concluídas</option>
          </select>
        </Box>

        <ul className={styles.list}>
          {filteredActivities.map((activity) => (
            <li key={activity.id} className={styles.item}>
              <Box>
                <p className={styles.title}>{activity.title}</p>
                <p className={styles.meta}>Prioridade: {activity.priority}</p>
              </Box>

              <select
                value={activity.status}
                onChange={(event) => updateStatus(activity.id, event.target.value)}
              >
                <option value="todo">A fazer</option>
                <option value="doing">Em andamento</option>
                <option value="done">Concluída</option>
              </select>
            </li>
          ))}
        </ul>
      </Card>
    </Box>
  )
}

export default Activities