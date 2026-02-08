# 🚀 Quick Start Guide

## What Was Created

Your website has been completely redesigned with a **modern, minimal/clean template**. Here's what you have:

### ✅ New Modern Website
- **Homepage**: `index.html` (modern hero, featured work, blog preview)
- **About Page**: `src/pages/about.html` (bio, expertise, philosophy)
- **Portfolio**: `src/pages/portfolio.html` (projects, publications, awards)
- **Blog**: `src/pages/blog.html` (articles, newsletter)
- **Contact**: `src/pages/contact.html` (form, email, FAQ)

### ✅ Modern Styling
- **CSS Framework**: `src/assets/css/style.css`
  - Customizable colors via CSS variables
  - Responsive design (mobile, tablet, desktop)
  - Professional minimal aesthetic
  - Fast loading (no dependencies)

### ✅ JavaScript Utilities
- **Main JS**: `src/assets/js/main.js`
  - Navigation management
  - Smooth scrolling
  - Form utilities

### ✅ Your Original Content Preserved
- **Archived in**: `old-content/` folder
- **Accessible via**: Footer "Archives" section
- **Linked throughout**: New pages link to original content

---

## 📋 File Structure Summary

```
Your Website Root (erfanzabeh.github.io)
│
├── 🏠 index.html                    ← NEW HOMEPAGE
├── 📖 README_NEW_SITE.md            ← Full documentation
├── 📋 SITE_STRUCTURE.txt            ← Detailed file structure
├── ⚡ QUICK_START.md                ← This file
│
├── src/                             ← NEW MODERN TEMPLATE
│   ├── pages/
│   │   ├── about.html
│   │   ├── portfolio.html
│   │   ├── blog.html
│   │   └── contact.html
│   └── assets/
│       ├── css/style.css
│       └── js/main.js
│
├── old-content/                     ← YOUR ORIGINAL CONTENT
│   ├── pages/
│   │   ├── AboutMe.html
│   │   ├── Publication.html
│   │   ├── Research.html
│   │   ├── Teaching.html
│   │   ├── Blog.html
│   │   ├── CV.html
│   │   └── ...
│   └── assets/
│
└── (legacy files still present)
```

---

## 🎨 Design Features

- ✨ **Modern & Clean**: Minimal design focused on content
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🚀 **Fast Loading**: Zero dependencies, pure HTML/CSS/JS
- ♿ **Accessible**: Semantic HTML, proper heading structure
- 🎯 **Professional**: Suitable for academic/research profile

---

## 🔧 Customization (Most Common Changes)

### Change Colors
Edit `src/assets/css/style.css` - look for `:root` section:
```css
--primary-color: #2c3e50;      /* Main dark color */
--secondary-color: #3498db;    /* Links & buttons */
--accent-color: #e74c3c;       /* Highlights */
```

### Update Your Name/Logo
In all HTML files, find and change:
```html
<a href="../../index.html" class="logo">Erfan Zabeh</a>
```

### Add Your Photo
In `src/pages/about.html`, replace the placeholder:
```html
<div style="background-color: #f0f0f0; ...">
  <p>Your photo or portrait here</p>
</div>
```

### Update Social Links
In `src/pages/contact.html`, modify:
```html
<li><a href="https://twitter.com/yourhandle" target="_blank">Twitter</a></li>
```

---

## 📝 Content Updates

### Edit Homepage Content
- File: `index.html`
- Sections to update:
  - Hero title & subtitle
  - Featured work descriptions
  - About preview
  - Blog preview
  - Footer info

### Edit Page Content
- About: `src/pages/about.html`
- Portfolio: `src/pages/portfolio.html`
- Blog: `src/pages/blog.html`
- Contact: `src/pages/contact.html`

Each page has the same header/footer structure, so updates are consistent.

---

## 🚀 Deploy to GitHub Pages

Your repository is already set up! Just push your changes:

```bash
# From the command line
cd /Users/Erfan/Documents/GitHub/Untitled
git add .
git commit -m "Update website with new modern design"
git push origin main
```

**Live at**: `https://erfanzabeh.github.io` (within minutes)

---

## 🎓 Navigation Structure

### Main Menu (Header)
- Home → `index.html`
- About → `src/pages/about.html`
- Work → `src/pages/portfolio.html`
- Blog → `src/pages/blog.html`
- Contact → `src/pages/contact.html`

### Archives (Footer)
- Publications → `old-content/pages/Publication.html`
- Teaching → `old-content/pages/Teaching.html`
- Research → `old-content/pages/Research.html`
- CV → `old-content/pages/CV.html`
- Full Bio → `old-content/pages/AboutMe.html`
- Blog Archive → `old-content/pages/Blog.html`

---

## ✨ Key Improvements

**OLD**: Bootstrap 3 template with heavy framework
**NEW**: 
- Modern HTML5
- Lightweight CSS (single file)
- Fast loading
- Better mobile experience
- Professional minimal design
- Easy to customize
- No dependencies

---

## 🔍 What's Included

### CSS Features
- ✓ CSS Variables for colors & spacing
- ✓ Flexbox & Grid layouts
- ✓ Responsive breakpoints
- ✓ Smooth transitions & animations
- ✓ Card components
- ✓ Button styles
- ✓ Typography system

### HTML Features
- ✓ Semantic markup
- ✓ Meta tags for SEO
- ✓ Mobile viewport
- ✓ Proper heading hierarchy
- ✓ Form inputs
- ✓ Footer sections

### JavaScript Features
- ✓ Navigation management
- ✓ Smooth scrolling
- ✓ Email validation
- ✓ Form helpers
- ✓ Utility functions

---

## 📚 Documentation

For complete details, see:
- **README_NEW_SITE.md** - Full customization guide
- **SITE_STRUCTURE.txt** - Complete file structure & info
- This file - Quick reference

---

## ❓ Common Questions

**Q: Where is my original content?**
A: In `old-content/pages/` folder. Linked in the footer under "Archives".

**Q: Do I need to change the old files?**
A: No, they're preserved. You can migrate content gradually to the new template.

**Q: How do I add a new page?**
A: Create an HTML file in `src/pages/`, add links to navigation, copy header/footer.

**Q: Can I change the color scheme?**
A: Yes! Edit `src/assets/css/style.css` CSS variables at the top.

**Q: Is my site live?**
A: After you push to GitHub, it's live at `erfanzabeh.github.io` within minutes.

---

## 📞 Next Steps

1. ✅ Review the new design (open `index.html` in browser)
2. ✅ Update your information (name, photo, bio)
3. ✅ Customize colors if desired
4. ✅ Add more content to pages
5. ✅ Push to GitHub (`git push origin main`)
6. ✅ Visit your live site!

---

**Status**: ✅ Ready to Deploy  
**Created**: February 8, 2026  
**Template**: Minimal/Clean Design  
**Repo**: erfanzabeh/erfanzabeh.github.io
