import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from '@orders/dto/create-order.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { QUEUE_SERVICE, ROUTING_KEYS } from './queue.constants';

@Injectable()
export class QueueService {
  constructor(
    @Inject(QUEUE_SERVICE)
    private readonly client: ClientProxy,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  private logEmission(pattern: string, data: unknown): void {
    this.logger.info(`[QueueService] Emitting event`, {
      pattern,
      data,
      timestamp: new Date().toISOString(),
    });
  }

  emit(pattern: string, data: unknown): void {
    this.logEmission(pattern, data);
    this.client.emit(pattern, data);
  }

  send(pattern: string, data: unknown): void {
    this.logger.info(`[QueueService] Sending message`, {
      pattern,
      data,
      timestamp: new Date().toISOString(),
    });
    this.client.send(pattern, data);
  }

  emitOrderCreated(data: CreateOrderDto): void {
    this.emit(ROUTING_KEYS.ORDER_CREATED, data);
  }

  emitOrderDispatched(): void {
    //this.emit(ROUTING_KEYS.ORDER_DISPATCHED, data);
  }

  emitOrderDelivered(): void {
    //this.emit(ROUTING_KEYS.ORDER_DELIVERED, data);
  }

  emitOrderRefunded(): void {
    //this.emit(ROUTING_KEYS.ORDER_REFUNDED, data);
  }
}
