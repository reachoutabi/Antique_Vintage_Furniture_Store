/* ==========================================================================
   Aethelgard & Co. - Global Main JavaScript App
   Theme Management, RTL, Wishlist, Modals, Toasts, Navigation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initRTLEngine();
  initWishlistEngine();
  initNavigation();
  initToasts();
  initGlobalModals();
  initStatCounters();
  initScrollToTop();
});

/* -------------------------------------------------------------------------- */
/* 1. Theme Engine (Light / Dark Mode)                                        */
/* -------------------------------------------------------------------------- */
function initThemeEngine() {
  const storedTheme = localStorage.getItem('aethelgard_theme');
  // Default is Light Mode (Parchment) unless user explicitly chose dark
  const isDark = storedTheme === 'dark';
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIconState(isDark);

  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDarkNow = document.documentElement.classList.toggle('dark');
      localStorage.setItem('aethelgard_theme', isDarkNow ? 'dark' : 'light');
      showToast(isDarkNow ? 'Dark Mode ("Gallery at Dusk") enabled' : 'Light Mode (Parchment) enabled');
      updateThemeIconState(isDarkNow);
    });
  });
}

function updateThemeIconState(isDark) {
  const icons = document.querySelectorAll('.theme-toggle-btn i');
  icons.forEach(icon => {
    if (isDark) {
      icon.className = 'fa-solid fa-sun text-yellow-400 text-xs';
    } else {
      icon.className = 'fa-solid fa-moon text-amber-400 text-xs';
    }
  });
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

/* -------------------------------------------------------------------------- */
/* 2. RTL Layout Engine                                                       */
/* -------------------------------------------------------------------------- */
function initRTLEngine() {
  const storedRTL = localStorage.getItem('aethelgard_rtl');
  const isRTL = storedRTL === 'true';
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  updateRTLIconState(isRTL);

  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('aethelgard_rtl', newDir === 'rtl' ? 'true' : 'false');
      showToast(newDir === 'rtl' ? 'RTL Layout enabled' : 'LTR Layout enabled');
      updateRTLIconState(newDir === 'rtl');
    });
  });
}

