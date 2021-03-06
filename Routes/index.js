const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');


router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({ message: 'Apenas pessoas autorizadas tem acesso a essa informação'});
});


router.post('/', (req, res) => {
    return res.send({ message: 'Tudo ok com o método POST da raiz!'});
});

module.exports = router;