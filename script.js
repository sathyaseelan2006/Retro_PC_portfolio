// ==========================================
// RETRO PORTFOLIO - REFINED INTERACTIONS
// ==========================================

// Music Library - Local music files
const musicLibrary = [
    {
        title: "Coffee Lofi",
        artist: "Lofi Artist",
        album: "Chill Vibes",
        src: "coffee-lofi-lofi-music-340017.mp3"
    },
    {
        title: "Good Night",
        artist: "Cozy Beats",
        album: "Chill Music",
        src: "good-night-lofi-cozy-chill-music-160166.mp3"
    },
    {
        title: "Lofi Girl",
        artist: "Hip Hop Beats",
        album: "Study Session",
        src: "lofi-girl-lofi-hiphop-beats-328177.mp3"
    }
];

let currentTrackIndex = 0;
let audioPlayer = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeMusicPlayer();
    initializeClock();
    initializeDesktopIcons();
    initializeAnimations();
    initializeNotepad();
});

// === NAVIGATION SYSTEM ===
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const welcomeSection = document.querySelector('.welcome-section');
    const socialIcons = document.querySelector('.social-icons');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionName = button.getAttribute('data-section');
            const targetSection = document.getElementById(`section-${sectionName}`);

            if (targetSection) {
                // Hide welcome section and social icons
                welcomeSection.style.display = 'none';
                socialIcons.style.display = 'none';

                // Hide all content sections
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });

                // Show target section
                targetSection.style.display = 'block';

                // Add back button if not exists
                addBackButton(targetSection);
            }
        });
    });
}

function addBackButton(section) {
    // Check if back button already exists
    if (section.querySelector('.back-button')) return;

    const backButton = document.createElement('button');
    backButton.className = 'nav-btn back-button';
    backButton.textContent = '← back';
    backButton.style.marginBottom = '20px';

    backButton.addEventListener('click', () => {
        goHome();
    });

    section.insertBefore(backButton, section.firstChild);
}

function goHome() {
    const contentSections = document.querySelectorAll('.content-section');
    const welcomeSection = document.querySelector('.welcome-section');
    const socialIcons = document.querySelector('.social-icons');

    // Hide all content sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show welcome section and social icons
    welcomeSection.style.display = 'block';
    socialIcons.style.display = 'flex';
}

// === MUSIC PLAYER ===
function initializeMusicPlayer() {
    audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPause');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const albumIcon = document.querySelector('.album-icon');
    const volumeBar = document.getElementById('volumeBar');
    const volumeFill = document.getElementById('volumeFill');
    const progressFill = document.getElementById('progressFill');
    const trackName = document.getElementById('trackName');
    const trackTime = document.getElementById('trackTime');

    // Load first track
    loadTrack(currentTrackIndex);

    // Play/Pause functionality
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseBtn.textContent = '⏸';
                playPauseBtn.style.background = '#ff5f56';
                albumIcon.style.animation = 'spin 3s linear infinite';
            } else {
                audioPlayer.pause();
                playPauseBtn.textContent = '▶';
                playPauseBtn.style.background = '#7ec4b8';
                albumIcon.style.animation = 'float 3s ease-in-out infinite';
            }
            updateMusicIndicator();
        });
    }

    // Previous track
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + musicLibrary.length) % musicLibrary.length;
            loadTrack(currentTrackIndex);
            if (!audioPlayer.paused) {
                audioPlayer.play();
            }
        });
    }

    // Next track
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % musicLibrary.length;
            loadTrack(currentTrackIndex);
            if (!audioPlayer.paused) {
                audioPlayer.play();
            }
        });
    }

    // Auto-play next track when current ends
    audioPlayer.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % musicLibrary.length;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
    });

    // Update progress bar
    audioPlayer.addEventListener('timeupdate', () => {
        if (audioPlayer.duration) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressFill.style.width = progress + '%';
            
            // Update time display
            const currentMin = Math.floor(audioPlayer.currentTime / 60);
            const currentSec = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
            const durationMin = Math.floor(audioPlayer.duration / 60);
            const durationSec = Math.floor(audioPlayer.duration % 60).toString().padStart(2, '0');
            trackTime.textContent = `${currentMin}:${currentSec} / ${durationMin}:${durationSec}`;
        }
    });

    // Volume control
    if (volumeBar) {
        volumeBar.addEventListener('click', (e) => {
            const rect = volumeBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const volume = Math.min(100, Math.max(0, percentage));
            volumeFill.style.width = volume + '%';
            audioPlayer.volume = volume / 100;
        });
    }

    // Set initial volume
    audioPlayer.volume = 0.7;
}

