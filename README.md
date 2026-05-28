# NattanFit — App de Treino Personalizado

App PWA (Progressive Web App) de rastreamento de treino criado especialmente para **Nattan**, com foco em hipertrofia muscular e correção postural.

---

## O que é esse app?

O NattanFit é um app 100% offline, sem cadastro, sem servidor e sem custos. Tudo roda direto no seu celular ou computador, com dados salvos localmente. Ele inclui:

- **5 dias de treino completos** (Upper A/B, Lower A/B e Pull Postural)
- **Rotina postural** de 10 minutos específica para cifose, rotação de tronco e assimetria de ombros
- **Timer de descanso** automático com som ao terminar
- **Sistema de XP e níveis** gamificado
- **Recordes pessoais** por exercício (PR tracker)
- **Gráfico de evolução de peso corporal**
- **Checklist diário de dieta** com plano de refeições completo
- **Rastreador de sono**
- **Backup e restauração** via JSON
- **Funciona offline** após o primeiro acesso

---

## Como publicar no GitHub Pages (passo a passo)

### 1. Crie uma conta no GitHub
Acesse [github.com](https://github.com) e crie uma conta gratuita se ainda não tiver.

### 2. Crie um novo repositório
- Clique em **"New repository"** (botão verde)
- Nome sugerido: `nattanfit`
- Deixe como **Public**
- Clique em **"Create repository"**

### 3. Faça upload dos arquivos
- Na página do repositório, clique em **"uploading an existing file"**
- Arraste todos os arquivos da pasta `fitness-app/` para a área de upload:
  - `index.html`
  - `style.css`
  - `script.js`
  - `manifest.json`
  - `sw.js`
- Clique em **"Commit changes"**

### 4. Ative o GitHub Pages
- Vá em **Settings** (aba no repositório)
- Role até a seção **"Pages"** (menu lateral esquerdo)
- Em **"Source"**, selecione **"Deploy from a branch"**
- Em **"Branch"**, selecione **"main"** e pasta **"/ (root)"**
- Clique em **"Save"**

### 5. Acesse o app
- Aguarde 1-2 minutos
- Seu app estará disponível em: `https://SEU_USUARIO.github.io/nattanfit/`
- Exemplo: `https://nattan.github.io/nattanfit/`

---

## Como instalar como app no Android

### Usando o Chrome:
1. Abra o Chrome e acesse a URL do seu app
2. Aguarde o site carregar completamente
3. Toque nos **três pontos** (⋮) no canto superior direito
4. Selecione **"Adicionar à tela inicial"**
5. Confirme o nome *"NattanFit"* e toque em **"Adicionar"**
6. O ícone aparecerá na sua tela inicial como um app normal

> O app funcionará em modo tela cheia, sem barra de endereços, e funcionará offline após a primeira visita.

---

## Como instalar como app no iPhone (iOS)

### Usando o Safari:
1. Abra o **Safari** (obrigatório — não funciona no Chrome do iOS para instalação)
2. Acesse a URL do seu app
3. Toque no ícone de **compartilhar** (quadrado com seta para cima, na barra inferior)
4. Role a lista e toque em **"Adicionar à Tela de Início"**
5. Confirme o nome *"NattanFit"* e toque em **"Adicionar"**
6. O app aparecerá na sua tela inicial

> No iOS, o armazenamento offline tem algumas limitações, mas o app funcionará normalmente enquanto houver conexão.

---

## Como fazer backup dos dados

### Exportar (salvar backup):
1. Abra o app
2. Toque no ícone **⚙️** no canto superior direito
3. Toque em **"Exportar Dados"**
4. Um arquivo `nattan-treino-AAAA-MM-DD.json` será baixado
5. Salve em um lugar seguro (Google Drive, WhatsApp para si mesmo, etc.)

### Importar (restaurar backup):
1. Abra o app
2. Toque no ícone **⚙️**
3. Toque em **"Importar Dados"**
4. Selecione o arquivo `.json` que você exportou anteriormente
5. Confirme a importação

> **Atenção:** Ao importar, os dados atuais serão substituídos. Exporte primeiro se quiser manter os dados atuais.

---

## Estrutura de arquivos

```
fitness-app/
├── index.html      → Estrutura HTML de todo o app (telas, modais, navegação)
├── style.css       → Estilos, tema dark, componentes visuais
├── script.js       → Lógica completa: treinos, XP, timer, histórico, dieta, postura
├── manifest.json   → Configuração PWA (ícone, nome, cores)
├── sw.js           → Service Worker para funcionamento offline
└── README.md       → Este arquivo
```

---

## Como adicionar fotos ou GIFs dos exercícios no futuro

### Estrutura recomendada:
```
fitness-app/
└── assets/
    └── exercises/
        ├── supino-reto-halteres.gif
        ├── remada-baixa-neutra.gif
        ├── agachamento-livre.gif
        └── ...
```

### Como nomear os arquivos:
Use o nome do exercício em minúsculas, com hífens no lugar de espaços e sem acentos. Exemplos:
- `supino-inclinado-halteres.gif`
- `terra-romeno.gif`
- `elevacao-lateral-halteres.gif`
- `face-pull.gif`

### Como referenciar no código (script.js):
No objeto do exercício dentro de `WORKOUT_DATA`, adicione a propriedade `gifPath`:
```js
{
  name: 'Supino reto com halteres',
  gifPath: 'assets/exercises/supino-reto-halteres.gif',
  sets: 4,
  ...
}
```

Depois, no `buildExerciseCard()` dentro de `script.js`, adicione a imagem após o nome do exercício:
```js
if (ex.gifPath) {
  html += `<img src="${ex.gifPath}" alt="${ex.name}" 
    style="width:100%;border-radius:8px;margin-bottom:8px;object-fit:cover;max-height:180px" 
    loading="lazy"/>`;
}
```

### Dicas para GIFs:
- Resolução recomendada: 480×270px ou 640×360px
- Tamanho máximo: 2MB por GIF para não afetar o carregamento offline
- Fontes gratuitas: [Giphy](https://giphy.com), [ExRx.net](https://exrx.net)
- Para criar do zero: grave com o celular e use o app **EZGIF** (site) para converter

---

## Perguntas frequentes

**O app perde meus dados se eu limpar o cache?**
Sim. Por isso, exporte o backup regularmente. Recomendamos exportar uma vez por semana.

**Posso usar no tablet?**
Sim! O layout se adapta bem em telas maiores, mas foi otimizado para celular (max-width 480px centralizado).

**Posso compartilhar com outras pessoas?**
O app é personalizado para Nattan, mas tecnicamente qualquer pessoa pode usá-lo. Os dados de treino e plano alimentar foram montados especificamente para seu perfil.

---

*Desenvolvido com HTML, CSS e JavaScript puro — sem dependências externas.*
