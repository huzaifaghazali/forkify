import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');


// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io


///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // 5ed6604591c37cdc054bc886
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
   
  } catch (error) {
    // alert(error);
    console.log(error);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
