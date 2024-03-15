import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <section className="cards">
      <h1>Guettes moi ça un peu !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src="images/barquesmontagne.jpg"
              text="Explorez les lacs et rivières en profondeur. Un séjour en pleine nature qui ravira le baroudeur en vous."
              label="Aventure"
              path="/services"
            />
            <CardItem
              src="images/ilepiscine.jpg"
              text="Profitez pleinement d'un repos emplement merité. Les destinations de vos rêves vous attendent !"
              label="Paix intérieure"
              path="/services"
            />
            <CardItem
              src="images/italiefalaiseville.jpg"
              text="Découvrez l'italie sous toutes ses couleurs. Dépaysement garanti"
              label="Découverte"
              path="/services"
            />
            <CardItem
              src="images/mongolfiere.jpg"
              text="Laissez-vous transporter par la magie des montgolfières et vivez des moments inoubliables dans les airs."
              label="Découverte"
              path="/services"
            />
            <CardItem
              src="images/vandesert.jpg"
              text="Traversez les déserts majestueux. Vivez des expériences authentiques au rythme de votre propre aventure nomade."
              label="Aventure"
              path="/services"
            />
            <CardItem
              src="images/venisepont.jpg"
              text="Découvrez Venise, la cité emblématique, où romance et histoire se rencontrent le long de ses canaux."
              label="Instants Inoubliables"
              path="/services"
            />
            <CardItem
              src="images/vanfalaise.jpg"
              text="Découvrez des paysages époustouflants, des nuits étoilées inoubliables et des expériences uniques au bord des falaises."
              label="Aventure"
              path="/services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
