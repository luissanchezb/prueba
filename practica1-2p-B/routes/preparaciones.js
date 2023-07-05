const { Router } = require('express')
const { check } =  require('express-validator')

const { createPreparacion,
     getPreparacion, 
     getPreparaciones,
     updatePreparacion,
     deletePreparacion } = require('../controllers').Preparacion;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getPreparaciones);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getPreparacion);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createPreparacion)

router.put('/:id', updatePreparacion)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePreparacion)

module.exports = router;