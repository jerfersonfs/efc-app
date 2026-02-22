import { Link } from 'react-router-dom'
import styles from './DropdownMenu.module.css'

function DropdownMenu({
  trigger,
  ariaLabel,
  menuLabel,
  headerContent,
  items = [],
  width = '280px',
  align = 'right',
}) {
  const alignClass = align === 'left' ? styles.alignLeft : styles.alignRight

  return (
    <div className={styles.menu} aria-label={ariaLabel}>
      <button type="button" className={styles.trigger} aria-haspopup="menu" aria-label={menuLabel}>
        {trigger}
      </button>

      <div className={`${styles.dropdown} ${alignClass}`} role="menu" aria-label={menuLabel} style={{ width }}>
        {headerContent ? <div className={styles.headerContent}>{headerContent}</div> : null}

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id ?? item.label}>
              {item.to ? (
                <Link className={`${styles.item} ${styles.link}`} to={item.to} role="menuitem">
                  {item.label}
                </Link>
              ) : (
                <button type="button" className={styles.item} role="menuitem" onClick={item.onClick}>
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropdownMenu
