import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({
  title,
  subtitle,
  value,
  description,
  header,
  children,
  footer,
  actionText,
  actionTo,
  actionElement,
  className,
  compact = false,
}) {
  const classNames = [styles.card, compact ? styles.compact : '', className ?? '']
    .filter(Boolean)
    .join(' ')

  const defaultHeader =
    title || subtitle ? (
      <header className={styles.header}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </header>
    ) : null

  const defaultBody =
    value || description ? (
      <div className={styles.body}>
        {value ? <p className={styles.value}>{value}</p> : null}
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    ) : null

  const defaultAction =
    actionElement ??
    (actionText && actionTo ? (
      <Link className={styles.actionLink} to={actionTo}>
        {actionText}
      </Link>
    ) : null)

  return (
    <article className={classNames}>
      {header ?? defaultHeader}
      {children ?? defaultBody}
      {footer ?? defaultAction ? <footer className={styles.footer}>{footer ?? defaultAction}</footer> : null}
    </article>
  )
}

export default Card
