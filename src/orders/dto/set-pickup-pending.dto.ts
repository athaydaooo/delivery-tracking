import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { LocationAddress } from '../types/location-address';

export class SetPickupPendingDto {
  @ValidateNested()
  @Type(() => Object)
  location: LocationAddress;

  @IsOptional()
  @IsString()
  details?: string;

  @IsString()
  deadline: string;
}
