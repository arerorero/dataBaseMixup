class TabItem {
    constructor() {
        this.table = 'tab_item'
        this.fillable = [
            'cod_item',
            'des_item',
            'cod_subgrupo_item'
        ]
        this.orderby = 'cod_item';
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

module.exports = TabItem;
