import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_the_app">
        <h2 className="about__title">WHY THIS API?</h2>
        <p className="about__paragraph">
          In this project I used a very interesting API : "Spoonacular". It is
          an Api that I recommend a lot and I would like to cover other features
          in the future to make my application more comprehensive. Returning to
          the question: why this api? the answer is that there are several
          because... The first, and most important is that I'm a big fan of
          recipes and cooking, I love to try new things, new flavors, new
          ingredients, but of course, there always comes a time when I ask
          myself: "what am I cooking now", I run out of ideas, as happens to
          many others, so that's where I think it would be much easier to have a
          cookbook, or an application where it's easy and quick to access.
          That's why I created this application with the intention of using it
          personally, in those moments when I want to eat something tasty, easy,
          but no idea comes to mind. That's why this application is made for,
          and that's where "new recipes" come to save me.
        </p>
      </div>
      <div className="about_the_app">
        <h2 className="about__title">ABOUT "NEW RECIPES"</h2>
        <p className="about__paragraph">
          In this application, "New Recipes", the user can write what he wants
          to eat on the home page or directly make a more advanced search by
          clicking "Advanced Search". By selecting that option, the user is
          redirected to the search page where certain random recipes appear.It
          is also an input section where the user can write what he wants to eat
          and apply certain filters to the search such as : what kind of
          cooking, what kind of diet and intolerances, to exclude recipes
          containing certain foods. By clicking on the title of a recipe, the
          user is redirected to the detail page where he can access descriptive
          information about the recipe such as: a small summary of the recipe,
          required ingredients and instructions for the preparation of the
          recipe divided into steps.
        </p>
      </div>
    </div>
  );
};

export default About;
