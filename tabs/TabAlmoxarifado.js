class TabAlmoxarifado{
    constructor(){
        this.table = 'tab_almoxarifado'
        this.fillable = [        
            'cod_almoxarifado',
            'des_almoxarifado',
            'cod_empresa',
            'ind_tanque',
            'num_tanque',
            'cod_item_tanque',
            'qtd_capacidade_tanque',
            'ind_desativado',
            'qtd_lastro_tanque',
            'ind_gas',
            'cod_posse',
            'cod_pessoa',
            'cod_tanque_vinculado',
            'dta_ativacao',
            'dta_desativacao',
            'cod_item_dmc',
            'num_logico_medicao',
            'cod_conta_contabil',
            'ind_sub_localizacao',
            'ind_proprio',
            'sgl_almoxarifado'
        ]
        this.orderby = 'cod_almoxarifado';
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

module.exports = TabAlmoxarifado;