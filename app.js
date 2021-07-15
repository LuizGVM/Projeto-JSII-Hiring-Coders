//pegar o input 
//Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? (S/N): ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  //console.log('Produtividade |', 'Historia brasileira |','Americas |','Estilo de vida |','Tecnologia')
  livros.forEach(function(e){console.log(e.categoria)})
  const entradaCategoria = readline.question('Qual categoria deseja? (escreva igual mostrado): ')
  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados)
}