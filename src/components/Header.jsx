function Header({ titulo, subtitulo }) {
  return (
    <header className="header">
      <span className="header__bola" aria-hidden="true">🏀</span>
      <div>
        <h1 className="header__titulo">{titulo}</h1>
        <p className="header__subtitulo">{subtitulo}</p>
      </div>
    </header>
  )
}

export default Header
