import { IsString } from 'class-validator';

export class DeliverOrderDto {
  @IsString()
  delivered_at: string;
}
