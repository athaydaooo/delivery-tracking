import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

// src/orders/dto/create-order.dto.ts
class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  height: number;

  @IsNumber()
  width: number;
}

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];

  @IsString()
  address: string;

  @IsInt()
  deliveryDeadline: number; // Prazo em dias
}
