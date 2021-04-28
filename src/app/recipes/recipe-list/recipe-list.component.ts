import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg'),
    new Recipe('Another Test Recipe', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg')

  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
