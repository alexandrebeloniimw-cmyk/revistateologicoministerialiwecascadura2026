// ======================================================
// MENU MOBILE
// ======================================================

const mobileMenu = document.getElementById("mobileMenu");
const menu = document.getElementById("menu");

if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


// ======================================================
// BASE DE DADOS DOS ARTIGOS
// ======================================================

const artigos = [

{
id:1,
numero:"01",
titulo:"Depressão e adoecimento emocional de pastores no exercício do ministério",
autor:"Alexandre Monteiro Ramos",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1aIt3FkMjWi-0M-eugW-_w4ejNw64yEtF/view?usp=sharing"
},

{
id:2,
numero:"02",
titulo:"Prevenção e enfrentamento do burnout entre pastores da IMW (6ª Região)",
autor:"Carlos Vinícius Rangel Pinto",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1kfBC24UtCOXX7h2Y4wcFAEzSmN1DswDk/view"
},

{
id:3,
numero:"03",
titulo:"Inteligência emocional no início do ministério",
autor:"Marcos Antônio Alvino da Silva",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1yF_pMCCAJ5RoI_INcuCY2t7GV5D5DsJv/view"
},

{
id:4,
numero:"04",
titulo:"Equilíbrio entre a vocação pastoral e o cuidado com a família",
autor:"Almir Santiago Evaristo",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1CJk0DdE7x6Mk-uePLH7etOqddktSJhu7/view"
},

{
id:5,
numero:"05",
titulo:"Liderança no lar como requisito para o ministério eclesiástico",
autor:"Cristiane Vale da Rosa Saraiva",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1EONtQUZWI6-hQeOGGDdhOw20tcYCTxe5/view"
},

{
id:6,
numero:"06",
titulo:"Cuidado pastoral integral na tradição metodista wesleyana",
autor:"Daniel Araújo Lima",
editoria:"Ministério Pastoral e Família",
link:"https://drive.google.com/file/d/1s3i_pve66TGLcYpUQZygm3-DX4dWJKyA/view"
},

{
id:7,
numero:"07",
titulo:"Regeneração e formação espiritual",
autor:"Felipe da Silva Cardoso",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1pPMN8lNYikfUGXeEI34qNljMMIcRINrj/view"
},

{
id:8,
numero:"08",
titulo:"Vida cristã diante da aceleração social",
autor:"Márcio Silva Carvalho",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1U6SUxLnTgrwo6lh9b3ECfRS4aTpjqvgI/view"
},

{
id:9,
numero:"09",
titulo:"Vida de oração na formação de líderes",
autor:"Janine Andrade Medeiros",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1gh3VsStqkj5-pImE2rO1Bs3e6vmLwDZ8/view"
},

{
id:10,
numero:"10",
titulo:"Obras de piedade e de misericórdia na formação espiritual",
autor:"Erineudo Pereira Guimaraes",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1hE06y7YJTr1DvRxnbFg2BSlaA7V95lhi/view"
},

{
id:11,
numero:"11",
titulo:"Suficiência das Escrituras no aconselhamento bíblico",
autor:"Diego Magalhães",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1vLDnEi5-9pcjPst7bnXYFfsLVEgaP6o1/view"
},

{
id:12,
numero:"12",
titulo:"A necessidade da igreja local na vida do cristão",
autor:"Emidio de Oliveira Saraiva Junior",
editoria:"Doutrina e Espiritualidade",
link:"https://drive.google.com/file/d/1BYHxG30LzOShWVY7DMKZPdvESZrfhLjh/view"
},

{
id:13,
numero:"13",
titulo:"Uso da Libras na evangelização e inclusão da comunidade surda",
autor:"Carla Ferreira Santos",
editoria:"Missão e Evangelização",
link:"https://drive.google.com/file/d/1KhXvqRBC4NJh3V5m-Z1yqMKjNetmt4XL/view"
},

{
id:14,
numero:"14",
titulo:"Pequenos grupos como estratégia de plantação de igrejas",
autor:"Carlos Eduardo Rodrigues Lima",
editoria:"Missão e Evangelização",
link:"https://drive.google.com/file/d/1QmdrfyVX8L_KqF72J25IO-egbPIoaw-Z/view"
},

{
id:15,
numero:"15",
titulo:"Evangelização digital no contexto pós-pandemia",
autor:"Rafael Rangel Amorim Pinheiro",
editoria:"Missão e Evangelização",
link:"https://drive.google.com/file/d/11ki922SloPRfZXk01eakX8n752eRxOlV/view"
},

{
id:16,
numero:"16",
titulo:"Vida devocional do missionário transcultural",
autor:"Luiz Carlos de Souza Dantas",
editoria:"Missão e Evangelização",
link:"https://drive.google.com/file/d/1iq--ZAFpP7OYABG1JeOPtWuCw0WZHvxg/view"
},

{
id:17,
numero:"17",
titulo:"Justiça social em Amós e a responsabilidade da Igreja",
autor:"Priscila S. R. Rodrigues",
editoria:"Bíblia e História",
link:"https://drive.google.com/file/d/1pOayebDKAQ70sC9xkHWVolzjvN2a-xKc/view"
},

{
id:18,
numero:"18",
titulo:"Perseguição e martírio na expansão do evangelho",
autor:"Lílian Cristina Duarte Silva",
editoria:"Bíblia e História",
link:"https://drive.google.com/file/d/1Wl7aPH3o13al7PVulzNHNU-hIh91GvNA/view"
},

{
id:19,
numero:"19",
titulo:"Liderança e reconstrução espiritual em Neemias",
autor:"Neemias Paulo Moreira de Souza",
editoria:"Bíblia e História",
link:"https://drive.google.com/file/d/12clD2Zp_1PhMGvb4kWEA7rfLo2XI06PV/view"
},

{
id:20,
numero:"20",
titulo:"Discipulado familiar na formação de adolescentes",
autor:"Fernanda Cristina Indalecio Carvalhaes",
editoria:"Educação, Discipulado e Comunhão",
link:"https://drive.google.com/file/d/1R_FW1HNCnnFavBsSAuQFTX_C81s7Zgdy/view"
},

{
id:21,
numero:"21",
titulo:"A Escola Bíblica como instrumento de formação",
autor:"Lilian Santos de A. Cardoso",
editoria:"Educação, Discipulado e Comunhão",
link:"https://drive.google.com/file/d/1ZQlgrlzOfXy5aLAIv3-upkoSk6QwWtob/view"
},

{
id:22,
numero:"22",
titulo:"Testemunho dos jovens fora do ambiente da igreja",
autor:"Wesley Rodrigo Motta Amaro",
editoria:"Educação, Discipulado e Comunhão",
link:"https://drive.google.com/file/d/1qSF3m4-Sz3JbHqCNUOjUAmltaA3Y1vSL/view"
},

{
id:23,
numero:"23",
titulo:"Discipulado relacional na formação de líderes",
autor:"Lucas Motta Amaro",
editoria:"Educação, Discipulado e Comunhão",
link:"https://drive.google.com/file/d/14zVn4faJhtrS0an0rMbKkf-MS-L9XQuP/view"
},

{
id:24,
numero:"24",
titulo:"Sororidade e fortalecimento das mulheres na igreja",
autor:"Joilma Rozilane de O. Simião",
editoria:"Educação, Discipulado e Comunhão",
link:"https://drive.google.com/file/d/1BQPaNY88lsOOouBamKV-AXlDE5XIuY34/view"
}

];


