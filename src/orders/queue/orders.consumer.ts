import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from '@orders/entities/order.entity';
import { ROUTING_KEYS } from '@shared/queue/queue.constants';
import { Repository } from 'typeorm';

@Injectable()
export class OrderConsumer {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  @MessagePattern(ROUTING_KEYS.ORDER_CREATED)
  handleOrderCreated(@Payload() data: any) {
    console.log('Processando ordem criada:', data);

    // Lógica de processamento
    return { success: true };
  }
}
