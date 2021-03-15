# Lista de ativos


## Tabela de conteúdos
  * [Sobre](#Sobre)
  * [Instalação](#instalação)
  * [Como usar](#como-usar)
  * [Tecnologias](#tecnologias)

## Sobre
Esse projeto exibe uma lista de ativos que pode ser ordenada pelo preço e variaçao, cada ativo pode ser favoritado. Os ativos favoritados vão para a página de favoritos e também podem ser ordenados por preço e variação. Na página de favoritados é possível remover cada ativo da lista de favoritados.

##### Tela da página com lista de todos os ativos:
![pagina-inicial](https://github.com/anacapdeville/desafio-frontend/blob/desafio-ana/images/lista.png?raw=true)
##### Tela da página de ativos favoritos:
![pagina-favoritos](https://github.com/anacapdeville/desafio-frontend/blob/desafio-ana/images/favoritos.png?raw=true)

## Instalação
1. Acesse o terminal e clone o projeto:

```
git clone git@github.com:anacapdeville/desafio-frontend.git
```

2. Acesse o diretório:
```
cd desafio-frontend
```

3. Entre na branch que o desafio foi realizado e instale as dependências:
```
git checkout desafio-ana
npm install
```

4. Inicializa o projeto:
```
npm start
```

## Como usar
A página inicial possui a lista de todos os ativos. Ao clicar no botão 'Ordenar os ativos por preço' a lista é ordenada de maneira crescente pelo preço. Ao clicar no botão 'Ordenar os ativos pela variação' a lista fica ordenada pela variação dos preços dos ativos de forma crescente. Clicando em 'Ordenação padrão' a lista volta a ficar ordenada como no início. Cada ativo está rodeado por uma borda e dentro da borda está o nome do ativo, o preço do ativo, a variação do preço e o botão de favoritar. Ao clicar nesse botão o ativo escolhido vai para a lista dos ativos favoritados.
A página de ativos favoritos possui os mesmos botões de ordenação da página com a lista de todos os ativos e eles funcionam da mesma maneira. As informações de cada ativo são as mesmas, porém cada ativo possui um botão para removê-lo da lista de favoritos.
Na parte superior cada página possui um cabeçalho com links que redirecionam para a página que possui a lista de todos os ativos e para a página que possui os ativos favoritados.

## Tecnologias
Esse projeto foi desenvolvido em React e React Router Dom para controle da navegação.