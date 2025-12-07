# 🎨 Retro Portfolio - Modern OS-Style Design

A stunning retro-themed portfolio website with a modern twist, featuring a custom OS interface, glass-morphism dock, music player, and interactive notepad.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🖥️ **Desktop Environment**
- **Three-column layout** with music player, main content, and desktop icons
- **Mesh gradient background** with animated pastel blobs and grain texture
- **Glass-morphism dock** with reflective shine effects
- **Responsive design** that works on all devices

### 🎵 **Music Player**
- Real HTML5 audio playback with 3 lofi tracks
- Play/pause, previous/next controls
- Real-time progress bar and time display
- Interactive volume control
- Auto-advance to next track
- Animated album art with spin effects

### 📝 **Notepad Widget**
- Floating, draggable notepad window
- Auto-save functionality with localStorage
- Character counter and status indicators
- Minimize and close controls
- Clean, distraction-free interface

### 🌐 **Main Browser Window**
- Search functionality
- Multiple content sections:
  - **GitHub Projects** - Showcase of major projects with live demos
  - **Live Portfolio** - Embedded view of main portfolio site
  - **About Me** - Background and education
  - **Skills** - Technical skills and tech stack
  - **Certifications** - Professional certifications with links
  - **Goals 2025** - Progress tracking for yearly goals
  - **Resume** - Downloadable resume and CV

### 🎯 **Interactive Elements**
- **Desktop icons** with click interactions and notifications
- **Glass dock** with app launchers and active indicators
- **Smooth animations** throughout the interface
- **Keyboard shortcuts** (ESC to home, Ctrl+K for search)
- **Easter eggs** hidden throughout

## 🚀 Live Demo

🔗 **[View Live Site](https://retrosathya.vercel.app/)**

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with gradients, animations, and glass-morphism
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Google Fonts** - Press Start 2P (pixel) & VT323 (retro mono)
- **Bootstrap 5.3** - Grid layout system

## 📂 Project Structure

```
portfolioredesign/
├── index.html                              # Main HTML file
├── styles.css                              # All CSS styling
├── script.js                               # JavaScript functionality
├── coffee-lofi-lofi-music-340017.mp3      # Music track 1
├── good-night-lofi-cozy-chill-music-160166.mp3  # Music track 2
├── lofi-girl-lofi-hiphop-beats-328177.mp3  # Music track 3
└── README.md                               # This file
```

## 🎨 Design Features

### Color Palette
- **Mint Green** (#c5e8e0) - Primary background
- **Cream** (#f5f0e8) - Secondary background
- **Beige** (#e8dfd0) - Accent background
- **Peach** (rgba(255, 218, 185)) - Gradient accent
- **Teal** (#7ec4b8) - Primary accent
- **Blue** (#5a9fd4) - Secondary accent
- **Dark** (#3d3d3d) - Borders and text

### Typography
- **Press Start 2P** - Buttons, labels, UI elements (pixel font)
- **VT323** - Body text, paragraphs (retro monospace)

### Effects
- **Glass-morphism** - Frosted glass with backdrop blur
- **3D Buttons** - Pressed effect with gradients and shadows
- **Floating Blobs** - Animated background elements
- **Grain Texture** - SVG noise overlay for analog feel
- **Shine Animation** - Reflective sweep across dock

## 🎯 Key Features Breakdown

### Music Player
- 3 lofi tracks included
- Real-time playback with progress
- Volume control via clickable bar
- Track information display
- Auto-play next feature

### Notepad
- Auto-save every 1 second
- localStorage persistence
- Draggable window
- Status indicators
- Character counting

### Navigation
- Smooth section transitions
- Back button auto-insertion
- Keyboard shortcuts
- Search with keyword mapping

## 📱 Responsive Design

- **Desktop** (>992px) - Full three-column layout
- **Tablet** (768px-992px) - Adjusted sidebars
- **Mobile** (<768px) - Stacked layout with horizontal dock

## ⚡ Performance

- **No external dependencies** (except Bootstrap & fonts)
- **Optimized animations** with CSS transforms
- **LocalStorage** for fast data persistence
- **Preload metadata** for audio files

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sathyaseelan2006/Retro_PC_portfolio.git
   cd Retro_PC_portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Deploy to Vercel/Netlify**
   - Connect your GitHub repository
   - Deploy with one click
   - All static files will work automatically

## 🎵 Customizing Music

Replace the music files with your own:

```javascript
// In script.js, update the musicLibrary array:
const musicLibrary = [
    {
        title: "Your Track Title",
        artist: "Artist Name",
        album: "Album Name",
        src: "your-music-file.mp3"
    }
];
```

## 🎨 Customizing Design

**Colors** - Edit CSS variables in `:root`:
```css
:root {
    --bg-mint: #c5e8e0;
    --accent-green: #7ec4b8;
    /* ... more variables */
}
```

**Fonts** - Change in Google Fonts import and CSS variables

**Content** - Edit HTML sections in `index.html`

## 📝 Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas:
- Add more sections
- Integrate with a backend for guestbook
- Add dark mode toggle
- Create more themes
- Add more easter eggs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sathyaseelan K**
- Portfolio: [sathya34.vercel.app](https://sathya34.vercel.app/)
- GitHub: [@sathyaseelan2006](https://github.com/sathyaseelan2006)
- Email: ksathyaseelan34@gmail.com

## 🙏 Acknowledgments

- Music tracks for demo purposes
- Google Fonts for typography
- Bootstrap for grid system
- Inspiration from retro OS designs

---

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ and lots of ☕
