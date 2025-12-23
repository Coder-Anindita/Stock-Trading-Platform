import mongoose from 'mongoose';
const OrdersSchema=new mongoose.Schema({
    name: {type:String ,required:true},
    name: {type:String ,required:true},
    price: {type:Number,required:true},
    mode:{type:String,required}
})
export const Orders=mongoose.model("Orders",OrdersSchema);