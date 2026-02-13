const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'activities', label: 'Atividades' },
  { id: 'finance', label: 'Finanças' },
  { id: 'habits', label: 'Hábitos' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__brand">EFC App</p>
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