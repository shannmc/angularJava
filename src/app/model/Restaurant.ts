export class Restaurant {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  haveTried: boolean;
  notes: string;

  static fromHttp(restaurant : Restaurant) : Restaurant {
    const newRestaurant = new Restaurant();
    newRestaurant.category = restaurant.category;
    newRestaurant.location = restaurant.location;
    newRestaurant.haveTried = restaurant.haveTried;
    newRestaurant.name = restaurant.name;
    newRestaurant.notes = restaurant.notes;
    newRestaurant.rating = restaurant.rating;
    return newRestaurant;
  }

}

export enum Category {
  AMERICAN = 'American',
  FAST_FOOD = 'Fast food',
  MEXICAN = 'Mexican',
  // SOUTHWESTERN,
  // JAPANESE,
  // CHINESE,
  // ASIAN,
  // THAI,
  // INDIAN,
  // SALADS,
  // BUFFET,
  // BAKERY,
  // COFFEE,
  // SMOOTHIE,
  // DESSERT,
  // STEAK,
  // FANCY,
  // AMBIANCE,
  // ICE_CREAM,
  // TEA,
  // POKE,
  // SUSHI,
  // VIETNAMESE,
  // PERUVIAN,
  // SEAFOOD,
  // BURGERS,
  // HIBACHI,
  // PIZZA,
  // SUBS,
  // BAR,
  // PASTA,
  // ITALIAN,
  // BREAKFAST,
  // BRUNCH,
  // DRINKS,
  // BBQ,
  // MEDITERRANEAN,
  // DELI,
  // LUNCH,
  // SOUTHERN,
  // OTHER

}

