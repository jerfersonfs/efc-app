const menuItems = [
  { id: 'dashboard', label: 'Dashboard',link: './../pages/Dashboard/Dashboard' },
  { id: 'activities', label: 'Atividades', link: './../pages/Activities/Activities'  },
  { id: 'finance', label: 'Finanças' ,link: './../pages/Money/Money' },
  { id: 'habits', label: 'Hábitos', link: './../pages/Habits/Habits'  },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__brand">EFC</p>
      {/* Inserir subtitulo nessa parte */}
      <nav aria-label="Navegação principal">
        <ul className="sidebar__menu">
          {menuItems.map((item) => (
            <li key={item.id} className="sidebar__item">
              <button type="button" className="sidebar__link">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar