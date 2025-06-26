import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueService } from '@shared/queue/queue.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Repository } from 'typeorm';
import { Logger } from 'winston';
import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    private readonly queueService: QueueService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    this.queueService.emitOrderCreated(createOrderDto);
    return `ok`;
  }
}
