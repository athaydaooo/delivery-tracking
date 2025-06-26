import { ConfigService } from '@nestjs/config';
import {
  ClientProvider,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

export const CREATE_QUEUE_CONFIG = (
  configService: ConfigService,
): ClientProvider => ({
  transport: Transport.RMQ,
  options: {
    urls: [configService.get<string>('RABBITMQ_URL', 'amqp://localhost:5672')],
    queueOptions: {
      durable: true,
    },
    socketOptions: {
      heartbeatIntervalInSeconds: 60,
      reconnectTimeInSeconds: 5,
    },
    exchange: EXCHANGES.ORDERS_TOPIC,
  },
});

export const CREATE_MICROSERVICE_CONFIG = (
  configService: ConfigService,
): MicroserviceOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: [configService.get<string>('RABBITMQ_URL', 'amqp://localhost:5672')],
    queueOptions: {
      durable: true,
    },
    socketOptions: {
      heartbeatIntervalInSeconds: 60,
      reconnectTimeInSeconds: 5,
    },
    exchange: EXCHANGES.ORDERS_TOPIC,
  },
});

export const QUEUE_SERVICE = 'QUEUE_SERVICE';

export const EXCHANGES = {
  ORDERS_TOPIC: 'orders.topic',
} as const;

export const ROUTING_KEYS = {
  ORDER_CREATED: 'order.created',
  ORDER_DISPATCHED: 'order.dispatched',
  ORDER_DELIVERED: 'order.delivered',
  ORDER_REFUNDED: 'order.refunded',
} as const;

export const QUEUES = {
  ORDER_CREATED: 'order.created.queue',
  ORDER_DISPATCHED: 'order.dispatched.queue',
  ORDER_DELIVERED: 'order.delivered.queue',
  ORDER_REFUNDED: 'order.refunded.queue',
  ORDERS_CONSUMER: 'orders_consumer.queue',
} as const;
