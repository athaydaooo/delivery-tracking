import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { CREATE_QUEUE_CONFIG, QUEUE_SERVICE } from './queue.constants';
import { QueueService } from './queue.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: QUEUE_SERVICE,
        imports: [ConfigModule],
        useFactory: CREATE_QUEUE_CONFIG,
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [QueueService],
  exports: [ClientsModule, QueueService],
})
export class QueueModule {}
