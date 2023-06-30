class TabCidade {
    constructor() {
        this.table = 'tab_cidade';
        this.fillable = [
            'cod_cidade',
            'nom_cidade',
            'cod_estado',
            'cod_cidade_ibge',
            'cod_cidade_estado',
            'cod_cidade_sub_estado',
            'seq_municipio_ibge',
            'cod_cidade_anp',
            'cod_cidade_siafi'
        ]
        this.orderby = 'cod_cidade';
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

module.exports = TabCidade;

