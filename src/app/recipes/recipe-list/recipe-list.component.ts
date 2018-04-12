import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'Test Description1', 'https://get.pxhere.com/photo/bone-plated-food-meat-gourmet-dish-plate-slice-spread-dinner-lunch-plate-delicious-tasty-colored-food-photography-food-cuisine-seafood-animal-source-foods-fish-recipe-1418590.jpg'),
    new Recipe('Test Recipe2', 'Test Description2', 'https://get.pxhere.com/photo/bone-plated-food-meat-gourmet-dish-plate-slice-spread-dinner-lunch-plate-delicious-tasty-colored-food-photography-food-cuisine-seafood-animal-source-foods-fish-recipe-1418590.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
