import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Image, Button, Grid, Header } from "semantic-ui-react";

export default function PostView({ cocktails }) {
  const history = useHistory();
  let { id } = useParams();

  let card = cocktails.drinks.find((drink) => drink.idDrink === id);
  console.log(card);

  if (!card) {
    return null;
  }

  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Card fluid>
            <Image src={card.strDrinkThumb} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{card.strDrink}</Card.Header>
              <Card.Meta>
                <span className="date">{card.strCategory}</span>
                <span className="date">{card.strAlcoholic}</span>
              </Card.Meta>
              <Header as="h3">Ingredients:</Header>
              <Card.Description>{card.strIngredient1}</Card.Description>
              <Card.Description>{card.strIngredient2}</Card.Description>
              <Card.Description>{card.strIngredient3}</Card.Description>
              <Card.Description>{card.strInstructions}</Card.Description>
            </Card.Content>
            <Card.Content className="card-btn" extra>
              <Button
                class="ui button"
                onClick={() => {
                  history.push("/");
                }}
              >
                Get Back!
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
