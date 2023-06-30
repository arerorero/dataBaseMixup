class TabModeloDocumentoFiscal {
    constructor(){
        this.table = 'tab_modelo_documento_fiscal'
        this.fillable = [
            'cod_modelo_documento',
            'des_modelo_documento',
            'cod_empresa',
            'num_serie',
            'num_sub_serie',
            'ind_numeracao_automatica',
            'num_inicial_doc_fiscal',
            'cod_template_saida',
            'cod_template_entrada',
            'cod_modelo_doc_anexo_7',
            'ind_tipo_modelo',
            'ind_entrada',
            'nom_host_ecf',
            'num_porta_ecf',
            'ind_emitente',
            'ind_complemento_nota',
            'ind_compartilhado',
            'ind_utiliza_nsu',
            'num_serie_2',
            'num_inicial_doc_fiscal_2',
        ]
        this.orderby = 'cod_modelo_documento';
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

module.exports = TabModeloDocumentoFiscal;