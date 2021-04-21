import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Creates new order:
// @route   POST /api/orders
// @access  Private route
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    // saves in db:
    const createdOrder = await order.save();

    res.status(201).json({ message: 'Order Created' });
  }
});

// @desc    Gets order by ID:
// @route   GET /api/orders/:id
// @access  Private route
const getOrderById = asyncHandler(async (req, res) => {
  const order = await (await Order.findById(req.params.id)).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export { addOrderItems, getOrderById };
