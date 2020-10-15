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

  static getCategories() : CategoryEnum[]{
    return Object.values(CategoryEnum).sort()
  }
}

export enum CategoryEnum {
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
  COFFEE = 'Coffee/Tea',
  SMOOTHIE = 'Smoothie',
  DESSERT = 'Dessert',
  STEAK = 'Steak',
  AMBIANCE = 'Ambiance',
  ICE_CREAM = 'Ice cream',
  POKE = 'Poke',
  SUSHI = 'Sushi',
  VIETNAMESE = 'Vietnamese',
  PERUVIAN = 'Peruvian',
  SEAFOOD = 'Seafood',
  BURGERS = 'Burgers',
  HIBACHI = 'Hibachi',
  PIZZA = 'Pizza',
  SUBS = 'Subs',
  BAR = 'Bar',
  PASTA = 'Pasta',
  ITALIAN = 'Italian',
  BREAKFAST = 'Breakfast',
  BRUNCH = 'Brunch',
  DRINKS = 'Drinks',
  BBQ = 'BBQ',
  MEDITERRANEAN= 'Mediterranean',
  DELI = 'Deli',
  LUNCH = 'Lunch',
  SOUTHERN = 'Southern',
  FOOD_TRUCK = 'Food truck/stand',
  CAFE = 'Cafe',
  OTHER = 'Other'

}

