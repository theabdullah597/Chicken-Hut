# 🍗 Chicken Hurt - Quick Start Guide

## Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Create .env file with EmailJS credentials (see EMAILJS_SETUP.md)
cp .env.example .env
# Edit .env with your actual EmailJS credentials

# 3. Start development server
npm run dev

# The site opens at http://localhost:5173
```

## Mobile View Testing

1. **Chrome DevTools Method**
   - Open http://localhost:5173 in Chrome
   - Press `F12` to open DevTools
   - Click the mobile device icon (top-left of DevTools)
   - Select "iPhone 12" or "Pixel 5" to preview
   - Refresh and scroll through all pages

2. **Real Device Method**
   - Find your computer's IP: `ipconfig getifaddr en0` (Mac) or check network settings
   - On mobile: open `http://YOUR_IP:5173`
   - Test hamburger menu, menu page categories, and buttons

## Key Features to Test

### Homepage

- ✅ Carousel slides automatically (next/prev buttons work)
- ✅ All sections display properly on mobile
- ✅ Links in footer are clickable

### Menu Page

- ✅ Search bar filters items in real-time
- ✅ Category sidebar changes menu items
- ✅ "Veg Only" checkbox filters items
- ✅ Click "Add" on any item → redirects to Contact page with item name pre-filled

### Contact Page (Order Form)

- ✅ Form shows item from Menu (if coming from Add button)
- ✅ All fields required before submission
- ✅ Click "Send Order" to submit via EmailJS
- ✅ Success/error message displays

### About Page

- ✅ Shows restaurant info, ratings, delivery times
- ✅ Delivery and collection schedules visible
- ✅ Customer reviews display properly
- ✅ "View on Map" button works

### Navigation

- ✅ Desktop: Navbar shows all links
- ✅ Mobile: Hamburger menu icon appears, tap to toggle nav links
- ✅ All page links work: Home, Menu, About, Contact, Login, Register

### Authentication

- ✅ Register page: create account (stored in browser's localStorage)
- ✅ Login page: sign in with registered email
- ✅ No backend required - all data stored locally

## EmailJS Setup (Required for Order Submission)

1. Go to **EMAILJS_SETUP.md** in the project root
2. Follow the step-by-step guide
3. Get your credentials:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Add to `.env` file
5. Restart dev server: `npm run dev`
6. Test by filling contact form and clicking "Send Order"

## Website Structure

```
chickenhut/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       (hamburger menu, responsive)
│   │   ├── Footer.jsx       (all links clickable)
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx         (7 sections, carousel)
│   │   ├── MenuPage.jsx     (search, filter, add to order)
│   │   ├── About.jsx        (info, schedules, reviews)
│   │   ├── Contact.jsx      (email form, EmailJS)
│   │   ├── Login.jsx        (localStorage auth)
│   │   └── Register.jsx     (localStorage auth)
│   ├── data/
│   │   └── menuText.js      (~150 menu items)
│   ├── App.jsx              (routing)
│   ├── main.jsx             (React entry)
│   └── index.css            (responsive design)
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── EMAILJS_SETUP.md         (EmailJS guide)
└── QUICK_START.md           (this file)
```

## Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy dist/ folder to hosting (Vercel, Netlify, GitHub Pages, etc.)
```

## Deployment Checklist

- [ ] EmailJS credentials configured in .env
- [ ] .env file added to .gitignore (don't commit secrets!)
- [ ] All menu items display correctly
- [ ] Mobile responsiveness verified
- [ ] Contact form tested and working
- [ ] All footer links clickable
- [ ] Logo displays in footer
- [ ] Navigation hamburger menu works on mobile

## Contact Information (Displayed on Site)

- **Restaurant**: Chicken Hurt
- **Address**: 10 Finkle St, Kendal LA9 4AB
- **Phone**: 01539 732111
- **Hours**:
  - Delivery: Mon-Sun 16:30-22:30
  - Collection: Mon-Fri/Sun 11:00-22:30, Sat 14:00-22:30

## Company Info (Footer Only)

- **Company**: BILOFEYZO LTD
- **Address**: ASHLEY HOUSE OFFICE 304, 235-239 HIGH ROAD, LONDON, N22 8HF

## Tips & Tricks

1. **Menu Search**: Type "pizza" or "chicken" to filter items instantly
2. **Veg Only Filter**: Toggle to show only vegetarian items
3. **Category Sidebar**: Click category names to browse by type
4. **Pre-filled Orders**: Click "Add" on menu → auto-fills contact form with item
5. **Mobile Categories**: Swipe left/right on category list for more options
6. **Login Data**: Register once, login persists in browser (localStorage)

## Troubleshooting

| Problem                     | Solution                                            |
| --------------------------- | --------------------------------------------------- |
| "npm ERR!"                  | Run `npm install` again                             |
| Port 5173 in use            | Kill process or use `npm run dev -- --port 3000`    |
| Menu items don't load       | Check menuText.js file exists in src/data/          |
| Contact form won't send     | Follow EMAILJS_SETUP.md to configure EmailJS        |
| Mobile menu doesn't respond | Clear browser cache (Ctrl+Shift+Delete) and refresh |
| Images not loading          | Check internet connection (using Unsplash URLs)     |

## Next Steps

1. ✅ Complete EmailJS setup (EMAILJS_SETUP.md)
2. ✅ Test on mobile and desktop
3. ✅ Deploy to hosting platform
4. ✅ Share with users

---

**Built with React + Vite + React Router + EmailJS**

For questions, refer to the detailed documentation files in the project root.
