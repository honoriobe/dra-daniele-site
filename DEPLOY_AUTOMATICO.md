# 🚀 Guia Completo: Deploy Automático GitHub + Vercel

## O que você vai conseguir fazer:

✅ Editar arquivos no GitHub  
✅ Seu site atualiza automaticamente  
✅ URL: `https://dra-daniele-site.vercel.app`  
✅ Sem precisar fazer nada manualmente  

---

## 📋 PASSO 1: Criar Conta no GitHub (Se não tiver)

1. Acesse: **https://github.com/signup**
2. Preencha:
   - Email
   - Senha
   - Nome de usuário
3. Clique em **"Create account"**
4. Confirme seu email

---

## 📂 PASSO 2: Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. Preencha:
   - **Repository name**: `dra-daniele-site`
   - **Description**: `Site da Dra. Daniele Belmiro - Cirurgiã Dentista`
   - **Visibility**: Escolha **Public**
3. Clique em **"Create repository"**

---

## 📤 PASSO 3: Fazer Upload dos Arquivos

### Opção A: Pelo GitHub (Mais Fácil)

1. No seu repositório, clique em **"Add file"** → **"Upload files"**
2. Arraste ou selecione estes arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
   - `vercel.json`
3. Clique em **"Commit changes"**

### Opção B: Pelo Git (Mais Profissional)

```bash
# 1. Abra o terminal/CMD
# 2. Navegue até a pasta do projeto
cd caminho/para/dra-daniele-site

# 3. Configure o Git
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@gmail.com"

# 4. Inicialize o repositório
git init

# 5. Adicione os arquivos
git add .

# 6. Faça o commit
git commit -m "Adiciona site da Dra. Daniele Belmiro"

# 7. Adicione a URL remota (copie do GitHub)
git remote add origin https://github.com/seu-usuario/dra-daniele-site.git

# 8. Faça o push
git branch -M main
git push -u origin main
```

---

## 🔗 PASSO 4: Conectar ao Vercel

### Passo 4.1: Criar Conta no Vercel

1. Acesse: **https://vercel.com/signup**
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel
4. Complete seu perfil

### Passo 4.2: Importar Projeto

1. Acesse: **https://vercel.com/dashboard**
2. Clique em **"New Project"**
3. Clique em **"Select a Git Repository"**
4. Procure por `dra-daniele-site`
5. Clique em **"Import"**
6. Deixe as configurações padrão
7. Clique em **"Deploy"**

### Passo 4.3: Aguarde o Deploy

- Você verá uma tela com o progresso
- Quando aparecer ✅ **"Congratulations!"**, está pronto!
- Copie a URL: `https://dra-daniele-site.vercel.app`

---

## ✅ PASSO 5: Testar o Deploy Automático

### Teste 1: Editar pelo GitHub

1. Acesse seu repositório no GitHub
2. Abra o arquivo `index.html`
3. Clique no ícone de lápis (✏️ Edit)
4. Procure por: `Dra. Daniele Belmiro`
5. Altere para: `Dra. Daniele Belmiro - Seu Consultório`
6. Clique em **"Commit changes"**
7. Aguarde 1-2 minutos
8. Acesse seu site e veja a mudança!

### Teste 2: Editar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/dra-daniele-site.git
cd dra-daniele-site

# 2. Abra index.html em um editor (VS Code, Notepad++, etc)

# 3. Faça uma mudança

# 4. Salve o arquivo

# 5. No terminal, faça:
git add .
git commit -m "Atualiza informações"
git push origin main

# 6. Aguarde 1-2 minutos e veja seu site atualizar!
```

---

## 📝 EDIÇÕES COMUNS

### Alterar Telefone

**Arquivo**: `index.html`  
**Procure por**: `(11) 9999-9999`  
**Altere para**: Seu número

```html
<a href="tel:+5511999999999">(11) 9999-9999</a>
```

### Alterar Email

**Arquivo**: `index.html`  
**Procure por**: `contato@dradaniele.com`  
**Altere para**: Seu email

```html
<a href="mailto:contato@dradaniele.com">contato@dradaniele.com</a>
```

### Alterar Endereço

**Arquivo**: `index.html`  
**Procure por**: `São Paulo, SP`  
**Altere para**: Seu endereço

```html
<span class="contact-value">São Paulo, SP</span>
```

### Alterar Instagram

**Arquivo**: `index.html`  
**Procure por**: `@clinicadradanielebelmiro`  
**Altere para**: Seu perfil

```html
@clinicadradanielebelmiro
https://www.instagram.com/clinicadradanielebelmiro/
```

### Alterar Cores (Ouro)

**Arquivo**: `styles.css`  
**Procure por**: `--primary: #d4af37;`  
**Altere para**: Outra cor (ex: `#ff6b6b` para vermelho)

```css
:root {
    --primary: #d4af37;      /* Cor ouro */
    --dark: #1a1a1a;         /* Cor escura */
}
```

---

## 🔄 FLUXO DE TRABALHO DIÁRIO

```
1. Você edita um arquivo (index.html, styles.css, etc)
   ↓
2. Você faz commit e push no GitHub
   ↓
3. GitHub notifica o Vercel
   ↓
4. Vercel faz o deploy automaticamente
   ↓
5. Seu site é atualizado em 1-2 minutos
   ↓
6. Pronto! Mudanças ao vivo!
```

---

## 🎯 DICAS IMPORTANTES

✅ **Sempre teste localmente** antes de fazer push  
✅ **Use mensagens de commit descritivas** (ex: "Atualiza telefone")  
✅ **Faça backup** dos seus arquivos  
✅ **Aguarde 2-3 minutos** após fazer push para ver as mudanças  
✅ **Atualize a página** com Ctrl+F5 (ou Cmd+Shift+R no Mac)  

---

## ❌ PROBLEMAS COMUNS

### Problema: Site não atualiza após push

**Solução:**
1. Aguarde 2-3 minutos
2. Atualize a página (Ctrl+F5)
3. Verifique em vercel.com/dashboard se o deploy foi bem-sucedido

### Problema: Erro no deploy

**Solução:**
1. Acesse vercel.com/dashboard
2. Clique no seu projeto
3. Vá para "Deployments"
4. Clique no deploy com erro
5. Veja o log para entender o problema

### Problema: Arquivo não aparece

**Solução:**
1. Certifique-se de que o arquivo foi feito commit
2. Verifique se o nome está correto
3. Faça um novo push

---

## 📊 MONITORAR SEUS DEPLOYMENTS

1. Acesse: **https://vercel.com/dashboard**
2. Selecione seu projeto
3. Vá para **"Deployments"**
4. Você verá:
   - ✅ Deployments bem-sucedidos (verde)
   - ❌ Deployments com erro (vermelho)
   - ⏳ Deployments em progresso (azul)

---

## 🌐 USAR DOMÍNIO PRÓPRIO (Opcional)

Se você tiver um domínio (ex: www.dradaniele.com.br):

1. No Vercel, vá para **Settings** → **Domains**
2. Clique em **"Add Domain"**
3. Digite seu domínio
4. Siga as instruções para configurar DNS
5. Aguarde até 48 horas para propagação

---

## 📞 PRECISA DE AJUDA?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Stack Overflow**: https://stackoverflow.com

---

## ✨ RESUMO DO QUE VOCÊ CONSEGUIU

✅ Site hospedado no Vercel  
✅ URL profissional: https://dra-daniele-site.vercel.app  
✅ Deploy automático ao fazer push no GitHub  
✅ Sem precisar fazer nada manualmente  
✅ Site sempre atualizado com suas mudanças  

**Parabéns! Seu site está pronto! 🎉**
