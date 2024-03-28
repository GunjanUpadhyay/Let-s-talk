import mongoose,{Schema,model,Types} from 'mongoose'

const schema =new Schema({
    name: {
        type:String,
        required: true,
    },
    username: {
        type:String,
        required: true,
        unique:true,
    },
    groupChat :{
        type: Boolean,
        default:false,
    },
    creator:{
        type:Types.objectId,
        ref:"User",
      
    },
   members:[{
    type:Types.objectId,
    ref:"User",
   },], 
},{
    timestamps:true,
});

export const Chat=mongoose.models.Chat ||  model("Chat",schema);