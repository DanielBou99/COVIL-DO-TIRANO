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
    $('html, body').animate({ scrollTop: target_top }, 700);
    
}

function ExibirCompetidor(lista, nickSelecionado) {
    
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].chapa == nickSelecionado) {
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
    var colunaFase = $("<th>").text(competidor.fase).addClass("text-center");
    var colunaNick = $("<td>").text(competidor.nick).addClass("text-center");
    var colunaPontosPorRodada = $("<td>").text(competidor.pontosPorRodada).addClass("text-center");
    var colunaPontos = $("<td>").text(competidor.pontos).addClass("text-center font-weight-bold");
    //var colunaChapa = $("<td>").text(competidor.chapa).addClass("text-center");
    var colunaClassificado = $("<td>").text(competidor.classificado).addClass("text-center");

    linha.append(colunaPosicao);
    linha.append(colunaFase);
    //linha.append(colunaChapa);
    linha.append(colunaNick);
    linha.append(colunaPontosPorRodada);
    linha.append(colunaPontos);
    linha.append(colunaClassificado);

    return linha;
}

function geraDadosPlacar() {

    /** constructor(posicao, nick, pontos, chapa, classificado, fase, pontosPorRodada) */

    /** Segunda-feira - 19/04/21 */
    
    listaCompetidores.adiciona(new Competidor("10º","Pandora 🎪#7552",20,"Segunda-feira - 19/04/21","?","1ª", "4, 2, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("9º","{C.D.A.} | COVID20#4800",21,"Segunda-feira - 19/04/21","?","1ª", "7, 6, 6, 2, 0"));
    listaCompetidores.adiciona(new Competidor("8º","Diogo Murano#0903",24,"Segunda-feira - 19/04/21","?","1ª", "2, 4, 2, 6, 10"));
    listaCompetidores.adiciona(new Competidor("7º","Amon Gus ☢#9700",24,"Segunda-feira - 19/04/21","?","1ª", "6, 5, 5, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6º","[S.T.D]|Hermanito#2659",26,"Segunda-feira - 19/04/21","?","1ª", "6, 7, 6, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5º","{C.D.A.} | Felipelanducci#2324",26,"Segunda-feira - 19/04/21","?","1ª", "7, 7, 4, 5, 3"));
    listaCompetidores.adiciona(new Competidor("4º","DOSS ᵐᵈᵐ 🎪#6007",27,"Segunda-feira - 19/04/21","?","1ª", "8, 7, 6, 4, 2"));
    listaCompetidores.adiciona(new Competidor("3º","cbc 🎪#6145",28,"Segunda-feira - 19/04/21","?","1ª", "8, 6, 4, 5, 5"));
    listaCompetidores.adiciona(new Competidor("2º","joaoo 🥋#4206",29,"Segunda-feira - 19/04/21","?","1ª", "7, 7, 6, 5, 4"));
    listaCompetidores.adiciona(new Competidor("1º","natizinha#6354",29,"Segunda-feira - 19/04/21","?","1ª", "7, 7, 5, 5, 5"));
    
    /** Terça-feira - 20/04/21 */

    listaCompetidores.adiciona(new Competidor("10º","CRAZY_ 🎪#6644",15,"Terça-feira - 20/04/21","?","1ª", "0, 2, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("9º",".Júh.#0227",20,"Terça-feira - 20/04/21","?","1ª", "6, 5, 4, 3, 2"));
    listaCompetidores.adiciona(new Competidor("8º","rosé#1029",20,"Terça-feira - 20/04/21","?","1ª", "6, 4, 2, 4, 4"));
    listaCompetidores.adiciona(new Competidor("7º","Maumauxxp 🚽🎪#1508",22,"Terça-feira - 20/04/21","?","1ª", "5, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6º","TXOxKaioken#8858",23,"Terça-feira - 20/04/21","?","1ª", "5, 3, 6, 3, 6"));
    listaCompetidores.adiciona(new Competidor("5º","Marina 🌈#4091",24,"Terça-feira - 20/04/21","?","1ª", "6, 4, 6, 3, 5"));
    listaCompetidores.adiciona(new Competidor("4º","One#0505",24,"Terça-feira - 20/04/21","?","1ª", "6, 6, 2, 4, 6"));
    listaCompetidores.adiciona(new Competidor("3º","!!!! 🦋𝕬𝖑𝖊𝖗𝖖𝖚𝖎𝖓𝖆🦋#1543",25,"Terça-feira - 20/04/21","?","1ª", "2, 4, 6, 8, 5"));
    listaCompetidores.adiciona(new Competidor("2º","Sayo#1037",26,"Terça-feira - 20/04/21","?","1ª", "6, 6, 4, 4, 6"));
    listaCompetidores.adiciona(new Competidor("1º","GabrieI#2202",27,"Terça-feira - 20/04/21","?","1ª", "6, 6, 6, 4, 5"));

    /** Quarta-feira - 21/04/21 */

    listaCompetidores.adiciona(new Competidor("10ª","{C.D.A.} | Jovem ⚡#7385",0,"Quarta-feira - 21/04/21","?","1ª", "0, 0, 0, 0, 0"));
    listaCompetidores.adiciona(new Competidor("9ª","[ℙ.ℙ.𝔸] Coringa 🃏#8641",16,"Quarta-feira - 21/04/21","?","1ª", "-2, 5, 5, 2, 6"));
    listaCompetidores.adiciona(new Competidor("8ª","Gusta#4973",19,"Quarta-feira - 21/04/21","?","1ª", "0, 6, 2, 5, 6"));
    listaCompetidores.adiciona(new Competidor("7ª","Catapimbas#1407",20,"Quarta-feira - 21/04/21","?","1ª", "1, 7, 4, 4, 4"));
    listaCompetidores.adiciona(new Competidor("6ª","Downt#1584",20,"Quarta-feira - 21/04/21","?","1ª", "-1, 5, 5, 6, 5"));
    listaCompetidores.adiciona(new Competidor("5ª","Isa#1573",20,"Quarta-feira - 21/04/21","?","1ª", "0, 5, 4, 5, 6"));
    listaCompetidores.adiciona(new Competidor("4ª","Bruxo#3591",22,"Quarta-feira - 21/04/21","?","1ª", "-1, 6, 6, 6, 5"));
    listaCompetidores.adiciona(new Competidor("3ª","Gustavin#9740",22,"Quarta-feira - 21/04/21","?","1ª", "0, 4, 7, 4, 7"));
    listaCompetidores.adiciona(new Competidor("2ª","{C.D.A.} | TELADOR#1058",27,"Quarta-feira - 21/04/21","?","1ª", "10, 4, 5, 6, 2"));
    listaCompetidores.adiciona(new Competidor("1ª","Fellipe#9248",28,"Quarta-feira - 21/04/21","?","1ª", "10, 4, 4, 6, 4"));


    /** Quinta-feira - 22/04/21 */

    listaCompetidores.adiciona(new Competidor("10ª","Math#7431",11,"Quinta-feira - 22/04/21","?","1ª","-2, 2, 6, 2, 3"));
    listaCompetidores.adiciona(new Competidor("9ª","RafaelxD#8137",15,"Quinta-feira - 22/04/21","?","1ª","0, 4, 2, 4, 5"));
    listaCompetidores.adiciona(new Competidor("8ª","VTzin#3368",17,"Quinta-feira - 22/04/21","?","1ª","0, 5, 4, 6, 2"));
    listaCompetidores.adiciona(new Competidor("7ª","[S.T.D] Ministro#5797",17,"Quinta-feira - 22/04/21","?","1ª","0, 4, 4, 5, 4"));
    listaCompetidores.adiciona(new Competidor("6ª","fubaa#9935",19,"Quinta-feira - 22/04/21","?","1ª","0, 4, 5, 4, 6"));
    listaCompetidores.adiciona(new Competidor("5ª","Tay?#6666",20,"Quinta-feira - 22/04/21","?","1ª","0, 4, 6, 6, 4"));
    listaCompetidores.adiciona(new Competidor("4ª","[S.T.D.] Bolsomago#4s664",21,"Quinta-feira - 22/04/21","?","1ª","0, 6, 5, 5, 5"));
    listaCompetidores.adiciona(new Competidor("3ª","!Discarado 🎪 #0154",22,"Quinta-feira - 22/04/21","?","1ª","1, 5, 4, 6, 6"));
    listaCompetidores.adiciona(new Competidor("2ª","Natt 🔥#1562",30,"Quinta-feira - 22/04/21","?","1ª","10, 5, 6, 4, 5"));
    listaCompetidores.adiciona(new Competidor("1ª","Leão#7398",30,"Quinta-feira - 22/04/21","?","1ª","8, 4, 5, 6, 7"));

    /** Sexta-feira - 23/04/21 */

    listaCompetidores.adiciona(new Competidor("10ª","Doutor Gus#1861",0,"Sexta-feira - 23/04/21","?","1ª","0"));
    listaCompetidores.adiciona(new Competidor("9ª","Odin#7471",0,"Sexta-feira - 23/04/21","?","1ª","0"));
    listaCompetidores.adiciona(new Competidor("8ª","BSD VirGo#8429",12,"Sexta-feira - 23/04/21","?","1ª","4, 0, 6, 4, -2"));
    listaCompetidores.adiciona(new Competidor("7ª","{C.D.A.} | LaranXxinha#9021",15,"Sexta-feira - 23/04/21","?","1ª","6, -1, 6, 4, 0"));
    listaCompetidores.adiciona(new Competidor("6ª","FeLiPeAngel#4833",15,"Sexta-feira - 23/04/21","?","1ª","4, 0, 4, 4, 3"));
    listaCompetidores.adiciona(new Competidor("5ª","Arthur#2777",17,"Sexta-feira - 23/04/21","?","1ª","5, -1, 8, 4, 1"));
    listaCompetidores.adiciona(new Competidor("4ª","Ungracious Nightmare#3798",24,"Sexta-feira - 23/04/21","?","1ª","5, 8, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("3ª","Guéxi#4289",25,"Sexta-feira - 23/04/21","?","1ª","6, -1, 6, 4, 10"));
    listaCompetidores.adiciona(new Competidor("2ª","GrayReturns#1441",31,"Sexta-feira - 23/04/21","?","1ª","4, 16, 7, 4, 0"));
    listaCompetidores.adiciona(new Competidor("1ª","Nego Drama#7043",32,"Sexta-feira - 23/04/21","?","1ª","4, 1, 6, 5, 16"));

    /** Segunda-feira - 26/04/21 */

    

}