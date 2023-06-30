class TabTipoReceita{
    constructor(){
        this.table = 'tab_tipo_receita'
        this.fillable = [
            'cod_tipo_receita',
            'des_tipo_receita',
            'cod_tipo_operacao',
            'ind_tipo_receita',
            'ind_tipo',
            'num_tipo_receita',
            'ind_receita_pis',
            'ind_incide_piscofins',
            'ind_renda_fixa',
            'ind_status',
            'ind_nat_bc_cred',
            'cod_tributacao_pis',
            'cod_tributacao_cofins',
            'seq_conta',
            'cod_nat_rec',
        ]
        this.orderby = 'cod_tipo_receita';
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

module.exports = TabTipoReceita;