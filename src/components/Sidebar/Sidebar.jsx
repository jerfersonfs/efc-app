import { NavLink } from 'react-router-dom'
import { SIDEBAR_ROUTES } from '../../routes/routeConfig'

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__brand">EFC App</p>
      <nav aria-label="Navegação principal">
        <ul className="sidebar__menu">
          {SIDEBAR_ROUTES.map((item) => (
            <li key={item.id} className="sidebar__item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar