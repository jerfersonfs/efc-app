function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">{title}</h1>
        {subtitle ? <p className="header__subtitle">{subtitle}</p> : null}
      </div>
    </header>
  )
}

export default Header