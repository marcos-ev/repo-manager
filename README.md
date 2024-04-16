# GitHub Repo Manager

O GitHub Repo Manager é uma plataforma web que permite aos usuários pesquisar e gerenciar repositórios do GitHub de forma eficiente. Este projeto foi criado com o intuito de facilitar o gerenciamento de repositórios do GitHub, e inclui funcionalidades como pesquisa, exportação e importação de repositórios, assim como processamento de dados em segundo plano utilizando filas, banco de dados e API REST.

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
git clone [URL_DO_REPOSITORIO]


2. Navegue até a pasta do projeto:
cd github-repo-manager


3. Construa e execute os containers com Docker Compose:
docker-compose up --build


Isso irá iniciar todos os serviços necessários, incluindo o aplicativo backend, frontend, RabbitMQ e MariaDB.

4. Acesse o frontend via navegador em:
http://localhost:3000

5. A interface de gerenciamento do RabbitMQ pode ser acessada em:
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

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo `LICENSE` para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.