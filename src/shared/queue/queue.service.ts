import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { QUEUE_SERVICE, ROUTING_KEYS } from './queue.constants';

@Injectable()
export class QueueService {
  constructor(
    @Inject(QUEUE_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  emit(pattern: string, data: any): void {
    this.client.emit(pattern, data);
  }

  send(pattern: string, data: any): void {
    this.client.send(pattern, data);
  }

  emitOrderCreated(data: any): void {
    this.emit(ROUTING_KEYS.ORDER_CREATED, data);
  }

  emitOrderDispatched(data: any): void {
    this.emit(ROUTING_KEYS.ORDER_DISPATCHED, data);
  }

  emitOrderDelivered(data: any): void {
    this.emit(ROUTING_KEYS.ORDER_DELIVERED, data);
  }

  emitOrderRefunded(data: any): void {
    this.emit(ROUTING_KEYS.ORDER_REFUNDED, data);
  }
}
