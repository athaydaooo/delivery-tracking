import { Entity, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';

@Entity()
export class Carrier extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  document_number: string;

  @Column()
  api_endpoint: string;

  @Column()
  api_key: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Order, (order) => order.carrier)
  orders: Order[];
}
