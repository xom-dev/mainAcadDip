import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCocktails } from "../../api/api";
import { setCocktails } from "../../redux/reducers/PostReducer";
import Card from "../Card/Card";
import { Switch, Route } from "react-router-dom";
import PostView from "../PostView/PostView";

function Posts({ setCocktails, cocktails }) {
  useEffect(() => {
    getAllCocktails("")
      .then((res) => {
        res.json().then((data) => setCocktails(data));
      })
      .catch(console.error);
  }, []);

  if (!cocktails) {
    return null;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" children={<Card cocktails={cocktails} />}></Route>
        <Route
          exact
          path="/cocktail/:id"
          children={<PostView cocktails={cocktails} />}
        ></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cocktails: state.PostReducer.cocktails,
});

const mapDispatchToProps = {
  setCocktails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
