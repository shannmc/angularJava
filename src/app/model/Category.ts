export class Category {
  id: number;
  name: string;

  static fromHttp(category : Category) : Category {
    const newCategory = new Category();
    newCategory.id = category.id;
    newCategory.name = category.name;
    return newCategory;
  }
}


