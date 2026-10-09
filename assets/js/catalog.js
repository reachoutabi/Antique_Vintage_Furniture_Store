/* ==========================================================================
   Aethelgard & Co. - Catalog Filter & View System
   Handles Era, Style, Price Range, Search, Grid/List Toggling & Sorting
   ========================================================================== */

let currentProducts = [...PRODUCTS_DATA];
let currentView = 'grid'; // 'grid' or 'list'
let selectedCollection = 'all'; // 'all', 'antique', 'vintage'
let currentPage = 1;
const ITEMS_PER_PAGE = 9;

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('products-grid-container')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category') || '';
  const typeParam = urlParams.get('type') || '';
  const collectionParam = urlParams.get('collection') || '';

  const combinedQuery = (categoryParam + ' ' + typeParam + ' ' + collectionParam).toLowerCase();

  if (combinedQuery.includes('royal')) {
    selectedCollection = 'royal';
  } else if (combinedQuery.includes('antique')) {
    selectedCollection = 'antique';
  } else if (combinedQuery.includes('vintage')) {
    selectedCollection = 'vintage';
  } else if (categoryParam) {
    const searchInput = document.getElementById('catalog-search-input');
    const searchMob = document.getElementById('catalog-search-input-mobile');
    if (searchInput) searchInput.value = categoryParam;
    if (searchMob) searchMob.value = categoryParam;
  }

  initCollectionTypeSelector();
  initFilters();
  initMobileFilterDrawer();
  initSortAndSearch();
  initViewToggle();
  
  selectCollectionType(selectedCollection, false);
  applyFilters();
});

function initCollectionTypeSelector() {
  const collectionRadios = document.querySelectorAll('.collection-type-radio');
  collectionRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectCollectionType(e.target.value);
    });
  });
}

function selectCollectionType(type, shouldFilter = true) {
  selectedCollection = type;

  // Sync radio buttons
  document.querySelectorAll('.collection-type-radio').forEach(r => {
    r.checked = (r.value === type);
  });

  // Update Card UI
  const cards = document.querySelectorAll('.collection-type-card');
  cards.forEach(card => {
    const cardTab = card.getAttribute('data-collection-tab');
    if (cardTab === type) {
      card.className = 'collection-type-card p-4 rounded-xl border-2 border-amber-600 bg-amber-500/10 dark:bg-amber-950/40 text-left transition-all duration-300 cursor-pointer shadow-md relative overflow-hidden group';
    } else {
      card.className = 'collection-type-card p-4 rounded-xl border-2 border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-left transition-all duration-300 cursor-pointer hover:border-amber-600/60 shadow-sm relative overflow-hidden group';
    }
  });

  if (shouldFilter) {
    applyFilters();
  }
}
window.selectCollectionType = selectCollectionType;

