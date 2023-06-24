const Cocinero = [
    {
        id: 1,
        Nombre: "Luis Sanchez",
        SueldoBasico: 450,
    },
    {
        id: 2,
        Nombre: "Andrea Reyes",
        SueldoBasico: 450,
    },
    {
        id: 3,
        Nombre: "Jose Cedeño",
        SueldoBasico: 450,
    },
    {
        id: 4,
        Nombre: "Camila Henao",
        SueldoBasico: 450,
    },
    {
        id: 5,
        Nombre: "Juan Cevallos",
        SueldoBasico: 450,
    }
]

const Receta = [
    {
        id: 1,
        Nombre: "Ceviche",
        Ingredientes: [
            {
                nombre: " 1 Libra de pescado"
            },

            {
                nombre: "1 tomate en rodajas "
            },
            
            {
                nombre: "1 cebolla colorada en juliana "
            },

            {
                nombre: "Sal al gusto"
            },

            {
                nombre: "cilantro"
            },
            
            {
                nombre: "Jugo de 8 limones"
            },

            {
                nombre: "1 cucharada de mostaza"
            },

            {
                nombre: "1 cucharada de salsa de tomate"
            },

            {
                nombre: "1 cev1chera de Chifle para acompañar"
            },
            
        ],
    },
    {
        id: 2,
        Nombre: "Arroz Colorado",
        Ingredientes: [
            {
                nombre: "1 litro de agua"
            },

            {
                nombre: "1 libra de arroz"
            },

            {
                nombre: "1 cucharada de colorante amarillo"
            },

            {
                nombre: "1 libra de pollo"
            },

            {
                nombre: "½ pimiento"
            },

            {
                nombre: "½ cebola blanca"
            },

            {
                nombre: "½ ajo"
            },

            {
                nombre: "sal al gusto"
            },

        ],
    },
    {
        id: 3,
        Nombre: "Torreja de Verde",
        Ingredientes: [
            {
                nombre: "4 plátanos"
            },

            {
                nombre: "1 cebolla roja pequeña picada en cuadritos"
            },

            {
                nombre: "1 huevo"
            },

            {
                nombre: "2 cucharadas de Achiote"
            },

            {
                nombre: "Sal al gusto"
            },

            {
                nombre: "1 Libra de Queso"
            },

            {
                nombre: "¼ Litro de Aceite"
            },

        ],
    },
    {
        id: 4,
        Nombre: "Sopa de Leche ",
        Ingredientes: [
            {
                nombre: "½ kilo de fideo"
            },

            {
                nombre: "½ papa pelada picada en bastones"
            },

            {
                nombre: "3 huevos"
            },

            {
                nombre: "1 Litro de Leche"
            },

            {
                nombre: "2 ramas de orégano"
            },

            {
                nombre: "Sal al gusto"
            },
        ],
    },
    {
        id: 5,
        Nombre: "Nuggets",
        Ingredientes: [
            {
                nombre: "2 pechugas de pollo grandes"
            },

            {
                nombre: "175 g. de vuestro queso crema"
            }, 

            {
                nombre: "2 huevos"
            }, 

            {
                nombre: "4 cucharadas de harina de trigo"
            }, 

            {
                nombre: "4 cucharadas de pan rallado"
            }, 

            {
                nombre: "Aceite de oliva"
            }, 

            {
                nombre: "Sal al gusto"
            }, 
        ],
    },
]

const Preparacion = [
    {
        id: 1,
        idMesero: 1,
        idReceta: Receta[2].id,
        Fecha: "05/04/2023",
        Hora: "14:00",
        CantidadProducto: 2,
        costo: 7.00,
        TiempoEstimado: "30 minutos",
    },
    {
        id: 2,
        idMesero: 2,
        idReceta: Receta[1].id,
        Fecha: "05/04/25",
        Hora: "17:00",
        CantidadProducto: 1,
        Costo: 5.50,
        TiempoEstimado: "20 minutos",
    },
    {
        id: 3,
        idMesero: 3,
        idReceta: Receta[4].id,
        Fecha: "05/04/23",
        Hora: "12:00",
        CantidadProducto: 3,
        Costo: 7.50,
        TiempoEstimado: "20 minutos",
    },
    {
        id: 4,
        idMesero: 4,
        idReceta: Receta[5].id,
        Fecha: "05/04/23",
        Hora: "19:30",
        CantidadProducto: 2,
        Costo: 2.50,
        TiempoEstimado: "30 minutos",
    },
    {
        id: 5,
        idMesero: 5,
        idReceta: Receta[3].id,
        Fecha: "05/04/23",
        Hora: "08:00",
        CantidadProducto: 3,
        Costo: 1.00,
        TiempoEstimado: "15 minutos",
    },
]
module.exports ={
    Receta,
    Cocinero,
    Preparacion
}