import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueService } from '@shared/queue/queue.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    private readonly queueService: QueueService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    await this.queueService.emitOrderCreated(createOrderDto);
    return `ok`;
  }
}
