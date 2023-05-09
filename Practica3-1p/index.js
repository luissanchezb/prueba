const mongoose =  require('mongoose');

const cadenaConexion = "mongodb+srv://luan237:hola@cluster0.vcho5mn.mongodb.net/practica3-1p";


(async () => {

    try {
       constconexion = await mongoose.connect(cadenaConexion);

       // Cocinero tiene una receta y varias preparaaciones
       // Receta tienen 0....n cocinero 
       // Preparación tiene una receta y varios cocineros
            const Cocinero = mongoose.model("Cocinero", {name:"String"});
            const Receta = mongoose.model("Receta", {name:"String"});
            const Preparacion = mongoose.model("Preparacion", {
                name:String,
                cocinero: { type: mongoose.Types.ObjectId, ref: "Cocinero"},
                recetas: [
                    { 
                      receta: {type: mongoose.Types.ObjectId, ref: "Receta"},
                      estado: {type:Boolean},
                    }],
            });

            const cocinero1 = new Cocinero ({ name: "Luis Sanchez"})
            const cocinero2 = new Cocinero ({ name: "Juan Perez"})
            const cocinero1Save = await cocinero1.save()
            const cocinero2Save = await cocinero2.save()

           
            const receta1 = new Receta ({name: "Nuggets"})
            const receta2 = new Receta ({name: "Ceviche"})
            const receta1Save = await receta1.save()
            const receta2Save = await receta2.save()
            
            const preparacion1 = new Preparacion({
                name: "Nuggets",
                cocinero: cocinero1Save._id,
                recetas: [
                    {receta:receta1Save._id, estado:true},
                    {receta:receta2Save._id, estado:false},
                    
                ]
                
            });
            const preparacion1Save = await preparacion1.save()


            const resultados = await Preparacion.find().populate("cocinero").populate ("recetas.receta");
            console.log(resultados [0].recetas)

           

         

    } catch (error) { 
        console.log(error);
    }

    }) ()
