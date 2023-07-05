const { model, Schema } = require('mongoose');

const RecetaSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre de la receta es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Receta', RecetaSchema );