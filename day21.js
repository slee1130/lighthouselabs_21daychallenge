const chooseRecipe = function (bakeryA, bakeryB, recipes) {

    for (let recipe of recipes) {
        let inBakeryA = false,
            inBakeryB = false;

        for (let ingredient of recipe.ingredients) {
            if (bakeryA.indexOf(ingredient) >= 0) {
                inBakeryA = true;
            }
            if (bakeryB.indexOf(ingredient) >= 0) {
                inBakeryB = true;
            }
        }
        if (inBakeryA && inBakeryB) {
            return recipe.name;
        }
    }


}