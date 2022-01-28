import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is a test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/2:1/w_4500,h_2250,c_limit/Basic,ally-Gojuchang-Chicken-Recipe-Wide.jpg', [
            new Ingredient('Meat',1),
            new Ingredient('Fries',20),
        ]),
        new Recipe('Another test Recipe', 'This is a test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/2:1/w_4500,h_2250,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg', [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
        ]),
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index];
      }
      addIngToShopppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);

      }

}