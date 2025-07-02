import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './shared/database/database.module';
import { loggerOptions } from './shared/logger/logger.config';

@Module({
  imports: [
    WinstonModule.forRoot(loggerOptions),
    ConfigModule.forRoot(),
    OrdersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
