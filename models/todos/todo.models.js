import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({

     content: {
        type: 'String',
        required: true,
     },

     complete: {
        type: 'Boolean',
        default: false,
     },

     createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
     },
     
     subTodos: [
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref: 'SubTodo',
        }
     ] // array of sub-todos

}, {timestamps: true});

export const todo = todoSchema.model('todo', todoSchema);