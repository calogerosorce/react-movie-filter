import { useEffect, useState } from 'react'
import Card from './components/Card'
import Batman from './img/Batman.avif'
import Inception from './img/Inception.png'
import RoadTrip from './img/Road Trip.jpg'
import After from './img/After.jpg'
import JohnWick from './img/JohnWich.jpg'
import PulpFiction from './img/PulpFiction.jpg'
function App() {

  const film = [
    {
      id: 0,
      title: 'Inception',
      genere: 'Fantascienza',
      src: Inception
    },
    {
      id: 1,
      title: 'Road Trip',
      genere: 'Thriller',
      src: RoadTrip
    },
    {
      id: 2,
      title: 'After',
      genere: 'Romantico',
      src: After
    },
    {
      id: 3,
      title: 'Batman',
      genere: 'Azione',
      src: Batman
    },
    {
      id: 4,
      title: 'John Wick',
      genere: 'Fantascienza',
      src: JohnWick
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      genere: 'Thriller',
      src: PulpFiction
    }
  ]

  const [films, setFilms] = useState(film)
  const [regola, setRegola] = useState(films)
  const [select, setSelect] = useState('')

  useEffect(() => {
    const selectFilms = films.filter(items => items.genere.includes(select))
    setRegola(selectFilms)

    const selectElement = document.getElementById('floatingSelect');
    const handleSelectChange = (event) => {
      setSelect(event.target.value);
    };
    selectElement.addEventListener('change', handleSelectChange);

    return () => {
      selectElement.removeEventListener('change', handleSelectChange);
    };

  }, [films, select])
  return (
    <>


      <main>
        <div className="content">
          <h1>Film</h1>
          <div className="row g-4 m-3">
            <div className="form-floating">
              <select className="form-select bg-dark text-white" id="floatingSelect" aria-label="Floating label select example">
                <option value={''}>Open this select menu</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
              </select>
            </div>
            {regola.map(items => (
              <Card key={items.id} src={items.src} title={items.title} genere={items.genere} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
