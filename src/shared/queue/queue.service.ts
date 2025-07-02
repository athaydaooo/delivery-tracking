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

  private logEmissionError(pattern: string, data: unknown): void {
    this.logger.info(`[QueueService] Emitting event`, {
      pattern,
      data,
      timestamp: new Date().toISOString(),
    });
  }

  async emit(pattern: string, data: unknown): Promise<void> {
    try {
      await this.client.emit(pattern, data).toPromise();
    } catch (e) {
      this.logEmissionError(pattern, data);
      throw e;
    }
    this.logEmission(pattern, data);
  }

  async send(pattern: string, data: unknown): Promise<void> {
    try {
      await this.client.send(pattern, data).toPromise();
    } catch (e) {
      this.logEmissionError(pattern, data);
      throw e;
    }
    this.logEmission(pattern, data);
  }

  async emitOrderCreated(data: CreateOrderDto): Promise<void> {
    await this.emit(ROUTING_KEYS.ORDER_CREATED, data);
  }

  async emitOrderDispatched(): Promise<void> {
    //this.emit(ROUTING_KEYS.ORDER_DISPATCHED, data);
  }

  async emitOrderDelivered(): Promise<void> {
    //this.emit(ROUTING_KEYS.ORDER_DELIVERED, data);
  }

  async emitOrderRefunded(): Promise<void> {
    //this.emit(ROUTING_KEYS.ORDER_REFUNDED, data);
  }
}
