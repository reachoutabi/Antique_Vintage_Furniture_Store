/* ==========================================================================
   Aethelgard & Co. - Product Details Page JavaScript
   Dynamic Data Population from URL Query, Gallery Lightbox, Tabs & Zoom
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('product-details-container')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'prod-101';
  const product = getProductById(productId);

  populateProductData(product);
  initGallery(product);
  initTabs();
});

function populateProductData(p) {
  document.title = `${p.title} | 💾 Curated Antique & Vintage | Aethelgard & Co.`;

  // Breadcrumb
  const eraBreadcrumb = document.getElementById('detail-breadcrumb-era');
  const titleBreadcrumb = document.getElementById('detail-breadcrumb-title');
  if (eraBreadcrumb) eraBreadcrumb.textContent = p.era;
  if (titleBreadcrumb) titleBreadcrumb.textContent = p.title;

  // Header Details
  document.getElementById('detail-title').textContent = p.title;
  document.getElementById('detail-era-badge').textContent = p.eraLabel;
  document.getElementById('detail-price').textContent = p.priceFormatted;
  document.getElementById('detail-short-desc').textContent = p.shortDesc;
  document.getElementById('detail-full-desc').textContent = p.fullDesc;

  // Specs Table
  document.getElementById('detail-material').textContent = p.material;
  document.getElementById('detail-dimensions').textContent = p.dimensions;
  document.getElementById('detail-origin').textContent = p.origin;
  document.getElementById('detail-circa').textContent = p.circa;
  document.getElementById('detail-condition').textContent = p.condition;
  document.getElementById('detail-provenance-code').textContent = p.provenanceDoc;

  // Action Buttons
  const bookBtn = document.getElementById('detail-book-btn');
  if (bookBtn) {
    bookBtn.href = `contact.html?piece=${encodeURIComponent(p.title)}#appointment`;
  }

  const inquireBtn = document.getElementById('detail-inquire-btn');
  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => openInquireModal(p.title));
  }

  const wishlistBtn = document.getElementById('detail-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.setAttribute('data-wishlist-id', p.id);
    const isWishlisted = getWishlist().includes(p.id);
    updateWishlistButtons(p.id, isWishlisted);
    wishlistBtn.addEventListener('click', () => toggleWishlist(p.id));
  }

  renderRelatedProducts(p);
}

function initGallery(p) {
  const mainImg = document.getElementById('detail-main-img');
  const thumbsContainer = document.getElementById('detail-thumbs-container');
  if (!mainImg || !thumbsContainer) return;

  mainImg.src = p.images[0];

  thumbsContainer.innerHTML = p.images.map((imgUrl, idx) => `
    <button onclick="changeMainImage('${imgUrl}', this)" class="thumb-btn ${idx === 0 ? 'ring-2 ring-amber-700' : 'opacity-70'} w-20 h-20 rounded heritage-border overflow-hidden flex-shrink-0 transition-all">
      <img src="${imgUrl}" class="w-full h-full object-cover">
    </button>
  `).join('');

  // Zoom / Lightbox binding
  mainImg.addEventListener('click', () => openLightbox(mainImg.src));
}

function changeMainImage(imgUrl, btn) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = imgUrl;

  document.querySelectorAll('.thumb-btn').forEach(b => {
    b.classList.remove('ring-2', 'ring-amber-700');
    b.classList.add('opacity-70');
  });
  btn.classList.add('ring-2', 'ring-amber-700');
  btn.classList.remove('opacity-70');
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
    btn.addEventListener('click', () => {
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
    });
  });
}

function renderRelatedProducts(currentP) {
  const container = document.getElementById('detail-related-container');
  if (!container) return;

  const related = PRODUCTS_DATA.filter(p => p.id !== currentP.id && (p.era === currentP.era || p.style === currentP.style)).slice(0, 3);
  
  container.innerHTML = related.map(item => `
    <div class="heritage-card rounded-lg overflow-hidden group">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img src="${item.images[0]}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        <span class="absolute top-2 left-2 badge-era">${item.era}</span>
      </div>
      <div class="p-4">
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