function loadTrack(index) {
    const track = musicLibrary[index];
    audioPlayer.src = track.src;
    
    // Update track display
    document.getElementById('trackName').textContent = track.title;
    document.getElementById('trackTime').textContent = '0:00 / 0:00';
    
    // Update now playing card
    document.getElementById('npTitle').textContent = track.title;
    document.getElementById('npArtist').textContent = track.artist;
    document.getElementById('npAlbum').textContent = track.album;
    
    // Reset progress
    document.getElementById('progressFill').style.width = '0%';
}

// Add spin animation for playing state
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// === CLOCK ===
function initializeClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    // Update taskbar time
    const taskbarTime = document.getElementById('taskbarTime');
    if (taskbarTime) {
        taskbarTime.textContent = `${displayHours}:${minutes} ${ampm}`;
    }
    
    // Update taskbar date
    const taskbarDate = document.getElementById('taskbarDate');
    if (taskbarDate) {
        const month = (now.getMonth() + 1).toString();
        const day = now.getDate();
        const year = now.getFullYear();
        taskbarDate.textContent = `${month}/${day}/${year}`;
    }
}

// === DESKTOP ICONS & TASKBAR ===
function initializeDesktopIcons() {
    const desktopIcons = document.querySelectorAll('.desktop-icon-v');
    const taskbarApps = document.querySelectorAll('.taskbar-app');
    const startButton = document.getElementById('startButton');

    desktopIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const action = icon.getAttribute('data-action');
            handleDesktopIconClick(action);
        });
    });
    
    // Taskbar app functionality
    taskbarApps.forEach(app => {
        app.addEventListener('click', () => {
            const action = app.getAttribute('data-action');
            handleTaskbarAction(action, app);
        });
    });
    
    // Start button
    if (startButton) {
        startButton.addEventListener('click', () => {
            goHome();
            updateTaskbarActive('browser');
        });
    }
}

function handleTaskbarAction(action, element) {
    const actionMap = {
        'browser': () => goHome(),
        'portfolio': () => document.querySelector('[data-section="portfolio"]')?.click(),
        'projects': () => document.querySelector('[data-section="github"]')?.click(),
        'skills': () => document.querySelector('[data-section="skills"]')?.click(),
        'music': () => {
            const playBtn = document.getElementById('playPause');
            if (playBtn) playBtn.click();
            updateMusicIndicator();
        },
        'notes': () => {
            const notepadWindow = document.getElementById('notepadWindow');
            const notepad = document.getElementById('notepad');
            if (notepadWindow) {
                if (notepadWindow.style.display === 'none') {
                    notepadWindow.style.display = 'block';
                    notepad.focus();
                } else {
                    notepadWindow.style.display = 'none';
                }
            }
        },
        'contact': () => document.querySelector('[data-section="resume"]')?.click()
    };
    
    if (actionMap[action]) {
        actionMap[action]();
        updateTaskbarActive(action);
    }
}

