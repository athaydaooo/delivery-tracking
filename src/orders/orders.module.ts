import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueModule } from '@shared/queue/queue.module';
import { Orders } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderConsumer } from './queue/orders.consumer';

@Module({
  controllers: [OrdersController, OrderConsumer],
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Orders]), QueueModule],
})
export class OrdersModule {}
