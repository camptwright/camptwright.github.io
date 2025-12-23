# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages, which is free and easy to use.

## Prerequisites

- A GitHub account (free)
- Git installed on your computer
- Your website files ready

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - **Repository name:** `yourusername.github.io` (replace `yourusername` with your GitHub username)
     - OR use any name like `portfolio` or `website`
   - **Description:** (optional) "My portfolio website"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we'll add files manually)
4. Click "Create repository"

## Step 2: Initialize Git and Push Files

### On Your Windows PC:

1. **Open PowerShell in your website directory:**
   ```powershell
   cd C:\code\website
   ```

2. **Initialize Git repository (if not already done):**
   ```powershell
   git init
   ```

3. **Add all files:**
   ```powershell
   git add .
   ```

4. **Make your first commit:**
   ```powershell
   git commit -m "Initial commit - Portfolio website"
   ```

5. **Add GitHub as remote:**
   ```powershell
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```
   (Replace `yourusername` with your actual GitHub username)

6. **Push to GitHub:**
   ```powershell
   git branch -M main
   git push -u origin main
   ```

7. **Enter your GitHub credentials when prompted:**
   - Username: Your GitHub username
   - Password: Use a Personal Access Token (not your password)
     - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
     - Generate new token with `repo` permissions
     - Copy and paste as password

## Step 3: Enable GitHub Pages

### Option A: Using Repository Name `username.github.io` (Recommended)

If you named your repository `yourusername.github.io`:
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main`
6. Select folder: `/ (root)`
7. Click "Save"
8. Your site will be live at: `https://yourusername.github.io`

### Option B: Using Custom Repository Name

If you used a different repository name:
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main`
6. Select folder: `/ (root)`
7. Click "Save"
8. Your site will be live at: `https://yourusername.github.io/repository-name`

## Step 4: Update File Paths (If Using Custom Repository Name)

If your site is at `yourusername.github.io/repository-name`, you need to update paths:

### Update `index.html` and other HTML files:

**Before:**
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
<a href="resume.html">Resume</a>
```

**After:**
```html
<link rel="stylesheet" href="/repository-name/styles.css">
<script src="/repository-name/script.js"></script>
<a href="/repository-name/resume.html">Resume</a>
```

**OR use relative paths:**
```html
<link rel="stylesheet" href="./styles.css">
<script src="./script.js"></script>
<a href="./resume.html">Resume</a>
```

### Update PDF path in `resume.html`:

**Before:**
```html
<iframe src="CWrightResume (1).pdf" ...>
```

**After:**
```html
<iframe src="/repository-name/CWrightResume (1).pdf" ...>
```

## Step 5: Verify Your Site is Live

1. Wait 1-2 minutes for GitHub Pages to build
2. Visit your site URL:
   - `https://yourusername.github.io` (if using username.github.io)
   - `https://yourusername.github.io/repository-name` (if using custom name)
3. Check all pages work:
   - Home page
   - Resume page (PDF should load)
   - Projects page
   - Contact page
4. Test all links and navigation

## Step 6: Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file to your repository:**
   ```powershell
   # In your website directory
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS at your domain registrar:**
   - Add a CNAME record:
     - Name: `@` (or `www`)
     - Value: `yourusername.github.io`
   - OR add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Enable custom domain in GitHub:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS" (after DNS propagates)

## Updating Your Website

Whenever you make changes:

```powershell
cd C:\code\website
git add .
git commit -m "Description of changes"
git push
```

Changes will be live in 1-2 minutes.

## Troubleshooting

### Site Not Loading

1. **Check repository name:**
   - If using `username.github.io`, it must match your GitHub username exactly
   - Case-sensitive!

2. **Check branch and folder:**
   - Settings → Pages → Source should be `main` branch, `/ (root)` folder

3. **Check build status:**
   - Go to repository → "Actions" tab
   - Check if there are any build errors

4. **Wait a few minutes:**
   - GitHub Pages can take 1-10 minutes to update

### PDF Not Loading

1. **Check file is committed:**
   ```powershell
   git ls-files | findstr pdf
   ```

2. **Check file path in HTML:**
   - Use relative paths: `./CWrightResume (1).pdf`
   - Or absolute: `/repository-name/CWrightResume (1).pdf`

3. **File size limit:**
   - GitHub has a 100MB file size limit
   - If PDF is too large, compress it or host elsewhere

### Links Not Working

1. **Check file paths:**
   - All paths should be relative or absolute from root
   - Case-sensitive on GitHub Pages

2. **Check file extensions:**
   - Make sure all files have correct extensions (.html, .css, .js)

### 404 Errors

1. **Check file names:**
   - GitHub Pages is case-sensitive
   - `index.html` must be lowercase

2. **Check file locations:**
   - All files should be in the root directory (or update paths accordingly)

## Best Practices

1. **Use relative paths:**
   - `./styles.css` instead of `/styles.css` (unless using username.github.io)

2. **Keep file names lowercase:**
   - `index.html` not `Index.html`

3. **Test locally before pushing:**
   - Use `python -m http.server` to test

4. **Use meaningful commit messages:**
   - Helps track changes

5. **Regular backups:**
   - Your code is on GitHub, but also keep local backups

## Quick Reference

```powershell
# Initial setup
cd C:\code\website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main

# Updates
git add .
git commit -m "Update message"
git push
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Jekyll (Optional Static Site Generator)](https://jekyllrb.com/)

---

Your website should now be live on GitHub Pages! 🚀

