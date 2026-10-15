/* ==========================================================================
   Aethelgard - Blog Articles Data
   Comprehensive Heritage Furniture Editorials, Restoration Guides & Case Studies
   ========================================================================== */

const BLOG_ARTICLES = [
  {
    id: 'chesterfield-armchair',
    title: 'Uncovering a Lost Victorian Chesterfield Armchair in Surrey',
    badge: 'Provenance Stories • Victorian Heritage',
    author: 'Lord Henry Aethelgard',
    date: 'Jul 2026',
    readTime: '7 Min Read',
    image: 'assets/images/chesterfield-oxblood-armchair-surrey.jpg',
    imageAlt: 'Uncovering a Lost Victorian Chesterfield Armchair in Surrey - Restored Antique Oxblood Leather Library Armchair',
    toc: [
      { id: 'discovery', title: 'The Discovery' },
      { id: 'damage', title: 'Assessing the Damage' },
      { id: 'process', title: 'The Restoration Process' },
      { id: 'result', title: 'The Result' },
      { id: 'importance', title: 'Why Restoration Matters' },
      { id: 'cta', title: 'Have a Forgotten Piece of Your Own?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "Some of the best finds happen when you’re not looking for them. This one began with a phone call from a family in Surrey who were clearing out a long-closed outbuilding and mentioned “an old armchair under a dust sheet.” What we found under that sheet was a Victorian Chesterfield that had been forgotten for decades."
      </p>

      <div id="discovery" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Discovery</h2>
        <p>
          The chair sat in the corner, covered in dust and cobwebs, its leather cracked and faded to a muted brown. But the bones were unmistakable: a deep-buttoned back, rolled arms set at the same height as the back, and a generous, low-slung seat. These are the hallmarks of an authentic Chesterfield.
        </p>
        <p class="font-medium text-stone-900 dark:text-stone-100">A closer look told us more:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Hand-tied springs beneath the seat:</strong> a sign of quality Victorian craftsmanship</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Horsehair stuffing:</strong> that, despite its age, had kept much of its shape</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A solid hardwood frame:</strong> with no sign of woodworm or structural failure</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Brass castors:</strong> worn but original</span>
          </li>
        </ul>
        <p>
          Everything pointed to a piece made in the late 19th century, built to last generations. It had simply been waiting.
        </p>
      </div>

      <div id="damage" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Assessing the Damage</h2>
        <p>
          Before any restoration begins, we do a full condition survey. For this chair, it showed:
        </p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Leather:</strong> dried out, with surface cracking and colour loss, especially on the arms and seat</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Buttons:</strong> several missing or loose, with the original twine deteriorated</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Springs:</strong> mostly sound, with two needing re-tying</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Stuffing:</strong> compressed in places but salvageable</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Frame:</strong> stable, needing only minor glue repairs at the joints</span>
          </div>
        </div>
        <p>
          The good news was that the chair hadn’t been “modernised” with foam or staples. Its original construction was intact, which made it a strong candidate for traditional restoration rather than replacement.
        </p>
      </div>

      <div id="process" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Restoration Process</h2>
        
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Careful Strip-Down</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We removed the old leather and webbing piece by piece, photographing and labelling everything so each element could be matched to the original pattern.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Frame and Spring Repair</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The frame joints were re-glued and clamped. The loose springs were re-tied using traditional eight-way hand-tying, which gives the seat its supportive, resilient feel.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Rebuilding the Stuffing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The original horsehair was cleaned, teased out and topped up with fresh natural fibre where needed. Natural materials let the chair breathe and age gracefully.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Leather Reupholstery</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We chose a hand-dyed, full-grain leather in a deep antique oxblood, close to the original tone. Each button was hand-pulled into place to recreate the signature diamond tufting.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Finishing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The brass castors were polished, the exposed timber was waxed, and the leather was conditioned and burnished for a soft, lived-in patina.
            </p>
          </div>
        </div>
      </div>

      <div id="result" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Result</h2>
        <p>
          The finished chair looks like it has been in a gentleman’s study for a hundred and fifty years. It has the same proportions and character as when it was first made, but is now sound, comfortable and ready for another century of use.
        </p>
      </div>

      <div id="importance" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Why Restoration Matters</h2>
        <div class="p-5 bg-amber-500/10 border-l-4 border-amber-600 rounded-xl space-y-2">
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            Pieces like this are a record of the skill and materials of their time. Restoring rather than replacing keeps that history alive, and it’s often the more sustainable choice too. A well-restored Victorian piece will outlast most new furniture and only gets better with age.
          </p>
        </div>
      </div>

      <div id="cta" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-couch"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Have a Forgotten Piece of Your Own?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          If you have an old armchair, sofa or Chesterfield sitting in a loft, garage or spare room, it may be worth more than you think. Get in touch for a free, no-obligation assessment, and we’ll tell you what it needs and what it could become.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Free Assessment
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'georgian-bookcases',
    title: 'Identifying Authentic 18th-Century Georgian Mahogany Bookcases',
    badge: 'Collecting Guide • Furniture History',
    author: 'Lord Henry Aethelgard',
    date: 'Oct 2026',
    readTime: '8 Min Read',
    image: 'assets/images/chippendale-mahogany-bookcase-1.jpg',
    imageAlt: '18th-Century Georgian Mahogany Bookcase Joinery & Architecture - Illuminated Vitrine & Marquetry Commode',
    toc: [
      { id: 'bookcase-at-a-glance', title: 'The Georgian Bookcase at a Glance' },
      { id: 'style-through-century', title: 'Style Through the Century' },
      { id: 'examining-mahogany', title: 'Examining the Mahogany' },
      { id: 'construction-clues', title: 'Construction Clues' },
      { id: 'glazing-bars-glass', title: 'The Glazing Bars and Glass' },
      { id: 'hardware-brasswork', title: 'Hardware and Brasswork' },
      { id: 'spotting-marriage', title: 'Spotting a “Marriage” or Later Alteration' },
      { id: 'signs-of-reproduction', title: 'Signs of Reproduction' },
      { id: 'documentation-provenance', title: 'Documentation and Provenance' },
      { id: 'authentication-process', title: 'Our Authentication Process' },
      { id: 'purchase-or-valuation', title: 'Considering a Purchase or Valuation?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "A Georgian mahogany bookcase is one of the most desirable pieces of English antique furniture, and one of the most frequently imitated. Grand proportions, elegant glazing bars and a deep, glowing patina make a genuine example a centrepiece in any library. But the same qualities have tempted makers for over two centuries to produce copies, so knowing what to look for is essential before you buy, sell or insure."
      </p>

      <div id="bookcase-at-a-glance" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Georgian Bookcase at a Glance</h2>
        <p>
          Georgian bookcases were made throughout the 18th century, with styles shifting from the architectural grandeur of early Georgian design to the lighter elegance of the late period. Most fall into a few broad forms:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-pen-nib text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Bureau bookcases</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A glazed upper section above a fall-front writing desk</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-layer-group text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Breakfront bookcases</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A large central section flanked by slightly recessed wings</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-cabinet-filing text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Secretaire bookcases</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A fitted writing drawer with a bookcase above</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-book-bookmark text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Library bookcases</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Tall, often built in two parts, with cupboards below and glazed doors above</span>
            </div>
          </div>
        </div>
        <div class="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          <strong>Dwarf (low) bookcases:</strong> Open or glazed cases at waist height designed for salon displays and private studies.
        </div>
      </div>

      <div id="style-through-century" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Style Through the Century</h2>
        <p>Recognising the design language of each phase helps you judge whether a piece is consistent with its claimed date.</p>
        
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Early Georgian (c. 1714 to 1750)</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Architectural and imposing. Look for broken pediments, carved cornices, pilasters and solid, heavy mahogany. Glazing was often in large panes divided by thick bars.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Mid Georgian, Chippendale era (c. 1750 to 1770)</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Richer ornament, including blind fretwork, Gothic arches, pagoda tops and carved details.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Late Georgian, Hepplewhite and Sheraton era (c. 1770 to 1800)</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Lighter and more refined. Slender astragal glazing bars, satinwood and boxwood inlay, swan-neck pediments and tapered legs or bracket feet.
            </p>
          </div>
        </div>
      </div>

      <div id="examining-mahogany" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Examining the Mahogany</h2>
        <p>The timber itself offers important clues.</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Colour and depth:</strong> old mahogany develops a deep, warm tone that is hard to fake. Look for variation across the piece, especially where light has reached it.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Grain and figure:</strong> quality pieces often feature carefully chosen veneers with attractive crotch or flame figure.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Spanish and Cuban mahogany:</strong> early examples often use dense, dark, slow-grown timber. Later mahogany can be lighter and more open-grained.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Oxidation:</strong> an authentic surface shows natural darkening where it has been exposed, and lighter tones where it has been protected, such as under mouldings.</span>
          </li>
        </ul>
      </div>

      <div id="construction-clues" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Construction Clues</h2>
        <p>Turn the piece around, open the drawers and look inside. Authentic Georgian construction tends to show:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3.5 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-hammer text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Hand-cut dovetails:</strong> slightly irregular, wide-set and individually cut. Very small, perfectly uniform dovetails suggest machine production.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-tree text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Secondary woods:</strong> oak, pine or occasionally mahogany for drawer linings and backboards. Plywood and chipboard are red flags.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-lines-leaning text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Saw marks:</strong> curved marks from a pit saw or straight marks from an early circular saw, both consistent with the period.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-ruler-horizontal text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Hand-planed surfaces:</strong> subtle ripples and tool marks on unseen surfaces.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-screwdriver text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Hand-forged fittings:</strong> slightly irregular nails and screws with uneven threads. Modern Phillips screws are an immediate warning.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-arrows-left-right text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Drawer runners:</strong> oak runners worn with a soft, polished track.</span>
          </div>
        </div>
      </div>

      <div id="glazing-bars-glass" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Glazing Bars and Glass</h2>
        <p>The upper section’s glazing is a key area for authentication.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Astragal bars</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Original bars are carefully moulded and fitted, and joined with mitres that sit tight.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Glass quality</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Old crown or cylinder glass has gentle waves, tiny bubbles and a slightly greenish or silvery tone. Perfectly flat, clear glass suggests replacement.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Fixings</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">The glass should be held with small tacks or putty. Modern silicone or pins are signs of later work.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Door fit</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Period doors are often hung on butt hinges and may show wear around locks and edges.</p>
          </div>
        </div>
      </div>

      <div id="hardware-brasswork" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Hardware and Brasswork</h2>
        <p>Original handles, locks and escutcheons are valuable clues.</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-key text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Handles:</strong> early brass handles are often cast and hand-finished. Look for slight irregularities and old repair holes.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lock text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Locks:</strong> period locks may be stamped with a maker’s name and can show signs of repair.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-dot text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Keyholes and escutcheons:</strong> the surrounding timber should show matching wear.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Screw holes:</strong> extra, unused holes suggest the hardware has been replaced.</span>
          </li>
        </ul>
        <div class="p-4 bg-amber-500/10 border-l-4 border-amber-600 rounded-lg">
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            Replacement handles aren’t uncommon and don’t necessarily reduce authenticity, but they should be disclosed.
          </p>
        </div>
      </div>

      <div id="spotting-marriage" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Spotting a “Marriage” or Later Alteration</h2>
        <p>Many bookcases are made from two sections, and it’s common for a top and base from different pieces to be combined. Warning signs include:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Mismatched timber, colour or figure between the top and the bottom</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Differences in construction such as drawer linings or backboards</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>A poor fit where the upper section meets the lower, with gaps or unexplained packing</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Inconsistent mouldings between the two halves</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Stylistic mismatches, such as a late Georgian top on an early Georgian base</span>
          </li>
        </ul>
        <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          Cut-down and enlarged pieces also exist, so look at the overall proportions with a critical eye.
        </p>
      </div>

      <div id="signs-of-reproduction" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Signs of Reproduction</h2>
        <p>Beware of pieces that are Victorian, Edwardian or 20th-century in origin but made in the Georgian style. Common clues include:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Uniform, mechanical-looking carving</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Very regular veneers and machine-cut inlay</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Bright, perfect brass fittings</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">An overly even, glossy finish</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Heavy staining or artificial distressing</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Modern glues, screws or backboards</span>
          </div>
        </div>
      </div>

      <div id="documentation-provenance" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Documentation and Provenance</h2>
        <p>Though rarely complete, provenance adds confidence and value:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-receipt text-amber-600 mt-0.5 shrink-0"></i>
            <span>Previous auction or dealer receipts</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-camera-retro text-amber-600 mt-0.5 shrink-0"></i>
            <span>Family histories and photographs of the piece in its original setting</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-file-invoice text-amber-600 mt-0.5 shrink-0"></i>
            <span>Insurance valuations and inventories</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-tag text-amber-600 mt-0.5 shrink-0"></i>
            <span>Maker’s labels or stamps, sometimes found inside drawers or on the backboards</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-landmark text-amber-600 mt-0.5 shrink-0"></i>
            <span>Country house sale catalogues and estate records</span>
          </div>
        </div>
      </div>

      <div id="authentication-process" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Authentication Process</h2>
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Visual Assessment</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We study the style, proportions and general coherence.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Close Examination</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Timber, joinery, hardware and glass are inspected under good light and magnification.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Structural Review</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We check for marriages, replacements and later alterations.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Comparison</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The piece is measured against known period examples and construction practices.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Written Report</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We summarise our findings, including any repairs or restorations, so you have a clear picture of what you own.
            </p>
          </div>
        </div>
      </div>

      <div id="purchase-or-valuation" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-book"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Considering a Purchase or Valuation?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          A genuine Georgian bookcase is a significant investment, and a professional opinion can save you from costly surprises. Get in touch for a thorough, no-obligation assessment, and we’ll help you understand exactly what you have.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Bookcase Assessment
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'french-polishing',
    title: 'The Art of French Polishing: Maintaining Shellac Patina on Console Tables',
    badge: 'Care & Maintenance • Timber Preservation',
    author: 'Elena Vance (Master Conservator)',
    date: 'Sept 2026',
    readTime: '6 Min Read',
    image: 'assets/images/french-polish-console-table.jpg',
    imageAlt: 'The Art of French Polishing: Maintaining Shellac Patina on Console Tables - Hand-Crafted Figured Console Table',
    toc: [
      { id: 'what-is-french-polishing', title: 'What Is French Polishing?' },
      { id: 'why-console-tables', title: 'Why Console Tables Suit It So Well' },
      { id: 'understanding-patina', title: 'Understanding Patina' },
      { id: 'everyday-care', title: 'Everyday Care' },
      { id: 'common-problems-fixes', title: 'Common Problems and Fixes' },
      { id: 'when-to-call-professional', title: 'When to Call a Professional' },
      { id: 'our-approach-restoration', title: 'Our Approach to Restoration' },
      { id: 'console-losing-glow', title: 'Have a Console Table Losing Its Glow?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "There is a particular glow you only see on a well-polished antique console: deep, soft and slightly liquid, as though the light is coming from inside the wood. That glow is shellac, applied by hand in hundreds of thin layers using a technique that has barely changed in two centuries. It’s beautiful, but it also needs the right care to last."
      </p>

      <div id="what-is-french-polishing" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">What Is French Polishing?</h2>
        <p>
          French polishing is not a single product but a technique. A pad of cotton wadding wrapped in linen (called a “rubber”) is charged with shellac dissolved in alcohol, then worked across the surface in small circles and figure-eights. Each pass deposits an almost invisible film. Built up over time, those films create a finish with remarkable depth and clarity.
        </p>
        <p>
          Shellac itself is a natural resin secreted by the lac insect, then refined into flakes. It’s available in shades from pale blonde to deep garnet, which lets a polisher match or enhance the tone of the timber beneath.
        </p>
      </div>

      <div id="why-console-tables" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Why Console Tables Suit It So Well</h2>
        <p>
          Console tables are display pieces. They sit in hallways and beneath mirrors, and their flat tops and shaped aprons show off a polished surface perfectly. Typical timbers include:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-tree text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Mahogany</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Polishes to a warm, reddish depth</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-tree text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Walnut</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Brings out a honeyed, figured grain</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-tree text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Rosewood</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A rich, dark finish with dramatic streaking</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-tree text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Satinwood</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A pale, golden glow popular in Georgian and Regency pieces</span>
            </div>
          </div>
        </div>
      </div>

      <div id="understanding-patina" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Understanding Patina</h2>
        <p>
          Patina is the soft character a surface acquires with age: gentle colour change, a subtle sheen from decades of waxing and handling, and the tiny marks of daily life. On shellac, a good patina is something to preserve, not remove. A heavily stripped and refinished table can look flat and new, losing much of its history and, often, its value.
        </p>
        <p class="font-medium text-stone-900 dark:text-stone-100">
          The goal of maintenance is to protect the finish while keeping that lived-in depth.
        </p>
      </div>

      <div id="everyday-care" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Everyday Care</h2>
        <p>
          Most shellac problems come from heat, liquid and neglect. A few habits make a big difference:
        </p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Dust regularly with a soft, dry cloth:</strong> Grit can scratch the surface when wiped.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Use coasters and mats:</strong> Hot cups and wet glasses are shellac’s biggest enemies.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Avoid sprays:</strong> Aerosol polishes often contain silicone, which makes future restoration difficult.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Keep away from direct sunlight and radiators:</strong> Light fades colour, and heat can soften or crack the finish.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Wax sparingly:</strong> A good quality paste wax once or twice a year is plenty.</span>
          </li>
        </ul>
      </div>

      <div id="common-problems-fixes" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Common Problems and Fixes</h2>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-4 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">White rings and cloudiness</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Caused by moisture trapped in the shellac. Light cases can often be improved with gentle buffing, while stubborn marks may need a professional to re-amalgamate the surface.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-wine-glass-empty text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Alcohol and perfume spills</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Shellac dissolves in alcohol, so wipe up spills immediately and avoid placing perfume bottles directly on the surface.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-circle-half-stroke text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Dull, tired patches</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Usually a build-up of old wax and grime. A professional clean and re-wax can bring back the sheen without touching the shellac underneath.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-shield text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Scratches</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Fine scratches can often be blended in locally. Deeper damage may need a spot repair, where new shellac is melted into the old.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="when-to-call-professional" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">When to Call a Professional</h2>
        <div class="p-5 bg-amber-500/10 border-l-4 border-amber-600 rounded-xl space-y-2">
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            If your table has deep scratches, widespread white marks, flaking or a finish that feels sticky, it’s time for expert help. A skilled polisher can often revive the existing finish rather than replace it, keeping the original patina intact.
          </p>
        </div>
      </div>

      <div id="our-approach-restoration" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Approach to Restoration</h2>
        <p>When we work on a console table, the process is deliberately gentle:</p>
        
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Assessment</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We identify the finish, since not every old table is shellac, and test a small hidden area.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Cleaning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Old wax and grime are removed with the mildest effective solvent.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Repair</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Dents, lifts and scratches are treated individually.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Rebuilding the Polish</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Thin layers of shellac are applied by hand and left to cure between sessions.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Final Burnish</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The surface is “spirited off” and buffed to a clear, deep lustre.
            </p>
          </div>
        </div>
      </div>

      <div id="console-losing-glow" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-sparkles"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Have a Console Table Losing Its Glow?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Before you reach for a spray or a stripper, talk to us. Get in touch for friendly advice or a free, no-obligation assessment, and we’ll help you keep your piece looking its best for generations.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Assessment & Advice
          </a>
        </div>
      </div>
    `
  },
    {
    id: 'art-deco-macassar',
    title: 'Art Deco Modernism: Sculptural Macassar Ebony & Fluted Sphere Tables',
    badge: 'Era Spotlight • 1920s Parisian Salons',
    author: 'Gaston Delacroix',
    date: 'Aug 2026',
    readTime: '6 Min Read',
    image: 'assets/images/macassar-ebony-fluted-spheres.jpg',
    imageAlt: 'Art Deco Sculptural Macassar Ebony Table with Hand-Carved Fluted Sphere Feet',
    toc: [
      { id: 'pair-worth-pausing', title: 'A Pair Worth Pausing For' },
      { id: 'why-macassar-ebony', title: 'Why Macassar Ebony?' },
      { id: 'design-language', title: 'The Design Language of Art Deco' },
      { id: 'bringing-them-back', title: 'Bringing Them Back to Life' },
      { id: 'finished-pieces', title: 'The Finished Pieces' },
      { id: 'styling-tips', title: 'Styling Tips' },
      { id: 'looking-for-similar', title: 'Looking for Something Similar?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "Few materials say “Art Deco” as confidently as Macassar ebony. Dark, dramatic and streaked with bands of chocolate and caramel, it was the wood of choice for the great ocean liners and Parisian salons of the 1920s and 30s. When we were asked to work on a pair of sculptural side tables built around that timber, we knew we were handling something special."
      </p>

      <div id="pair-worth-pausing" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">A Pair Worth Pausing For</h2>
        <p>
          The tables arrived looking like small architectural models. Each had a fluted sphere base, a globe of vertical ribs that catches the light and throws long, shifting shadows, supporting a polished Macassar ebony top. The combination of rounded volume and crisp linear detail is pure Deco: geometry, but with warmth.
        </p>
        <p class="font-medium text-stone-900 dark:text-stone-100">Key features we noted on inspection:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Book-matched Macassar ebony veneer:</strong> on the tops, with a dramatic, almost tiger-stripe grain</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Hand-carved fluting:</strong> running the full height of each sphere, evenly spaced and sharply defined</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Solid timber cores:</strong> under the veneer, a sign of quality construction</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A subtle stepped plinth:</strong> grounding each sphere</span>
          </li>
        </ul>
      </div>

      <div id="why-macassar-ebony" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Why Macassar Ebony?</h2>
        <p>
          Macassar ebony comes from the Indonesian island of Sulawesi and is prized for its contrast. Unlike the solid black of some ebonies, it shows rich, flowing stripes that make every piece unique. Designers of the Art Deco era loved it because it looked luxurious without any ornament. The grain itself was the decoration.
        </p>
        <p>
          It is also a dense, fine-textured hardwood that takes a high polish beautifully, which is why it was used for statement pieces rather than everyday furniture.
        </p>
      </div>

      <div id="design-language" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Design Language of Art Deco</h2>
        <p>These tables show several hallmarks of the movement:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-gem text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Bold geometry:</strong> spheres, circles and strong vertical lines</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-gem text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Rich, exotic materials:</strong> rare timbers valued for beauty over utility</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-gem text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Symmetry and rhythm:</strong> repeated flutes creating a sense of order</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-gem text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Sculptural form:</strong> furniture treated as art objects, not just function</span>
          </div>
        </div>
        <p>
          The fluted sphere in particular echoes the columns and stepped motifs found in Deco architecture, scaled down into something you can place beside a sofa.
        </p>
      </div>

      <div id="bringing-them-back" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Bringing Them Back to Life</h2>
        <p>
          Years of use had left the tables dull and marked, so the work focused on revealing what was already there:
        </p>
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Gentle Cleaning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We removed old wax and grime with specialist solvents, testing a small area first to protect the veneer.
            </p>
          </div>
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Veneer Repair</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Small lifts and chips in the ebony were carefully re-glued and patched with matched offcuts.
            </p>
          </div>
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Fluting Restoration</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Each groove was cleaned and lightly refined by hand, keeping the edges sharp rather than softened.
            </p>
          </div>
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Colour and Polish</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The tops were rebuilt with a French polish in thin layers, deepening the grain and creating that mirror-like finish.
            </p>
          </div>
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Final Waxing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              A hard wax coat on the spheres gave a soft sheen that contrasts nicely with the glossy tops.
            </p>
          </div>
        </div>
      </div>

      <div id="finished-pieces" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Finished Pieces</h2>
        <p>
          Restored, the tables have the presence they were designed to have. The ebony glows, the flutes catch the light, and the pair works as sculpture even when nothing is sitting on them. They suit both period interiors and contemporary spaces, where their bold shape stands out against minimal backdrops.
        </p>
      </div>

      <div id="styling-tips" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Styling Tips</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Place a single ceramic vase or sculptural lamp on top and let the table do the talking</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Pair with brass, smoked glass or velvet to reinforce the Deco mood</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Use as bedside tables, sofa-side tables or a matched pair flanking an entrance</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Keep surfaces out of direct sunlight to protect the polish and the colour of the timber</span>
          </li>
        </ul>
      </div>

      <div id="looking-for-similar" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-couch"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Looking for Something Similar?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Whether you own a piece of Art Deco furniture that needs care, or you’re hunting for a statement piece with real character, we’d love to hear from you. Get in touch to discuss restoration, sourcing or a free assessment.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Inquire About Art Deco Pieces
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'giltwood-convex-mirrors',
    title: '18th-Century Giltwood Convex Mirrors in Contemporary Interiors',
    badge: 'Interiors & Styling • Neoclassical Heritage',
    author: 'Lady Genevieve Vance',
    date: 'Apr 2026',
    readTime: '6 Min Read',
    image: 'assets/images/giltwood-convex-mirror.jpg',
    imageAlt: '18th-Century Giltwood Convex Mirror with Hand-Carved Acanthus Leaf Frame and Antiqued Verdigris Accents',
    toc: [
      { id: 'story-of-convex-mirror', title: 'The Story of the Convex Mirror' },
      { id: 'anatomy-of-mirror', title: 'Anatomy of a Georgian Convex Mirror' },
      { id: 'understanding-gilding', title: 'Understanding the Gilding' },
      { id: 'styling-today', title: 'Styling Convex Mirrors Today' },
      { id: 'placement-tips', title: 'Placement Tips' },
      { id: 'caring-for-giltwood', title: 'Caring for Giltwood' },
      { id: 'recognise-genuine-antique', title: 'How to Recognise a Genuine Antique' },
      { id: 'our-approach-restoration', title: 'Our Approach to Restoration' },
      { id: 'touch-of-history', title: 'Give Your Space a Touch of History' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "A convex mirror is one of the few antiques that works almost anywhere. Round, sculptural and quietly dramatic, it pulls a whole room into a single glowing orb, and the carved giltwood frame around it adds warmth, texture and a sense of history. Once the preserve of Georgian drawing rooms, these mirrors now sit comfortably in minimalist apartments, country houses and everything in between."
      </p>

      <div id="story-of-convex-mirror" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Story of the Convex Mirror</h2>
        <p>
          Convex mirrors rose to popularity in the late 18th century, during the Neoclassical and Regency periods. Their curved glass offered a wide, distorted view that fascinated the era, and they were often hung in candlelit rooms where the gilded frame and rounded glass would multiply the light.
        </p>
        <div class="p-4 bg-amber-500/10 border-l-4 border-amber-600 rounded-lg">
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            They are sometimes called “butler’s mirrors,” a nickname linked to the idea that a household servant could survey a whole room at a glance. Whether or not that story is strictly true, the name has stuck.
          </p>
        </div>
      </div>

      <div id="anatomy-of-mirror" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Anatomy of a Georgian Convex Mirror</h2>
        <p>Though designs vary, most share a few signature features:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A circular, convex glass plate:</strong> set into a deep frame</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A reeded, ebonised or gilded inner slip:</strong> that separates the glass from the outer frame</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A carved giltwood frame:</strong> often decorated with acanthus leaves, beading, rope-twist or ball motifs</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A crowning ornament:</strong> commonly an eagle, urn, phoenix or foliate finial</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Side ornaments:</strong> such as swags, candle branches or dolphins on grander examples</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A gesso and gilt surface:</strong> over carved softwood, either water-gilded or oil-gilded</span>
          </li>
        </ul>
      </div>

      <div id="understanding-gilding" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Understanding the Gilding</h2>
        <p>Giltwood is not solid gold, and it is not simply painted. A traditional finish is built up in layers:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-layer-group text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Gesso</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A smooth plaster-like coating applied over the carved timber</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-paintbrush text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Bole</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">A fine clay layer, usually red or yellow, that gives the gold its warmth</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-sparkles text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Gold Leaf</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Laid by hand and, in water gilding, burnished to a brilliant shine</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Toning and Distressing</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Subtle finishing that creates depth and softens the glare</span>
            </div>
          </div>
        </div>
        <p class="pt-2 text-stone-700 dark:text-stone-300">
          Over time, gentle wear reveals the red bole beneath the gold in places. This is a sign of age and part of the charm, so it should be conserved rather than covered up.
        </p>
      </div>

      <div id="styling-today" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Styling Convex Mirrors Today</h2>
        <p>The beauty of a convex mirror is its versatility. A few ideas:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Above a fireplace or console:</strong> a classic spot that adds focus without overpowering</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>In a hallway:</strong> the wide reflection makes narrow spaces feel more open</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Over a sideboard or desk:</strong> a single statement piece instead of a gallery wall</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Against a dark wall:</strong> the gilding glows beautifully on deep greens, navy and charcoal</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>In a minimalist room:</strong> one ornate antique creates a striking contrast with clean lines</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Grouped in odd numbers:</strong> three mirrors of different sizes make a dynamic arrangement</span>
          </div>
        </div>
        <p class="pt-2 text-stone-700 dark:text-stone-300 leading-relaxed">
          Because of the curved glass, a convex mirror shows a compressed, wide-angle view rather than a true reflection. This makes it more of an art object than a dressing mirror, so think of it as a piece of sculpture that happens to reflect.
        </p>
      </div>

      <div id="placement-tips" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Placement Tips</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-sun text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Hang it opposite a window or a pretty view so that the reflection brings in light and greenery.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-eye-slash text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Avoid placing it directly opposite clutter, since the convex glass will gather and shrink everything in sight.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-arrows-up-down text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Hang at eye level or slightly above, depending on the room’s proportions.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Use proper fixings. Giltwood frames can be heavy, so always use secure wall fixings rated for the weight.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-cloud-rain text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Keep away from damp and direct sun, which can damage both the glass and the gilding.</span>
          </li>
        </ul>
      </div>

      <div id="caring-for-giltwood" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Caring for Giltwood</h2>
        <p>Gilded surfaces are fragile, so gentle habits matter:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3.5 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-feather text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Dust with a soft, dry brush:</strong> Avoid cloths, which can catch on carved details.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-ban text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Never use water, sprays or household cleaners:</strong> Moisture can lift the gilding.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Avoid metal polish:</strong> It will strip the gold.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-hand text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Handle by the frame’s sturdy edges:</strong> never by the delicate ornaments.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-eye text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Look out for flaking, loose gesso or lifting leaf:</strong> and get advice early.</span>
          </div>
        </div>
      </div>

      <div id="recognise-genuine-antique" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">How to Recognise a Genuine Antique</h2>
        <p>Reproductions of convex mirrors are common, so look closely:</p>
        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Glass</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Old glass often has a slightly uneven surface and a soft, silvery tone. Very bright, perfectly clear glass may be modern.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Frame material</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Carved wood and gesso are typical, while moulded plaster or resin ornaments can indicate later production.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Back of the mirror</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Age shows in the backboards, nails and old repairs.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Wear</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Natural ageing is uneven and concentrated in high points and corners.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <strong class="text-stone-900 dark:text-stone-100 text-sm block">Weight</strong>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-0.5">Original frames tend to feel heavier and denser than modern copies.</p>
          </div>
        </div>
      </div>

      <div id="our-approach-restoration" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Approach to Restoration</h2>
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Condition Survey</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We assess the gilding, gesso, glass and structure, and note previous repairs.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Consolidation</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Loose gesso and lifting gilding are carefully secured.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Gentle Cleaning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Surface dirt is removed using the mildest effective methods.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Repair and Replacement</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Missing carved details are recreated by hand and gessoed to match.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Regilding and Toning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Where needed, new leaf is applied and blended with the old, keeping the mirror’s age and character.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 6: Glass Care</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              The glass is cleaned and, where necessary, resilvered using traditional or sympathetic methods.
            </p>
          </div>
        </div>
      </div>

      <div id="touch-of-history" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Give Your Space a Touch of History</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Whether you’ve inherited a giltwood convex mirror or you’re searching for the perfect centrepiece, we’d love to help. Get in touch for a free, no-obligation assessment or to discuss sourcing and restoration.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Assessment & Advice
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'edwardian-dining-suites',
    title: 'Authenticating Edwardian Inlaid Mahogany Dining Suites & Brass Casters',
    badge: 'Authentication Guide • Edwardian Craftsmanship',
    author: 'Lord Henry Aethelgard',
    date: 'Mar 2026',
    readTime: '7 Min Read',
    image: 'assets/images/edwardian-inlaid-dining-suite.jpg',
    imageAlt: 'Authenticating Edwardian Inlaid Mahogany Dining Suites & Brass Casters - Restored Sheraton Revival Table and Damask Chairs',
    toc: [
      { id: 'defines-edwardian-style', title: 'What Defines the Edwardian Style?' },
      { id: 'reading-the-inlay', title: 'Reading the Inlay' },
      { id: 'examining-construction', title: 'Examining the Construction' },
      { id: 'about-brass-casters', title: 'All About the Brass Casters' },
      { id: 'spotting-married-suite', title: 'Spotting a “Married” Suite' },
      { id: 'documentation-provenance', title: 'Documentation and Provenance' },
      { id: 'how-we-authenticate', title: 'How We Authenticate' },
      { id: 'buying-or-selling', title: 'Thinking of Buying or Selling?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "An Edwardian dining suite can look convincing from across the room. Inlaid mahogany, elegant proportions and a gleam of brass are easy to imitate, and the market has plenty of Victorian pieces, later reproductions and “married” sets passed off as the real thing. Knowing what to look for protects you from a costly mistake and helps you appreciate what a genuine suite represents."
      </p>

      <div id="defines-edwardian-style" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">What Defines the Edwardian Style?</h2>
        <p>
          The Edwardian period (roughly 1901 to 1910) was a lighter, more refined reaction to the heavy, ornate furniture of the Victorian age. Makers favoured:
        </p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Slender, tapered legs:</strong> often ending in spade or square feet</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Delicate inlay and marquetry:</strong> in boxwood, satinwood and ebony stringing</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Neoclassical motifs:</strong> such as shells, urns, swags and ribbons</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Quality mahogany:</strong> with a clean, well-chosen figure</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Restrained proportions:</strong> that suit smaller rooms of the era</span>
          </li>
        </ul>
        <p>
          Many were influenced by the Georgian designs of Sheraton and Hepplewhite, so the style is sometimes called “Sheraton Revival.” That’s also why confusion with earlier or later pieces is so common.
        </p>
      </div>

      <div id="reading-the-inlay" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Reading the Inlay</h2>
        <p>Inlay is one of the best clues to authenticity.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-scissors text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Hand-cut versus machine-cut</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Genuine period inlay often shows tiny irregularities. Perfect, identical repeats can point to later production.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-ruler-combined text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Thickness of the veneer</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Edwardian makers used sawn or knife-cut veneers that are thicker than modern paper-thin ones.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-fire text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Shading</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Authentic pieces often feature sand-shaded details, where hot sand scorches the edge of a petal or shell to create depth. Printed or stained imitations look flat.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-clock-rotate-left text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">Wear and fading</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Natural ageing is uneven. Uniform colour across the whole piece is a warning sign.</span>
            </div>
          </div>
        </div>
      </div>

      <div id="examining-construction" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Examining the Construction</h2>
        <p>Turn the furniture over and look inside. The unseen parts tell the truest story:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3.5 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-screwdriver-wrench text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Dovetails</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Fine, hand-cut dovetails in drawers suggest quality. Very regular, thin machine-cut dovetails may be later.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-tree text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Secondary woods</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Oak, pine or mahogany inside drawers and frames are typical. Modern plywood or chipboard is not.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-lines-leaning text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Saw marks</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Straight, parallel marks suggest a pit or circular saw from the period. Overly clean surfaces may indicate recent work.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-circle-dot text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Screws and fixings</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Slotted screws with uneven threads are consistent with age. Phillips-head screws are not.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-compress text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <strong class="text-stone-900 dark:text-stone-100 block text-sm">Shrinkage</strong>
              <p class="text-stone-600 dark:text-stone-300 mt-0.5">Old timber shrinks across the grain, so round table tops often become slightly oval with age.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about-brass-casters" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">All About the Brass Casters</h2>
        <p>Casters are small but revealing details.</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 sm:p-5 rounded-xl bg-emerald-500/5 border border-emerald-600/20 space-y-3">
            <h4 class="font-serif font-bold text-emerald-800 dark:text-emerald-400 text-sm flex items-center gap-2">
              <i class="fa-solid fa-check-circle"></i> What to Look For
            </h4>
            <ul class="space-y-2 text-xs text-stone-600 dark:text-stone-300">
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Brass cups and wheels often with a slightly irregular casting</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Square or round socket cups that fit snugly into the leg</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Ceramic or brass rollers, depending on the maker and price point</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Matching wear between the casters and the leg, since original fittings bed in over time</span>
              </li>
            </ul>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-amber-500/5 border border-amber-600/20 space-y-3">
            <h4 class="font-serif font-bold text-amber-800 dark:text-amber-400 text-sm flex items-center gap-2">
              <i class="fa-solid fa-triangle-exclamation"></i> Warning Signs
            </h4>
            <ul class="space-y-2 text-xs text-stone-600 dark:text-stone-300">
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
                <span>Brand new, bright casters on an otherwise aged leg</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
                <span>Screw holes that don’t match the existing fittings</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
                <span>Plated or lacquered brass that looks too uniform</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-xmark text-amber-600 mt-0.5 shrink-0"></i>
                <span>Casters that are mismatched across the set</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          Replaced casters aren’t necessarily a deal-breaker, as they were often updated over the decades. However, they should be disclosed and reflected in the price.
        </p>
      </div>

      <div id="spotting-married-suite" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Spotting a “Married” Suite</h2>
        <p>A married suite is made up of pieces from different sets or periods. Check carefully:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Do the table, chairs and sideboard share the same timber tone and grain?</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Is the inlay design consistent across all pieces?</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Do the proportions and leg styles match?</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Are the chairs identical in construction, or are there subtle variations?</span>
          </li>
        </ul>
        <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          A few small differences are normal in handmade furniture. Large inconsistencies suggest a collection assembled later.
        </p>
      </div>

      <div id="documentation-provenance" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Documentation and Provenance</h2>
        <p>Paperwork can help, though it’s never essential:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-receipt text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Original receipts, labels or stamps from retailers and makers</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-camera-retro text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Family histories and photographs showing the suite in place</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-gavel text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Auction records or previous valuations</span>
          </div>
          <div class="heritage-card p-3.5 rounded-lg flex items-start gap-2.5">
            <i class="fa-solid fa-tag text-amber-600 mt-0.5 shrink-0"></i>
            <span class="text-xs text-stone-700 dark:text-stone-300">Maker’s marks or paper labels, often tucked inside drawers or beneath the seat rails</span>
          </div>
        </div>
      </div>

      <div id="how-we-authenticate" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">How We Authenticate</h2>
        <p>When we examine a suite, we follow a methodical process:</p>
        
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Visual Survey</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We assess style, proportions and overall coherence.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Close Inspection</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Inlay, joints, timber and fittings are examined under good light and magnification.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Interior Check</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Drawers, rails and undersides are checked for secondary woods and tool marks.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Comparison</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Details are measured against known period examples.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Report</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We summarise our findings, noting any later repairs or replacements.
            </p>
          </div>
        </div>
      </div>

      <div id="buying-or-selling" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-stamp"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Thinking of Buying or Selling?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Whether you’ve inherited a dining suite or you’re considering an auction purchase, an expert opinion can save you from expensive surprises. Get in touch for an assessment, and we’ll tell you what you have and how to care for it.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Dining Suite Assessment
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'ormolu-brass-mounts',
    title: 'The Evolution of Ormolu Brass Mounts in French Executive Desks',
    badge: 'Curator Notes • Parisian Guilds',
    author: 'Lord Henry Aethelgard',
    date: 'Feb 2026',
    readTime: '6 Min Read',
    image: 'assets/images/french-ormolu-executive-desk.jpg',
    imageAlt: 'The Evolution of Ormolu Brass Mounts in French Executive Desks - Hand-Chased Mercury Gilded Bureau Plat',
    toc: [
      { id: 'ormolu-or-brass', title: 'Ormolu or Brass?' },
      { id: 'craftsmen-behind-metal', title: 'The Craftsmen Behind the Metal' },
      { id: 'practical-protection-display', title: 'From Practical Protection to Pure Display' },
      { id: 'mounts-changed-with-desk', title: 'How Mounts Changed with the Desk' },
      { id: '19th-century-revival', title: 'The 19th-Century Revival' },
      { id: 'reading-quality-mount', title: 'Reading the Quality of a Mount' },
      { id: 'everyday-care', title: 'Everyday Care' },
      { id: 'approach-to-restoration', title: 'Our Approach to Restoration' },
      { id: 'own-desk-mounts', title: 'Own a Desk with Ormolu Mounts?' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "An executive desk is where a French interior makes its statement. The leather top, the sweep of the legs and the gleam of gilt bronze at every corner tell a visitor who sits behind it. The mounts did that work, and behind them stood a whole trade of specialist craftsmen."
      </p>

      <div id="ormolu-or-brass" class="space-y-4 pt-4">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Ormolu or Brass?</h2>
        <p>
          Ormolu comes from <em>or moulu</em> (“ground gold”). Genuine period ormolu is gilt bronze, cast, finished by hand and fire-gilded with a gold-and-mercury amalgam. Plain brass mounts are cheaper and duller, with a flatter yellow colour. In everyday talk people say “brass mounts,” but the difference is central to value and to how a piece should be treated.
        </p>
      </div>

      <div id="craftsmen-behind-metal" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Craftsmen Behind the Metal</h2>
        <p>In 18th-century Paris, trades were strictly divided, so one desk involved several specialists:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-chair text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">The cabinetmaker (ébéniste)</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Built the carcass and applied the veneers.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-fire-burner text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">The founder (fondeur)</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Cast the bronze from a wax or plaster model.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-hammer text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">The chaser (ciseleur)</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Worked the cast surface with tiny punches and chisels, adding crisp detail.</span>
            </div>
          </div>
          <div class="heritage-card p-4 rounded-xl flex items-start gap-3">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-600 mt-1 shrink-0"></i>
            <div>
              <span class="font-bold text-stone-900 dark:text-stone-100 block text-sm">The gilder (doreur)</span>
              <span class="text-xs text-stone-600 dark:text-stone-300">Fire-gilded the finished bronze.</span>
            </div>
          </div>
        </div>
        <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 pt-2 leading-relaxed">
          The chaser’s skill separated a great mount from an ordinary one. Names like Pierre Gouthière and, later, Pierre-Philippe Thomire became famous for the quality of their bronzework, and a mount of that standard could cost as much as the cabinetwork itself.
        </p>
      </div>

      <div id="practical-protection-display" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">From Practical Protection to Pure Display</h2>
        <p>
          Early mounts had a job to do. They shielded corners, edges and keyholes from daily wear. As the 18th century progressed, the mounts became increasingly sculptural, framing the top, running down the legs and gathering into elaborate cartouches. By the time of the great cylinder and bureau plat designs, the bronze was as important to the look as the timber.
        </p>
      </div>

      <div id="mounts-changed-with-desk" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">How Mounts Changed with the Desk</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Bureau plat:</strong> a flat-topped writing table with long, flowing mounts, including a gilded border around the leather and sabots at the feet</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Cylinder desk:</strong> a roll-top form that needed fine, integrated mounts around the curve and across the drawers</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Partners desk:</strong> worked from both sides, so the mounts had to look equally good front and back</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Empire and later pieces:</strong> heavier, more symbolic mounts such as lion’s paws, sphinxes and stars, set against dark mahogany</span>
          </li>
        </ul>
      </div>

      <div id="19th-century-revival" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The 19th-Century Revival</h2>
        <p>
          In the 1800s, the French taste for Louis XV and XVI furniture never went away. Firms such as Beurdeley and, towards the end of the century, François Linke produced desks of extraordinary quality in the old styles, with mounts to match. Not every revival piece was equal, though. Some workshops used far thinner castings and electroplated gilding, so quality varies widely within the same style.
        </p>
      </div>

      <div id="reading-quality-mount" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Reading the Quality of a Mount</h2>
        <p>Look closely at:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3.5 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-wand-sparkles text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Chasing:</strong> sharp, lively tool work suggests a hand-finished piece. Soft, blurry detail often means a cheap or late casting.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-palette text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Colour:</strong> mercury gilding has a warm, buttery depth, whereas electroplate tends to look brighter and more lemony.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-weight-hanging text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Weight:</strong> a good mount feels substantial in the hand.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-rotate-left text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>The reverse:</strong> the back of a mount often shows file marks, casting seams and fixing points that a modern copy lacks.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-screwdriver text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Fixings:</strong> original mounts usually use tapped screws or pins that match the holes in the timber.</span>
          </div>
          <div class="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
            <i class="fa-solid fa-circle-check text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Fit:</strong> the mount should follow the veneer’s contours without gaps.</span>
          </div>
        </div>
      </div>

      <div id="everyday-care" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Everyday Care</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-feather text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Dust gently with a soft brush.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-ban text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Never use metal polish, which can remove the gilding for good.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-cloud-rain text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Keep moisture away, since damp can cause corrosion and lifting.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hand text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Handle with clean hands, as oils can mark the gilding over time.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-phone text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Call a specialist before attempting anything beyond dusting.</span>
          </li>
        </ul>
      </div>

      <div id="approach-to-restoration" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Approach to Restoration</h2>
        <div class="space-y-3.5">
          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Record</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We photograph and map every mount’s position.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Removal</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Mounts are lifted carefully to protect the veneer around them.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Cleaning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Old lacquer and grime are removed using the gentlest effective methods.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Conserve or Regild</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Original gilding is preserved wherever it survives. Regilding is discussed with the owner only where it is truly gone.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Refit</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              Mounts are secured with correct fixings and checked for a tight, even fit.
            </p>
          </div>
        </div>
      </div>

      <div id="own-desk-mounts" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-stamp"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Own a Desk with Ormolu Mounts?</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Whether your desk has tarnished, loose or missing mounts, we can help you understand what you have and how to look after it. Get in touch for a free, no-obligation assessment.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Request Ormolu Assessment
          </a>
        </div>
      </div>
    `
  }
,
  {
    id: 'mid-century-rosewood-credenza',
    title: 'Mid-Century Modern Rosewood Credenza',
    badge: 'Craftsmanship • Mid-Century Modern',
    author: 'Elena Vance, Mid-Century Specialist',
    date: 'Oct 2026',
    readTime: '6 Min Read',
    image: 'assets/images/mid-century-rosewood-credenza-blog.png',
    imageAlt: 'Mid-Century Modern Rosewood Credenza',
    toc: [
      { id: 'mid-century-moment', title: 'The Mid-Century Moment' },
      { id: 'why-rosewood', title: 'Why Rosewood?' },
      { id: 'anatomy-credenza', title: 'Anatomy of a Classic Credenza' },
      { id: 'spotting-authentic', title: 'Spotting an Authentic Piece' },
      { id: 'styling-credenza', title: 'Styling a Rosewood Credenza Today' },
      { id: 'caring-rosewood', title: 'Caring for Rosewood' },
      { id: 'approach-restoration', title: 'Our Approach to Restoration' },
      { id: 'make-it-yours', title: 'Make It Yours' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "Few pieces capture the optimism of mid-century design like a rosewood credenza. Long, low and quietly confident, it brings warmth to a room with nothing more than good proportions and a beautiful grain. Decades after the first examples left the workshop, these sideboards remain among the most sought-after pieces of 20th-century furniture."
      </p>

      <div id="mid-century-moment" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">The Mid-Century Moment</h2>
        <p>
          Between roughly the late 1940s and the 1970s, designers in Scandinavia, America and Britain reimagined the home. Post-war families wanted furniture that was functional, affordable and good-looking, and new manufacturing techniques made clean, organic forms possible at scale.
        </p>
        <p>
          The credenza (or sideboard) became a cornerstone of that movement. It offered generous storage in a slim profile and doubled as a display surface for lamps, ceramics and books.
        </p>
      </div>

      <div id="why-rosewood" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Why Rosewood?</h2>
        <p class="font-medium text-stone-900 dark:text-stone-100">Rosewood was the signature timber of the era, loved for:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Rich, varied colour:</strong> from deep chocolate to reddish brown with darker streaks</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Dramatic grain:</strong> that gives every piece its own distinct, organic character</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>A natural, oily lustre:</strong> that takes oil and wax finishes beautifully</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Stability and density:</strong> ideal for fine veneers and crisp architectural edges</span>
          </li>
        </ul>
        <p>
          Today, most rosewood species are protected under international trade rules (CITES). That makes genuine vintage pieces more valuable, and it's a good reason to buy original rather than new.
        </p>
      </div>

      <div id="anatomy-credenza" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Anatomy of a Classic Credenza</h2>
        <p>Though designs vary, most share a few hallmarks:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-ruler-combined text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Long, low profile:</strong> often 150 to 200 cm wide and under 80 cm high</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-door-open text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Sliding or hinged doors:</strong> sometimes with recessed finger pulls instead of protruding handles</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-layer-group text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Organised storage:</strong> interior drawers and adjustable shelving for serveware and vinyl</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-angles-down text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Tapered, splayed legs:</strong> usually in solid timber or tubular metal creating an airy lift</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-gem text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Book-matched veneer fronts:</strong> creating a flowing, symmetrical grain pattern across doors</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-sparkles text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Subtle details:</strong> sculpted pulls, brass accents or contrasting inlaid stringing</span>
          </div>
        </div>
      </div>

      <div id="spotting-authentic" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Spotting an Authentic Piece</h2>
        <p>Reproductions and later copies are common, so look closely:</p>
        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Maker's Marks</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Look for labels, stamped guild tags, or branded burn marks inside drawers or on the rear backboard.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Veneer Quality</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Thick, well-matched genuine timber veneer with natural organic variation, not repetitive synthetic foil prints.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Joinery & Hardware</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Tight dovetails in interior drawers, solid fitted carcasses, and original runners showing consistent, honest age.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Patina & Weight</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Gentle softening of sharp top edges, mellow tonal depth, and a substantial, solid weight indicating hardwood construction.</p>
          </div>
        </div>
      </div>

      <div id="styling-credenza" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Styling a Rosewood Credenza Today</h2>
        <p>The beauty of this piece is how easily it adapts across rooms:</p>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>In a living room:</strong> use it as a media console or a sideboard beneath striking artwork</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>In a dining area:</strong> keep serveware, crystal and fine linens within easy reach</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>In a hallway or entrance:</strong> a slim profile suits long wall expanses perfectly</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>In a bedroom or study:</strong> a handsome, low-profile alternative to a tall chest of drawers</span>
          </li>
        </ul>
        <p>
          Pair it with brass lamps, sculptural ceramics, and a single large piece of art above. Keep the top styled lightly with two or three curated objects to let the wood grain take centre stage.
        </p>
      </div>

      <div id="caring-rosewood" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Caring for Rosewood</h2>
        <p>Rosewood is durable, but it rewards regular thoughtful maintenance:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Dust regularly with a clean, soft, dry lint-free cloth.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Avoid direct harsh sunlight, which can bleach rich rosewood hues unevenly.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Use coasters, trivets and felt pads to protect the top from moisture and heat rings.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Re-oil or wax once or twice a year with a premium Danish oil or pure microcrystalline wax suited to the original finish.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Avoid silicone aerosol sprays, which leave milky deposits and hinder future professional conservation.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-shield-halved text-amber-600 mt-0.5 shrink-0"></i>
            <span>Keep away from radiant heaters and air vents to prevent fine veneers from lifting or warping.</span>
          </div>
        </div>
      </div>

      <div id="approach-restoration" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Approach to Restoration</h2>
        <p>Every mid-century credenza conserved in our atelier follows a rigorous multi-step standard:</p>
        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Assessment</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">We identify the timber species, original finish formulation, veneer condition, and any past alterations.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Gentle Cleaning</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Decades of accumulated dirt and nicotine are emulsified and lifted without touching the underlying patina.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Veneer Consolidation</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Lifting veneers are re-adhered using reversible hide glue, and edge losses are spliced with grain-matched vintage rosewood.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Mechanical Care</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Sliding doors are re-aligned, runners lubricated with dry graphite, and internal drawers eased for silent operation.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Hand Refinishing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Multiple hand-rubbed applications of breathable oils and beeswax revive the dramatic depth of the grain.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 6: Final Structural Inspection</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Hardware is cleaned and refitted, legs checked for load balance, and authenticated archival documentation is sealed.</p>
          </div>
        </div>
      </div>

      <div id="make-it-yours" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-couch"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Make It Yours</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          A rosewood credenza is a piece you'll enjoy for decades. Whether you're furnishing a new residence or adding an iconic centerpiece to your collection, get in touch to enquire about this credenza, arrange a private viewing, or discuss bespoke delivery.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Enquire About This Credenza
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'chrome-arc-floor-lamp',
    title: 'Chrome Three-Arm Arc Floor Lamp: Space-Age Glamour for the Modern Home',
    badge: 'Market Trends • Space-Age Lighting',
    author: 'Arthur Sterling, Period Lighting Curator',
    date: 'Oct 2026',
    readTime: '6 Min Read',
    image: 'assets/images/chrome-arc-floor-lamp-blog.png',
    imageAlt: 'Chrome Three-Arm Arc Floor Lamp: Space-Age Glamour for the Modern Home',
    toc: [
      { id: 'space-age-design', title: 'A Design Born in the Space Age' },
      { id: 'anatomy-lamp', title: 'Anatomy of the Lamp' },
      { id: 'why-chrome', title: 'Why Chrome?' },
      { id: 'where-works-best', title: 'Where It Works Best' },
      { id: 'styling-tips', title: 'Styling Tips' },
      { id: 'recognise-vintage', title: 'How to Recognise a Genuine Vintage Piece' },
      { id: 'caring-chrome', title: 'Caring for Chrome' },
      { id: 'safety-rewiring', title: 'Safety and Rewiring' },
      { id: 'approach-restoration', title: 'Our Approach to Restoration' },
      { id: 'statement-piece', title: 'Bring Home a Statement Piece' }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-serif italic leading-relaxed border-l-4 border-amber-600 pl-4 py-2 bg-amber-500/5 rounded-r">
        "Some lighting just lights a room. This lamp transforms it. Three polished chrome globes arc out from a single slender stem, each catching the room in a miniature, curved reflection while casting a soft glow downward. It's a piece that works as sculpture by day and mood lighting by night."
      </p>

      <div id="space-age-design" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">A Design Born in the Space Age</h2>
        <p>
          Arc and multi-arm floor lamps rose to popularity from the 1960s into the 1970s, when designers were fascinated by space travel, new materials and bold, futuristic shapes. Chrome, once reserved for car bumpers and appliances, moved into the living room, and the globe shade became one of the era's defining forms.
        </p>
        <p>
          The look sits comfortably between mid-century modern and space-age design: clean and minimal, but with an unmistakable sense of architectural fun.
        </p>
      </div>

      <div id="anatomy-lamp" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Anatomy of the Lamp</h2>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-arrows-up-to-line text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Tall polished chrome stem:</strong> rises cleanly from the base with sleek vertical presence</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-code-branch text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Three curved arcs of varied lengths:</strong> creating a layered, almost botanical silhouette that radiates light</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-circle-notch text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Spherical chrome globe shades:</strong> with bright reflective white interior bowls that direct luminous warmth downward</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-weight-hanging text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Round weighted base:</strong> finished in deep black with a chrome perimeter band to ensure rock-solid stability</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-toggle-on text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Inline foot switch:</strong> convenient cord control allowing effortless switching without stretching toward the shades</span>
          </div>
        </div>
        <p>
          The varied arm lengths are the clever part. Together the lights sit at different heights and angles, making the lamp feel dynamic and sculptural from every angle in the room.
        </p>
      </div>

      <div id="why-chrome" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Why Chrome?</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-sparkles text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Reflective brilliance:</strong> mirrored globes pick up room colors, daylight, and evening candle glow</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-clock-rotate-left text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Timeless appeal:</strong> chrome has repeatedly proven its longevity across modern and eclectic interiors</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-palette text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Striking contrast:</strong> pairs sensationally with rich timber (rosewood, teak, walnut), velvet upholstery, and natural stone</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-shield-check text-amber-600 mt-1 text-xs shrink-0"></i>
            <span><strong>Durability:</strong> high-grade electroplated chrome is hard-wearing and simple to maintain</span>
          </li>
        </ul>
      </div>

      <div id="where-works-best" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Where It Works Best</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-sm text-amber-700 dark:text-amber-400">Beside a Sofa</h4>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1">The arms reach over seating, providing reading illumination and ambient warmth without requiring side tables.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-sm text-amber-700 dark:text-amber-400">Over a Console or Dining Table</h4>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1">Reaches outward like a suspended chandelier without drilling into historic ceiling plaster.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-sm text-amber-700 dark:text-amber-400">In an Unused Corner</h4>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1">Elevates neglected room corners into dramatic sculptural focal points with multi-tiered lighting.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-sm text-amber-700 dark:text-amber-400">In an Executive Study</h4>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1">Adds mid-century flair, conversation value, and glare-free downlighting to executive desks and reading chairs.</p>
          </div>
        </div>
      </div>

      <div id="styling-tips" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Styling Tips</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Pair it with warm timber (such as a rosewood sideboard or walnut table) so the chrome has rich natural warmth to reflect.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Place it near a dark or textured wall to amplify reflective highlights and dramatic shadow geometry.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Use warm-white LED filament bulbs (2700K) to give the chrome globes a warm, inviting residential glow.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Leave breathing space around the three arcs so their sweeping botanical profile remains legible from across the room.</span>
          </li>
        </ul>
      </div>

      <div id="recognise-vintage" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">How to Recognise a Genuine Vintage Piece</h2>
        <p>Reproductions are widely manufactured, so look for these indicators of authentic vintage pedigree:</p>
        <div class="heritage-card p-5 sm:p-6 rounded-xl space-y-3 text-xs sm:text-sm">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-certificate text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Chrome Quality:</strong> Original period chrome plating possesses a deep, liquid mirror clarity. Minor age patina or gentle micro-spotting affirms authenticity.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-certificate text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Base Weight:</strong> Vintage lamps feature heavy cast-iron internal ballasts inside the base to counterbalance the long reach of the three extended arms.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-certificate text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Wiring & Sockets:</strong> Original porcelain or bakelite sockets, period switches, and dated insulation tags verify manufacturing era.</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-certificate text-amber-600 mt-0.5 shrink-0"></i>
            <span><strong>Maker Stamps:</strong> Check under the base plinth or inside the shade rim for European manufacturer stamps (e.g., Reggiani, Guzzini, or Sonneman).</span>
          </div>
        </div>
      </div>

      <div id="caring-chrome" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Caring for Chrome</h2>
        <ul class="space-y-2.5 my-3 pl-2">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hand-sparkles text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Always switch off and allow bulbs to cool completely before cleaning.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hand-sparkles text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Dust weekly with a dry microfiber cloth; wipe fingerprints with a lightly damp cloth, then immediately buff dry to prevent water spotting.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hand-sparkles text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>Never use abrasive scourers or harsh acidic sprays which strip protective chrome electroplating.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-hand-sparkles text-amber-600 mt-1 text-xs shrink-0"></i>
            <span>When repositioning, lift from the weighted base and lower stem—never drag or pull by the upper curved arms.</span>
          </li>
        </ul>
      </div>

      <div id="safety-rewiring" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Safety and Rewiring</h2>
        <p>
          Vintage lighting should always be verified by professionals prior to domestic use. Aged wiring can turn brittle, and ungrounded original European sockets may not comply with modern electrical safety codes.
        </p>
        <p>
          At Aethelgard, all period lighting is sympathetically rewired with modern double-insulated braided cabling and PAT-certified before entering private collections.
        </p>
      </div>

      <div id="approach-restoration" class="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
        <h2 class="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">Our Approach to Restoration</h2>
        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 1: Diagnostic Inspection</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Full evaluation of internal wiring, arm tension collars, globe mounts, and base counterweight integrity.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 2: Certified Rewiring</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Installation of brand-new heat-resistant wiring, compliant E27 bulb sockets, and a premium inline foot switch.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 3: Chrome Conservation</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Gentle ultrasonic cleaning and micro-crystalline polishing to lift oxidation without thinning period chrome layers.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 4: Load & Balance Testing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Each arm is tested at full extension to ensure perfect gravitational balance and rock-solid plinth stability.</p>
          </div>
          <div class="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
            <h4 class="font-serif font-bold text-base text-amber-700 dark:text-amber-400">Step 5: Final Electrical Testing</h4>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">Continuous 24-hour heat dissipation testing and official PAT safety certification.</p>
          </div>
        </div>
      </div>

      <div id="statement-piece" class="heritage-card p-6 sm:p-8 rounded-2xl bg-[#F5F2EC] dark:bg-stone-900 border border-amber-600/30 text-center space-y-4 mt-8">
        <div class="w-12 h-12 rounded-full bg-amber-700/10 dark:bg-amber-500/10 flex items-center justify-center mx-auto text-amber-700 dark:text-amber-400 text-2xl">
          <i class="fa-solid fa-lightbulb"></i>
        </div>
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">Bring Home a Statement Piece</h3>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
          Elegant, sculptural and endlessly versatile, this chrome arc lamp adds height, light and space-age character to any modern interior. Get in touch to enquire about this piece, arrange an in-person viewing, or discuss insured delivery.
        </p>
        <div class="pt-2">
          <a href="contact.html#appointment" class="inline-flex items-center gap-2 btn-heritage-gold px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-md rounded-lg">
            <i class="fa-regular fa-calendar-check text-sm"></i> Enquire About This Arc Lamp
          </a>
        </div>
      </div>
    `
  }
];

function getBlogArticleById(id) {
  if (!id) return BLOG_ARTICLES[0];
  const cleanId = id.toLowerCase().trim();
  const match = BLOG_ARTICLES.find(a => a.id === cleanId || a.id.includes(cleanId) || cleanId.includes(a.id));
  return match || BLOG_ARTICLES[0];
}
