class ListaCompetidores {

    constructor() {
        this.listaCompetidores = [];
    }

    adiciona(competidor) {
        this.listaCompetidores.push(competidor);
    }

    get negociacoes() {
        return [].concat(this.listaCompetidores); // devolve uma lista nova para não permitir alterações na original
    }

}