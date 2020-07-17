import faker from 'faker';
import { Product } from '../models/Product';

const sex: string[] = ['H', 'M'];
const brands: string[] = ['Gucci', 'Givenchy', 'Hermes', 'Chanel', 'Ives Saint Laurent', 'Louis Vuitton'];
const typeClothes: string[] = ['Pants', 'T-Shirts', 'Skirts', 'Shoes', 'Complements'];

export async function getProducts_test() {
  try {
    let products: Product[] = [];
    return await new Promise((resolve) => {
      setTimeout(() => {
        for (let index = 0; index < 100; index++) {
          const product = new Product();
          product.Product_id = faker.random.uuid();
          product.Product_name = product.limiteLengthString(faker.commerce.productName(), 20);
          product.Product_description = product.limiteLengthString(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis quibusdam delectus mollitia eos odit non consequuntur molestiae nihil! Ea incidunt error accusamus consectetur impedit similique vero maxime commodi corrupti!',
            60
          );
          product.Product_price = faker.random.number(1000);
          product.Product_typeClothes = typeClothes[Math.floor(Math.random() * typeClothes.length)];
          product.Product_brand = brands[Math.floor(Math.random() * brands.length)];
          product.Product_sex = product.selectSexIcon(sex[Math.floor(Math.random() * sex.length)]);
          product.Product_imageURL = faker.image.image();

          products.push(product);
        }
        resolve(products);
      }, 3000);
    });
  } catch (error) {
    return error.message;
  }
}

export async function getProduct_test() {
  try {
    let product: Product = new Product();
    return await new Promise((resolve) => {
      setTimeout(() => {
        product.Product_id = faker.random.uuid();
        product.Product_name = product.limiteLengthString(faker.commerce.productName(), 20);
        product.Product_description = product.limiteLengthString(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis quibusdam delectus mollitia eos odit non consequuntur molestiae nihil! Ea incidunt error accusamus consectetur impedit similique vero maxime commodi corrupti!',
          60
        );
        product.Product_price = faker.random.number(1000);
        product.Product_typeClothes = typeClothes[Math.floor(Math.random() * typeClothes.length)];
        product.Product_brand = brands[Math.floor(Math.random() * brands.length)];
        product.Product_sex = product.selectSexIcon(sex[Math.floor(Math.random() * sex.length)]);
        product.Product_imageURL = faker.image.image();

        resolve(product);
      }, 3000);
    });
  } catch (error) {
    return error.message;
  }
}
