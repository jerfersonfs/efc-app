import './Card.module.css'

function Card({ title, value, description }) {
  return (
    <article className="info-card">
      <h2 className="info-card__title">{title}</h2>
      <p className="info-card__value">{value}</p>
      <p className="info-card__description">{description}</p>
    </article>
  )
}

export default Card
