## Primeiro Servidor   
 

### Qual é o papel de um servidor web?
Fornecer recursos e dados (conteúdo ou serviços) para os usuários através da internet. É um sistema de computador que recebe solicitações de navegadores e aplicativos, processa-as e envia de volta as páginas, imagens e arquivos solicitados. A principal função de um servidor web é entregar conteúdo digital aos usuários.

### O que construímos para disponibilizar sistemas na internet?
**API (aplicações web)**

O Node.js foi construído com o objetivo de rodar aplicações no lado servidor.

### O que é um servidor?
Um servidor é um computador ou sistema que processa requisições e envia respostas para outros computadores na rede, conhecidos como clientes. No contexto do Node.js, um servidor é configurado para receber requisições HTTP e retornar respostas, geralmente enviando páginas web ou dados. O Node.js permite que você crie um servidor HTTP que pode enviar e receber essas requisições. 

### O que é uma API?
API (Application Programming Interface) é um conjunto de instruções que define como diferentes aplicações podem se comunicar entre si. As APIs permitem que sistemas diferentes troquem dados e funcionalidades. Por exemplo, uma API pode permitir que um aplicativo acesse dados de outro sistema, como consultar a previsão do tempo. O servidor que você desenvolve no curso também é considerado uma API.

### O que é o Express?
O Express é uma biblioteca para Node.js que facilita a criação de servidores HTTP. Ele fornece uma série de ferramentas e funcionalidades que tornam o desenvolvimento de aplicações web mais simples e eficiente. Com o Express, você pode definir rotas, gerenciar requisições e respostas, e configurar middleware de forma rápida. 

### O que é o Nodemon?
O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js, pois monitora as alterações no código e reinicia automaticamente o servidor sempre que uma mudança é detectada. Isso elimina a necessidade de parar e reiniciar o servidor manualmente após cada alteração. O Nodemon deve ser instalado como uma dependência de desenvolvimento, pois é útil apenas durante o processo de desenvolvimento.

### O que é uma dependência de desenvolvimento?
Dependências de desenvolvimento são bibliotecas ou ferramentas que são necessárias apenas durante o desenvolvimento de uma aplicação, mas não são necessárias quando a aplicação está em produção. Exemplos incluem ferramentas de teste, compiladores e servidores de desenvolvimento, como o Nodemon. Essas dependências são instaladas usando a flag `-D`, por exemplo, `npm install -D nodemon`. Elas não devem ser incluídas no ambiente de produção, pois não são essenciais para o funcionamento da aplicação final. <br><br><br><br><br>

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
1. Execute o servidor utilizando `node src/servidor.ts` ou um script de desenvolvimento configurado no `package.json`.  <br><br><br><br><br>

  

## Implementando TypeScript no projeto

1. **Instalação do TypeScript**:
    - Instale o TypeScript como uma dependência de desenvolvimento com o comando:
    
    ```
    npm install -D typescript ts-node
    ```
    
2. **Remoção da Configuração**:
    - No arquivo `package.json`, remova a configuração `type: module`.
3. **Inicialização do TypeScript**:
    - Execute o comando para inicializar o TypeScript:
    
    ```
    npx tsc --init
    ```
    
    - Isso criará um arquivo chamado `tsconfig.json`.
4. **Configuração do tsconfig.json**:
    - Abra o `tsconfig.json` e faça as seguintes alterações:
    - Altere o `target` para `"ES2022"`.
    - Altere o `outDir` para `"./dist"`.
5. **Renomeação do Arquivo do Servidor**:
    - Salve o arquivo do servidor com a extensão TypeScript, mudando de `servidor.js` para `servidor.ts`.
6. **Transpilação do TypeScript para JavaScript**:
    - Execute o comando para transpilar os arquivos TypeScript para JavaScript:
    
    ```
    npx tsc
    ```
    
7. **Adicionar a Pasta dist ao .gitignore**:
    - Adicione a pasta `dist` ao seu arquivo `.gitignore` para que não seja enviada ao repositório Git.
8. **Scripts de Automação**:
    - No arquivo `package.json`, adicione os seguintes scripts:
    
    ```json
    "scripts": {"build": "tsc","dev": "node dist/servidor.js"}
    ```
    
9. **Execução do Arquivo JavaScript**:
    - Após a transpilação, você pode usar os scripts que criou:
    - Para compilar o TypeScript, execute:
    
    ```
    npm run build
    ```
    
    - Para iniciar o servidor, execute:
    
    ```
    npm run dev
    ```
o comando npx tsc transpila um arquivo typescript para javascript



### Utilização do Express com Tipos no TypeScript

Ao utilizar o Express em projetos com TypeScript, é necessário configurar adequadamente a tipagem para garantir que o código seja seguro e eficiente. Abaixo estão os passos essenciais para configurar e tipar o Express corretamente:

### 1. Instalação dos Tipos do Express

Por padrão, o Express não possui suporte nativo para tipos TypeScript. Portanto, é necessário instalar os tipos do Express separadamente. Utilize o seguinte comando para instalar os tipos:

```
npm install @types/express

```

Isso garante que o TypeScript reconheça e valide os tipos usados pelo Express no seu projeto.

### 2. Tipagem da Requisição e Resposta

Ao trabalhar com rotas no Express, é importante tipar corretamente os objetos de requisição (`Request`) e resposta (`Response`). Esses tipos são fornecidos pela própria biblioteca `@types/express`. Veja um exemplo de como tipar uma rota no Express:

```tsx
typescript
Copiar código
import { Request, Response } from 'express';

app.get('/rota-exemplo', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

```

No exemplo acima:

- `Request`: Tipagem para o objeto de requisição (`req`), que contém dados sobre a solicitação HTTP.
- `Response`: Tipagem para o objeto de resposta (`res`), que é utilizado para enviar a resposta HTTP de volta ao cliente.

Durante o desenvolvimento com Express, podemos utilizar o comando ts-node para facilitar o processo de recarregamento automático a cada alteração no projeto. Isso agiliza o ciclo de desenvolvimento, pois não é necessário reiniciar manualmente o servidor. Quando o desenvolvimento estiver concluído, podemos utilizar o comando node para executar a versão final do projeto, já transpilada e pronta para produção.







