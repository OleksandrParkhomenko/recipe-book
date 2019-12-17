import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Strudel', 'Using this recipe you can cook a delicious strudel in less than two hours',
    'https://elavegan.com/wp-content/uploads/2019/10/easy-apple-strudel-with-raisins-and-walnuts.jpg'),
    new Recipe('Cheesecake', 'New York Cheesecake Recipe for Begginers',
    'https://cookiesandcups.com/wp-content/uploads/2017/10/perfectcheesecake-13-1.jpg')
  ];
  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
