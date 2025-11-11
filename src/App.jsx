import { useState } from 'react'
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

  return (
    <>


      <main>
        <div className="content">
          <h1>Film</h1>
          <div className="row g-4 p-5">
            {film.map(items => (
              <Card src={items.src} title={items.title} genere={items.genere} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
