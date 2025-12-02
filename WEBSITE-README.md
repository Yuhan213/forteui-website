# ForteUI Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Designed from Figma with pixel-perfect implementation.

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach that scales beautifully from phone to desktop
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Custom Tailwind Theme**: Semantic color naming and design tokens extracted from Figma
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 🚀 Tech Stack

- **React 18.3.1**: Modern React with hooks
- **Vite 6.4.1**: Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Custom Design System**: Based on Figma design with semantic tokens

## 📦 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation with responsive mobile menu
│   │   ├── Hero.jsx         # Hero section with profile image
│   │   ├── Testimonial.jsx  # Client testimonials carousel
│   │   └── Footer.jsx       # Footer with social links
│   ├── assets/
│   │   └── icons.jsx        # SVG icon components
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and Tailwind directives
├── public/                  # Static assets
├── index.html               # HTML entry point
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Components

### Header
- Responsive navigation with dropdown menus
- Mobile hamburger menu with smooth transitions
- Search functionality
- Active tab highlighting

### Hero Section
- Large heading with responsive typography
- Professional profile image with decorative borders
- Call-to-action button
- Backdrop blur effect

### Testimonials
- Carousel with multiple client testimonials
- Company logos (Instacart, Coinbase)
- Navigation dots and arrow controls
- Smooth slide transitions

### Footer
- Company branding
- Social media links (Twitter, Instagram, LinkedIn)
- Legal links (Terms, Privacy, Cookies)
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: `#1a4742` (Dark teal)
- **Primary Dark**: `#153935`
- **Secondary**: `#b5c6c4` (Light teal)
- **Surface Light**: `#e2eae9` (Light gray)
- **Surface**: `#f8fcfc` (Off white)

### Typography
- **Display**: Montserrat (headings, logo)
- **Body**: Lato (paragraphs, buttons)
- **UI Text**: Plus Jakarta Sans (navigation, labels)
- **Content**: Inter (footer text)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run mcp-build` - Build MCP server (TypeScript compilation)
- `npm run mcp-start` - Start MCP server on port 3846

## 📱 Responsive Features

### Mobile (< 768px)
- Hamburger menu navigation
- Single column layout
- Stacked testimonial cards
- Optimized image sizes
- Touch-friendly buttons

### Tablet (768px - 1024px)
- Collapsible navigation
- Two-column layouts where appropriate
- Medium-sized images
- Balanced spacing

### Desktop (> 1024px)
- Full horizontal navigation
- Multi-column layouts
- Large hero images
- Side-by-side testimonials
- Maximum content width: 1440px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔗 MCP Server Integration

This project also includes a Model Context Protocol (MCP) server for AI integrations:

- **Endpoint**: `http://127.0.0.1:3846/mcp`
- **Tools**: add, multiply, greet
- **Configuration**: See `.vscode/mcp.json`

Start the MCP server:
```bash
npm run mcp-start
```

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use!

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
