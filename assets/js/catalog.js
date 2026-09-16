/* ==========================================================================
   Aethelgard & Co. - Catalog Filter & View System
   Handles Era, Style, Price Range, Search, Grid/List Toggling & Sorting
   ========================================================================== */

let currentProducts = [...PRODUCTS_DATA];
let currentView = 'grid'; // 'grid' or 'list'

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('products-grid-container')) return;

  initFilters();
  initMobileFilterDrawer();
  initSortAndSearch();
  initViewToggle();
  renderProducts();
});

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
  const totalFiltersCount = uniqueEras.length + uniqueStyles.length + (maxPrice < 30000 ? 1 : 0) + (searchQuery ? 1 : 0);
  
  if (activeCountBadge) {
    if (totalFiltersCount > 0) {
      activeCountBadge.textContent = totalFiltersCount;
      activeCountBadge.classList.remove('hidden');
    } else {
      activeCountBadge.classList.add('hidden');
    }
  }

  currentProducts = PRODUCTS_DATA.filter(item => {
    const matchesEra = uniqueEras.length === 0 || uniqueEras.includes(item.era);
    const matchesStyle = uniqueStyles.length === 0 || uniqueStyles.includes(item.style);
    const matchesPrice = item.price <= maxPrice;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      item.shortDesc.toLowerCase().includes(searchQuery) ||
      item.era.toLowerCase().includes(searchQuery);

    return matchesEra && matchesStyle && matchesPrice && matchesSearch;
  });

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
  
  if (countBadge) {
    countBadge.textContent = `${currentProducts.length} Pieces Found`;
  }
  if (showingText) {
    showingText.textContent = currentProducts.length;
  }
  if (totalText) {
    totalText.textContent = PRODUCTS_DATA.length;
  }

  if (!container) return;

  if (currentProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 heritage-card p-8">
        <i class="fa-solid fa-compass text-4xl text-amber-700/40 mb-3"></i>
        <h3 class="font-serif text-2xl text-stone-800 dark:text-stone-200 font-semibold mb-2">No Matching Antique Pieces</h3>
        <p class="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm">We couldn't find any catalog items matching your specific filters. Try expanding your search or clearing active filters.</p>
        <button onclick="document.getElementById('reset-filters-btn')?.click()" class="btn-heritage-gold mt-6 text-sm">Clear All Filters</button>
      </div>
    `;
    return;
  }

  const wishlist = getWishlist();

  if (currentView === 'grid') {
    container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6';
    container.innerHTML = currentProducts.map(item => {
      const isWishlisted = wishlist.includes(item.id);
      return `
        <div class="heritage-card group rounded-lg overflow-hidden flex flex-col justify-between">
          <div class="relative overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800">
<<<<<<< HEAD
            <img src="${item.images[0]}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80';" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
=======
            <img src="${item.images[0]}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
            <span class="absolute top-3 left-3 badge-era">${item.era}</span>
            
            <button onclick="toggleWishlist('${item.id}')" data-wishlist-id="${item.id}" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-700 dark:text-stone-200 flex items-center justify-center shadow hover:scale-110 transition-transform">
              <i class="${isWishlisted ? 'fa-solid fa-heart text-red-600' : 'fa-regular fa-heart'}"></i>
            </button>
          </div>

          <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
<<<<<<< HEAD
              <span class="text-xs text-stone-500 dark:text-stone-300 font-medium">${item.style} • Circa ${item.circa}</span>
=======
              <span class="text-xs text-stone-500 font-medium">${item.style} • Circa ${item.circa}</span>
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
              <h3 class="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 mt-1 line-clamp-2 hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                <a href="product-details.html?id=${item.id}">${item.title}</a>
              </h3>
            </div>

<<<<<<< HEAD
            <div class="mt-4 pt-3.5 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
              <div class="flex flex-col justify-center text-left">
                <span class="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-semibold block leading-none mb-1 text-left">Asking Price</span>
                <span class="font-serif font-bold text-base sm:text-lg text-amber-800 dark:text-amber-500 leading-none text-left">${item.priceFormatted}</span>
              </div>
              <button onclick="openQuickViewModal('${item.id}')" class="btn-heritage-outline w-9 h-9 p-0 inline-flex items-center justify-center rounded text-xs shrink-0 mx-auto" title="Quick View">
                <i class="fa-regular fa-eye text-xs"></i>
              </button>
              <a href="product-details.html?id=${item.id}" class="btn-heritage-primary h-9 px-3.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center shrink-0">Details</a>
=======
            <div class="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
              <div>
                <span class="text-[10px] text-stone-400 uppercase tracking-wider block">Asking Price</span>
                <span class="font-serif font-bold text-base sm:text-lg text-amber-800 dark:text-amber-500">${item.priceFormatted}</span>
              </div>
              <div class="flex gap-1.5 sm:gap-2">
                <button onclick="openQuickViewModal('${item.id}')" class="text-xs btn-heritage-outline px-2.5 sm:px-3 py-1.5" title="Quick View">
                  <i class="fa-regular fa-eye"></i>
                </button>
                <a href="product-details.html?id=${item.id}" class="text-xs btn-heritage-primary px-2.5 sm:px-3 py-1.5">Details</a>
              </div>
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    // List View
    container.className = 'flex flex-col gap-4 sm:gap-6';
    container.innerHTML = currentProducts.map(item => {
      const isWishlisted = wishlist.includes(item.id);
      return `
        <div class="heritage-card group rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div class="relative md:w-64 aspect-[16/9] sm:aspect-[4/3] md:aspect-auto bg-stone-100 dark:bg-stone-800 flex-shrink-0">
<<<<<<< HEAD
            <img src="${item.images[0]}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80';" alt="${item.title}" class="w-full h-full object-cover">
=======
            <img src="${item.images[0]}" alt="${item.title}" class="w-full h-full object-cover">
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
            <span class="absolute top-3 left-3 badge-era">${item.era}</span>
          </div>
          <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
                <span class="text-xs text-amber-700 dark:text-amber-500 font-semibold tracking-wide uppercase">${item.style} — ${item.circa}</span>
<<<<<<< HEAD
                <span class="text-xs text-stone-500 dark:text-stone-400"><i class="fa-solid fa-location-dot mr-1 text-stone-400 dark:text-stone-300"></i> ${item.origin}</span>
=======
                <span class="text-xs text-stone-500"><i class="fa-solid fa-location-dot mr-1 text-stone-400"></i> ${item.origin}</span>
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
              </div>
              <h3 class="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 mt-1">
                <a href="product-details.html?id=${item.id}" class="hover:text-amber-700 transition-colors">${item.title}</a>
              </h3>
              <p class="text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2">${item.shortDesc}</p>
<<<<<<< HEAD
              <div class="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs text-stone-500 dark:text-stone-300">
=======
              <div class="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs text-stone-500">
>>>>>>> 34af56a3ab0cb1ecbf76c786ea5266e2662be226
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
}
