var listaCompetidores = new ListaCompetidores();
var placar = $(".table").find("tbody");

$(document).ready(function() {

    geraDadosPlacar();
    $("#pesquisar").click(atualizaPlacar);
    $("#botao-vencedores").click(descerParaVencedores);

});

function descerParaVencedores(evento) {

    evento.preventDefault();

    var target_offset = $("#ultimos-vencedores").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 700);
}

function atualizaPlacar(evento) {

    evento.preventDefault();

    $(".table tbody tr").remove();

    var nickSelecionado = $('#nickPesquisar :selected').text();

    var lista = listaCompetidores.negociacoes;

    ExibirCompetidor(lista, nickSelecionado);

    var target_offset = $("#ancora1").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 0);

}

function ExibirCompetidor(lista, nickSelecionado) {

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].chapa == nickSelecionado) {
            console.log(lista[i])
            linha = criaNovaLinha(lista[i]);
            placar.prepend(linha);
        }
    }
}

function scrollPlacar() {

    var posicaoPlacar = $(".placar").offset().top;
    $("html, body").animate(
    {
        scrollTop: posicaoPlacar
    },1000);
}

function criaNovaLinha(competidor) {

    // cria a linha
    var linha = $("<tr>");

    // Cria as colunas
    var colunaPosicao = $("<th>").text(competidor.posicao).addClass("text-center");
    var colunaNick = $("<td>").text(competidor.nick).addClass("text-center");
    var colunaPontosPorRodada = $("<td>").text(competidor.pontosPorRodada).addClass("text-center");
    var colunaPontos = $("<th>").text(competidor.pontos).addClass("text-center");
    var colunaClassificado = $("<td>").text(competidor.classificado).addClass("text-center");

    linha.append(colunaPosicao);
    linha.append(colunaNick);
    linha.append(colunaPontosPorRodada);
    linha.append(colunaPontos);
    linha.append(colunaClassificado);

    return linha;
}

