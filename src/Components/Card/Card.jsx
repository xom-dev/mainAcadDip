import React from "react";
import { Link } from "react-router-dom";
import {
  Card as SUICard,
  Container,
  Image,
  Button,
  Header,
} from "semantic-ui-react";

export default function Card({ cocktails }) {
  return (
    <ul className="posts-list">
      {cocktails.drinks &&
        cocktails.drinks.map((cocktail) => (
          <Link
            className="post-list__link"
            to={`/cocktail/${cocktail.idDrink}`}
          >
            <SUICard className="post-list__link-card">
              <Image src={cocktail.strDrinkThumb} wrapped ui={false} />
              <SUICard.Content>
                <SUICard.Header>{cocktail.strDrink}</SUICard.Header>
                <SUICard.Meta>
                  <span className="date">{cocktail.strCategory}</span>
                </SUICard.Meta>
                <Header as="h3">Ingredients:</Header>
                <SUICard.Description>
                  {cocktail.strIngredient1}
                </SUICard.Description>
                <SUICard.Description>
                  {cocktail.strIngredient2}
                </SUICard.Description>
              </SUICard.Content>
              <SUICard.Content className="card-btn" extra>
                <Button class="ui button">Get Recipe!</Button>
              </SUICard.Content>
            </SUICard>
          </Link>
        ))}
    </ul>
  );
}
