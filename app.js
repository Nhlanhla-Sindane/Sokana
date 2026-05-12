/* ═══════════════════════════════════════════════════════════════
   LIVE WISHLIST — app.js
   Stack: Supabase JS v2 · Vanilla ES6+
   Table schema:
     CREATE TABLE wishlist_items (
       id       SERIAL PRIMARY KEY,
       name     TEXT NOT NULL,
       category TEXT NOT NULL,
       count    INT  NOT NULL DEFAULT 0
     );
   ═══════════════════════════════════════════════════════════════ */

// ── ❶ SUPABASE CONFIG ──────────────────────────────────────────
// copy or look for these two values from your own project credentials
// look in your: https://app.supabase.com → Project Settings → API
const SUPABASE_URL = 'https://rluzwmllfbjqgvkstxjq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_G7t8-5OyKFgef4lij5B4Ig_JlbbCqao';

// Initialise the Supabase client (exposed globally via the CDN)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── ❷ CATEGORY META (icon + display order) ────────────────────
// Maps category names from the DB to a display icon.
// Add / rename freely to match your table data.
const CATEGORY_META = {
  'Toiletries':   '🧴',
  'Accessories':  '💎',
  'Electronics':  '🖥️',
  'Clothing':     '👕',
  'Books':        '📚',
  'Food & Drink': '🍜',
  'Home':         '🏠',
  'Fitness':      '🏋️',
};

// ── ❸ ITEM IMAGES ─────────────────────────────────────────────
// Maps item names (lowercase) to a preview image URL.
// Uses Unsplash Source for high-quality, free previews.
// Add entries that match your own wishlist items.
const ITEM_IMAGES = {
  default: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',

  // Toiletries
  'shampoo':        'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80',
  'conditioner':    'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=400&q=80',
  'moisturiser':    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
  'toothbrush':     'https://images.unsplash.com/photo-1559351529-3aa0e1a1ea31?w=400&q=80',

  // Accessories
  'sunglasses':     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80',
  'watch':          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
  'wallet':         'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80',
  'belt':           'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&q=80',

  // Electronics
  'laptop':         'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
  'headphones':     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
  'keyboard':       'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
  'mouse':          'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80',

  // Clothing
  'hoodie':         'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80',
  'sneakers':       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  'jeans':          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
  't-shirt':        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80',
};

/**
 * Returns the best matching preview image URL for an item name.
 * Tries an exact lowercase match first; falls back to default.
 */
function getImageUrl(itemName) {
  const key = itemName.toLowerCase().trim();
  return ITEM_IMAGES[key] || ITEM_IMAGES['default'];
}

// ── ❹ DOM REFERENCES ──────────────────────────────────────────
const gridEl        = document.getElementById('wishlistGrid');
const loaderEl      = document.getElementById('gridLoader');
const overlayEl     = document.getElementById('imgOverlay');
const overlayImgEl  = document.getElementById('overlayImg');
const downloadBtnEl = document.getElementById('overlayDownload');
const toastEl       = document.getElementById('toast');

// In-memory store of items so real-time patches are instant
let itemsCache = {}; // keyed by item id

// ── ❺ BOOT ────────────────────────────────────────────────────
(async function boot() {
  await loadAndRender();
  subscribeToChanges();
})();

// ── ❻ LOAD & RENDER ───────────────────────────────────────────
/**
 * Fetches all rows from the `wishlist_items` table,
 * groups them by category, and renders the grid.
 */
async function loadAndRender() {
  const { data, error } = await supabase
    .from('wishlist_items')
    .select('*')
    .order('category')
    .order('name');

  loaderEl.remove(); // hide the spinner

  if (error) {
    showConfigError(error.message);
    return;
  }

  // Cache all items
  data.forEach(item => { itemsCache[item.id] = item; });

  // Group by category
  const grouped = groupByCategory(data);

  // Render each category column
  Object.entries(grouped).forEach(([category, items], idx) => {
    const card = buildCategoryCard(category, items, idx);
    gridEl.appendChild(card);
  });
}

/** Groups an array of items into { category: [items] } */
function groupByCategory(items) {
  return items.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});
}

// ── ❼ BUILD CATEGORY CARD ─────────────────────────────────────
function buildCategoryCard(category, items, idx) {
  const icon = CATEGORY_META[category] || '📦';

  const card = document.createElement('div');
  card.className = 'category-card';
  card.style.animationDelay = `${idx * 0.07}s`;

  card.innerHTML = `
    <div class="category-header">
      <span class="category-icon">${icon}</span>
      <span class="category-title">${category}</span>
    </div>
    <ul class="item-list" data-category="${category}"></ul>
  `;

  const list = card.querySelector('.item-list');
  items.forEach(item => list.appendChild(buildItemRow(item)));

  return card;
}

// ── ❽ BUILD ITEM ROW ──────────────────────────────────────────
function buildItemRow(item) {
  const li = document.createElement('li');
  li.className = 'item-row';
  li.dataset.id = item.id;

  li.innerHTML = `
    <span class="item-name">${item.name}</span>
    <span class="item-count" id="count-${item.id}">${item.count}</span>
  `;

  // ── Click: increment count in Supabase
  li.addEventListener('click', () => handleItemClick(item.id));

  // ── Hover: show image overlay
  li.addEventListener('mouseenter', (e) => showOverlay(item.name, e));
  li.addEventListener('mousemove',  (e) => positionOverlay(e));
  li.addEventListener('mouseleave', hideOverlay);

  return li;
}