function geraDadosPlacar() {

    /** constructor(posicao, nick, pontos, chapa, classificado, fase, pontosPorRodada) */

    /** Segunda-feira - 19/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","Pandora 🎪#7552",20,"1ª Chave - 19/04/21","?","1ª", "4, 2, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("9º","{C.D.A.} | COVID20#4800",21,"1ª Chave - 19/04/21","?","1ª", "7, 6, 6, 2, 0"));
    listaCompetidores.adiciona(new Competidor("8º","Diogo Murano#0903",24,"1ª Chave - 19/04/21","?","1ª", "2, 4, 2, 6, 10"));
    listaCompetidores.adiciona(new Competidor("7º","Amon Gus ☢#9700",24,"1ª Chave - 19/04/21","?","1ª", "6, 5, 5, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6º","[S.T.D]|Hermanito#2659",26,"1ª Chave - 19/04/21","?","1ª", "6, 7, 6, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5º","{C.D.A.} | Felipelanducci#2324",26,"1ª Chave - 19/04/21","?","1ª", "7, 7, 4, 5, 3"));
    listaCompetidores.adiciona(new Competidor("4º","DOSS ᵐᵈᵐ 🎪#6007",27,"1ª Chave - 19/04/21","?","1ª", "8, 7, 6, 4, 2"));
    listaCompetidores.adiciona(new Competidor("3º","cbc 🎪#6145",28,"1ª Chave - 19/04/21","?","1ª", "8, 6, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("2º","joaoo 🥋#4206",29,"1ª Chave - 19/04/21","?","1ª", "7, 7, 6, 5, 4"));
    listaCompetidores.adiciona(new Competidor("1º","natizinha#6354",29,"1ª Chave - 19/04/21","?","1ª", "7, 7, 5, 5, 5"));

    /** Terça-feira - 20/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","CRAZY_ 🎪#6644",15,"2ª Chave - 20/04/21","?","1ª", "0, 2, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("9º",".Júh.#0227",20,"2ª Chave - 20/04/21","?","1ª", "6, 5, 4, 3, 2"));
    listaCompetidores.adiciona(new Competidor("8º","rosé#1029",20,"2ª Chave - 20/04/21","?","1ª", "6, 4, 2, 4, 4"));
    listaCompetidores.adiciona(new Competidor("7º","Maumauxxp 🚽🎪#1508",22,"2ª Chave - 20/04/21","?","1ª", "5, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6º","TXOxKaioken#8858",23,"2ª Chave - 20/04/21","?","1ª", "5, 3, 6, 3, 6"));
    listaCompetidores.adiciona(new Competidor("5º","Marina 🌈#4091",24,"2ª Chave - 20/04/21","?","1ª", "6, 4, 6, 3, 5"));
    listaCompetidores.adiciona(new Competidor("4º","One 🎪#0505",24,"2ª Chave - 20/04/21","?","1ª", "6, 6, 2, 4, 6"));
    listaCompetidores.adiciona(new Competidor("3º","!!!! 🦋𝕬𝖑𝖊𝖗𝖖𝖚𝖎𝖓𝖆🦋#1543",25,"2ª Chave - 20/04/21","?","1ª", "2, 4, 6, 8, 5"));
    listaCompetidores.adiciona(new Competidor("2º","Sayo#1037",26,"2ª Chave - 20/04/21","?","1ª", "6, 6, 4, 4, 6"));
    listaCompetidores.adiciona(new Competidor("1º","GabrieI 🎪#2202",27,"2ª Chave - 20/04/21","?","1ª", "6, 6, 6, 4, 5"));

    /** Quarta-feira - 21/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","{C.D.A.} | Jovem ⚡#7385",0,"3ª Chave - 21/04/21","?","1ª", "0, 0, 0, 0, 0"));
    listaCompetidores.adiciona(new Competidor("9º","[ℙ.ℙ.𝔸] Coringa 🃏#8641",16,"3ª Chave - 21/04/21","?","1ª", "-2, 5, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("8º","Gusta#4973",19,"3ª Chave - 21/04/21","?","1ª", "0, 6, 2, 5, 6"));
    listaCompetidores.adiciona(new Competidor("7º","Catapimbas#1407",20,"3ª Chave - 21/04/21","?","1ª", "1, 7, 4, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6º","Downt#1584",20,"3ª Chave - 21/04/21","?","1ª", "-1, 5, 5, 6, 5"));
    listaCompetidores.adiciona(new Competidor("5º","Isa#1573",20,"3ª Chave - 21/04/21","?","1ª", "0, 5, 4, 5, 6"));
    listaCompetidores.adiciona(new Competidor("4º","Bruxo#3591",22,"3ª Chave - 21/04/21","?","1ª", "-1, 6, 6, 6, 5"));
    listaCompetidores.adiciona(new Competidor("3º","Gustavin 🎪#9740",22,"3ª Chave - 21/04/21","?","1ª", "0, 4, 7, 4, 7"));
    listaCompetidores.adiciona(new Competidor("2º","{C.D.A.} | TELADOR#1058",27,"3ª Chave - 21/04/21","?","1ª", "10, 4, 5, 6, 2"));
    listaCompetidores.adiciona(new Competidor("1º","Fellipe#9248",28,"3ª Chave - 21/04/21","?","1ª", "10, 4, 4, 6, 4"));


    /** Quinta-feira - 22/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","Math#7431",11,"4ª Chave - 22/04/21","?","1ª","-2, 2, 6, 2, 3"));
    listaCompetidores.adiciona(new Competidor("9º","RafaelxD#8137",15,"4ª Chave - 22/04/21","?","1ª","0, 4, 2, 4, 5"));
    listaCompetidores.adiciona(new Competidor("8º","VTzin#3368",17,"4ª Chave - 22/04/21","?","1ª","0, 5, 4, 6, 2"));
    listaCompetidores.adiciona(new Competidor("7º","[S.T.D] Ministro#5797",17,"4ª Chave - 22/04/21","?","1ª","0, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6º","fubaa#9935",19,"4ª Chave - 22/04/21","?","1ª","0, 4, 5, 4, 6"));
    listaCompetidores.adiciona(new Competidor("5º","Tay?#6666",20,"4ª Chave - 22/04/21","?","1ª","0, 4, 6, 6, 4"));
    listaCompetidores.adiciona(new Competidor("4º","[S.T.D.] Bolsomago#4s664",21,"4ª Chave - 22/04/21","?","1ª","0, 6, 5, 5, 5"));
    listaCompetidores.adiciona(new Competidor("3º","!Discarado 🎪 #0154",22,"4ª Chave - 22/04/21","?","1ª","1, 5, 4, 6, 6"));
    listaCompetidores.adiciona(new Competidor("2º","Natt 🔥#1562",30,"4ª Chave - 22/04/21","?","1ª","10, 5, 6, 4, 5"));
    listaCompetidores.adiciona(new Competidor("1º","Leão#7398",30,"4ª Chave - 22/04/21","?","1ª","8, 4, 5, 6, 7"));

    /** Sexta-feira - 23/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","Doutor Gus#1861","Desclassificado","5ª Chave - 23/04/21","?","1ª","Desclassificado"));
    listaCompetidores.adiciona(new Competidor("9º","Odin#7471","Desclassificado","5ª Chave - 23/04/21","?","1ª","Desclassificado"));
    listaCompetidores.adiciona(new Competidor("8º","BSD VirGo#8429",12,"5ª Chave - 23/04/21","?","1ª","4, 0, 6, 4, -2"));
    listaCompetidores.adiciona(new Competidor("7º","{C.D.A.} | LaranXxinha#9021",15,"5ª Chave - 23/04/21","?","1ª","6, -1, 6, 4, 0"));
    listaCompetidores.adiciona(new Competidor("6º","FeLiPeAngel#4833",15,"5ª Chave - 23/04/21","?","1ª","4, 0, 4, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5º","Arthur#2777",17,"5ª Chave - 23/04/21","?","1ª","5, -1, 8, 4, 1"));
    listaCompetidores.adiciona(new Competidor("4º","Ungracious Nightmare#3798",24,"5ª Chave - 23/04/21","?","1ª","5, 8, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("3º","Guéxi#4289",25,"5ª Chave - 23/04/21","?","1ª","6, -1, 6, 4, 10"));
    listaCompetidores.adiciona(new Competidor("2º","GrayReturns#1441",31,"5ª Chave - 23/04/21","?","1ª","4, 16, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("1º","Nego Drama 🎪#7043",32,"5ª Chave - 23/04/21","?","1ª","4, 1, 6, 5, 16"));

    /** Segunda-feira - 26/04/21 */



}