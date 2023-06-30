class TabNotaFiscalEntrada{
    constructor(){
        this.table = 'tab_nota_fiscal_entrada'
        this.fillable = [
            'seq_nota',
            'cod_empresa',
            'cod_modelo_documento',
            'cod_natureza_operacao',
            'cod_pessoa_fornecedor',
            'num_nota',
            'dta_emissao',
            'dta_entrada',
            'val_icms',
            'val_icms_substituicao',
            'val_total_produtos',
            'val_frete_cif',
            'val_seguro',
            'val_despesa_acessoria',
            'val_ipi',
            'val_total_nota',
            'val_pagamento_caixa',
            'num_doc_caixa',
            'cod_especie_caixa',
            'cod_tipo_cobranca',
            'seq_movimento_banco',
            'seq_movimento_caixa',
            'des_extra_1',
            'des_extra_2',
            'des_extra_3',
            'des_extra_4',
            'des_extra_5',
            'nom_usuario',
            'dta_digitacao',
            'val_icms_frete',
            'val_icms_seguro',
            'val_icms_despesa',
            'val_ipi_frete',
            'val_pis_cofins',
            'num_serie',
            'num_sub_serie',
            'val_total_dif_aliquota',
            'val_iss',
            'val_total_servico',
            'cod_tributacao_iss',
            'ind_status',
            'dta_cancelamento',
            'ind_reembolso',
            'cod_pessoa_reembolso',
            'num_contrato',
            'seq_controle_portaria',
            'num_chave_nfe',
            'ind_tipo_emissao_nfe',
            'ind_tipo_ambiente_nfe',
            'dta_recebimento_nfe',
            'cod_situacao_nfe',
            'ind_cancelado',
            'sgl_uf_veiculo',
            'val_pis_recuperar',
            'val_cofins_recuperar',
            'ind_finalidade_nota',
            'val_pis',
            'val_cofins',
            'val_icms_antecipado',
            'val_siscomex',
            'val_armazenagem',
            'val_despacho',
            'val_taxa_ag_carga',
            'val_icms_recuperar',
            'val_icms_desoneracao',
            'seq_lr_icms_desoneracao'
        ]
        this.orderby = 'seq_nota';
        ;}


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
module.exports = TabNotaFiscalEntrada;