function updateTaskbarActive(activeAction) {
    const taskbarApps = document.querySelectorAll('.taskbar-app');
    taskbarApps.forEach(app => {
        app.classList.remove('active');
        // Remove existing indicator
        const indicator = app.querySelector('.active-indicator');
        if (indicator) indicator.remove();
    });
    
    // Add active to clicked app
    const activeApp = document.querySelector(`[data-action="${activeAction}"]`);
    if (activeApp && activeApp.classList.contains('taskbar-app')) {
        activeApp.classList.add('active');
        // Add indicator if not exists
        if (!activeApp.querySelector('.active-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'active-indicator';
            activeApp.appendChild(indicator);
        }
    }
}

function updateMusicIndicator() {
    const musicIndicator = document.getElementById('musicIndicator');
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (musicIndicator && audioPlayer) {
        if (!audioPlayer.paused) {
            musicIndicator.style.display = 'flex';
        } else {
            musicIndicator.style.display = 'none';
        }
    }
}

function handleDesktopIconClick(action) {
    const messages = {
        'home': '🖥️ Welcome to the Desktop!\n\nClick the navigation buttons in the main window to explore.',
        'downloads': '📥 Downloads\n\nCheck the "resume" section in the main window for downloadable files!',
        'internet': '🌐 Internet Explorer\n\nJust kidding! Click "github" or "projects" to see my work online.',
        'trash': '🗑️ My Life\n\nDon\'t worry, it\'s not that bad! 😄\n\nCheck out my projects to see what I\'ve been up to!'
    };

    if (messages[action]) {
        showNotification(messages[action]);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'desktop-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #f5f0e8;
        border: 3px solid #3d3d3d;
        border-radius: 12px;
        padding: 32px;
        max-width: 400px;
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-size: 16px;
        text-align: center;
        white-space: pre-line;
        animation: popIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds or on click
    const removeNotification = () => {
        notification.style.animation = 'popOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    };

    notification.addEventListener('click', removeNotification);
    setTimeout(removeNotification, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes popIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes popOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(notificationStyle);

// === SEARCH FUNCTIONALITY ===
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            handleSearch(query);
        }
    });
}

function handleSearch(query) {
    const keywords = {
        'github': 'github',
        'projects': 'github',
        'project': 'github',
        'code': 'github',
        'about': 'projects',
        'me': 'projects',
        'resume': 'resume',
        'cv': 'resume',
        'download': 'resume',
        'contact': 'resume',
        'email': 'resume'
    };

    const section = keywords[query];
    if (section) {
        const button = document.querySelector(`[data-section="${section}"]`);
        if (button) {
            button.click();
            searchInput.value = '';
        }
    } else if (query) {
        showNotification(`🔍 No results found for "${query}"\n\nTry: github, projects, resume, about, contact`);
    }
}

// === ANIMATIONS ===
function initializeAnimations() {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe project items
    document.querySelectorAll('.project-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// === KEYBOARD SHORTCUTS ===
document.addEventListener('keydown', (e) => {
    // Escape to go home
    if (e.key === 'Escape') {
        goHome();
    }

    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
    }
});

// === EASTER EGGS ===
let clickCount = 0;
const albumArt = document.querySelector('.album-art-large');
if (albumArt) {
    albumArt.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            showNotification('🎵 Easter Egg Found!\n\n"Music is the soundtrack of your life."\n- Dick Clark');
            clickCount = 0;
        }
    });
}

// === NOTEPAD ===
function initializeNotepad() {
    const notepad = document.getElementById('notepad');
    const notepadWindow = document.getElementById('notepadWindow');
    const closeBtn = document.getElementById('closeNote');
    const minimizeBtn = document.getElementById('minimizeNote');
    const noteStatus = document.getElementById('noteStatus');
    const charCount = document.getElementById('charCount');

    // Load saved notes from localStorage
    const savedNote = localStorage.getItem('portfolioNote');
    if (savedNote) {
        notepad.value = savedNote;
    }

    // Update character count
    function updateCharCount() {
        const count = notepad.value.length;
        charCount.textContent = `${count} character${count !== 1 ? 's' : ''}`;
    }
    
    updateCharCount();

    // Auto-save on input (debounced)
    let saveTimeout;
    notepad.addEventListener('input', () => {
        updateCharCount();
        noteStatus.textContent = 'Typing...';
        
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            localStorage.setItem('portfolioNote', notepad.value);
            noteStatus.textContent = 'Saved ✓';
            setTimeout(() => {
                noteStatus.textContent = 'Ready';
            }, 2000);
        }, 1000);
    });

    // Close button
    closeBtn.addEventListener('click', () => {
        notepadWindow.style.display = 'none';
        updateTaskbarActive(null);
    });

    // Minimize button (same as close for now)
    minimizeBtn.addEventListener('click', () => {
        notepadWindow.style.display = 'none';
        updateTaskbarActive(null);
    });

    // Draggable notepad
    makeDraggable(notepadWindow);
}

// Make notepad draggable
function makeDraggable(element) {
    const header = element.querySelector('.notepad-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        element.style.transform = 'none';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// === WELCOME MESSAGE ===
console.log('%c🎨 Retro Portfolio Loaded! 🎨', 'font-size: 24px; color: #7ec4b8; font-weight: bold;');
console.log('%cBuilt with ❤️ by Sathyaseelan K', 'font-size: 16px; color: #5a9fd4;');
console.log('%cKeyboard Shortcuts:', 'font-size: 14px; font-weight: bold;');
console.log('%c  • ESC - Go to home', 'font-size: 12px;');
console.log('%c  • Ctrl/Cmd + K - Focus search', 'font-size: 12px;');
console.log('%c  • Click album art 3 times for a surprise!', 'font-size: 12px; color: #ff5f56;');

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === INITIAL ANIMATION ===
setTimeout(() => {
    const browserWindow = document.querySelector('.browser-window');
    if (browserWindow) {
        browserWindow.style.animation = 'slideIn 0.5s ease';
    }
}, 100);

const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(slideInStyle);
