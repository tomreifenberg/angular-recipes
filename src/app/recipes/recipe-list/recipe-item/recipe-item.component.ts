import { Component, OnInit } from '@angular/core';


import { Recipe } from '../../recipe.model';




@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg'),
    new Recipe('A Test Recipe', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
