# Cubos Academy

## Primeiro Servidor

### Qual é o papel de um servidor web?
Fornecer recursos e dados (conteúdo ou serviços) para os usuários através da internet. É um sistema de computador que recebe solicitações de navegadores e aplicativos, processa-as e envia de volta as páginas, imagens e arquivos solicitados. A principal função de um servidor web é entregar conteúdo digital aos usuários.

### O que construímos para disponibilizar sistemas na internet?
**API (aplicações web)**

O Node.js foi construído com o objetivo de rodar aplicações no lado servidor.

### O que é um servidor?
Um servidor é um computador ou sistema que processa requisições e envia respostas para outros computadores na rede, conhecidos como clientes. No contexto do Node.js, um servidor é configurado para receber requisições HTTP e retornar respostas, geralmente enviando páginas web ou dados. O Node.js permite que você crie um servidor HTTP que pode enviar e receber essas requisições. Para mais informações, você pode conferir o vídeo **Servidor Node.js**.

### O que é uma API?
API (Application Programming Interface) é um conjunto de instruções que define como diferentes aplicações podem se comunicar entre si. As APIs permitem que sistemas diferentes troquem dados e funcionalidades. Por exemplo, uma API pode permitir que um aplicativo acesse dados de outro sistema, como consultar a previsão do tempo. O servidor que você desenvolve no curso também é considerado uma API. Para mais detalhes, confira o vídeo **API**.

### O que é o Express?
O Express é uma biblioteca para Node.js que facilita a criação de servidores HTTP. Ele fornece uma série de ferramentas e funcionalidades que tornam o desenvolvimento de aplicações web mais simples e eficiente. Com o Express, você pode definir rotas, gerenciar requisições e respostas, e configurar middleware de forma rápida. Para mais informações, veja o vídeo **Express.js**.

### O que é o Nodemon?
O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js, pois monitora as alterações no código e reinicia automaticamente o servidor sempre que uma mudança é detectada. Isso elimina a necessidade de parar e reiniciar o servidor manualmente após cada alteração. O Nodemon deve ser instalado como uma dependência de desenvolvimento, pois é útil apenas durante o processo de desenvolvimento.

### O que é uma dependência de desenvolvimento?
Dependências de desenvolvimento são bibliotecas ou ferramentas que são necessárias apenas durante o desenvolvimento de uma aplicação, mas não são necessárias quando a aplicação está em produção. Exemplos incluem ferramentas de teste, compiladores e servidores de desenvolvimento, como o Nodemon. Essas dependências são instaladas usando a flag `-D`, por exemplo, `npm install -D nodemon`. Elas não devem ser incluídas no ambiente de produção, pois não são essenciais para o funcionamento da aplicação final.

## Criando o Primeiro Servidor

### Inicialização do Projeto
1. Abra o terminal e execute o comando `npm init -y` para criar o arquivo `package.json` com configurações padrão.

### Configuração do package.json
1. Adicione `"type": "module"` ao arquivo `package.json` para usar a sintaxe de módulos ES.

### Instalação do Fastify
1. Execute `npm install fastify` para instalar a biblioteca Fastify.

### Configuração do .gitignore
1. Crie um arquivo `.gitignore` e adicione `node_modules` para evitar que essa pasta seja versionada pelo Git.

### Inicialização do Git
1. Execute `git init` para iniciar um repositório Git no seu projeto.

### Estrutura de Pastas
1. Crie uma pasta chamada `src` para armazenar o código fonte do projeto.
2. Dentro da pasta `src`, crie um arquivo chamado `servidor.ts`.

### Instanciação do Fastify
1. No arquivo `servidor.ts`, importe o Fastify e crie uma instância do servidor.

### Definição de Rotas
1. Adicione uma rota **GET** ao servidor, definindo um controlador que retorna uma mensagem, como "Bem-vindo ao primeiro servidor Node.js".

### Configuração da Porta
1. Utilize o método `listen` do Fastify para definir a porta em que o servidor irá escutar (por exemplo, porta 3000).

### Execução do Projeto
1. Execute o servidor utilizando `node src/servidor.ts` ou um script de desenvolvimento configurado no `package.json`.
