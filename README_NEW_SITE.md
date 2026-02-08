# Erfan Zabeh - Personal Website

A modern, minimal/clean design website built with pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
/
├── index.html                 # Homepage (Entry point)
├── src/                       # New modern template
│   ├── pages/
│   │   ├── about.html        # About page
│   │   ├── portfolio.html    # Portfolio & work
│   │   ├── blog.html         # Blog posts
│   │   └── contact.html      # Contact page
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css    # Modern minimal styles
│   │   └── js/
│   │       └── main.js      # JavaScript utilities
│   └── components/           # Reusable components (ready for expansion)
│
├── old-content/              # Archived content (all original files)
│   ├── pages/               # Original HTML pages
│   ├── assets/
│   │   ├── css/            # Original stylesheets
│   │   ├── js/             # Original JavaScript
│   │   ├── img/            # Images
│   │   ├── fonts/          # Custom fonts
│   │   └── skins/          # Theme skins
│   └── components/         # Original components
│
├── css/                      # Legacy CSS (preserved)
├── js/                       # Legacy JavaScript (preserved)
├── img/                      # Legacy images (preserved)
├── fonts/                    # Legacy fonts (preserved)
└── ...                       # Other legacy files

```

## 🎨 Design Features

- **Minimal & Clean**: Light, modern design with professional typography
- **Responsive**: Fully responsive layout works on desktop, tablet, and mobile
- **Fast Loading**: Pure HTML/CSS/JS, no frameworks or dependencies
- **Accessible**: Semantic HTML, proper heading hierarchy, form validation
- **Customizable**: Easy to modify colors, spacing, and layouts via CSS variables

## 🚀 Quick Start

### View the Website
Simply open `index.html` in your browser or deploy to GitHub Pages:

```bash
# The site will be live at: https://erfanzabeh.github.io
```

### Customize Colors
Edit `src/assets/css/style.css` and modify the CSS variables at the top:

```css
:root {
  --primary-color: #2c3e50;      /* Main color */
  --secondary-color: #3498db;    /* Links & buttons */
  --accent-color: #e74c3c;       /* Highlights */
  --light-bg: #f8f9fa;           /* Light backgrounds */
  --text-dark: #2c3e50;          /* Text color */
  --text-light: #7f8c8d;         /* Secondary text */
}
```

### Add/Edit Content

1. **Homepage** - Edit `index.html`
2. **About Page** - Edit `src/pages/about.html`
3. **Portfolio** - Edit `src/pages/portfolio.html`
4. **Blog** - Edit `src/pages/blog.html`
5. **Contact** - Edit `src/pages/contact.html`

## 📋 Content Organization

### New Content
All new, fresh content should go in the `src/` folder:
- Pages: `src/pages/*.html`
- Styles: `src/assets/css/`
- Scripts: `src/assets/js/`

### Archived Content
Your original content is preserved in `old-content/`:
- Original pages linked throughout the site
- Available in the footer under "Archives"
- Can be kept as historical reference or migrated to new template

## 🔗 Navigation Structure

The site has a consistent navigation bar across all pages:
- **Home** → `index.html`
- **About** → `src/pages/about.html`
- **Work** → `src/pages/portfolio.html`
- **Blog** → `src/pages/blog.html`
- **Contact** → `src/pages/contact.html`

Footer links also include archives and legacy content paths.

## 📱 Responsive Breakpoints

The design uses mobile-first responsive design:
- **Desktop**: Full layout (1200px max-width)
- **Tablet**: `@media (max-width: 768px)` - Adjusted spacing and grid
- **Mobile**: `@media (max-width: 480px)` - Single column layout

## 🎯 CSS Classes & Utilities

### Layout Classes
- `.container` - Max-width container with padding
- `.grid` - Auto-fit grid layout
- `.grid-2`, `.grid-3` - Specific grid columns

### Styling Classes
- `.card` - Card component with hover effect
- `.btn`, `.btn-primary`, `.btn-accent` - Button styles
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.mt-1` to `.mt-4` - Margin top
- `.mb-1` to `.mb-4` - Margin bottom
- `.py-1` to `.py-4` - Padding Y-axis

### Sections
- `.hero` - Hero section with gradient background
- `.light` - Light gray background section
- `.dark` - Dark background section

## 🔄 GitHub Pages Deployment

Your repository `erfanzabeh/erfanzabeh.github.io` is already set up for GitHub Pages:

1. Push changes to the `main` branch
2. GitHub automatically deploys the site
3. Access at: `https://erfanzabeh.github.io`

```bash
# Deploy changes:
git add .
git commit -m "Update website content"
git push origin main
```

## 📝 Customization Guide

### Change the Logo/Title
In all HTML files, update:
```html
<a href="../../index.html" class="logo">Erfan Zabeh</a>
```

### Update Social Links
In `src/pages/contact.html`, modify the social media links:
```html
<li><a href="https://twitter.com/yourhandle" target="_blank">Twitter</a></li>
```

### Add New Pages
1. Create a new `.html` file in `src/pages/`
2. Copy the header and footer from existing pages
3. Add links in the navigation menu

### Add Images
Place images in appropriate locations and reference:
- For `src/pages/`: `../assets/img/filename.jpg`
- For `index.html`: `src/assets/img/filename.jpg`

## 🛠️ Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables and flexbox/grid
- **JavaScript**: Vanilla JS, no dependencies
- **Performance**: Zero external dependencies, minimal file size
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📞 Support

For questions about the site structure or design, check:
- CSS variables in `src/assets/css/style.css`
- Navigation and links in individual HTML files
- JavaScript utilities in `src/assets/js/main.js`

---

**Last Updated**: February 8, 2026  
**Template**: Minimal/Clean Design  
**Status**: Ready for deployment
