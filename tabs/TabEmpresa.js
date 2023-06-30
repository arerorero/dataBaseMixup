class TabEmpresa {
    constructor() {
        this.table = 'tab_empresa';
        this.fillable = [
            'cod_empresa',
            'num_empresa',
            'cod_empresa_matriz',
            'nom_razao_social',
            'nom_fantasia',
            'num_cnpj',
            'num_insc_estadual',
            'cod_cidade'
         ]
         this.orderby = 'cod_empresa';
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

module.exports = TabEmpresa;