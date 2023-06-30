class TabItemNFS{
    constructor(){
        this.table = 'tab_item_nfs'
        this.fillable = [
            'item.seq_nota',
            'item.seq_item_nota',
            'item.cod_item',
            'item.des_item',
            'item.qtd_item',
            'item.cod_unidade_venda',
            'item.qtd_item_convertido',
            'item.val_unitario',
            'item.val_bruto_item',
            'item.val_desconto',
            'item.val_total_item',
            'item.val_icms',
            'item.val_icms_subst',
            'item.val_desconto_fiscal',
            'item.val_despesa_acessoria',
            'item.val_seguro',
            'item.val_frete',
            'item.qtd_peso_bruto',
            'item.qtd_peso_liquido',
            'item.qtd_volume',
            'item.cod_natureza_operacao',
            'item.cod_almoxarifado',
            'item.val_icms_subst_repasse',
            'item.val_unitario_st',
            'item.val_preco_st',
            'item.cod_almoxarifado_destino',
            'item.val_pis',
            'item.val_cofins',
            'item.val_acrescimo',
            'item.num_pedido',
            'item.num_item_pedido',
            'item.cod_item_mix',
            'item.cod_centro_custo',
            'cab.dta_emissao'
        ]
        this.fillableInsert = [
            'seq_nota',
            'seq_item_nota',
            'cod_item',
            'des_item',
            'qtd_item',
            'cod_unidade_venda',
            'qtd_item_convertido',
            'val_unitario',
            'val_bruto_item',
            'val_desconto',
            'val_total_item',
            'val_icms',
            'val_icms_subst',
            'val_desconto_fiscal',
            'val_despesa_acessoria',
            'val_seguro',
            'val_frete',
            'qtd_peso_bruto',
            'qtd_peso_liquido',
            'qtd_volume',
            'cod_natureza_operacao',
            'cod_almoxarifado',
            'val_icms_subst_repasse',
            'val_unitario_st',
            'val_preco_st',
            'cod_almoxarifado_destino',
            'val_pis',
            'val_cofins',
            'val_acrescimo',
            'num_pedido',
            'num_item_pedido',
            'cod_item_mix',
            'cod_centro_custo',
            'dta_emissao'
        ]
        // this.dta = "dta_emissao";
        this.orderby = 'seq_nota,seq_item';
    }

    getOrderby(){
        return this.orderby;
    }
    getFillable() {
        return this.fillable;
    }
    
    getFillableInsert() {
        return this.fillableInsert;
    }

    getNot() {
        return this.table;
    }
}

module.exports = TabItemNFS;