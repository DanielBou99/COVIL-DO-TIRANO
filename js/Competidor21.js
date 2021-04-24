class Competidor {

    constructor(posicao, nick, pontos, chapa, classificado, fase, pontosPorRodada) {
        this.posicao = posicao;
        this.fase = fase; /** fase do campeonato */
        this.chapa = chapa;
        this.nick = nick;
        this.pontos = pontos;
        this.classificado = classificado; /** 1 = sim | 0 = não */
        this.pontosPorRodada = pontosPorRodada;
    }

    get getPartida(){
        return this.partida;
    }

    get getNick(){
        return this.nick;
    }

    get getPontos(){
        return this.pontos;
    }

}