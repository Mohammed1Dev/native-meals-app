import Category from '../models/category';
import Meal from '../models/meal';
export const CATEGORIES = [
  new Category('c1', 'Arabian Ftoor.', '#f5428d'),
  new Category('c2', 'Morrocan Ftoor', '#f54242'),
  new Category('c3', 'Asiatic Ftoor', '#f5a442'),
  new Category('c4', 'Amazigh Ftoor', '#f5d142'),
  new Category('c5', 'Double Ftoor', '#368dff'),
  new Category('c6', 'Mixed Ftoor', '#41d95d'),
  new Category('c7', 'Light Ftoor', '#9eecff'),
  new Category('c8', 'Ftoor & Dinner', '#b9ffb0'),
  new Category('c9', 'Ftoor & Shoor', '#ffc7ff'),
  new Category('c10', 'Yummy Ftoor', '#47fced')
];


export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://www.munatycooking.com/wp-content/uploads/2016/06/chicken-tikka-pizza-9.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Morrocan Herira',
    'affordable',
    'complex',
    'https://www.la-cuisine-marocaine.com/photos-recettes/01-harira.-ramadanjpg.jpg',
    10,
    [
      'Tomate',
      'patte',
      'couriant',
      '8 oz. lamb, beef or chicken, diced',
      '1 small bunch flat leaf parsley, finely chopped',
      '1 tbsp ginger',
      '1 large onion, grated',
      '2 handfuls dry green or brown lentils',
      '1 cup flour - combined with 2 cups water'
    ],
    [
      'Soak the chickpeas overnight. The next day, drain and peel them. This is easily done by pressing chickpeas one-by-one between your forefinger and thumb or by rubbing all of the chickpeas vigorously in a kitchen towel.The prepped chickpeas may be be frozen until needed.',
      'Pick through the lentils to remove any stones and debris; set aside until ready to use',
      'Stew the tomatoes then pass them through a food mill to make a puree; discard the skins and seeds. Or, cut the tomatoes into quarters and process them, with or without skin, in a food processor until smooth. (The pureed tomatoes may be frozen until needed.)',
      'In a 6-quart or larger pressure cooker or stock pot, brown the meat in the oil over medium heat. Add the soup bones, peeled chickpeas, pureed tomatoes, grated onion, spices, smen (if using) and 3 cups (710 ml) of water. Bring to a boil, cover and cook with medium pressure for 25 minutes (or simmer for 50 to 60 minutes).',
      ''
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Chbakiyaa',
    'pricey',
    'simple & spicy',
    'https://tasteofmaroc.com/wp-content/uploads/2020/04/chebakia-picturepartners-bigstock-scaled.jpg',
    45,
    [
      '4 cups flour',
      '1/2 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1 1/2 teaspoons ground anise',
      '1 1/2 teaspoons ground cinnamo',
      '1/2 teaspoon saffron threads, crumbled to a powder',
      '1/2 teaspoon turmeric',
      '1 pinch mastic or gum arabic drops - mix with 1/4 teaspoon sugar and crush to a powder',
      '1 extra large egg',
      '1/4 cup unsalted butter - melted',
      '1/4 cup olive oil',
      '1/4 cup vinegar',
      '1/4 cup orange flower water',
      '1 teaspoon yeast - dissolved in 1/4 cup warm water'
    ],
    [
      'Grind 1.5 cups of toasted sesame in a food processor until powdery, then process a little longer until the powder becomes moist enough to pack.',
      'In a large bowl, combine the ground sesame with the flour, baking powder, salt and other dry ingredients. Add the yeast mixture and remaining wet ingredients, and mix with your hands to form a stiff but pliable dough similar to Play Dough in texture. Add more flour or more orange flower water if necessary to achieve that consistency.',
      'Quickly fry the buns for c. 1 minute on each side',
      'Knead the dough by hand for 7 to 8 minutes or in a mixer with dough hook for 4 to 5 minutes. Divide the dough into four portions, shape each into a smooth mound, and place the dough in a plastic bag to rest for 10 to 15 minutes.',
      'Lightly flour your work surface. Take one of the portions of dough, and roll it out to the thickness of a thin piece of cardboard.',
      'Use a fluted pastry cutter to cut the dough into rectangles about the size of your palm. In each rectangle, make four evenly spaced cuts that extend almost the length of the rectangle. The resulting rectangles will have five strips of attached dough.',
      'Take a rectangle and thread your right middle finger through alternating strips of dough. With the rectangle draped over your finger in this way, use your left hand to pinch together the outer corners that hang below your fingertip. This will form the center of the flower shape.',
      'Continue holding the pinched corners with your left hand, and allow the strips of dough to slide off your right finger while gently turning them inside out around the pinched corner. Pinch the opposite corners closed once the dough is turned inside out. If done correctly, you\'ll have formed the dough into an elongated flower shape.',
      'Place the folded chebakia on a baking sheet or tray. Repeat the process with the remaining rectangles and mounds of dough. As you work, gather your scraps of dough to mold together into a mound, and return them to the bag to rest before you try rolling them out again.',
      'Use up all of your dough in this manner. Cover the trays of folded dough with a towel until ready to fry.',
      'Set up your work area. Begin by heating one inch of oil in a large, deep frying pan over medium-low heat. At the same time, heat the honey almost to boiling in a large pot. When the honey is frothy but not bubbling, add the orange flower water to the honey and turn off the heat. Set out a large bowl with strainer.',
      'When the oil is hot, cook the chebakia in batches. Adjust the heat as necessary to slowly fry each batch of chebakia to a medium brown color. This should take about 10 minutes if the oil is the correct temperature. If the oil is too hot, the chebakia will color quickly but the insides will not be cooked crispy.',
      'Remove the golden brown chebakia from the oil with a slotted spoon or strainer, and transfer them directly to the hot honey. Gently push down on the chebakia to submerge them in the honey, and allow them to soak for 5 to 7 minutes. They\'ll turn a rich, glossy amber color as they absorb the honey. In the meantime, you can begin frying another batch of cookies.',
      'When the chebakia have finished soaking, remove them from the honey to a strainer or colander, and allow them to drain for only a few minutes. Gently transfer them while hot to a large platter or tray and sprinkle the centers with sesame.',
      'As you finish soaking other batches of chebakia in the honey, simply drain and add them to the platter in a mound, garnishing each batch with sesame. '
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Morrocan Basstilla Chiken',
    'luxurious',
    'challenging',
    'https://foodof.com/media/popup/image_popup/uploads/img/recette-b1ec9b63-d92e-484b-ad75-3877504d0d37.jpeg',
    60,
    [
      '1 (5-pound) chicken',
      '1/4 cup olive oil',
      '1/4 cup unsalted butter',
      '2 large sweet onions, coarsely chopped',
      '1 tablespoon ground ginger',
      '2 teaspoons salt',
      '1 1/2 teaspoons freshly ground white pepper',
      '1 teaspoon freshly ground black pepper',
      '1 teaspoon ground turmeric',
      '1 teaspoon crumbled saffron threads',
      '2 to 3 sticks cinnamon',
      '1/4 cup coarsely chopped fresh cilantro',
      '8 large eggs, beaten',
      '1/4 cup vegetable oil',
      '2 cups whole blanched almonds',
      '1/2 cup confectioners sugar',
      '2 tablespoons orange flower water'
    ],
    [
      'Cut the chicken into pieces, discarding the skin. Add the butter and oil to a large Dutch oven or other heavy duty pot and heat on medium until the butter melts. Add the onion, and cook, stirring occasionally, until translucent, about 2 minutes. Add the spices and cook, stirring constantly, until fragrant, about 30 seconds. Add the chicken pieces and stir to coat. Cover, and cook over medium to medium-high heat, stirring occasionally, for about 1 hour, or until the chicken is very tender and falls off the bone. Do not add water, and be careful not to burn the chicken or the sauce as this will ruin the dish.',
      'Transfer the cooked chicken to a plate, and reduce the sauce in the pot until most of the liquids have evaporated and the onions form a mass in the oil. Stir occasionally, and adjust the heat as necessary to prevent burning. Remove and discard the cinnamon sticks.',
      'While the sauce is reducing and the chicken is still warm, pick the meat off the bones, breaking it into bite-size pieces. Place in a bowl and stir in several spoonfuls of the onion mixture; cover the meat and set aside.',
      'Transfer the remaining reduced onions and oil to a large non-stick skillet. Add the cilantro, and simmer for 1 to 2 minutes.',
      'Add the beaten eggs, and cook as you would an omelet or scrambled eggs. Be patient, as it will take up to 10 minutes for the eggs to set. Some oil separating from the eggs is okay. Set the egg stuffing aside.',
      'Heat the vegetable oil in a skillet over medium heat until the oil shimmers. Test the oil by dropping in an almond. If tiny bubbles rapidly rise around the almond within a few seconds, the oil is ready. If the oil boils and splatters immediately, it\'s too hot.',
      'Fry the almonds in batches, stirring constantly, until light golden brown. As soon as the almonds are richly colored, transfer them to a tray lined with paper towels to drain and cool. Fried almonds will continue to darken a bit after frying, so be careful not to burn them while they\'re in the oil.',
      'When the almonds have cooled completely, pulse them in a food processor until finely ground. Put them in a mixing bowl, and with your hands work in the powdered sugar, orange flower water, and softened butter. Set aside.',
      'Generously oil a 14-inch or larger round pan. If you don\'t have a round pan, work on an oiled flat baking sheet or large plate, and shape a circular pie as best you can.',
      'Brush melted butter on each sheet of warqa or phyllo dough as you work. If using phyllo, take care to keep it covered with plastic since it dries out very quickly.',
      'Using your pan as a guide, overlap 3 or 4 single layers of warqa (shiny side down)—or double layers of phyllo dough—in a circular fashion, so that the inner halves of the pastry dough overlap in the center, and the excess dough drapes over the edges of the pan. Butter each layer of dough.',
      'Place one buttered 12-inch circle of warqa, or two 12-inch buttered circles of phyllo, in the center of the pan. This forms the bottom of the pie.',
      'Cover the 12-inch circle with the chicken filling, and distribute the egg stuffing over the chicken.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Fish Fried',
    'luxurious',
    'Delecieus',
    'https://i.pinimg.com/originals/45/a9/c7/45a9c7a53d6ef7bd6dd9017a156ab021.jpg',
    15,
    [
      'Vegetable oil, for frying',
      "1 1/2 to 2 pounds fresh Fish",
      'Salt and pepper',
      '1 /2 cup all-purpose unbleached flour',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      '1/4 teaspoon cayenne pepper, a few pinches',
      'Wedged lemons and malt vinegar for topping'
    ],
    [
      'Wash and cut Fish',
      'Dice the salmon',
      'Process mustard, vinegar and Salt into a washed fish',
      'Prepare the skillet',
      'And Go'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Moroccan Fried Sardines',
    'affordable',
    'hard',
    'https://tasteofmaroc.com/wp-content/uploads/2017/10/sardines-fried-stuffed-picturepartners-bigstock.jpg',
    240,
    [
      '4 Kg Sardines',
      '150ml Lemon Juice',
      '80g spices',
      '300g couriant',
      '200g Oil',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Morrocan Kafta Barbeque',
    'affordable',
    'simple',
    'data:image/jpeg;base64,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',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];