function initMobileFilterDrawer() {
  const openBtn = document.getElementById('mobile-filter-open-btn');
  const drawer = document.getElementById('mobile-filter-drawer');
  const closeBtn = document.getElementById('close-mobile-filter-drawer');
  const applyBtn = document.getElementById('apply-mobile-filters-btn');
  const resetMobileBtn = document.getElementById('reset-filters-btn-mobile');

  if (openBtn && drawer) {
    openBtn.addEventListener('click', () => drawer.classList.add('active'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
  if (applyBtn && drawer) {
    applyBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
      const catalogSection = document.getElementById('products-catalog-section');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (resetMobileBtn) {
    resetMobileBtn.addEventListener('click', () => {
      document.querySelectorAll('.era-filter-checkbox').forEach(cb => cb.checked = false);
      document.querySelectorAll('.style-filter-checkbox').forEach(cb => cb.checked = false);
      selectCollectionType('all', false);
      
      const slider = document.getElementById('price-range-slider');
      const sliderMob = document.getElementById('price-range-slider-mobile');
      const display = document.getElementById('price-range-display');
      const displayMob = document.getElementById('price-range-display-mobile');
      if (slider) slider.value = 30000;
      if (sliderMob) sliderMob.value = 30000;
      if (display) display.textContent = '£30,000';
      if (displayMob) displayMob.textContent = '£30,000';

      const searchInput = document.getElementById('catalog-search-input');
      const searchMob = document.getElementById('catalog-search-input-mobile');
      if (searchInput) searchInput.value = '';
      if (searchMob) searchMob.value = '';

      applyFilters();
    });
  }
}

function initFilters() {
  const eraCheckboxes = document.querySelectorAll('.era-filter-checkbox');
  const styleCheckboxes = document.querySelectorAll('.style-filter-checkbox');
  const priceSlider = document.getElementById('price-range-slider');
  const priceSliderMob = document.getElementById('price-range-slider-mobile');
  const priceDisplay = document.getElementById('price-range-display');
  const priceDisplayMob = document.getElementById('price-range-display-mobile');
  const resetBtn = document.getElementById('reset-filters-btn');

  function handlePriceChange(val) {
    const formatted = `£${parseInt(val).toLocaleString('en-GB')}`;
    if (priceSlider) priceSlider.value = val;
    if (priceSliderMob) priceSliderMob.value = val;
    if (priceDisplay) priceDisplay.textContent = formatted;
    if (priceDisplayMob) priceDisplayMob.textContent = formatted;
    applyFilters();
  }

  if (priceSlider) priceSlider.addEventListener('input', (e) => handlePriceChange(e.target.value));
  if (priceSliderMob) priceSliderMob.addEventListener('input', (e) => handlePriceChange(e.target.value));

  // Sync checkboxes between desktop & mobile if separated
  eraCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      const checked = cb.checked;
      document.querySelectorAll(`.era-filter-checkbox[value="${val}"]`).forEach(other => other.checked = checked);
      applyFilters();
    });
  });

  styleCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      const checked = cb.checked;
      document.querySelectorAll(`.style-filter-checkbox[value="${val}"]`).forEach(other => other.checked = checked);
      applyFilters();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.era-filter-checkbox').forEach(cb => cb.checked = false);
      document.querySelectorAll('.style-filter-checkbox').forEach(cb => cb.checked = false);
      selectCollectionType('all', false);
      handlePriceChange(30000);
      const searchInput = document.getElementById('catalog-search-input');
      const searchMob = document.getElementById('catalog-search-input-mobile');
      if (searchInput) searchInput.value = '';
      if (searchMob) searchMob.value = '';
      applyFilters();
    });
  }
}

function initSortAndSearch() {
  const sortSelect = document.getElementById('catalog-sort-select');
  const searchInput = document.getElementById('catalog-search-input');
  const searchMob = document.getElementById('catalog-search-input-mobile');

  if (sortSelect) {
    sortSelect.addEventListener('change', applyFilters);
  }

  function handleSearch(val) {
    if (searchInput && searchInput.value !== val) searchInput.value = val;
    if (searchMob && searchMob.value !== val) searchMob.value = val;
    applyFilters();
  }

  if (searchInput) searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  if (searchMob) searchMob.addEventListener('input', (e) => handleSearch(e.target.value));
}

function initViewToggle() {
  const gridBtns = [document.getElementById('view-grid-btn'), document.getElementById('view-grid-btn-mobile')].filter(Boolean);
  const listBtns = [document.getElementById('view-list-btn'), document.getElementById('view-list-btn-mobile')].filter(Boolean);

  function setView(view) {
    currentView = view;
    if (view === 'grid') {
      gridBtns.forEach(b => {
        b.classList.add('bg-amber-700/20', 'text-amber-700', 'dark:text-amber-400');
        b.classList.remove('text-stone-500');
      });
      listBtns.forEach(b => {
        b.classList.remove('bg-amber-700/20', 'text-amber-700', 'dark:text-amber-400');
        b.classList.add('text-stone-500');
      });
    } else {
      listBtns.forEach(b => {
        b.classList.add('bg-amber-700/20', 'text-amber-700', 'dark:text-amber-400');
        b.classList.remove('text-stone-500');
      });
      gridBtns.forEach(b => {
        b.classList.remove('bg-amber-700/20', 'text-amber-700', 'dark:text-amber-400');
        b.classList.add('text-stone-500');
      });
    }
    renderProducts();
  }

  gridBtns.forEach(btn => btn.addEventListener('click', () => setView('grid')));
  listBtns.forEach(btn => btn.addEventListener('click', () => setView('list')));
}

