import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tequila Sunrise',
  //     'An awesome alcoholic cocktail',
  //     'https://cdn.pixabay.com/photo/2015/07/07/00/34/tequila-sunrise-833905__340.jpg',
  //     [
  //       new Ingredient('Lime', 1),
  //       new Ingredient('Tequila', 2),
  //       new Ingredient('Soda', 1),
  //       new Ingredient('Gin', 2)
  //     ]
  //   ),
  //   new Recipe(
  //     'Cheese Burger',
  //     'A gourmet 300g cheese burger with fries',
  //     'https://cdn.pixabay.com/photo/2020/02/08/09/05/burger-4829526_960_720.jpg',
  //     [
  //       new Ingredient('Patty', 1),
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Fries', 15),
  //       new Ingredient('Lettuce', 1)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
