const { model, Schema } = require('mongoose');

const PreparacionSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre de la preparacion es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        tiempoestimado:{
            type: Number,
            default:0
        },
        precio:{
            type:Number,
            default:0
        },
       
        cocinero: {
            type: Schema.Types.ObjectId,
            ref:'Cocinero',
            required:false
        },
        receta: {
            type: Schema.Types.ObjectId,
            ref:'Receta',
            required:false
        }

    }
);

PreparacionSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Preparacion', PreparacionSchema );