// Main JavaScript for Minimal/Clean Design

document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation active state
  initializeNavigation();
  
  // Smooth scrolling for anchor links
  initializeSmoothScroll();
  
  // Initialize back-to-top button
  initBackToTop();

  // Initialize simple card animations (if present)
  initializeCardAnimations();

  // Load any RSS/Nitter feeds on the page
  loadAllFeeds();
});

// Navigation Management
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
    });
  });

  // Set active link based on current page
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) || 
        (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth Scrolling
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Utility function to detect if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Back-to-top button
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  function toggle() {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', toggle);
  toggle();

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Simple RSS feed loader that uses a public CORS proxy (AllOrigins)
// Elements that should load feeds must have a `data-rss` attribute with the feed URL.
// Supports caching via data-cache-hours attribute (default: no cache for Twitter, 24h for Scholar)
function loadAllFeeds() {
  const feeds = document.querySelectorAll('[data-rss]');
  feeds.forEach(el => {
    const url = el.getAttribute('data-rss');
    if (!url) return;
    const cacheHours = parseInt(el.getAttribute('data-cache-hours') || '0', 10);
    loadRssFeed(url, el, 8, cacheHours);
  });
}

// Cache helper functions
function getCachedFeed(url) {
  try {
    const cached = localStorage.getItem('feed_' + url);
    if (!cached) return null;
    const data = JSON.parse(cached);
    if (Date.now() > data.expiry) {
      localStorage.removeItem('feed_' + url);
      return null;
    }
    return data.html;
  } catch (e) {
    return null;
  }
}

function setCachedFeed(url, html, hours) {
  try {
    const expiry = Date.now() + (hours * 60 * 60 * 1000);
    localStorage.setItem('feed_' + url, JSON.stringify({ html, expiry }));
  } catch (e) {
    // localStorage full or unavailable
  }
}

function loadRssFeed(feedUrl, containerEl, maxItems = 8, cacheHours = 0) {
  // Check cache first
  if (cacheHours > 0) {
    const cached = getCachedFeed(feedUrl);
    if (cached) {
      containerEl.innerHTML = cached;
      return; // Use cache, skip network request
    }
  }

  const proxy = 'https://api.allorigins.win/raw?url=';
  fetch(proxy + encodeURIComponent(feedUrl))
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then(str => {
      const parser = new window.DOMParser();
      const xml = parser.parseFromString(str, 'application/xml');
      const items = Array.from(xml.querySelectorAll('item')).slice(0, maxItems);
      if (!items.length) {
        // Try parsing alternative tags (some feeds use entry)
        const entries = Array.from(xml.querySelectorAll('entry')).slice(0, maxItems);
        renderFeedEntries(entries, containerEl, feedUrl, cacheHours);
      } else {
        renderFeedItems(items, containerEl, feedUrl, cacheHours);
      }
    })
    .catch(err => {
      console.warn('Feed load failed for', feedUrl, err);
      // If cache exists (even expired), show it as fallback
      const cached = getCachedFeed(feedUrl);
      if (cached) {
        containerEl.innerHTML = cached;
      } else {
        containerEl.innerHTML = '<div class="feed-error" style="padding: 1rem; color: #666;">Unable to load feed.</div>';
      }
    });
}

function renderFeedItems(items, container, feedUrl, cacheHours) {
  const list = document.createElement('div');
  list.className = 'feed-list';
  items.forEach(item => {
    const title = item.querySelector('title') ? item.querySelector('title').textContent : '';
    const link = item.querySelector('link') ? item.querySelector('link').textContent : (item.querySelector('link') ? item.querySelector('link').getAttribute('href') : '#');
    const pubDate = item.querySelector('pubDate') ? item.querySelector('pubDate').textContent : '';
    const desc = item.querySelector('description') ? item.querySelector('description').textContent : '';

    const entry = document.createElement('div');
    entry.className = 'feed-item';
    entry.innerHTML = `<a class="feed-title" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` +
      `<div class="feed-meta"><span class="feed-date">${escapeHtml(pubDate)}</span></div>` +
      `<div class="feed-desc">${escapeHtml(stripHtml(desc))}</div>`;

    list.appendChild(entry);
  });
  container.innerHTML = '';
  container.appendChild(list);
  
  // Cache the rendered HTML
  if (cacheHours > 0) {
    setCachedFeed(feedUrl, container.innerHTML, cacheHours);
  }
}

function renderFeedEntries(entries, container, feedUrl, cacheHours) {
  const list = document.createElement('div');
  list.className = 'feed-list';
  entries.forEach(entryEl => {
    const title = entryEl.querySelector('title') ? entryEl.querySelector('title').textContent : '';
    const link = entryEl.querySelector('link') ? (entryEl.querySelector('link').getAttribute('href') || entryEl.querySelector('link').textContent) : '#';
    const pubDate = entryEl.querySelector('updated') ? entryEl.querySelector('updated').textContent : '';
    const desc = entryEl.querySelector('summary') ? entryEl.querySelector('summary').textContent : (entryEl.querySelector('content') ? entryEl.querySelector('content').textContent : '');

    const entry = document.createElement('div');
    entry.className = 'feed-item';
    entry.innerHTML = `<a class="feed-title" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` +
      `<div class="feed-meta"><span class="feed-date">${escapeHtml(pubDate)}</span></div>` +
      `<div class="feed-desc">${escapeHtml(stripHtml(desc))}</div>`;

    list.appendChild(entry);
  });
  container.innerHTML = '';
  container.appendChild(list);
  
  // Cache the rendered HTML
  if (cacheHours > 0) {
    setCachedFeed(feedUrl, container.innerHTML, cacheHours);
  }
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Add fade-in animation for cards as they appear
function initializeCardAnimations() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
  });
}

// Form validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Export functions for external use
window.SiteUtils = {
  validateEmail,
  isElementInViewport
};
