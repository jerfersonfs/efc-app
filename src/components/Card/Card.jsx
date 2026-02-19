import styles from'./Card.module.css'
import { Link } from 'react-router-dom'

function Card({ title, value, description, actionText, actionTo }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.value}>{value}</p>
      <p className={styles.description}>{description}</p>

      {actionText && actionTo ? (
        <Link className={styles.actionLink} to={actionTo}>
          {actionText}
        </Link>
      ): null}
    </article>
  )
}

export default Card
