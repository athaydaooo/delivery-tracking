import { BaseEntity } from '@shared/database/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Orders } from './order.entity';

@Entity('products')
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column('float')
  value: number;

  @Column('float')
  weight: number; // Em kg

  @Column('float')
  height: number; // Em cm

  @Column('float')
  width: number; // Em cm

  @ManyToOne(() => Orders, (order) => order.products)
  order: Orders;
}
