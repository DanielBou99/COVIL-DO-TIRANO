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

    listaCompetidores.adiciona(new Competidor("10??","Pandora ????#7552",20,"1?? Chave - 19/04/21","?","1??", "4, 2, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("9??","{C.D.A.} | COVID20#4800",21,"1?? Chave - 19/04/21","?","1??", "7, 6, 6, 2, 0"));
    listaCompetidores.adiciona(new Competidor("8??","Diogo Murano#0903",24,"1?? Chave - 19/04/21","?","1??", "2, 4, 2, 6, 10"));
    listaCompetidores.adiciona(new Competidor("7??","Amon Gus ???#9700",24,"1?? Chave - 19/04/21","?","1??", "6, 5, 5, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6??","[S.T.D]|Hermanito#2659",26,"1?? Chave - 19/04/21","?","1??", "6, 7, 6, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5??","{C.D.A.} | Felipelanducci#2324",26,"1?? Chave - 19/04/21","?","1??", "7, 7, 4, 5, 3"));
    listaCompetidores.adiciona(new Competidor("4??","DOSS ????????? ????#6007",27,"1?? Chave - 19/04/21","?","1??", "8, 7, 6, 4, 2"));
    listaCompetidores.adiciona(new Competidor("3??","cbc ????#6145",28,"1?? Chave - 19/04/21","?","1??", "8, 6, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("2??","joaoo ????#4206",29,"1?? Chave - 19/04/21","?","1??", "7, 7, 6, 5, 4"));
    listaCompetidores.adiciona(new Competidor("1??","natizinha#6354",29,"1?? Chave - 19/04/21","?","1??", "7, 7, 5, 5, 5"));

    /** Ter??a-feira - 20/04/21 */

    listaCompetidores.adiciona(new Competidor("10??","CRAZY_ ????#6644",15,"2?? Chave - 20/04/21","?","1??", "0, 2, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("9??",".J??h.#0227",20,"2?? Chave - 20/04/21","?","1??", "6, 5, 4, 3, 2"));
    listaCompetidores.adiciona(new Competidor("8??","ros??#1029",20,"2?? Chave - 20/04/21","?","1??", "6, 4, 2, 4, 4"));
    listaCompetidores.adiciona(new Competidor("7??","Maumauxxp ????????#1508",22,"2?? Chave - 20/04/21","?","1??", "5, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6??","TXOxKaioken#8858",23,"2?? Chave - 20/04/21","?","1??", "5, 3, 6, 3, 6"));
    listaCompetidores.adiciona(new Competidor("5??","Marina ????#4091",24,"2?? Chave - 20/04/21","?","1??", "6, 4, 6, 3, 5"));
    listaCompetidores.adiciona(new Competidor("4??","One ????#0505",24,"2?? Chave - 20/04/21","?","1??", "6, 6, 2, 4, 6"));
    listaCompetidores.adiciona(new Competidor("3??","!!!! ????????????????????????????????????????????#1543",25,"2?? Chave - 20/04/21","?","1??", "2, 4, 6, 8, 5"));
    listaCompetidores.adiciona(new Competidor("2??","Sayo#1037",26,"2?? Chave - 20/04/21","?","1??", "6, 6, 4, 4, 6"));
    listaCompetidores.adiciona(new Competidor("1??","GabrieI ????#2202",27,"2?? Chave - 20/04/21","?","1??", "6, 6, 6, 4, 5"));

    /** Quarta-feira - 21/04/21 */

    listaCompetidores.adiciona(new Competidor("10??","{C.D.A.} | Jovem ???#7385",0,"3?? Chave - 21/04/21","?","1??", "0, 0, 0, 0, 0"));
    listaCompetidores.adiciona(new Competidor("9??","[???.???.????] Coringa ????#8641",16,"3?? Chave - 21/04/21","?","1??", "-2, 5, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("8??","Gusta#4973",19,"3?? Chave - 21/04/21","?","1??", "0, 6, 2, 5, 6"));
    listaCompetidores.adiciona(new Competidor("7??","Catapimbas#1407",20,"3?? Chave - 21/04/21","?","1??", "1, 7, 4, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6??","Downt#1584",20,"3?? Chave - 21/04/21","?","1??", "-1, 5, 5, 6, 5"));
    listaCompetidores.adiciona(new Competidor("5??","Isa#1573",20,"3?? Chave - 21/04/21","?","1??", "0, 5, 4, 5, 6"));
    listaCompetidores.adiciona(new Competidor("4??","Bruxo#3591",22,"3?? Chave - 21/04/21","?","1??", "-1, 6, 6, 6, 5"));
    listaCompetidores.adiciona(new Competidor("3??","Gustavin ????#9740",22,"3?? Chave - 21/04/21","?","1??", "0, 4, 7, 4, 7"));
    listaCompetidores.adiciona(new Competidor("2??","{C.D.A.} | TELADOR#1058",27,"3?? Chave - 21/04/21","?","1??", "10, 4, 5, 6, 2"));
    listaCompetidores.adiciona(new Competidor("1??","Fellipe#9248",28,"3?? Chave - 21/04/21","?","1??", "10, 4, 4, 6, 4"));


    /** Quinta-feira - 22/04/21 */

    listaCompetidores.adiciona(new Competidor("10??","Math#7431",11,"4?? Chave - 22/04/21","?","1??","-2, 2, 6, 2, 3"));
    listaCompetidores.adiciona(new Competidor("9??","RafaelxD#8137",15,"4?? Chave - 22/04/21","?","1??","0, 4, 2, 4, 5"));
    listaCompetidores.adiciona(new Competidor("8??","VTzin#3368",17,"4?? Chave - 22/04/21","?","1??","0, 5, 4, 6, 2"));
    listaCompetidores.adiciona(new Competidor("7??","[S.T.D] Ministro#5797",17,"4?? Chave - 22/04/21","?","1??","0, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6??","fubaa#9935",19,"4?? Chave - 22/04/21","?","1??","0, 4, 5, 4, 6"));
    listaCompetidores.adiciona(new Competidor("5??","Tay?#6666",20,"4?? Chave - 22/04/21","?","1??","0, 4, 6, 6, 4"));
    listaCompetidores.adiciona(new Competidor("4??","[S.T.D.] Bolsomago#4s664",21,"4?? Chave - 22/04/21","?","1??","0, 6, 5, 5, 5"));
    listaCompetidores.adiciona(new Competidor("3??","!Discarado ???? #0154",22,"4?? Chave - 22/04/21","?","1??","1, 5, 4, 6, 6"));
    listaCompetidores.adiciona(new Competidor("2??","Natt ????#1562",30,"4?? Chave - 22/04/21","?","1??","10, 5, 6, 4, 5"));
    listaCompetidores.adiciona(new Competidor("1??","Le??o#7398",30,"4?? Chave - 22/04/21","?","1??","8, 4, 5, 6, 7"));

    /** Sexta-feira - 23/04/21 */

    listaCompetidores.adiciona(new Competidor("10??","Doutor Gus#1861","Desclassificado","5?? Chave - 23/04/21","?","1??","Desclassificado"));
    listaCompetidores.adiciona(new Competidor("9??","Odin#7471","Desclassificado","5?? Chave - 23/04/21","?","1??","Desclassificado"));
    listaCompetidores.adiciona(new Competidor("8??","BSD VirGo#8429",12,"5?? Chave - 23/04/21","?","1??","4, 0, 6, 4, -2"));
    listaCompetidores.adiciona(new Competidor("7??","{C.D.A.} | LaranXxinha#9021",15,"5?? Chave - 23/04/21","?","1??","6, -1, 6, 4, 0"));
    listaCompetidores.adiciona(new Competidor("6??","FeLiPeAngel#4833",15,"5?? Chave - 23/04/21","?","1??","4, 0, 4, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5??","Arthur#2777",17,"5?? Chave - 23/04/21","?","1??","5, -1, 8, 4, 1"));
    listaCompetidores.adiciona(new Competidor("4??","Ungracious Nightmare#3798",24,"5?? Chave - 23/04/21","?","1??","5, 8, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("3??","Gu??xi#4289",25,"5?? Chave - 23/04/21","?","1??","6, -1, 6, 4, 10"));
    listaCompetidores.adiciona(new Competidor("2??","GrayReturns#1441",31,"5?? Chave - 23/04/21","?","1??","4, 16, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("1??","Nego Drama ????#7043",32,"5?? Chave - 23/04/21","?","1??","4, 1, 6, 5, 16"));

    /** Segunda-feira - 26/04/21 */



}