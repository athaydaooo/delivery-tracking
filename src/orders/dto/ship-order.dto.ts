import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { LocationAddress } from '../types/location-address';

export class ShipOrderDto {
  @IsString()
  tracking_code: string;

  @IsString()
  estimated_delivery: string;

  @ValidateNested()
  @Type(() => Object)
  location: LocationAddress;
}
