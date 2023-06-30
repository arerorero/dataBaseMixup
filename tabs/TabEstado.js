class TabEstado {
    constructor() {
        this.table = 'tab_estado';
        this.fillable = [
            'cod_estado',
            'nom_estado',
            'sgl_estado',
            'nom_pais',
            'cod_pais',
            'des_regiao'
         ]
         this.orderby = 'cod_estado';
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

module.exports = TabEstado;



