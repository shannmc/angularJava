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
    newRestaurant.id = restaurant.id;
    newRestaurant.category = restaurant.category;
    newRestaurant.location = restaurant.location;
    newRestaurant.haveTried = restaurant.haveTried;
    newRestaurant.name = restaurant.name;
    newRestaurant.notes = restaurant.notes;
    newRestaurant.rating = restaurant.rating;
    return newRestaurant;
  }

  static getCategories() : Category[]{
    return Object.values(Category)
    // return Category;
  }
}

export enum Category {
  AMERICAN = 'American',
  FAST_FOOD = 'Fast food',
  MEXICAN = 'Mexican',
  SOUTHWESTERN = 'Southwestern',
  JAPANESE = 'Japanese',
  CHINESE = 'Chinese',
  ASIAN = 'Asian',
  THAI = 'Thai',
  INDIAN = 'Indian',
  SALADS = 'Salads',
  BUFFET = 'Buffet',
  BAKERY = 'Bakery',
  COFFEE = 'Coffee',
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
  // FOOD_TRUCK,
  // FOOD_STAND,
  // CAFE,
  // OTHER

}

