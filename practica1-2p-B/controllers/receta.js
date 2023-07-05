const { response } = require('express')
const { Receta } = require('../models')


const getRecetas =async (req,res = response) => {
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, recetas ] = await Promise.all([
        Receta.countDocuments(query),
        Receta.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      recetas
    })
}

const getReceta = async (req, res= response)=>{
    const {id} = req.params
    const Receta=  await Receta.findById(id);
    res.json(receta);
}
const createReceta = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existReceta=  await Receta.findOne({name: body.name})

    if (existReceta)
    {
        return res.status(400).json({
            msg:`La receta ${ existeReceta.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const receta = new Receta(data);

    const newReceta =  await receta.save();
    res.status(201).json(newReceta);
}
const updateReceta = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const recetaUpdated =  await Receta.findByIdAndUpdate(id,data, {new: true} )
    res.json(recetaUpdated);
}
const deleteReceta =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedReceta =  await Receta.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedReceta);
}

 module.exports ={
    createReceta,
    getRecetas,
    getReceta,
    updateReceta,
    deleteReceta
 }
