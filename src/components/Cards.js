import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <section className='cards'>
      <h1>Guettes moi ça un peu !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Cards
