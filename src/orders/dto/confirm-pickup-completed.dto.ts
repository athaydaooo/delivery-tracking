import { IsString } from 'class-validator';

export class ConfirmPickupCompletedDto {
  @IsString()
  picked_up_at: string;
}
