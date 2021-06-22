const { Router } = require("express");
const PessoaFisicaController = require("../controller/pessoaFisica.js");
const pessoaFisicaController = new PessoaFisicaController();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pessoaFisicaController.show();
    res.send(JSON.stringify(result));
    // res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/cadastro", async (req, resp) => {
  try {
    const body = req.body;
    const novoCadastro = new PessoaFisica(body);
    const result = await PessoaFisicaController.store(body);
    resp.send(JSON.stringify(result));
  } catch (error) {
    resp.send(error);
  }
});

router.put("/cadastro/id", async (req, resp) => {
  const id = req.params.idCadastro;
  const dadosBody = req.body;
  const dados = Object.assign({}, dadosBody, { id: id });
  const cadastro = new Cadastro(dados);
  await cadastro.atualizar();

  resp.status(200).send(cadastro);
});

router.delete("/cadastro/id", async (req, resp) => {
  const id = req.params.idCadastro;
  const cadastro = new Cadastro({ id: id });
  await cadastro.remover();
  resp.status(200).send(
    JSON.stringify({
      mensagem: "Cadastro Pessoa Fisica removido",
    })
  );
});

module.exports = router;
