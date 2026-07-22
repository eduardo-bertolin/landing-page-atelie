# Ateliê Tati Bertolin — Landing Page Moderna & High-Performance

Landing Page institucional e catálogo de produtos artesanais para o **Ateliê Tati Bertolin** (costura criativa e patchwork autoral). Desenvolvida com foco em **estética refinada**, **animações fluídas (Framer Motion)**, **integração backend serverless para envio de e-mails** e **otimização extrema de performance (WebP, Lazy Loading, Code Splitting)**.

---

## ✨ Destaques do Projeto

- 🎨 **Design System Artesanal & Sofisticado**: Cores quentes (terracota, nude, dourado, cream), tipografia editorial (`Cormorant Garamond` + `DM Sans`), efeitos glassmorphism e sombras difusas.
- 🎬 **Animações e Microinterações Fluídas**: Construídas com `framer-motion` (stagger fade-ins, menu mobile deslizante, contadores numéricos animados e modais lightbox).
- 📍 **Navegação Inteligente ao Centro**: Rolagem suave que posiciona cada seção no centro vertical da tela (`block: 'center'`).
- ⚡ **Alta Performance (Lighthouse 90+)**:
  - Imagens convertidas para o formato **WebP** otimizado com Sharp.
  - Pré-carregamento prioritário de imagem LCP no `<head>`.
  - Atributos `loading="lazy"`, `decoding="async"` e dimensões explícitas para evitar CLS.
  - Code Splitting no Vite dividindo dependências em chunks isolados.
- 🛡️ **Formulário com reCAPTCHA & Serverless Email**: Validação anti-spam no frontend e envio seguro de e-mails via Serverless Function.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[React 19](https://react.dev/)**: Biblioteca principal para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e produtividade.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização utilitária moderna e responsiva.
- **[Vite 8](https://vite.dev/)**: Build tool ultrarrápido com Hot Module Replacement (HMR).
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações físicas e transições de estado.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Ícones vetoriais leves e elegantes.
- **[React Google ReCAPTCHA](https://github.com/doersino/react-google-recaptcha)**: Integração com o Google reCAPTCHA v2 para prevenção de spam.
- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Notificações visuais de status ao enviar mensagens.

### Backend & Envio de E-mails ✉️
- **[Netlify Functions](https://docs.netlify.com/functions/overview/)**: Função Serverless em Node.js (`send-email.ts`) executada em ambiente isolado e seguro no backend da Netlify, sem expor servidores tradicionais.
- **[Nodemailer](https://nodemailer.com/)**: Módulo Node.js para transporte seguro de e-mails via protocolo **SMTP**.
- **Segurança & Variáveis de Ambiente**:
  - As credenciais SMTP (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`) ficam totalmente protegidas nas variáveis de ambiente da Netlify.
  - Suporte a cabeçalhos **CORS** restritivos e validação de payloads recebidos via `POST`.

---

## 📂 Estrutura de Pastas

```text
landing-page-atelie/
├── netlify/
│   └── functions/
│       └── send-email.ts    # Serverless Function em TypeScript para envio de e-mail via Nodemailer
├── public/
│   └── images/              # Imagens estáticas otimizadas em WebP pré-carregadas
├── src/
│   ├── assets/              # Imagens e vetores adicionais
│   ├── components/          # Componentes modulares (Header, Hero, Info, Sobre, Servicos, Portfolio, Avaliacoes, Contato, Footer)
│   ├── pages/               # Página principal (Home.tsx)
│   └── styles/              # Design System Tailwind CSS (index.css, utility.css)
├── index.html               # Preload de fontes e imagem LCP prioritária
└── vite.config.ts           # Configuração do Vite com Code Splitting (manualChunks)
```

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/eduardo-bertolin/landing-page-atelie.git
   cd landing-page-atelie
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173`.

4. **Gerar a versão otimizada de produção:**
   ```bash
   npm run build
   ```

5. **Testar o build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🔒 Variáveis de Ambiente (.env)

Para habilitar a funcionalidade de envio de e-mails no formulário de contato via Netlify Functions, crie um arquivo `.env` na raiz do projeto (ou configure no painel da Netlify) com as seguintes chaves:

```env
SMTP_HOST=smtp.seuprovedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@dominio.com
SMTP_PASS=sua-senha-ou-app-password
CONTACT_EMAIL=destino-mensagens@dominio.com
ALLOWED_ORIGIN=https://seu-dominio.netlify.app
```

---
