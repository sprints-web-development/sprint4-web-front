# SnapNote

Landing page do projeto **SnapNote**, migrada de HTML/CSS/JS estático para **React (Next.js)**, com estrutura de componentes reutilizáveis e persistência local de dados.

O SnapNote é a solução desenvolvida para o Challenge, que transforma fotos de lousas, cadernos e slides em registros organizados, pesquisáveis e prontos para revisão.

Deploy: **https://snapnote-web-development.vercel.app/**

---

## Tecnologias utilizadas

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4** — estilização da aplicação via classes utilitárias (ver `postcss.config.mjs` e o bloco `@theme` em `app/globals.css`)
- **JavaScript**
- **CSS** — reduzido ao mínimo necessário em `globals.css` (reset base, `@font-face` das fontes customizadas e a animação `fadeInSuccess`); todo o restante da estilização visual é feito em Tailwind
- **localStorage** — armazenamento das mensagens enviadas pelo formulário de contato
- **Math** (`Math.random`, `Math.floor`) — geração de protocolo único para cada mensagem enviada
- **next/image** — otimização das imagens da galeria e da equipe
- **ESLint** — padronização de código

---

## Como instalar as dependências

Clone o repositório e instale as dependências com npm:

```bash
git clone https://github.com/sprints-web-development/sprint3-web-development.git
cd sprint3-web-development
npm install
```

---

## Como executar o projeto

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse **http://localhost:3000** no navegador.

### Build de produção (opcional)

```bash
npm run build
npm run start
```

---

## Usuários e senhas de teste

Este projeto **não possui autenticação**. Todas as seções e funcionalidades (incluindo o formulário de contato) estão acessíveis livremente, sem necessidade de login.

---

## Uso de Inteligência Artificial no projeto

A IA (**Claude, da Anthropic**) foi utilizada como apoio ao longo de todo o desenvolvimento desta sprint, principalmente para:

- Revisar a migração da landing page estática para componentes React, apontando inconsistências (ex.: `id` duplicado entre as seções de galeria, ausência de `localStorage`/`Math` nos requisitos técnicos).
- Ajudar a estruturar o componente `Mensagem`, exibido após o envio do formulário de contato, incluindo a definição de props (`nome`, `protocolo`) e o estilo CSS correspondente (`.contact-success`).
- Revisar e corrigir bugs reais de lógica no `Contato.js`, como a falta de `return` na função recursiva `generateProtocol` (que gera um protocolo único validando contra mensagens já salvas no `localStorage`) e um bug em que o componente `Mensagem` exibia dados fixos em vez dos dados realmente enviados pelo usuário.
- Gerar este `README.md`, com base no conteúdo real do projeto (zip enviado à IA), estruturando a documentação de acordo com os itens exigidos pelo enunciado da sprint.
- Migrar a estilização do projeto de CSS puro (`globals.css`) para **Tailwind CSS**, para atender ao requisito da Sprint 4, convertendo cada componente para classes utilitárias e preservando a identidade visual, o layout e a responsividade originais (desktop, tablet e mobile).

Nenhum trecho de código foi gerado sem revisão manual da equipe — a IA atuou como uma revisora técnica e assistente de escrita, não como autora única do código.

---

## Deploy

**Vercel:** https://snapnote-web-development.vercel.app/

## Repositório

**GitHub:** https://github.com/sprints-web-development/sprint3-web-development

---

## Estrutura do projeto

```
app/
├── components/
│   ├── Header/          # Cabeçalho e menu de navegação
│   ├── Top/              # Seção hero ("A Solução")
│   ├── Problem/           # Seção do problema
│   ├── Solution/          # Explicação da solução
│   ├── Publics/           # Público-alvo
│   ├── Galeria/           # Galeria de imagens
│   ├── Caracteristicas/   # Características / segunda galeria
│   ├── Time/              # Nossa Equipe (recebe os dados via props)
│   ├── Contato/           # Formulário de contato (localStorage + Math)
│   ├── Mensagem/          # Confirmação exibida após o envio do formulário
│   ├── SectionTag/        # Label reutilizável de cada seção
│   └── Footer/            # Rodapé
├── globals.css
└── page.js                # Monta as seções e passa os dados da equipe via props
```

---

## Integrantes

Consulte o arquivo `INTEGRANTES.txt` na raiz do projeto.
