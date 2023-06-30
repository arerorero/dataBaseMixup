class TabSubgrupoItem{
    constructor(){
        this.table = 'tab_subgrupo_item'
        this.fillable = [
            'cod_subgrupo_item',
            'des_subgrupo_item',
            'cod_grupo_item',
            'per_desconto_maximo',
            'per_margem_desejada',
            'ind_obriga_prevenda',
            'ind_cigarro',
            'num_hierarquia_subgrupo',
            'cod_depara',
        ]
        this.orderby = 'cod_subgrupo_item';
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

module.exports = TabSubgrupoItem;