function updateRTLIconState(isRTL) {
  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    btn.setAttribute('title', isRTL ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    btn.setAttribute('aria-label', isRTL ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    if (isRTL) {
      btn.classList.add('text-amber-700', 'dark:text-amber-400', 'bg-amber-700/20', 'dark:bg-amber-500/20');
    } else {
      btn.classList.remove('text-amber-700', 'dark:text-amber-400', 'bg-amber-700/20', 'dark:bg-amber-500/20');
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 3. Wishlist / Favorites System                                             */
/* -------------------------------------------------------------------------- */
function getWishlist() {
  const data = localStorage.getItem('aethelgard_wishlist');
  return data ? JSON.parse(data) : [];
}

function saveWishlist(items) {
  localStorage.setItem('aethelgard_wishlist', JSON.stringify(items));
  updateWishlistBadges();
}

function toggleWishlist(productId) {
  let list = getWishlist();
  const index = list.indexOf(productId);
  let added = false;
  
  if (index > -1) {
    list.splice(index, 1);
    showToast('Removed piece from your saved wishlist', 'info');
  } else {
    list.push(productId);
    added = true;
    showToast('Piece saved to your personal wishlist!', 'success');
  }
  
  saveWishlist(list);
  updateWishlistButtons(productId, added);
  renderWishlistDrawer();
}

function updateWishlistBadges() {
  const list = getWishlist();
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(b => {
    b.textContent = list.length;
    if (list.length > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

function updateWishlistButtons(productId, isWishlisted) {
  const btns = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
  btns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      if (isWishlisted) {
        icon.className = 'fa-solid fa-heart text-red-600';
      } else {
        icon.className = 'fa-regular fa-heart';
      }
    }
  });
}

function initWishlistEngine() {
  updateWishlistBadges();
  
  // Drawer Toggle
  const triggers = document.querySelectorAll('.wishlist-drawer-trigger');
  const drawer = document.getElementById('wishlist-drawer');
  const closeBtn = document.getElementById('close-wishlist-drawer');

  triggers.forEach(t => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      renderWishlistDrawer();
      if (drawer) drawer.classList.add('active');
    });
  });

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-drawer-items');
  if (!container) return;

  const wishlistIds = getWishlist();
  if (wishlistIds.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 px-4">
        <i class="fa-solid fa-floppy-disk text-4xl text-amber-700/40 mb-3"></i>
        <p class="text-stone-600 dark:text-stone-400 font-medium">Your saved collection is currently empty.</p>
        <p class="text-xs text-stone-500 mt-1">Browse our curated collection to save pieces you admire.</p>
        <a href="products.html" class="btn-heritage-gold mt-6 text-sm inline-block">Explore Collection</a>
      </div>
    `;
    return;
  }

  const items = wishlistIds.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);
  
  container.innerHTML = items.map(item => `
    <div class="flex items-center gap-4 p-3 border-b border-stone-200 dark:border-stone-800">
      <img src="${item.images[0]}" alt="${item.title}" class="w-16 h-16 object-cover rounded heritage-border">
      <div class="flex-1 min-w-0">
        <span class="badge-era text-[10px]">${item.era}</span>
        <h4 class="font-serif font-semibold text-sm truncate text-stone-900 dark:text-stone-100 mt-0.5">${item.title}</h4>
        <p class="text-xs text-amber-700 dark:text-amber-500 font-medium">${item.priceFormatted}</p>
      </div>
      <div class="flex flex-col gap-1">
        <a href="product-details.html?id=${item.id}" class="text-xs text-stone-600 hover:text-amber-700 dark:text-stone-400">View</a>
        <button onclick="toggleWishlist('${item.id}')" class="text-xs text-red-600 hover:underline">Remove</button>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------- */
/* 4. Navigation & Mobile Drawer                                              */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const closeMenuBtn = document.getElementById('close-mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
  }
  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
  }
}

/* -------------------------------------------------------------------------- */
/* 5. Toast System                                                            */
/* -------------------------------------------------------------------------- */
function initToasts() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  
  let iconClass = 'fa-solid fa-circle-info text-amber-600';
  if (type === 'success') iconClass = 'fa-solid fa-circle-check text-emerald-600';
  if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation text-amber-500';

  toast.innerHTML = `
    <i class="${iconClass} text-lg"></i>
    <div class="text-sm font-medium leading-tight">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* -------------------------------------------------------------------------- */
/* 6. Global Modals (Quick View, Inquire, Lightbox)                           */
/* -------------------------------------------------------------------------- */
function initGlobalModals() {
  // Modal Close buttons binding
  document.querySelectorAll('.close-modal-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
}

function openQuickViewModal(productId) {
  const item = PRODUCTS_DATA.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  document.getElementById('qv-img').src = item.images[0];
  document.getElementById('qv-title').textContent = item.title;
  document.getElementById('qv-era').textContent = item.eraLabel;
  document.getElementById('qv-price').textContent = item.priceFormatted;
  document.getElementById('qv-desc').textContent = item.shortDesc;
  document.getElementById('qv-material').textContent = item.material;
  document.getElementById('qv-dimensions').textContent = item.dimensions;
  document.getElementById('qv-condition').textContent = item.condition;
  document.getElementById('qv-detail-link').href = `product-details.html?id=${item.id}`;
  
  const bookBtn = document.getElementById('qv-book-btn');
  if (bookBtn) {
    bookBtn.href = `contact.html?piece=${encodeURIComponent(item.title)}#appointment`;
  }

  modal.classList.add('active');
}

function openInquireModal(pieceTitle = '') {
  const modal = document.getElementById('inquire-modal');
  if (!modal) return;

  const pieceInput = document.getElementById('inquire-piece-input');
  if (pieceInput) pieceInput.value = pieceTitle;

  modal.classList.add('active');
}

function submitInquiryForm(event) {
  event.preventDefault();
  showToast('Inquiry sent! A curator will respond within 24 hours.', 'success');
  const modal = document.getElementById('inquire-modal');
  if (modal) modal.classList.remove('active');
}

/* -------------------------------------------------------------------------- */
/* 7. Animated Statistics Counters                                           */
/* -------------------------------------------------------------------------- */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + (counter.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
          }
        }, stepTime);

        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* -------------------------------------------------------------------------- */
