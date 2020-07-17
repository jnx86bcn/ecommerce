export class Product {
  Product_id: string;
  Product_name: string;
  Product_description: string;
  Product_price: number;
  Product_brand: string;
  Product_typeClothes: string;
  Product_sex: string;
  Product_imageURL: string;

  constructor() {
    this.Product_id = '';
    this.Product_name = '';
    this.Product_description = '';
    this.Product_price = 0;
    this.Product_brand = '';
    this.Product_typeClothes = '';
    this.Product_sex = '';
    this.Product_imageURL = '';
  }

  public limiteLengthString(phrase: string, length: number) {
    let newPhrase: string = phrase.length > length ? phrase.substring(0, length) + '...' : phrase;
    return newPhrase;
  }

  public selectSexIcon(sexString: string) {
    let urlIcon: string = sexString == 'H' ? '../src/branding/img/icons/man.png' : '../src/branding/img/icons/woman.png';
    return urlIcon;
  }
}
