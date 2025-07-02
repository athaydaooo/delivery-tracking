import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueService } from '@shared/queue/queue.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { ShipOrderDto } from './dto/ship-order.dto';
import { UpdateOrderTrackingDto } from './dto/update-order-tracking.dto';
import { DeliverOrderDto } from './dto/deliver-order.dto';
import { MarkOrderAsLostDto } from './dto/mark-order-as-lost.dto';
import { SetPickupPendingDto } from './dto/set-pickup-pending.dto';
import { ConfirmPickupCompletedDto } from './dto/confirm-pickup-completed.dto';
import { ForceReturnDto } from './dto/force-return.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    private readonly queueService: QueueService,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    console.log('Creating order with body:', createOrderDto);
    throw new Error('Method not implemented.');
  }

  separate(id: string) {
    console.log('Separating order with ID:', id);
    throw new Error('Method not implemented.');
  }

  ship(id: string, shipOrderDto: ShipOrderDto) {
    console.log('Shipping order with ID:', id, 'and body:', shipOrderDto);
    throw new Error('Method not implemented.');
  }

  updateTracking(id: string, updateOrderTrackingDto: UpdateOrderTrackingDto) {
    console.log(
      'Updating order tracking with ID:',
      id,
      'and body:',
      updateOrderTrackingDto,
    );
    throw new Error('Method not implemented.');
  }

  deliver(id: string, deliverOrderDto: DeliverOrderDto) {
    console.log('Delivering order with ID:', id, 'and body:', deliverOrderDto);
    throw new Error('Method not implemented.');
  }

  markAsLost(id: string, markOrderAsLostDto: MarkOrderAsLostDto) {
    console.log(
      'Marking order as lost with ID:',
      id,
      'and body:',
      markOrderAsLostDto,
    );
    throw new Error('Method not implemented.');
  }

  setPickupPending(id: string, setPickupPendingDto: SetPickupPendingDto) {
    console.log(
      'Setting pickup pending with ID:',
      id,
      'and body:',
      setPickupPendingDto,
    );
    throw new Error('Method not implemented.');
  }

  confirmPickupCompleted(
    id: string,
    confirmPickupCompletedDto: ConfirmPickupCompletedDto,
  ) {
    console.log(
      'Confirming pickup completed with ID:',
      id,
      'and body:',
      confirmPickupCompletedDto,
    );
    throw new Error('Method not implemented.');
  }

  forceReturn(id: string, forceReturnDto: ForceReturnDto) {
    console.log('Forcing return with ID:', id, 'and body:', forceReturnDto);
    throw new Error('Method not implemented.');
  }
}
