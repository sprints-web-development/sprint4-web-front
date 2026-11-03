# SnapNote

Aplicação web do projeto **SnapNote**, desenvolvida em **React (Next.js)** e estilizada com **Tailwind CSS**. O SnapNote é a solução criada para o Challenge: transforma fotos de lousas, cadernos e slides em registros organizados, pesquisáveis e prontos para revisão.

Este projeto é a evolução da Sprint 3 (landing page) e foi entregue em conjunto para as disciplinas de **Front-End Design** e **Web Development** (Sprint 4).

- **Deploy (Vercel):** https://sprint4-web-front-six.vercel.app/
- **Repositório (GitHub):** https://github.com/sprints-web-development/sprint4-web-front

---

## Funcionalidades

- Landing page com as seções: A Solução, Problema, Público-alvo, Galeria, Características, Nossa Equipe e Contato.
- Carrossel de depoimentos alimentado por uma API (MockAPI).
- Formulário de contato que envia a mensagem para a API.
- Página **Experimente** (`/experimente`) para acessar o aplicativo.
- **Área restrita da equipe** (`/mensagens`): rota privada, acessível apenas após login, que lista as mensagens enviadas pelos visitantes e permite sair da sessão.
- Layout responsivo para **Desktop, Tablet e Mobile**.

## Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Landing page do SnapNote |
| `/experimente` | Pública | Página para experimentar o aplicativo |
| `/mensagens` | **Privada** | Caixa de mensagens da equipe (exige login) |

---

## Tecnologias utilizadas

- **Next.js 16** (App Router)
- **React 19** — componentização, props, rotas e hooks
  - **Hooks nativos:** `useState`, `useEffect` e `useRef`
  - **Hooks customizados:** `useUsers` e `useMessages` (em `app/hooks/`), que separam a lógica de consumo da API da parte visual dos componentes
- **Tailwind CSS 4** — estilização via classes utilitárias (ver `postcss.config.mjs` e o bloco `@theme` em `app/globals.css`)
- **Axios** — consumo de API (instância configurada em `app/api/api.js`)
- **MockAPI** — API mockada (`/users` e `/messages`)
- **next/image** e **next/link** — imagens otimizadas e navegação entre rotas
- **JavaScript**
- **ESLint** — padronização de código
- **Git + Vercel** — versionamento e deploy

---

## Como instalar as dependências

Pré-requisito: **Node.js 20.9 ou superior** e **npm**.

```bash
git clone https://github.com/sprints-web-development/sprint4-web-front.git
cd sprint4-web-front
npm install
```

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

## Como executar os servidores (Back-end)

O projeto **não possui servidor próprio**. Todo o back-end é uma API mockada hospedada no **MockAPI**, que já está no ar. Não é necessário subir nenhum servidor local, basta ter conexão com a internet.

- **URL base:** `https://6adfdd0f8e42963c8d5e71d0.mockapi.io/snapnote`
- **Recursos utilizados:**
  - `GET /users` — usuários exibidos no carrossel de depoimentos
  - `GET /messages` — lista as mensagens na área restrita
  - `POST /messages` — grava a mensagem enviada pelo formulário de contato

A URL base está configurada em `app/api/api.js`.

---

## Usuários e senhas para teste

A rota privada `/mensagens` exige autenticação.

| Campo | Valor |
|---|---|
| E-mail | `equipe@snapnote.com` |
| Senha | `SnapNote3Next` |

**Como testar:**

1. Acesse a página inicial e clique em **"Ver Mensagens (Equipe)"** no menu (no celular, pelo menu lateral).
2. Informe o e-mail e a senha acima no modal de autenticação.
3. Após o login, você é levado para `/mensagens`.
4. Clique em **"Sair"** para encerrar a sessão.
5. Para testar a proteção da rota, abra uma aba anônima (ou saia da sessão) e acesse `/mensagens` diretamente: o acesso é negado.

> A autenticação é uma simulação para fins acadêmicos: a validação das credenciais e a sessão (`localStorage`) são feitas no front-end.

**Para ter mensagens na caixa**, envie uma mensagem pelo formulário de contato na página inicial (seção "Contato").

---

## Uso de Inteligência Artificial no projeto

A IA (**Claude, da Anthropic**) foi utilizada como apoio ao desenvolvimento e à documentação desta sprint, principalmente para:

- **Revisão dos requisitos:** comparar o projeto com o enunciado da Sprint 4 e listar o que ainda precisava ser implementado (rotas privadas, consumo de API, hooks customizados, documentação e entrega).
- **Orientação sobre hooks customizados:** explicar o conceito e sugerir quais lógicas separar da parte visual (consumo de usuários e mensagens da API).
- **Documentação:** gerar e atualizar este `README.md` com base no conteúdo real do projeto.

A IA atuou como revisora técnica. As decisões de implementação, a escrita do código e os testes foram feitos pelos integrantes da equipe.

---

## Estrutura do projeto

```
app/
├── api/
│   └── api.js              # Instância do axios (URL base do MockAPI)
├── hooks/
│   ├── useMessages.js      # Hook customizado: busca as mensagens na API
│   └── useUser.js          # Hook customizado (useUsers): busca os usuários/depoimentos
├── experimente/
│   └── page.js             # Rota pública /experimente
├── mensagens/
│   └── page.js             # Rota privada /mensagens
├── components/
│   ├── Header/             # Cabeçalho e navegação
│   ├── Top/                # Seção inicial ("A Solução")
│   ├── Problem/            # Seção do problema
│   ├── Publics/            # Público-alvo
│   ├── Galeria/            # Galeria de imagens
│   ├── Caracteristicas/    # Características do produto
│   ├── Time/               # Nossa Equipe (dados via props)
│   ├── Contato/            # Seção de contato (formulário + depoimentos)
│   ├── Testimonials/       # Carrossel de depoimentos (dados da API)
│   ├── Mensagem/           # Confirmação exibida após o envio do formulário
│   ├── Modal/              # Modal de autenticação da equipe
│   ├── Mensagens/          # Caixa de mensagens da área restrita
│   ├── Experimente/        # Conteúdo da página Experimente
│   ├── Erro/               # Componente de exibição de erros
│   ├── SectionTag/         # Rótulo reutilizável das seções
│   ├── Footer/             # Rodapé
│   └── UI-Components/      # Componentes de interface reutilizáveis
├── globals.css             # Tema Tailwind, fontes e base
├── layout.js               # Layout raiz
└── page.js                 # Landing page (rota /)
public/                     # Imagens e arquivos estáticos
```

---

## Integrantes

| Nome | RM |
|---|---|
| Bruno Guilherme Gonçalves | RM573697 |
| Gabriel Luna Maia | RM570982 |
| Gabriel Cardoso | RM571846 |
| João Lucas Magordo | RM572419 |
| Murilo Vieira dos Reis | RM573764 |

Também disponível em `INTEGRANTES.txt`, na raiz do projeto.
