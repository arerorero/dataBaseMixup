class TabGrupoItem{
    constructor(){
        this.table = 'tab_grupo_item'
        this.fillable = [
            'cod_grupo_item',
            'des_grupo_item',
            'cod_secao_item',
            'num_hierarquia_grupo'
        ]
        this.orderby = 'cod_grupo_item';
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
    
    module.exports = TabGrupoItem;