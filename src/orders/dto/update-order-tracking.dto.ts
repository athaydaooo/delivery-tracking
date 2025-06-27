import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { LocationAddress } from '../types/location-address';

export class UpdateOrderTrackingDto {
  @ValidateNested()
  @Type(() => Object)
  location: LocationAddress;

  @IsString()
  updated_at: string;
}
