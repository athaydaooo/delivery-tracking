import { BaseEntity } from '@shared/database/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('orders')
export class Orders extends BaseEntity {
  @Column()
  address: string; // Endereço de entrega

  @Column()
  deliveryDeadline: number; // Prazo em dias

  @Column({ default: 'PENDING' })
  status: 'PENDING' | 'ASSIGNED' | 'DELIVERED' | 'FAILED';

  @Column({ nullable: true })
  carrier?: string; // Transportadora atribuída

  @OneToMany(() => Product, (product) => product.order, { cascade: true })
  products: Product[];
}
