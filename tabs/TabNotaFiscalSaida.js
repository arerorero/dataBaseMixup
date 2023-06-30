class TabNotaFiscalSaida {
    constructor() {
      this.table = 'tab_nota_fiscal_saida';
      this.fillable = [
        'seq_nota',
        'cod_empresa',
        'cod_modelo_documento',
        'num_nota_fiscal',
        'dta_emissao',
        'dta_saida',
        'cod_pessoa_cliente',
        'cod_pessoa_representante',
        'val_bruto_produto',
        'val_desconto_produto',
        'val_ipi',
        'val_total_produto',
        'val_icms',
        'val_icms_subst',
        'val_desconto_fiscal',
        'val_bruto_servico',
        'val_desconto_servico',
        'val_iss_calculado',
        'val_iss_retido',
        'val_total_servico',
        'val_frete',
        'val_seguro',
        'val_despesa_acessoria',
        'val_total_nota',
        'ind_status',
        'dta_cancelamento',
        'des_motivo_cancelamento',
        'cod_natureza_operacao',
        'nom_usuario_geracao',
        'nom_usuario_cancelamento',
        'dta_real_cancelamento',
        'num_chave_nfe',
        'hra_saida',
        'ind_tipo_emissao_nfe',
        'ind_tipo_ambiente_nfe',
        'num_protocolo_nfe',
        'dta_recebimento_nfe',
        'hra_recebimento_nfe',
        'cod_situacao_nfe',
        'ind_tipo_receita',
        'seq_fechamento',
        'cod_pdv',
        'seq_turno',
        'val_troco'
      ];
      this.orderby = 'seq_nota';
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
  
  module.exports = TabNotaFiscalSaida;
  