/* ==========================================================================
   Aethelgard & Co. - Product Details Page JavaScript
   Dynamic Data Population from URL Query, Gallery Lightbox, Tabs & Zoom
   ========================================================================== */

function getProductById(id) {
  if (typeof PRODUCTS_DATA === 'undefined' || !Array.isArray(PRODUCTS_DATA) || PRODUCTS_DATA.length === 0) {
    return null;
  }
  if (!id) return PRODUCTS_DATA[0];
  const cleanId = String(id).trim().toLowerCase();
  const found = PRODUCTS_DATA.find(p => p.id && p.id.toLowerCase() === cleanId);
  return found || PRODUCTS_DATA[0];
}

function initProductDetails() {
  if (!document.getElementById('product-details-container')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'prod-101';
  const product = getProductById(productId);

  if (!product) {
    console.warn('Product not found for ID:', productId);
    return;
  }

  populateProductData(product);
  initGallery(product);
  initTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductDetails);
} else {
  initProductDetails();
}

function populateProductData(p) {
  if (!p) return;

  document.title = `${p.title} | Curated Antique & Vintage | Aethelgard`;

  // Breadcrumbs
  const eraBreadcrumb = document.getElementById('detail-breadcrumb-era');
  const titleBreadcrumb = document.getElementById('detail-breadcrumb-title');
  if (eraBreadcrumb) eraBreadcrumb.textContent = p.era || 'Era';
  if (titleBreadcrumb) titleBreadcrumb.textContent = p.title || 'Piece Title';

  // Header Details
  const titleEl = document.getElementById('detail-title');
  const eraBadgeEl = document.getElementById('detail-era-badge');
  const priceEl = document.getElementById('detail-price');
  const shortDescEl = document.getElementById('detail-short-desc');
  const fullDescEl = document.getElementById('detail-full-desc');
  const certIdEl = document.getElementById('detail-cert-id');

  if (titleEl) titleEl.textContent = p.title;
  if (eraBadgeEl) eraBadgeEl.textContent = p.eraLabel || p.era;
  if (priceEl) priceEl.textContent = p.priceFormatted || (p.price ? `£${p.price.toLocaleString()}` : 'Price on Request');
  if (shortDescEl) shortDescEl.textContent = p.shortDesc || '';
  if (fullDescEl) fullDescEl.textContent = p.fullDesc || p.shortDesc || '';
  if (certIdEl) certIdEl.textContent = p.provenanceDoc || 'DOC-VERIFIED-HERITAGE';

  // Specs Table
  const materialEl = document.getElementById('detail-material');
  const dimensionsEl = document.getElementById('detail-dimensions');
  const originEl = document.getElementById('detail-origin');
  const circaEl = document.getElementById('detail-circa');
  const conditionEl = document.getElementById('detail-condition');
  const docEl = document.getElementById('detail-provenance-code');

  if (materialEl) materialEl.textContent = p.material || 'Solid Hardwood';
  if (dimensionsEl) dimensionsEl.textContent = p.dimensions || 'Available upon inquiry';
  if (originEl) originEl.textContent = p.origin || 'European Atelier';
  if (circaEl) circaEl.textContent = p.circa || p.era || 'Historical Period';
  if (conditionEl) conditionEl.textContent = p.condition || 'Preserved';
  if (docEl) docEl.textContent = p.provenanceDoc || 'DOC-VERIFIED';

  // Action Buttons
  const bookBtn = document.getElementById('detail-book-btn');
  if (bookBtn) {
    bookBtn.href = `contact.html?piece=${encodeURIComponent(p.title)}#appointment`;
  }

  const inquireBtn = document.getElementById('detail-inquire-btn');
  if (inquireBtn) {
    inquireBtn.onclick = () => {
      if (typeof openInquireModal === 'function') {
        openInquireModal(p.title);
      } else if (typeof showToast === 'function') {
        showToast(`Inquiry initiated for "${p.title}"`, 'info');
      }
    };
  }

  const wishlistBtn = document.getElementById('detail-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.setAttribute('data-wishlist-id', p.id);
    const isWishlisted = typeof getWishlist === 'function' ? getWishlist().includes(p.id) : false;
    if (typeof updateWishlistButtons === 'function') {
      updateWishlistButtons(p.id, isWishlisted);
    }
    wishlistBtn.onclick = () => {
      if (typeof toggleWishlist === 'function') {
        toggleWishlist(p.id);
      }
    };
  }

  renderRelatedProducts(p);
}

