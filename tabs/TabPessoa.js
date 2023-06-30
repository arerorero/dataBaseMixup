class TabPessoa{
    constructor(){
    
        this.table = 'tab_pessoa';    
        this.fillable = [
            'cod_pessoa',
            'nom_pessoa',
            'nom_fantasia',
            'num_cnpj_cpf',
            'num_ie_rg',
            'des_org_exp_rg',
            'dta_nascimento',
            'ind_natureza',
            'cod_cidade',
            'nom_bairro',
            'num_cep',
            'num_telefone_1',
            'nom_contato',
            'dta_cadastro',
            'ind_cliente',
            'ind_fornecedor',
            'ind_funcionario',
            'ind_representante',
            'ind_supervisor_venda',
            'ind_gerente_venda',
            'ind_administradora_cartao',
            'ind_transportadora',
            'ind_bloqueio_automatico',
            'cod_ramo_atividade',
            'des_email_1',
            'ind_pessoa_ativa',
            'dta_alteracao_status',
            'ind_produtor_rural',
            'ind_motorista',
            'ind_bloqueado',
            'ind_cartao_parceiro',
            'ind_tipo_convenio',
            'cod_cartao_parceiro',
            'ind_contador',
            'cod_agrupamento',
            'num_convenio',
            'cod_grupo',
            'ind_prestador',
            'ind_comprador',
            'ind_proprietario',
            'cod_empresa_cadastro',
            'ind_responsavel_obra',
            'ind_fabricante',
            'ind_locatario',
            'ind_fiador',
            'cod_regiao_atuacao',
            'num_pessoa_cli_ant',
            'num_pessoa_for_ant',
            'cod_centro_custo'
        ]
        this.orderby = 'cod_pessoa';

}

        getOrderby(){
            return this.orderby;
        }
getFillable() {
    return this.fillable;
  }

  getNot() {
      return this.table;
    }
}

module.exports = TabPessoa;