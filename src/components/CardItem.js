import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
   <article className="cards__item">
    <Link className="cards__item__link">
      <figure className="cards__item__pic-wrap">
        <img src="" alt="Travel" className="cards__item__img" />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa vel quos assumenda?</h5>
      </div>
    </Link>
   </article>
  )
}

export default CardItem;
