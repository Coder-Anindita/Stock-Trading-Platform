import mongoose from 'mongoose';
const OrdersSchema=new mongoose.Schema({
    name: {type:String ,required:true},
    name: {type:Number ,required:true},
    price: {type:Number,required:true},
    mode:{type:String,required:true}
})
export const Orders=mongoose.model("Orders",OrdersSchema);