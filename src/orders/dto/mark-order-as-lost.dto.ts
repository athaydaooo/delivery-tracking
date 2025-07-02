import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LocationAddress } from '../types/location-address';

export class MarkOrderAsLostDto {
  @ValidateNested()
  @Type(() => Object)
  last_known_location: LocationAddress;
}
