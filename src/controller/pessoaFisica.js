const model = require("../models");
class PessoaFisica {
  async store(DAO) {
    try {
      const pf = await model.sequelize.models.PF.create({
        CPF: DAO.CPF,
        Nome: DAO.Nome,
        Email: DAO.Email,
        Telefone: DAO.Telefone,
        Nascimento: DAO.Nascimento,
      });
      return pf;
    } catch (error) {
      throw new Error(error);
    }
  }
  async show() {
    try {
      const pfs = await model.sequelize.models.PF.findAll({
        attributes: ["id", "Nome", "Email"],
      });
      return pfs;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PessoaFisica;
