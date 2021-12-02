const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.retornaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.retornaUmaPessoa)
module.exports = router