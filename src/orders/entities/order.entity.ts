import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { OrderHistory } from './order-history.entity';
import { OrderEvent } from './order-event.entity';
import { Carrier } from './carrier.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';
import { DeliveryAddress } from '@orders/types/delivery-address';
import { OrderStatus } from '@orders/types/order-status';

@Entity()
export class Order extends BaseEntity {
  @Column({ unique: true })
  tracking_code: string;

  @Column({
    enum: OrderStatus,
    type: 'enum',
  })
  status: string;

  @ManyToOne(() => Carrier, (carrier) => carrier.orders)
  carrier: Carrier;

  @Column({ nullable: true })
  estimated_delivery_date: Date;

  @Column('jsonb')
  delivery_address: DeliveryAddress;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];

  @OneToMany(() => OrderHistory, (history) => history.order)
  status_history: OrderHistory[];

  @OneToMany(() => OrderEvent, (event) => event.order)
  tracking_events: OrderEvent[];
}
