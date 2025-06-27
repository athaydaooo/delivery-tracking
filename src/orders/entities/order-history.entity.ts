import { Entity, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';
import { LocationAddress } from '@orders/types/location-address';
import { OrderStatus } from '@orders/types/order-status';

@Entity()
export class OrderHistory extends BaseEntity {
  @ManyToOne(() => Order, (order) => order.status_history, {
    onDelete: 'CASCADE',
  })
  order: Order;

  @Column()
  status: OrderStatus;

  @Column('text', { nullable: true })
  details: string;

  @Column('jsonb', { nullable: true })
  location: LocationAddress;
}
