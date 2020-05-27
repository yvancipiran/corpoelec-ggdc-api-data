const { Router } = require('express');
const router = Router();

const { getTrabajadores, postTrabajadores, getTrabajadoresCedula, putTrabajadores } = require('../controllers/index.controllers')

router.get('/api/trabajadores', getTrabajadores);
router.get('/api/trabajadores/cedula/:id', getTrabajadoresCedula);
router.post('/api/trabajadores', postTrabajadores);
router.put('/api/trabajadores/actualizar/:id', putTrabajadores);

module.exports = router;