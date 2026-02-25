import { NavLink } from 'react-router-dom'
import { SIDEBAR_ROUTES } from '../../routes/routeConfig'
import logo from "../../assets/elc-logo2.png"
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__brand}><img src={logo}/></div>
      <nav aria-label="Navegação principal">
        <ul className={styles.sidebar__menu}>
          {SIDEBAR_ROUTES.map((item) => (
            <li key={item.id} className={styles.sidebar__item}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.sidebar__link} ${isActive ? styles.active : ''}`
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