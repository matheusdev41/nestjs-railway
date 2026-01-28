import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  create(data: Partial<Product>) {
    const product = this.productRepo.create(data)
    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  findByBarcode(barcode: string) {
    return this.productRepo.findOne({ where: { barcode } })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
