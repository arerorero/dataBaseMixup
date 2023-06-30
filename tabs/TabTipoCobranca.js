class TabTipoCobranca {
    constructor() {
        this.table = 'tab_tipo_cobranca';
        this.fillable = [
            'cod_tipo_cobranca',
            'des_tipo_cobranca',
            'ind_status'
        ];
        this.orderby = 'cod_tipo_cobranca';
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

module.exports = TabTipoCobranca;
