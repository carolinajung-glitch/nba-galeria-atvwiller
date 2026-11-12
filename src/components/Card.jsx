function Card({ nome, posicao, foto, cor }) {
  return (
    <figure className="card" style={{ '--cor': cor }}>
      <div className="card__foto">
        <img src={foto} alt={nome} loading="lazy" />
      </div>
      <figcaption className="card__info">
        <span className="card__nome">{nome}</span>
        <span className="card__posicao">{posicao}</span>
      </figcaption>
    </figure>
  )
}

export default Card
