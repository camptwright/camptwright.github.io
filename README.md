# Campbell Wright - Portfolio Website

A modern, responsive portfolio website featuring resume display and professional links.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Resume Display**: Embedded PDF viewer with download option
- **Social Links**: Direct links to LinkedIn and GitHub profiles
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and semantic HTML

## File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactivity
├── CWrightResume (1).pdf  # Resume PDF
└── README.md           # This file
```

## Testing Locally

### Option 1: Using Python (Recommended)

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Using Node.js

If you have Node.js installed, you can use `http-server`:

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 3: Using VS Code Live Server

If you're using Visual Studio Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Opening

You can also simply open `index.html` directly in your browser, though some features (like the PDF viewer) may work better with a local server.

## Deployment

### Option 0: Home Server Deployment (Advanced)

For deploying on your own home server with a custom domain, see the comprehensive **[Home Server Deployment Guide](DEPLOYMENT_GUIDE.md)**. This guide covers:
- Setting up web servers (Nginx, Apache)
- Router configuration and port forwarding
- Domain name and DNS setup
- SSL/TLS certificate installation
- Security best practices
- Dynamic DNS for dynamic IP addresses
- Troubleshooting and maintenance

### Option 1: GitHub Pages (Free) - Recommended

**See the detailed [GitHub Pages Deployment Guide](GITHUB_PAGES_GUIDE.md) for step-by-step instructions.**

Quick start:
1. Create a repository named `yourusername.github.io` on GitHub
2. Push your files to the repository
3. Enable GitHub Pages in repository Settings
4. Your site will be live at `https://yourusername.github.io`

**Note**: Make sure your PDF file is included in the repository. See [GitHub Pages Guide](GITHUB_PAGES_GUIDE.md) for detailed instructions.

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up or log in
3. Drag and drop your website folder onto the Netlify dashboard
4. Your site will be deployed instantly with a free `.netlify.app` domain
5. You can add a custom domain in the site settings

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Import your project (connect to GitHub or upload directly)
4. Deploy - Vercel will automatically detect it's a static site
5. Your site will be available with a free `.vercel.app` domain

### Option 4: Traditional Web Hosting

For traditional web hosting (cPanel, FTP, etc.):

1. Upload all files to your web server's `public_html` or `www` directory
2. Ensure `index.html` is in the root directory
3. Make sure the PDF file is in the same directory
4. Your site should be accessible via your domain name

**Important**: Ensure your hosting provider supports:
- Static HTML/CSS/JS files
- PDF file hosting
- HTTPS (recommended)

### Option 5: AWS S3 + CloudFront

1. Create an S3 bucket
2. Upload all files to the bucket
3. Enable static website hosting
4. (Optional) Set up CloudFront for CDN and custom domain
5. Configure your domain's DNS

## Custom Domain Setup

### For GitHub Pages:

1. In your repository, go to Settings > Pages
2. Under "Custom domain", enter your domain name
3. Add a `CNAME` file to your repository with your domain name
4. Update your domain's DNS records:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

### For Netlify/Vercel:

1. Go to your site settings
2. Navigate to Domain settings
3. Add your custom domain
4. Follow the DNS configuration instructions provided

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### PDF Not Displaying

- Ensure the PDF file is in the same directory as `index.html`
- Check that the filename matches exactly: `CWrightResume (1).pdf`
- Some browsers may require the site to be served over HTTP/HTTPS (not `file://`)
- Try using a local server instead of opening the file directly

### Links Not Working

- Ensure all URLs are correct in `index.html`
- Check that `target="_blank"` and `rel="noopener noreferrer"` are present for external links

### Styling Issues

- Clear your browser cache
- Ensure `styles.css` is in the same directory as `index.html`
- Check browser console for any errors

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;  /* Change this */
    --primary-dark: #1e40af;   /* Change this */
    /* ... other variables */
}
```

### Updating Resume

1. Replace `CWrightResume (1).pdf` with your new resume
2. Ensure the filename matches in `index.html` (or update the references)

### Adding More Sections

1. Add a new `<section>` in `index.html`
2. Add corresponding navigation link
3. Style as needed in `styles.css`

## Making Your Website Unique

Looking for ideas to make your portfolio stand out? Check out the **[Uniqueness Recommendations Guide](UNIQUENESS_RECOMMENDATIONS.md)** for:
- Visual design enhancements (dark mode, animations, custom themes)
- Interactive elements and advanced features
- Personal branding ideas
- Content suggestions
- Implementation priorities
- Resources and inspiration

## License

This project is open source and available for personal use.

## Contact

- **Email**: camptwright@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/campbell-wright/](https://www.linkedin.com/in/campbell-wright/)
- **GitHub**: [https://github.com/reek4](https://github.com/reek4)

