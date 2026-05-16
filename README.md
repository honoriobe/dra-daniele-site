# Site Dra. Daniele Belmiro - Cirurgiã Dentista

Um site elegante e profissional para clínica odontológica, desenvolvido com HTML5, CSS3 e JavaScript vanilla. Design luxo minimalista com paleta preto e ouro.

## 🎨 Design

- **Paleta de Cores**: Preto (#1a1a1a) + Ouro (#d4af37)
- **Tipografia**: Cormorant Garamond (serif) + Montserrat (sans-serif)
- **Estilo**: Luxo Minimalista Contemporâneo
- **Responsividade**: Mobile-first, totalmente responsivo

## 📁 Estrutura de Arquivos

```
dra-daniele-site/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Configuração Git
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Clone ou baixe os arquivos
2. Abra o arquivo `index.html` em um navegador web
3. Pronto! O site está funcionando

### Opção 2: Hospedar no GitHub Pages

1. Crie um repositório no GitHub chamado `seu-usuario.github.io`
2. Clone o repositório
3. Copie os arquivos para o diretório do repositório
4. Faça commit e push:
   ```bash
   git add .
   git commit -m "Adiciona site da Dra. Daniele"
   git push origin main
   ```
5. Acesse `https://seu-usuario.github.io` para ver o site

### Opção 3: Hospedar em Outro Servidor

1. Copie os arquivos para o servidor web
2. Certifique-se de que o `index.html` está na raiz
3. Acesse via URL do seu domínio

## 📝 Seções do Site

### Header
- Logo com inicial "D"
- Navegação (Desktop)
- Botão "Agendar"

### Hero
- Título principal
- Descrição da clínica
- Estatísticas (15+ anos, 2K+ pacientes, 100% dedicação)
- Botões de CTA

### Sobre
- Descrição da clínica
- Missão e valores

### Serviços
- 6 serviços odontológicos:
  - Limpeza e Profilaxia
  - Clareamento Dental
  - Restaurações
  - Implantodontia
  - Ortodontia
  - Cirurgia Oral

### Diferenciais
- 3 diferenciais principais:
  - Tecnologia de Ponta
  - Atendimento Humanizado
  - Ambiente Acolhedor

### Contato
- Informações de contato
- Formulário de agendamento
- Link do Instagram

### Footer
- Logo
- Copyright
- CRO-SP

## 🔧 Personalização

### Alterar Informações de Contato

Edite o arquivo `index.html` e procure pelas seções de contato:

```html
<a href="tel:+5511999999999">(11) 9999-9999</a>
<a href="mailto:contato@dradaniele.com">contato@dradaniele.com</a>
```

### Alterar Cores

Edite o arquivo `styles.css` e modifique as variáveis CSS no `:root`:

```css
:root {
    --primary: #d4af37;      /* Cor ouro */
    --dark: #1a1a1a;         /* Cor escura */
    --text: #e0e0e0;         /* Cor do texto */
    /* ... outras cores */
}
```

### Alterar Tipografia

Edite o arquivo `index.html` e modifique o link do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

### Adicionar Logo

Substitua a inicial "D" por uma imagem:

```html
<!-- Antes -->
<div class="logo-circle">D</div>

<!-- Depois -->
<img src="logo.png" alt="Logo" class="logo-circle">
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## ♿ Acessibilidade

- Navegação por teclado
- Suporte a leitores de tela
- Contraste de cores adequado
- Respeito a `prefers-reduced-motion`

## 🔒 SEO

O site inclui:
- Meta tags básicas
- Open Graph tags
- Estrutura semântica HTML5
- Títulos e descrições otimizadas

## 📊 Funcionalidades JavaScript

- Scroll suave para seções
- Modal do Instagram
- Validação de formulário
- Animações de entrada
- Efeitos de scroll no header

## 🌐 Compatibilidade

- Chrome (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e usar conforme necessário.

## 💡 Dicas

1. **Formulário**: Para funcionar completamente, você precisará configurar um backend para receber as mensagens
2. **Analytics**: Adicione Google Analytics editando o `script.js`
3. **HTTPS**: Sempre use HTTPS em produção
4. **Performance**: Minifique CSS e JS para produção

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Dra. Daniele Belmiro**
