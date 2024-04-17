# GitHub Repo Manager

O GitHub Repo Manager é uma plataforma web que permite aos usuários pesquisar e gerenciar repositórios do GitHub de forma eficiente. Este projeto foi criado com o intuito de facilitar o gerenciamento de repositórios do GitHub, e inclui funcionalidades como pesquisa, exportação e importação de repositórios, assim como processamento de dados em segundo plano utilizando filas, banco de dados e API REST.

Video apresentação:  https://drive.google.com/file/d/1DfnP3aFI-Kgml5WpHfGmmxnHNOdlSe8c/view?usp=sharing

## Tecnologias Utilizadas

- TypeScript: Uma superset do JavaScript que adiciona tipos estáticos para uma melhor experiência de desenvolvimento.
- Docker: Uma plataforma de containerização para simplificar a configuração e distribuição de aplicações.
- MariaDB: Um sistema de gerenciamento de banco de dados que é um fork do MySQL.
- React: Uma biblioteca JavaScript para criar interfaces de usuário de maneira eficiente e intuitiva.
- RabbitMQ: Um broker de mensagens open-source que facilita a construção de sistemas distribuídos com mensagens assíncronas.

## Funcionalidades

- **Tela 1: Pesquisa e Exportação**: Permite aos usuários buscar por usuários do GitHub e exibir seus repositórios. Inclui também uma funcionalidade para exportar os repositórios do usuário no formato CSV.
- **Tela 2: Importação e Visualização**: Contém um botão para importar os repositórios exportados e exibir uma tabela com os repositórios importados, incluindo nome, proprietário e quantidade de estrelas.
- **Backend**: Processa os dados importados usando jobs em segundo plano e uma fila com RabbitMQ. Notifica o frontend quando o processamento está completo.

## Como Rodar

Para executar o GitHub Repo Manager localmente, siga os passos abaixo:

### Pré-requisitos

- Docker
- Docker Compose

### Instruções

1. Clone o repositório:
git clone https://github.com/marcos-ev/repo-manager.git


2. Navegue até a pasta do projeto:
cd github-repo-manager

3. Npm Install para baixar depedências e bibliotecas necessárias


   
4. Construa e execute os containers com Docker Compose:
docker-compose up --build


Isso irá iniciar todos os serviços necessários, incluindo o aplicativo backend, frontend, RabbitMQ e MariaDB.

5. Acesse o frontend via navegador em:
http://localhost:80

e inicie pelo diretório backend com 
npm start

7. A interface de gerenciamento do RabbitMQ pode ser acessada em:
http://localhost:15672


### Utilizando o Sistema

- Use a barra de pesquisa na página inicial para buscar usuários do GitHub pelo nome.
- Exporte a lista de repositórios para um arquivo CSV usando o botão correspondente.
- Na página de importação, você pode carregar o arquivo CSV exportado para visualizar e gerenciar os repositórios.

## Arquitetura

O sistema é dividido em microserviços gerenciados via Docker Compose:

- `frontend`: O serviço de frontend que serve a interface do usuário.
- `backend`: O serviço de backend responsável pelo processamento de dados e comunicação com o RabbitMQ e MariaDB.
- `rabbitmq`: O serviço de mensagens que gerencia a fila de processamento em segundo plano.
- `mariadb`: O banco de dados utilizado para armazenar dados de repositórios.

## Observações

Projeto criado para a empresa BRX, visualização pública por tempo limitado, tive uma certa facilidade com a lógica principal e conexão com API, porém por questões de pouca utilização acabei tendo um pouco de dificuldade em conectar aplicação com o rabbitMQ. De inicio tentei colocar de forma equivocada no conteiner o backend completo de uma vez só pelo Docler...ocasionando em alguns erros, porém após uma breve análise consegui adicionar ao docker o serviço de mensageria e organizar melhor a aplicação. Ao importar o CSV os dados são salvos como backup no bando no MariaDB. Foi utilizado DBeaver, multiplataforma SQL para acessar o banco. Foi utilizado MUI para estilização da aplicação REACT e Node no backend. Considerando a obrigatoriedade de Docker e mensageria o projeto foi de dificuldade intermediária pois a lógica principal era simples, sem esses dois elementos seria de dificuldade fácil.

## Melhorias

A principio poderia deixar o layout mais responsivo, porém focar em detalhes estéticos e de usabilidade multiplataforma não era meu objetivo primário nesse momento.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato. Marcosev@gmail.com 
