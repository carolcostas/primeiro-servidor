# Cubos Academy

# Primeiro Servidor

 
****

- Qual é o papel de um servidor web?
    
    **Fornecer recursos e dados (conteúdo ou serviços) para os usuários através da internet. É um sistema de computador que recebe solicitações de navegadores e aplicativos, processa-as e envia de volta as páginas, imagens e arquivos solicitados.**A principal função de um servidor web é**entregar conteúdo digital aos usuários**.
    
- O que construímos para disponibilizar sistemas na internet ?
    
     API (aplicações web)
    

O node JS  foi construído com o objetivo de rodar aplicações no lado servidor

 

- **O que é um servidor?**
    - Um servidor é um computador ou sistema que processa requisições e envia respostas para outros computadores na rede, conhecidos como clientes. No contexto do Node.js, um servidor é configurado para receber requisições HTTP e retornar respostas, geralmente enviando páginas web ou dados. O Node.js permite que você crie um servidor HTTP que pode enviar e receber essas requisições. Para mais informações, você pode conferir o vídeo [Servidor Node.js](https://aulas.cubos.academy/conteudo/341d806b-d5be-4bcf-a18c-aa1557e3d74d).
- **O que é uma API?**
    - API (Application Programming Interface) é um conjunto de instruções que define como diferentes aplicações podem se comunicar entre si. As APIs permitem que sistemas diferentes troquem dados e funcionalidades. Por exemplo, uma API pode permitir que um aplicativo acesse dados de outro sistema, como consultar a previsão do tempo. O servidor que você desenvolve no curso também é considerado uma API. Para mais detalhes, confira o vídeo [API](https://aulas.cubos.academy/conteudo/49c6c68f-4325-4865-96b2-cf9c2f97740f).
- **O que é o Express?**
    - O Express é uma biblioteca para Node.js que facilita a criação de servidores HTTP. Ele fornece uma série de ferramentas e funcionalidades que tornam o desenvolvimento de aplicações web mais simples e eficiente. Com o Express, você pode definir rotas, gerenciar requisições e respostas, e configurar middleware de forma rápida. Para mais informações, veja o vídeo [Express.js](https://aulas.cubos.academy/conteudo/317cd42f-fd53-46b1-be88-2c1e35862d73).
- **O que é o Nodemon?**
    - O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js, pois monitora as alterações no código e reinicia automaticamente o servidor sempre que uma mudança é detectada. Isso elimina a necessidade de parar e reiniciar o servidor manualmente após cada alteração. O Nodemon deve ser instalado como uma dependência de desenvolvimento, pois é útil apenas durante o processo de desenvolvimento.
- **O que é uma dependência de desenvolvimento?**
    - Dependências de desenvolvimento são bibliotecas ou ferramentas que são necessárias apenas durante o desenvolvimento de uma aplicação, mas não são necessárias quando a aplicação está em produção. Exemplos incluem ferramentas de teste, compiladores e servidores de desenvolvimento, como o Nodemon. Essas dependências são instaladas usando a flag `D`, por exemplo, `npm install -D nodemon`. Elas não devem ser incluídas no ambiente de produção, pois não são essenciais para o funcionamento da aplicação final.

- criando o primeiro servidor
    1. **Inicialização do Projeto**:
        - Abra o terminal e execute o comando `npm init -y` para criar o arquivo `package.json` com configurações padrão.
    2. **Configuração do `package.json`**:
        - Adicione `"type": "module"` ao arquivo `package.json` para usar a sintaxe de módulos ES.
    3. **Instalação do Fastify**:
        - Execute `npm install fastify` para instalar a biblioteca Fastify.
    4. **Configuração do `.gitignore`**:
        - Crie um arquivo `.gitignore` e adicione `node_modules` para evitar que essa pasta seja versionada pelo Git.
    5. **Inicialização do Git**:
        - Execute `git init` para iniciar um repositório Git no seu projeto.
    6. **Estrutura de Pastas**:
        - Crie uma pasta chamada `src` para armazenar o código fonte do projeto.
        - Dentro da pasta `src`, crie um arquivo chamado `servidor.ts`.
    7. **Instanciação do Fastify**:
        - No arquivo `servidor.ts`, importe o Fastify e crie uma instância do servidor.
    8. **Definição de Rotas**:
        - Adicione uma rota GET ao servidor, definindo um controlador que retorna uma mensagem, como "Bem-vindo ao primeiro servidor Node.js".
    9. **Configuração da Porta**:
        - Utilize o método `listen` do Fastify para definir a porta em que o servidor irá escutar (por exemplo, porta 3000).
    10. **Execução do Projeto**:
        - Execute o servidor utilizando `node src/servidor.ts` ou um script de desenvolvimento configurado no `package.json`.
