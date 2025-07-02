import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, ValidateNested } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type()
  items: { productId: string; quantity: number }[];

  @IsString()
  address: string;

  @IsInt()
  deliveryDeadline: number;
}
