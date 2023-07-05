const { model, Schema } = require('mongoose');

const CocineroSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del cocinero es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Cocinero', CocineroSchema );