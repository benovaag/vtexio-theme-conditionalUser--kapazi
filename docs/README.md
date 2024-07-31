# Repo Conditional User by cluster Clients in MD - Kapazi

## Arquivo Greeting.jsx
Componente principal do app que irá bater na API verificar o campo do MD e retornar o bloco correto de extension point. 

### Pasta components
Tem os arquivos que estamos tentando criar como **extension point**
- PerfilExtensionComponent: Componente que irá renderizar o conteúdo para o perfil logado/default
- DefaultExtensionComponent: Componente que irá renderizar o conteúdo para o perfil deslogado/default



# O problema

1. Estou linkando este repo(App) na store e o erro abaixo fica retornando: 

error: Error resolving block "store.custom#perfis":
I couldn't find a block **"conditional-user"**. You need to declare the block or have your app depended on another app that declares it. This error may be caused by a change in behavior resolving blocks from indirect app dependencies. Further info here:

Está claro que ele não está encontrando o bloco mesmo linkado o repositório com o app sendo exportado tanto por interfaces(na pasta store) quanto no manifest através da seção de **blocks**

*Obs: Obrigatório inserir o no manifest da store a dependência*
"tfatr2b2b.conditional-user": "0.x"


-----
