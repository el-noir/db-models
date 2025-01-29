import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
        
    },
})

const orderSchema = new mongoose.Schema({

   orderPrice: {
    type: Number,
    required: true,
    min: 0
   },
   customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
   },

   orderItems: {
    type: [orderItemSchema]
   }, 
   address: {
    type: String,
    required: true
   },

   paymentMethod: {
    type: String,
    enum: ['creditCard', 'paypal', 'applePay'],
    required: true
   },
   status: { 
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
   },
   trackingNumber: {
    type: String
   },
   deliveredDate: {
    type: Date
   },
   cancelledDate: {
    type: Date
   }

}, {timestamps: true});

export const Order = mongoose.model('Order', Order);