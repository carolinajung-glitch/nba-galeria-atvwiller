import { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'

// Para usar fotos reais: coloque os arquivos em public/fotos/
// e troque a extensão no campo "foto" (ex.: '/fotos/wembanyama.jpg').
const jogadores = [
  { id: 1, nome: 'Victor Wembanyama', posicao: 'Pivô', foto: '/public/fotos/wembanyama.svg.png', cor: '#6b7280' },
  { id: 2, nome: 'Anthony Edwards', posicao: 'Ala-armador', foto: '/public/fotos/edwards.svg.png', cor: '#2563eb' },
  { id: 3, nome: 'Shai Gilgeous-Alexander', posicao: 'Armador', foto: '/public/fotos/shai.svg.png', cor: '#0ea5e9' },
  { id: 4, nome: 'Kevin Durant', posicao: 'Ala', foto: '/public/fotos/durant.svg.png', cor: '#dc2626' },
  { id: 5, nome: 'Devin Booker', posicao: 'Ala-armador', foto: '/public/fotos/booker.svg.png', cor: '#f97316' },
  { id: 6, nome: 'Ja Morant', posicao: 'Armador', foto: '/public/fotos/morant.svg.png', cor: '#7c3aed' },
]

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(jogadores)
  }, [])

  return (
    <div className="pagina">
      <Header titulo="Craques da NBA" subtitulo="Galeria de jogadores" />
      <main className="grade">
        {lista.map((j) => (
          <Card key={j.id} {...j} />
        ))}
      </main>
    </div>
  )
}

export default App
