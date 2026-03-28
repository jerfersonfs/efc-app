import { useMemo, useState } from 'react'
import { Box, Card, CardContent, Typography, TextField, Button,Select, Menu, MenuItem, List, ListItem } from '@mui/material'

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

export default function Activities() {
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
    <Box container
      sx={{
        display: "grid",
        gap: "1rem"
      }}
    >
        <Card 
          sx={{
            p:"1rem",
            borderRadius: "12px",
            border: "1px solid #d8dce3",
            boxShadow: "0 8px 30px rgba(17, 24, 39, 0.06)"
          }}
        >
         <Typography variant='h6' sx={{mb: "0.8rem"}}>
            Nova atividade
          </Typography>
            <Box component="form" onSubmit={handleAdd}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 180px auto",
                gap:'0.6rem'
              }}
            >
              <TextField
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Ex.: Revisar orçamento semanal"
              />

              <Select 
                value={priority} 
                onChange={(event) => setPriority(event.target.value)}
              >
                <MenuItem value='Alta'>Alta</MenuItem>
                <MenuItem value='Média'>Média</MenuItem>
                <MenuItem value='Baixa'>Baixa</MenuItem>
              </Select>

              <Button type='submit' 
                sx={{
                  backgroundColor:'#2a5bd7',
                  color:'#ffffff', 
                  borderRadius: '8px', 
                  textTransform: 'none',"&:hover": {
                    backgroundColor: "#1f4bc1"
                  }}}
              >
                Adicionar
              </Button>
            </Box>
        </Card>


      <Card
        sx={{
          border: "1px solid #d8dce3",
          borderRadius: "12px",
          p: "1rem",
          boxShadow: "0 8px 30px rgba(17, 24, 39, 0.06)"
        }}
      >
        <Box 
        sx={{
          display: 'flex',
          justifyContent:'space-between',
          gap: "0.8rem",
          mb: "1rem"
        }}
        >
          <Typography sx={{fontWeight: 700, fontSize: 20}}>Atividades</Typography>
          <Select value={filter} onChange={(event) => setFilter(event.target.value)}>
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="todo">A fazer</MenuItem>
            <MenuItem value="doing">Em andamento</MenuItem>
            <MenuItem value="done">Concluídas</MenuItem>
          </Select>
        </Box>

        <List
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gap: "0.6rem"
          }}
        >
          {filteredActivities.map((activity) => (
            <ListItem key={activity.id}
              sx={{
              border: "1px solid #e1e7f0",
              borderRadius: "10px",
              p: "0.7rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "0.7rem",
              alignItems: "center"
            }}
            >
              <Box>
                <Typography variant='p' sx={{
                  fontWeight: 600
                }}>
                  {activity.title}
                </Typography>
                <Typography
                  sx={{
                  mt: "0.2rem",
                  color: "#607387"
                }}                
                >Prioridade: {activity.priority}
                </Typography>
              </Box>

              <Select
                value={activity.status}
                onChange={(event) => updateStatus(activity.id, event.target.value)}
              >
                <MenuItem value="todo">A fazer</MenuItem>
                <MenuItem value="doing">Em andamento</MenuItem>
                <MenuItem value="done">Concluída</MenuItem>
              </Select>
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  )
}