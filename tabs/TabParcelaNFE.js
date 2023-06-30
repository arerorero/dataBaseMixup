class TabParcelaNFE{
    constructor(){
        this.table = 'tab_parcela_nfe'
        this.fillable = [
        'seq_nota',
        'seq_parcela',
        'dta_vencimento',
        'val_parcela',
        'val_juros',
        'seq_titulo_pagar',
        'num_cod_barra',
        'num_nosso_numero',
        'val_desconto',
        'val_despesa_acessoria',
        ]
        this.orderby = 'seq_nota,seq_parcela';
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

module.exports = TabParcelaNFE;
