Painel de Ideias

O que é o projeto: O Painel de Ideias é uma aplicação web desenvolvida com React e Vite que permite cadastrar e organizar ideias em uma lista.

O usuário pode:

Adicionar uma nova ideia.
Marcar uma ideia como concluída.
Remover uma ideia.
Limpar todas as ideias.
Visualizar a data em que cada ideia foi criada.
Visualizar a quantidade de ideias cadastradas e concluídas.
Ver a quantidade de caracteres restantes ao escrever uma ideia.

As ideias são armazenadas apenas no estado da aplicação, logo, elas são perdidas quando a página é recarregada.

Foram utilizados:

React
JavaScript
Vite
CSS puro

Como executar o projeto

É necessário ter o Node.js instalado.

1. Baixar o projeto

Clone o repositório do GitHub ou baixe os arquivos do projeto.
Depois, abra o terminal dentro da pasta que contém o arquivo package.json.

2. Instalar as dependências

Execute no terminal: npm install

3. Iniciar o projeto

Depois da instalação, execute no terminal: npm run dev
O terminal mostrará um endereço local, como: http://localhost:5173/
Abra esse endereço no navegador para acessar o projeto.

Decisões do projeto

Controle do formulário

O campo de texto foi desenvolvido como um input controlado pelo React, utilizando value e onChange. O envio do formulário utiliza onSubmit e event.preventDefault() para evitar o recarregamento da página.

Validação

Antes de adicionar uma ideia, é utilizado trim() para verificar se o usuário digitou apenas espaços. Quando o campo está vazio, uma mensagem de erro é apresentada.

Estado das ideias

As ideias são armazenadas em um estado chamado ideias. Cada ideia possui um identificador, o texto, seu estado de conclusão e a data de criação.

O identificador é criado utilizando Date.now().

Alteração e remoção

Para marcar uma ideia como concluída, é utilizado map() junto com o operador spread, criando uma nova versão da ideia sem alterar diretamente o estado anterior.

Para remover uma ideia, é utilizado filter() criando uma nova lista de ideias sem a ideia que foi selecionada para ser removida.

Contador

O número de ideias concluídas é calculado a partir do próprio estado ideias, utilizando filter().length, evitando a criação de um estado separado apenas para o contador.

Limite de caracteres

Foi definido um limite de 80 caracteres para cada ideia. O contador mostra quantos caracteres ainda podem ser utilizados e o botão de adicionar é desabilitado quando o limite é ultrapassado.

Estilização

A interface utiliza CSS puro. As classes foram utilizadas para organizar a aparência dos formulários, botões, lista, mensagens e rodapé.