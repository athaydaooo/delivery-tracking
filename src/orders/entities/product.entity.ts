import { BaseEntity } from '@shared/database/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ unique: true })
  sku: string;

  @Column('decimal', { precision: 10, scale: 2 })
  weight_kg: number;

  @Column('jsonb', { default: { height: 0, width: 0, length: 0 } })
  dimensions: {
    height: number;
    width: number;
    length: number;
  };

  @Column('decimal', { precision: 10, scale: 2 })
  unit_price: number;

  @Column({ default: true })
  active: boolean;
}
