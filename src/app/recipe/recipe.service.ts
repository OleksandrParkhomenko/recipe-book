import { EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Strudel', 'Using this recipe you can cook a delicious strudel in less than two hours',
    'https://elavegan.com/wp-content/uploads/2019/10/easy-apple-strudel-with-raisins-and-walnuts.jpg',
  [new Ingredient('Apple', 500), new Ingredient('Sugar', 200)]),
    new Recipe('Cheesecake', 'New York Cheesecake Recipe for Begginers',
    'https://cookiesandcups.com/wp-content/uploads/2017/10/perfectcheesecake-13-1.jpg',
  [new Ingredient('Mascarpone', 400)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
