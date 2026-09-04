# Moodboard

Arquivo visual pessoal inspirado em catálogos editoriais impressos. É um
frontend estático: sem autenticação, servidor, banco de dados ou serviços
externos.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Conteúdo

As imagens ficam em `public/images/` e o catálogo em `src/data.ts`. Para
adicionar uma referência, copie a imagem, crie um item no catálogo e escolha
uma categoria. Manter tudo no repositório torna o deploy previsível e dispensa
credenciais.

Cada item também possui famílias de estilo, técnicas visuais e termos de busca.
Os termos aparecem como links para encontrar referências semelhantes sem
depender de um serviço interno de pesquisa.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica a pasta `dist` a cada
push na branch `main`.

No repositório do GitHub, abra **Settings → Pages** e escolha **GitHub Actions**
em **Build and deployment → Source**. Depois disso, basta fazer push.

## Comandos

- `npm run dev`: inicia o ambiente local.
- `npm run check`: verifica os tipos.
- `npm run build`: gera o site estático em `dist/`.
- `npm run preview`: abre localmente o resultado do build.
