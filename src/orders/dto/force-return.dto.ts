import { IsOptional, IsString } from 'class-validator';

export class ForceReturnDto {
  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsString()
  returned_at?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
