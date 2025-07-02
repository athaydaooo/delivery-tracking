import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { UpdateOrderTrackingDto } from './dto/update-order-tracking.dto';
import { DeliverOrderDto } from './dto/deliver-order.dto';
import { MarkOrderAsLostDto } from './dto/mark-order-as-lost.dto';
import { SetPickupPendingDto } from './dto/set-pickup-pending.dto';
import { ConfirmPickupCompletedDto } from './dto/confirm-pickup-completed.dto';
import { ForceReturnDto } from './dto/force-return.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    console.log('Creating order with body:', createOrderDto);
    throw new Error('Method not implemented.');
  }

  @Patch(':id/separate')
  separateOrder(@Param('id') id: string) {
    console.log('Separating order with ID:', id);
    throw new Error('Method not implemented.');
  }
  @Patch(':id/ship')
  shipOrder(@Param('id') id: string, @Body() shipOrderDto: ShipOrderDto) {
    console.log('Shipping order with ID:', id, 'and body:', shipOrderDto);
    throw new Error('Method not implemented.');
  }

  @Post(':id/tracking')
  updateOrderTracking(
    @Param('id') id: string,
    @Body() updateOrderTrackingDto: UpdateOrderTrackingDto,
  ) {
    console.log(
      'Updating order tracking with ID:',
      id,
      'and body:',
      updateOrderTrackingDto,
    );
    throw new Error('Method not implemented.');
  }

  @Patch(':id/deliver')
  deliverOrder(
    @Param('id') id: string,
    @Body() deliverOrderDto: DeliverOrderDto,
  ) {
    console.log('Delivering order with ID:', id, 'and body:', deliverOrderDto);
    throw new Error('Method not implemented.');
  }

  @Patch(':id/lost')
  markOrderAsLost(
    @Param('id') id: string,
    @Body() markOrderAsLostDto: MarkOrderAsLostDto,
  ) {
    console.log(
      'Marking order as lost with ID:',
      id,
      'and body:',
      markOrderAsLostDto,
    );
    throw new Error('Method not implemented.');
  }

  @Patch(':id/pickup-pending')
  setPickupPending(
    @Param('id') id: string,
    @Body() setPickupPendingDto: SetPickupPendingDto,
  ) {
    console.log(
      'Setting pickup pending with ID:',
      id,
      'and body:',
      setPickupPendingDto,
    );
    throw new Error('Method not implemented.');
  }

  @Patch(':id/pickup-completed')
  confirmPickupCompleted(
    @Param('id') id: string,
    @Body() confirmPickupCompletedDto: ConfirmPickupCompletedDto,
  ) {
    console.log(
      'Confirming pickup completed with ID:',
      id,
      'and body:',
      confirmPickupCompletedDto,
    );
    throw new Error('Method not implemented.');
  }

  @Patch(':id/force-return')
  forceReturn(@Param('id') id: string, @Body() forceReturnDto: ForceReturnDto) {
    console.log('Forcing return with ID:', id, 'and body:', forceReturnDto);
    throw new Error('Method not implemented.');
  }
}