// ── ❾ CLICK HANDLER ───────────────────────────────────────────
/**
 * Increments the item's count in Supabase.
 * The real-time subscription will then update the UI.
 */
async function handleItemClick(id) {
  const current = itemsCache[id]?.count ?? 0;

  const { error } = await supabase
    .from('wishlist_items')
    .update({ count: current + 1 })
    .eq('id', id);

  if (error) {
    showToast('⚠️ Could not update — check Supabase config');
  }
}

// ── ❿ REAL-TIME SUBSCRIPTION ──────────────────────────────────
/**
 * Subscribes to INSERT, UPDATE, and DELETE events on the table.
 * Any change made by any user anywhere updates every connected client.
 */
function subscribeToChanges() {
  supabase
    .channel('wishlist-live')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'wishlist_items' },
      (payload) => {
        const { eventType, new: newRow, old: oldRow } = payload;

        if (eventType === 'UPDATE') {
          // Patch the in-memory cache
          itemsCache[newRow.id] = newRow;

          // Animate the count badge
          const countEl = document.getElementById(`count-${newRow.id}`);
          if (countEl) {
            countEl.textContent = newRow.count;
            countEl.classList.remove('bump');
            void countEl.offsetWidth; // reflow to restart animation
            countEl.classList.add('bump');
          }

          showToast(`✦ "${newRow.name}" updated → ${newRow.count}`);
        }

        if (eventType === 'INSERT') {
          // Re-render the whole grid to add the new item cleanly
          gridEl.innerHTML = '';
          const allItems = Object.values(itemsCache);
          allItems.push(newRow);
          itemsCache[newRow.id] = newRow;
          const grouped = groupByCategory(allItems);
          Object.entries(grouped).forEach(([cat, items], idx) => {
            gridEl.appendChild(buildCategoryCard(cat, items, idx));
          });
        }

        if (eventType === 'DELETE') {
          delete itemsCache[oldRow.id];
          const row = document.querySelector(`.item-row[data-id="${oldRow.id}"]`);
          row?.closest('li')?.remove();
        }
      }
    )
    .subscribe();
}

// ── ⓫ HOVER OVERLAY ───────────────────────────────────────────
let overlayTimeout;

/** Shows the floating image preview near the cursor */
function showOverlay(itemName, e) {
  clearTimeout(overlayTimeout);
  const url = getImageUrl(itemName);
  overlayImgEl.src = url;
  overlayEl.style.display = 'block';
  overlayEl.classList.add('visible');
  positionOverlay(e);

  // Wire download button each time
  downloadBtnEl.onclick = () => downloadImage(url, itemName);
}

/** Keeps the overlay near the cursor as the mouse moves */
function positionOverlay(e) {
  const offset = 16;
  let x = e.clientX + offset;
  let y = e.clientY + offset;

  // Keep within viewport
  if (x + 210 > window.innerWidth)  x = e.clientX - 210 - offset;
  if (y + 200 > window.innerHeight) y = e.clientY - 200 - offset;

  overlayEl.style.left = `${x}px`;
  overlayEl.style.top  = `${y}px`;
}

/** Hides the overlay with a short delay (prevents flicker) */
function hideOverlay() {
  overlayTimeout = setTimeout(() => {
    overlayEl.style.display = 'none';
    overlayEl.classList.remove('visible');
  }, 80);
}

// ── ⓬ DOWNLOAD ────────────────────────────────────────────────
/**
 * Downloads the preview image to the user's device.
 * Uses fetch → blob → anchor click trick to force a download.
 */
async function downloadImage(url, itemName) {
  try {
    const res  = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${itemName.replace(/\s+/g, '_')}_preview.jpg`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast(`⬇ Downloaded "${itemName}" image`);
  } catch {
    showToast('⚠️ Could not download image');
  }
}

// ── ⓭ TOAST HELPER ───────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

// ── ⓮ CONFIG ERROR FALLBACK ──────────────────────────────────
/**
 * Renders a helpful error card when Supabase credentials are
 * not yet configured, so the developer can see what to do.
 */
function showConfigError(msg) {
  gridEl.innerHTML = `
    <div style="
      grid-column: 1/-1;
      background: #1e293b;
      border: 1px solid #f87171;
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      color: #f87171;
    ">
      <p style="font-size:1.1rem;font-weight:700;margin-bottom:.5rem">⚠️ Supabase not configured</p>
      <p style="color:#94a3b8;font-size:.88rem;margin-bottom:1rem">${msg}</p>
      <p style="color:#94a3b8;font-size:.82rem;line-height:1.8">
        1. Open <code style="color:#60a5fa">app.js</code><br/>
        2. Replace <code style="color:#60a5fa">SUPABASE_URL</code> and <code style="color:#60a5fa">SUPABASE_ANON_KEY</code><br/>
        3. Create a <code style="color:#60a5fa">wishlist_items</code> table with columns:
           <strong>id, name, category, count</strong>
      </p>
    </div>`;
}
