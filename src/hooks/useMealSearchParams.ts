import { IngredientShort } from "../types";
import useQuery from "./useQuery";

const ITEM_NAME = "ingredient";
const ITEM_TITLE = "title";
/**
 * A custom React hook for managing URL search parameters related to ingredients and meal titles.
 * @returns An object containing the current search parameter string, meal title, ingredients list,
 * and functions for updating the title and ingredients.
 */
const useSearchParams = () => {
  const { queryPairs, updateSearchParam, paramsString } = useQuery();

  // Extract the meal title from the search parameters or set it to an empty string.
  const titleParam = queryPairs[ITEM_TITLE];

  // Extract the list of ingredients from the search parameters and convert them to an array of objects.
  const ingredients: IngredientShort[] = [];
  const foodItemParams = (queryPairs[ITEM_NAME] ?? []).map((item) =>
    item.split("|")
  );
  for (const [food_name, selected_unit, selected_qty] of foodItemParams) {
    ingredients.push({
      food_name,
      selected_unit,
      selected_qty: Number(selected_qty),
    });
  }

  /**
   * A function for updating the list of ingredients in the URL search parameters.
   * @param items The updated list of ingredients.
   */
  const handleUpdateIngredients = (items: IngredientShort[]) => {
    updateSearchParam([
      ITEM_NAME,
      items.map(
        (item) =>
          `${item.food_name}|${
            item.selected_unit
          }|${item.selected_qty.toString()}`
      ),
    ]);
  };

  /**
   * A function for updating the meal title in the URL search parameters.
   * @param titleArg The new title to set.
   */
  const handleUpdateTitle = (titleArg: string) => {
    updateSearchParam([ITEM_TITLE, titleArg]);
  };

  return {
    paramsString,
    title: titleParam?.length > 0 ? titleParam[0] : "",
    onUpdateTitle: handleUpdateTitle,
    ingredients,
    onUpdateIngredients: handleUpdateIngredients,
  };
};

export default useSearchParams;
