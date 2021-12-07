# Shalion - Technical Challenge

# ESTUDAR ESSES PONTOS:

Solidatiry
pxToRem
Craco

## Used technologies:

- React + Mobx
- Styled Components
- Craco
- Formik
- Yup
- React Toastify

## Install & Start

Firstly we need to install dependencies by running:

`yarn`

To start:

`yarn start`

## Structure

## Core dependencies

This is the Core libraries of the project, developers need to have a understand 
São as principais dependências do projeto, que precisam ser compreendidas pelo menos mínimamente para entender como esta arquitetura funciona.

- [React](https://reactjs.org/)
- [Mobx](https://mobx.js.org/)
- [Styled Components](https://www.styled-components.com/)

### Stores

As `stores` são responsáveis por armazenar o state da aplicação. Qualquer tipo de informação que possa ser utilizada em mais de um container ou component, deve ser armazenada em uma store. Elas também são responsáveis por fazer requests externas através de `services`, que lidam com requisições externas e erro handling. Nenhuma store deve tratar erros; isso é responsabilidade do service e do container que iniciou a requisição

Está sendo utilizando o [Mobx](https://mobx.js.org/) para lidar com as stores. Basta usar os decorators `inject` e `observer` onde deseja injetar uma store e observar suas alterações (geralmente em `containers`).

### Scenes

São as telas que possuem rotas próprias. São sempre divididas entre `container` e `component`. O container (index.js) faz a conexão com as `stores`, e são responsáveis por toda a lógica da Scene e de passar as informações da store para a interface. Já o `component` (nome da Scene) é responsável pela interface visual.

## Components

Todos os components visuais são declarados neste folder. Botões, checkbox, inputs. Também são declarados components responsáveis por “behaviour”, mesmo sem ter uma interface, como o caso do `FormContainer`, que encapsula comportamentos de formulário vindos Formik a todos os `childrens` que forem passados como props.

## Utils/Modules

Para facilitar uma possível migração de dependências, todas as dependências são declaradas no arquivo de modules e depois importadas apontando para este arquivo.

### Gerador de Scenes e Components

Para facilitar a criação de novas scenes e components temos um gerador que cria a estrutura de pasta e arquivos necessários.

Para gerar uma Scene:
`yarn generate:scene`

Para Gerar um component
`yarn generate:component`

### Commits

Os commits devem seguir o seguinte padrão:
`<type>(scope): <description>`

Sendo que os types podem ser os seguintes:
`feat: Uma nova feature`
`fix: Correção de um bug`
`chore: Uma alteração que não é nem uma nova feature, nem uma correção`

Para auxiliar no processo de commit, é recomendado utilizar o seguinte pacote:
`yarn global add commitizen`

Em seguida, deve ser iniciado uma única vez:
`commitizen init cz-conventional-changelog --save-dev --save-exact --yarn`

A partir de agora, para commitar pode ser usado a seguinte sintaxe:
`git add .`
`git cz` (Ao invés de git commit -m "...")

Basta seguir as instruções do CLI.
