# 📝 Projeto: MyNotes 2026

Bem-vindo ao **MyNotes 2026**! Este é o seu desafio prático de integração de Front-End.
Sua missão é construir uma aplicação web de página única (SPA) que permita ao usuário adicionar notas pessoais dinamicamente e excluí-las de forma interativa.

## 🎯 O Seu Desafio

O usuário deve conseguir preencher um formulário com um título e o conteúdo da nota. Ao clicar em salvar, a página **não deve recarregar**, e a nova nota deve aparecer imediatamente na tela com um visual atraente. Cada nota deve ter um botão de "Excluir" que só aparece quando o mouse passa por cima dela.

---

## 📋 Requisitos Técnicos

Para concluir esta missão com sucesso, a sua aplicação deve cumprir rigorosamente os seguintes critérios:

### 1. Estrutura e Interface (Arquivo `index.html`)
- Você deve criar a estrutura básica de um documento HTML5 e importar os seus arquivos de CSS e JavaScript.
- A página deve ter um título principal (ex: `<h1>MyNotes 2026</h1>`).
- **O Formulário:**
  - Deve usar a tag `<form>`.
  - Deve conter um campo de texto (`<input type="text">`) para o Título da nota.
  - Deve conter uma área de texto (`<textarea>`) para o Conteúdo da nota.
  - Ambos os campos devem ser de preenchimento obrigatório (`required`).
  - Um botão de envio do tipo `submit`.
- **A Galeria de Notas:**
  - Você deve criar uma `<div>` vazia com um `id` específico. Este será o container onde o JavaScript irá injetar as novas notas criadas.

### 2. Estilo e Identidade (Arquivo `style.css`)
- Aplique um estilo visual à sua escolha para a página e para o formulário.
- **Card da Nota (`.nota-card`):** Crie uma classe CSS para o design individual de cada nota (sugestão: estilo "post-it" amarelo, com margens e sombras).
- **O Botão Oculto (`.btn-excluir`):** Crie a classe visual para o botão de excluir (ex: vermelho, circular). **Regra de Ouro:** No CSS, este botão deve começar invisível (dica: explore a propriedade `opacity: 0` ou `display: none`).

### 3. O Cérebro da Aplicação (Arquivo `script.js`)
- **Captura e Prevenção:** O sistema deve "escutar" o evento de envio (`submit`) do formulário e impedir que a página recarregue.
- **Gerenciamento de Dados:** Capture o título e o conteúdo digitados pelo usuário e organize-os em um **Objeto** JavaScript.
- **Criação Dinâmica (DOM):** Use o JavaScript para fabricar do zero as tags da nota (`div`, `h3`, `p`, `button`) e adicionar a elas as classes CSS que você criou.
- **Hierarquia:** Monte a nota corretamente usando `.appendChild` e insira o card finalizado na galeria de notas.
- **Interatividade (Eventos):**
  - **`mouseover`**: Quando o cursor do mouse entrar na área do card, o botão de excluir deve ficar visível.
  - **`mouseout`**: Quando o cursor do mouse sair do card, o botão deve voltar a ficar invisível.
  - **`click`**: Ao clicar no botão de excluir, o card inteiro deve ser removido da tela.
- **Limpeza:** Após salvar a nota, o formulário deve ser limpo automaticamente para a próxima inserção de dados.

### 4. Versionamento de Código (Git & GitHub)
- A sua entrega deve mostrar a evolução do projeto através do histórico do Git.
- Realize *commits* lógicos ao longo do desenvolvimento utilizando boas práticas nas mensagens (ex: `feat: estrutura inicial html`, `style: css do card da nota`, `feat: logica js para adicionar nota`).

---

## 📚 Material de Apoio

Se você travar, não entre em pânico! A resposta para todos os desafios técnicos desta missão está na documentação oficial da disciplina.

🔗 **https://prof-joao.notion.site/Material-de-Apoio-Aula-9-e-10-336a3966a3f480d0bc0febde793d5ee0**

---

### 🚀 Bom código! Mostre o que você sabe fazer!