/* 8. Legal & Policy Modals (Privacy Policy, Terms of Provenance)             */
/* -------------------------------------------------------------------------- */
function openPolicyModal(type) {
  let modal = document.getElementById('policy-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'policy-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content relative p-6 sm:p-8 max-w-2xl">
        <button class="close-modal-trigger absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-lg">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div id="policy-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal-trigger').addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  const container = document.getElementById('policy-modal-content');
  if (type === 'privacy') {
    container.innerHTML = `
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-amber-700/10 border border-amber-600/30 flex items-center justify-center text-amber-600 dark:text-amber-500">
          <i class="fa-solid fa-user-shield text-lg"></i>
        </div>
        <div>
          <h3 class="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">Client Privacy & Discretion</h3>
          <p class="text-xs text-amber-700 dark:text-amber-500 font-medium">Confidentiality Protocol for Private Collectors</p>
        </div>
      </div>
      <div class="text-xs text-stone-600 dark:text-stone-400 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
        <p><strong>1. Collector Discretion:</strong> At Aethelgard & Co., we understand that high-value antique acquisitions require the utmost confidentiality. All consultations, private showroom viewings, and purchases remain strictly private unless public provenance attribution is explicitly granted by the buyer.</p>
        <p><strong>2. Information Collection:</strong> We only collect contact details strictly required for arranging viewings, curating custom piece requests, logistics crating, and issuing Guild-certified Certificates of Authenticity.</p>
        <p><strong>3. Data Security:</strong> Client records and acquisition archives are secured with bank-grade encryption and are never sold, rented, or disclosed to third-party commercial entities.</p>
        <p><strong>4. Viewing Appointment Data:</strong> Private appointment requests and security access codes generated for our Mayfair showroom are securely cleared following your scheduled gallery consultation.</p>
        <p><strong>5. Inquiries & Rights:</strong> To request archival deletion or update your private collector preferences, please contact our Senior Registrar at <a href="mailto:concierge@aethelgard.co.uk" class="text-amber-700 dark:text-amber-400 underline">concierge@aethelgard.co.uk</a>.</p>
      </div>
      <div class="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
        <button onclick="document.getElementById('policy-modal').classList.remove('active')" class="btn-heritage-gold py-2 px-6 text-xs uppercase font-bold">Acknowledge</button>
      </div>
    `;
  } else if (type === 'terms') {
    container.innerHTML = `
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-amber-700/10 border border-amber-600/30 flex items-center justify-center text-amber-600 dark:text-amber-500">
          <i class="fa-solid fa-stamp text-lg"></i>
        </div>
        <div>
          <h3 class="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">Terms of Provenance & Authenticity</h3>
          <p class="text-xs text-amber-700 dark:text-amber-500 font-medium">BADA & LAPADA Certified Standards</p>
        </div>
      </div>
      <div class="text-xs text-stone-600 dark:text-stone-400 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
        <p><strong>1. Lifetime Authenticity Guarantee:</strong> Every piece cataloged by Aethelgard & Co. is backed by an unconditional lifetime guarantee of authenticity for its designated historical period, maker, and provenance as stated in its accompanying sealed certificate.</p>
        <p><strong>2. Conservation Integrity:</strong> Any restoration or structural stabilization performed in our workshop utilizes period-accurate techniques (reversible hide glue, French polishing, hand-woven horsehair) that preserve cultural value without compromising original patina.</p>
        <p><strong>3. CITES & Heritage Compliance:</strong> All vintage rosewood, mahogany, and historic materials are legally verified and accompanied by required EU/UK/CITES antique documentation for lawful international transit.</p>
        <p><strong>4. White-Glove Logistics & Transit Insurance:</strong> All pieces are custom museum-crated and fully insured from our gallery doors until placement in your residence.</p>
        <p><strong>5. 14-Day In-Home Inspection:</strong> Private collectors are entitled to a 14-day in-home appraisal period. If a piece does not harmonise with your space, our white-glove team will arrange collection in original gallery condition.</p>
      </div>
      <div class="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
        <button onclick="document.getElementById('policy-modal').classList.remove('active')" class="btn-heritage-gold py-2 px-6 text-xs uppercase font-bold">Acknowledge</button>
      </div>
    `;
  }

  modal.classList.add('active');
}

/* -------------------------------------------------------------------------- */
/* 8. Scroll To Top Engine (Down-to-Top Arrow Button)                         */
/* -------------------------------------------------------------------------- */
function initScrollToTop() {
  let scrollBtn = document.getElementById('scroll-to-top-btn');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top-btn';
    scrollBtn.type = 'button';
    scrollBtn.className = 'fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-11 h-11 rounded-full bg-gradient-to-tr from-amber-700 to-amber-600 dark:from-amber-600 dark:to-amber-500 text-white shadow-xl shadow-amber-900/30 flex items-center justify-center z-40 transition-all duration-300 transform opacity-0 pointer-events-none translate-y-4 hover:scale-110 active:scale-95 border border-amber-400/30 cursor-pointer';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.setAttribute('title', 'Scroll to top');
    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up text-sm sm:text-base text-white"></i>';
    document.body.appendChild(scrollBtn);
  }

  function handleScroll() {
    if (window.scrollY > 250) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      scrollBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


