import { Entity, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { BaseEntity } from '@shared/database/entities/base.entity';
import { TrackingEventType } from '@orders/types/tracking-event-type';

@Entity()
export class OrderEvent extends BaseEntity {
  @ManyToOne(() => Order, (order) => order.tracking_events, {
    onDelete: 'CASCADE',
  })
  order: Order;

  @Column()
  event_type: TrackingEventType;

  @Column('jsonb')
  event_data: any;

  @Column({ nullable: true })
  carrier_reference: string;
}