function initGallery(p) {
  if (!p) return;
  const mainImg = document.getElementById('detail-main-img');
  const thumbsContainer = document.getElementById('detail-thumbs-container');
  if (!mainImg) return;

  const images = (p.images && p.images.length > 0) ? p.images : ['assets/images/chippendale-mahogany-bookcase-1.jpg'];

  mainImg.src = images[0];
  mainImg.alt = p.title || 'Antique Showcase';

  if (thumbsContainer) {
    thumbsContainer.innerHTML = images.map((imgUrl, idx) => `
      <button type="button" onclick="changeMainImage('${imgUrl}', this)" class="thumb-btn ${idx === 0 ? 'ring-2 ring-amber-700 opacity-100' : 'opacity-70'} w-20 h-20 rounded heritage-border overflow-hidden flex-shrink-0 transition-all cursor-pointer" aria-label="Thumbnail ${idx + 1}">
        <img src="${imgUrl}" alt="${p.title}" class="w-full h-full object-cover pointer-events-none">
      </button>
    `).join('');
  }

  // Zoom / Lightbox binding
  mainImg.onclick = () => openLightbox(mainImg.src);
}

function changeMainImage(imgUrl, btn) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = imgUrl;

  document.querySelectorAll('.thumb-btn').forEach(b => {
    b.classList.remove('ring-2', 'ring-amber-700', 'opacity-100');
    b.classList.add('opacity-70');
  });
  if (btn) {
    btn.classList.add('ring-2', 'ring-amber-700', 'opacity-100');
    btn.classList.remove('opacity-70');
  }
}

function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
  }
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.detail-tab-btn');
  const tabPanes = document.querySelectorAll('.detail-tab-pane');

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('border-amber-700', 'text-amber-800', 'dark:text-amber-500');
        b.classList.add('border-transparent', 'text-stone-500');
      });
      btn.classList.add('border-amber-700', 'text-amber-800', 'dark:text-amber-500');
      btn.classList.remove('border-transparent', 'text-stone-500');

      tabPanes.forEach(pane => {
        if (pane.id === `tab-${target}`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    };
  });
}

function renderRelatedProducts(currentP) {
  const container = document.getElementById('detail-related-container');
  if (!container || typeof PRODUCTS_DATA === 'undefined') return;

  let related = PRODUCTS_DATA.filter(p => p.id !== currentP.id && (p.era === currentP.era || p.style === currentP.style)).slice(0, 3);
  if (related.length === 0) {
    related = PRODUCTS_DATA.filter(p => p.id !== currentP.id).slice(0, 3);
  }

  container.innerHTML = related.map(item => `
    <div class="heritage-card rounded-lg overflow-hidden group">
      <div class="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-900">
        <img src="${item.images[0]}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
      </div>
      <div class="p-4">
        <span class="badge-era text-[10px] inline-block mb-1.5">${item.era}</span>
        <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100 truncate">
          <a href="product-details.html?id=${item.id}" class="hover:text-amber-700 transition-colors">${item.title}</a>
        </h4>
        <div class="flex items-center justify-between mt-3">
          <span class="font-serif font-bold text-amber-800 dark:text-amber-500 text-sm">${item.priceFormatted}</span>
          <a href="product-details.html?id=${item.id}" class="text-xs btn-heritage-outline px-2.5 py-1">View Piece</a>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCartCurrentProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'prod-101';
  const product = getProductById(productId);
  const title = product ? product.title : 'piece';

  if (typeof addToCart === 'function') {
    addToCart(productId);
  } else if (typeof showToast === 'function') {
    showToast(`Added "${title}" to your acquisition inquiry`, 'success');
  }
}