function applyFilters() {
  currentPage = 1;
  const selectedEras = Array.from(document.querySelectorAll('.era-filter-checkbox:checked')).map(cb => cb.value);
  const selectedStyles = Array.from(document.querySelectorAll('.style-filter-checkbox:checked')).map(cb => cb.value);
  const priceSliderVal = document.getElementById('price-range-slider')?.value || document.getElementById('price-range-slider-mobile')?.value || 30000;
  const maxPrice = parseInt(priceSliderVal);
  const searchVal = document.getElementById('catalog-search-input')?.value || document.getElementById('catalog-search-input-mobile')?.value || '';
  const searchQuery = searchVal.toLowerCase();
  const sortOption = document.getElementById('catalog-sort-select')?.value || 'featured';

  // Update mobile filter count badge
  const activeCountBadge = document.getElementById('mobile-filter-count-badge');
  const uniqueEras = [...new Set(selectedEras)];
  const uniqueStyles = [...new Set(selectedStyles)];
  const totalFiltersCount = uniqueEras.length + uniqueStyles.length + (maxPrice < 30000 ? 1 : 0) + (searchQuery ? 1 : 0) + (selectedCollection !== 'all' ? 1 : 0);
  
  if (activeCountBadge) {
    if (totalFiltersCount > 0) {
      activeCountBadge.textContent = totalFiltersCount;
      activeCountBadge.classList.remove('hidden');
    } else {
      activeCountBadge.classList.add('hidden');
    }
  }

  currentProducts = PRODUCTS_DATA.filter(item => {
    const matchesCollection = (selectedCollection === 'all') ||
      (selectedCollection === 'antique' && item.type === 'antique') ||
      (selectedCollection === 'vintage' && item.type === 'vintage') ||
      (selectedCollection === 'royal' && item.type === 'royal');

    const matchesEra = uniqueEras.length === 0 || uniqueEras.includes(item.era);
    const matchesStyle = uniqueStyles.length === 0 || uniqueStyles.includes(item.style);
    const matchesPrice = item.price <= maxPrice;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      item.shortDesc.toLowerCase().includes(searchQuery) ||
      (item.type && item.type.toLowerCase().includes(searchQuery)) ||
      (item.category && item.category.toLowerCase().includes(searchQuery)) ||
      item.era.toLowerCase().includes(searchQuery);

    return matchesCollection && matchesEra && matchesStyle && matchesPrice && matchesSearch;
  });

  // Update badge counts on collection cards
  const allCount = PRODUCTS_DATA.length;
  const antiqueCount = PRODUCTS_DATA.filter(p => p.type === 'antique').length;
  const vintageCount = PRODUCTS_DATA.filter(p => p.type === 'vintage').length;
  const royalCount = PRODUCTS_DATA.filter(p => p.type === 'royal').length;

  const badgeAll = document.getElementById('badge-count-all');
  const badgeAntique = document.getElementById('badge-count-antique');
  const badgeVintage = document.getElementById('badge-count-vintage');
  const badgeRoyal = document.getElementById('badge-count-royal');
  if (badgeAll) badgeAll.textContent = `${allCount} Pieces`;
  if (badgeAntique) badgeAntique.textContent = `${antiqueCount} Pieces`;
  if (badgeVintage) badgeVintage.textContent = `${vintageCount} Pieces`;
  if (badgeRoyal) badgeRoyal.textContent = `${royalCount} Pieces`;

  // Sorting
  if (sortOption === 'price-low') {
    currentProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    currentProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'era-chrono') {
    currentProducts.sort((a, b) => a.circa.localeCompare(b.circa));
  } else if (sortOption === 'featured') {
    currentProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-grid-container');
  const countBadge = document.getElementById('products-count-badge');
  const showingText = document.getElementById('showing-count-text');
  const totalText = document.getElementById('total-count-text');

  const totalFiltered = currentProducts.length;
  const totalPages = Math.ceil(totalFiltered / ITEMS_PER_PAGE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalFiltered);

  if (countBadge) {
    countBadge.textContent = `${totalFiltered} Pieces Found`;
  }
  if (showingText) {
    showingText.textContent = totalFiltered > 0 ? `${startIndex + 1}–${endIndex}` : '0';
  }
  if (totalText) {
    totalText.textContent = totalFiltered;
  }

  if (!container) return;

  if (totalFiltered === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 heritage-card p-8">
        <i class="fa-solid fa-compass text-4xl text-amber-700/40 mb-3"></i>
        <h3 class="font-serif text-2xl text-stone-800 dark:text-stone-200 font-semibold mb-2">No Matching Antique Pieces</h3>
        <p class="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm">We couldn't find any catalog items matching your specific filters. Try expanding your search or clearing active filters.</p>
        <button onclick="document.getElementById('reset-filters-btn')?.click()" class="btn-heritage-gold mt-6 text-sm">Clear All Filters</button>
      </div>
    `;
    renderPagination(0);
    return;
  }

  const pageProducts = currentProducts.slice(startIndex, endIndex);
  const wishlist = getWishlist();

  if (currentView === 'grid') {
    container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6';
    container.innerHTML = pageProducts.map(item => {
      const isWishlisted = wishlist.includes(item.id);
      return `
        <div class="heritage-card group rounded-lg overflow-hidden flex flex-col justify-between">
          <div class="relative overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800">
            <img src="${item.images[0]}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80';" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            
            <button onclick="toggleWishlist('${item.id}')" data-wishlist-id="${item.id}" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-700 dark:text-stone-200 flex items-center justify-center shadow hover:scale-110 transition-transform">
              <i class="${isWishlisted ? 'fa-solid fa-heart text-red-600' : 'fa-regular fa-heart'}"></i>
            </button>
          </div>

          <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="badge-era text-[10px]">${item.era}</span>
                <span class="text-xs text-stone-500 dark:text-stone-300 font-medium">${item.style} • Circa ${item.circa}</span>
              </div>
              <h3 class="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 mt-1 line-clamp-2 hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                <a href="product-details.html?id=${item.id}">${item.title}</a>
              </h3>
            </div>

            <div class="mt-4 pt-3.5 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
              <div class="flex flex-col justify-center text-left">
                <span class="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-semibold block leading-none mb-1 text-left">Asking Price</span>
                <span class="font-serif font-bold text-base sm:text-lg text-amber-800 dark:text-amber-500 leading-none text-left">${item.priceFormatted}</span>
              </div>
              <button onclick="openQuickViewModal('${item.id}')" class="btn-heritage-outline w-9 h-9 p-0 inline-flex items-center justify-center rounded text-xs shrink-0 mx-auto" title="Quick View">
                <i class="fa-regular fa-eye text-xs"></i>
              </button>
              <a href="product-details.html?id=${item.id}" class="btn-heritage-primary h-9 px-3.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center shrink-0">Details</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    // List View
    container.className = 'flex flex-col gap-4 sm:gap-6';
    container.innerHTML = pageProducts.map(item => {
      const isWishlisted = wishlist.includes(item.id);
      return `
        <div class="heritage-card group rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div class="relative md:w-64 aspect-[16/9] sm:aspect-[4/3] md:aspect-auto bg-stone-100 dark:bg-stone-800 flex-shrink-0">
            <img src="${item.images[0]}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80';" alt="${item.title}" class="w-full h-full object-cover">
          </div>
          <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
                <div class="flex items-center gap-2">
                  <span class="badge-era text-[10px]">${item.era}</span>
                  <span class="text-xs text-amber-700 dark:text-amber-500 font-semibold tracking-wide uppercase">${item.style} — ${item.circa}</span>
                </div>
                <span class="text-xs text-stone-500 dark:text-stone-400"><i class="fa-solid fa-location-dot mr-1 text-stone-400 dark:text-stone-300"></i> ${item.origin}</span>
              </div>
              <h3 class="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 mt-1">
                <a href="product-details.html?id=${item.id}" class="hover:text-amber-700 transition-colors">${item.title}</a>
              </h3>
              <p class="text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2">${item.shortDesc}</p>
              <div class="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs text-stone-500 dark:text-stone-300">
                <span><strong>Materials:</strong> ${item.material}</span>
                <span class="hidden sm:inline">•</span>
                <span><strong>Dimensions:</strong> ${item.dimensions}</span>
              </div>
            </div>
            
            <div class="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span class="font-serif font-bold text-xl sm:text-2xl text-amber-800 dark:text-amber-500">${item.priceFormatted}</span>
              <div class="flex flex-wrap items-center gap-2">
                <button onclick="toggleWishlist('${item.id}')" data-wishlist-id="${item.id}" class="btn-heritage-outline text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 flex-1 sm:flex-none text-center">
                  <i class="${isWishlisted ? 'fa-solid fa-heart text-red-600' : 'fa-regular fa-heart'} mr-1"></i> Wishlist
                </button>
                <a href="contact.html?piece=${encodeURIComponent(item.title)}#appointment" class="btn-heritage-gold text-xs px-3 sm:px-4 py-1.5 sm:py-2 flex-1 sm:flex-none text-center">Book Viewing</a>
                <a href="product-details.html?id=${item.id}" class="btn-heritage-primary text-xs px-3 sm:px-4 py-1.5 sm:py-2 flex-1 sm:flex-none text-center">Details</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagContainer = document.getElementById('catalog-pagination-container');
  if (!pagContainer) return;

  if (totalPages <= 0) {
    pagContainer.innerHTML = '';
    return;
  }

  let html = `
    <button onclick="goToPage(${currentPage - 1})" 
            ${currentPage <= 1 ? 'disabled' : ''} 
            class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${currentPage <= 1 ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800/50 text-stone-400 dark:text-stone-600 border-stone-200 dark:border-stone-800' : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700 hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-400 shadow-sm cursor-pointer'} flex items-center gap-1.5"
            aria-label="Previous Page">
      <i class="fa-solid fa-chevron-left text-[10px]"></i>
      <span>Previous</span>
    </button>
  `;

  for (let p = 1; p <= totalPages; p++) {
    const isActive = (p === currentPage);
    html += `
      <button onclick="goToPage(${p})" 
              class="w-9 h-9 rounded-lg text-xs font-bold transition-all border ${isActive ? 'bg-amber-700 text-white border-amber-700 shadow-sm' : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700 hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-400 shadow-sm cursor-pointer'} flex items-center justify-center">
        ${p}
      </button>
    `;
  }

  html += `
    <button onclick="goToPage(${currentPage + 1})" 
            ${currentPage >= totalPages ? 'disabled' : ''} 
            class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${currentPage >= totalPages ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800/50 text-stone-400 dark:text-stone-600 border-stone-200 dark:border-stone-800' : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700 hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-400 shadow-sm cursor-pointer'} flex items-center gap-1.5"
            aria-label="Next Page">
      <span>Next</span>
      <i class="fa-solid fa-chevron-right text-[10px]"></i>
    </button>
  `;

  pagContainer.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(currentProducts.length / ITEMS_PER_PAGE) || 1;
  if (page < 1 || page > totalPages || page === currentPage) return;
  
  currentPage = page;
  renderProducts();

  const catalogSection = document.getElementById('products-catalog-section');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}
window.goToPage = goToPage;