// ======================================================
// RENDERIZAÇÃO DOS ARTIGOS
// ======================================================

const articleGrid =
document.getElementById("articleGrid");

function renderArtigos(lista){

if(!articleGrid) return;

articleGrid.innerHTML = "";

lista.forEach(artigo => {

articleGrid.innerHTML += `
<div class="article-card">

<div class="article-number">
${artigo.numero}
</div>

<span class="article-category">
${artigo.editoria}
</span>

<h3>
${artigo.titulo}
</h3>

<p class="article-author">
${artigo.autor}
</p>

<a
href="${artigo.link}"
target="_blank"
class="article-button">

Ler Artigo

</a>

</div>
`;

});

}

renderArtigos(artigos);


// ======================================================
// PESQUISA
// ======================================================

const search =
document.getElementById("search");

if(search){

search.addEventListener("keyup", e => {

const termo =
e.target.value.toLowerCase();

const resultados =
artigos.filter(artigo =>

artigo.titulo.toLowerCase().includes(termo) ||
artigo.autor.toLowerCase().includes(termo) ||
artigo.editoria.toLowerCase().includes(termo)

);

renderArtigos(resultados);

});

}


// ======================================================
// ANIMAÇÕES DE ENTRADA
// ======================================================

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".article-card, .stat-card, .editoria-card"
).forEach(el => {

observer.observe(el);

});