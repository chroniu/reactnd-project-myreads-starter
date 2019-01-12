# MyReads Project

## Propósito do Projeto
Este projeto foi construído para o **Nanodegree React Developer***. O objetivo deste projeto é implementar uma aplicação em React demonstrando conhecimento e entendimento sobre a estrutura de um aplicativo React além da utilização de boas práticas de programação na implementação. A aplicação consiste em uma estante de livros que permite selecionar e classificar livros em categorias.

## Instalando e carregando o App

Para rodar o projeto é necessário possuir instalado o Node >= 8.x e o gerenciador de pacotes npm.

Para clonar e instalar as dependências do projeto, no terminal use os comandos:
```bash
   git clone https://github.com/chroniu/reactnd-project-myreads-starter.git
   cd reactnd-project-myreads-starter
   npm install
```

Com as dependencias instaladas, basta ir na pasta do projeto e digitar no terminal:
```bash
   npm start
```

O servidor do aplicativo será inicializado e o aplicativo poderá ser acessado no endereço informado na saída do comando anterior. Geralmente será acessível no endereço: [http://localhost:3000].

## Instruções de uso

O applicativo permite classificar livros em 3 categorias:
- Currently Reading
- Want to Read 
- Read

Existem 2 modos para modificar a categoria de um livro:

- Utilizando o botão de seleção como mostra a imagem abaixo.

![Changing Category Menu](selecting-category.png "changing category using the menu")


- Drag/Drop

Selecionando e arrastando um livro de uma categoria para outra. Esse recurso só pode ser utilizado na tela inicial do aplicativo.

![Changing Category Drag/Drop](selecting-category-draging.png "changing category by dragging a book")


Para adicionar um novo livro, basta clicar no botão verde no canto inferior direito da página e digitar o termo de busca ou selecionar alguma sugestão.

![Searching](searching.png "searching")


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).


## Bibliotecas extras utilizadas

Esse projeto utilizou as bibliotecas:
 - react-autosuggest: para mostrar sugestões de busca
 - autosuggest-highlight: melhora a experiência do usuário na visualização das sugestões de busca.
