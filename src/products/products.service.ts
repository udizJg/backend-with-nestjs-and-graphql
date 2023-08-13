import { Injectable } from '@nestjs/common';
import { ProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import axios from 'axios';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private readonly URL: string
  constructor(){
    this.URL = 'https://fakestoreapi.com/products';
  }
  
  async create(ProductInput: ProductInput) {
    const response = await axios.post(this.URL, {
      data: ProductInput
    });
    const products = ProductInput 
    return products;
  }

  async findAll(): Promise<ProductInput[]> {
    const response = await axios.get(this.URL);
    const products = response.data; 
    return products;
  }

  async findOne(id: number) {
    const response = await axios.get(`${this.URL}/${id}`);
    const products = response.data; 
    return products;
  }

 async update(id: number, updateProductInput: UpdateProductInput) {
    let product = await axios.get(`${this.URL}/${id}`);
    product = {...product,...updateProductInput}
    return product;
  }

  async remove(id: number) {
    let product = await axios.get(`${this.URL}`);
    product = product.data.filter(data => data.id !== id);
    return product;
  }
}
