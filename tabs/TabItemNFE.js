class TabItemNFE{
    constructor(){
        this.table = 'tab_item_nfe'
        this.fillable = [
            'item.seq_nota',
            'item.seq_item',
            'item.seq_movimento_estoque',
            'item.cod_item',
            'item.qtd_item',
            'item.qtd_item_convertido',
            'item.val_unitario',
            'item.val_bruto_item',
            'item.val_desconto',
            'item.val_ipi',
            'item.val_total_item',
            'item.val_icms',
            'item.val_icms_substituicao',
            'item.val_frete_fob',
            'item.val_frete_cif',
            'item.val_icms_frete_fob',
            'item.val_seguro',
            'item.val_despesa_acessoria',
            'item.val_custo',
            'item.seq_nota_devolucao',
            'item.cod_natureza_operacao',
            'cab.dta_digitacao'
        ]
        this.fillableInsert = [
            'seq_nota',
            'seq_item',
            'seq_movimento_estoque',
            'cod_item',
            'qtd_item',
            'qtd_item_convertido',
            'val_unitario',
            'val_bruto_item',
            'val_desconto',
            'val_ipi',
            'val_total_item',
            'val_icms',
            'val_icms_substituicao',
            'val_frete_fob',
            'val_frete_cif',
            'val_icms_frete_fob',
            'val_seguro',
            'val_despesa_acessoria',
            'val_custo',
            'seq_nota_devolucao',
            'cod_natureza_operacao',
            'dta_digitacao'
        ]
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

module.exports = TabItemNFE;
