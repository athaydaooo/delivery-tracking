import { Controller, Inject, Injectable } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '@orders/entities/order.entity';
import { ROUTING_KEYS } from '@shared/queue/queue.constants';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Repository } from 'typeorm';
import { Logger } from 'winston';

@Controller()
@Injectable()
export class OrderConsumer {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  @EventPattern(ROUTING_KEYS.ORDER_CREATED)
  handleOrderCreated(@Payload() data: unknown) {
    this.logger.info('[OrderConsumer] Processando ordem criada', { data });

    // Lógica de processamento
  }
}
