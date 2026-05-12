// ── ❶ YOUR WISHLIST DATA ──────────────────────────────────────
const WISHLIST_DATA = [
  // Clothing (Tops)
  {name: 'Sweaters', category: 'Clothing (Tops)'},
  { name: 'Cardigans', category: 'Clothing (Tops)' },
  { name: 'Knitwear', category: 'Clothing (Tops)' },
  { name: 'T-shirts', category: 'Clothing (Tops)' },
  { name: 'Shirts', category: 'Clothing (Tops)' },
  { name: 'Coats', category: 'Clothing (Tops)' },
  { name: 'Jackets', category: 'Clothing (Tops)', url: 'https://bash.com/markham-men-s-slim-knit-stretch-boxy-taupe-jacket-020203acak9/p' },
  { name: 'Hoodies', category: 'Clothing (Tops)' },

  // Pants / Trousers
  { name: 'Chinos', category: 'Pants/Trousers' },
  { name: 'Jeans', category: 'Pants/Trousers' },
  { name: 'Shorts', category: 'Pants/Trousers' },
  { name: 'Sweatpants', category: 'Pants/Trousers' },
  { name: 'Cargo Pants', category: 'Pants/Trousers' },
  { name: 'Pleated Trousers', category: 'Pants/Trousers' },
  { name: 'Double-Pleated Trousers', category: 'Pants/Trousers' },
  { name: 'Formal Trousers', category: 'Pants/Trousers' },
  { name: 'Briefs / Boxers', category: 'Pants/Trousers' },

  // Headwear
  { name: 'Beanies', category: 'Headwear' },
  { name: 'Bucket Hats', category: 'Headwear' },
  { name: 'Baseball Caps', category: 'Headwear' },
  { name: 'Xhosa Hat/Cap', category: 'Headwear' },
  { name: 'Fedora', category: 'Headwear' },

  // Accessories
  { name: 'Rings', category: 'Accessories', url: 'https://za.shein.com/Carbon-Fiber-Stainless-Steel-ECG-Ring-Gold-Fashionable-ECG-Ring-Love-Declaration-Unisex-Wedding-Ring-p-76789333.html?src_identifier=st%3D2%60sc%3Drings+men%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1778076242242&mallCode=1&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_76789333%7C0-2&pageListType=4&main_attr=27_112' },
  { name: 'Silk Scarves', category: 'Accessories', url: 'https://www.legit.co.za/products/2-pack-chain-print-satin-scarves-neutral-42288801' },
  { name: 'Belts', category: 'Accessories' },
  { name: 'Tie', category: 'Accessories' },
  { name: 'Suit Handkerchief', category: 'Accessories' },
  { name: 'Glasses (Clear)', category: 'Accessories' },
  { name: 'Sunglasses', category: 'Accessories' },
  { name: 'Socks', category: 'Accessories' },
  { name: 'Watch', category: 'Accessories' },

  // Shoes
  { name: 'Sneakers', category: 'Shoes' },
  { name: 'Loafers', category: 'Shoes' },
  { name: 'Sandals', category: 'Shoes' },
  { name: 'Slippers', category: 'Shoes' },
  { name: 'Work Boots', category: 'Shoes' },
  

  // Toiletries
  { name: 'Soap', category: 'Toiletries' },
  { name: 'Face Wash', category: 'Toiletries' },
  { name: 'Face Moisturizer', category: 'Toiletries' },
  { name: 'Body Lotion', category: 'Toiletries' },
  { name: 'Toothpaste', category: 'Toiletries' },
  { name: 'Toothbrush', category: 'Toiletries' },
  { name: 'Scrub', category: 'Toiletries' },
  { name: 'Perfume / Cologne (Oud)', category: 'Toiletries' },
  { name: 'Deodorant Spray', category: 'Toiletries' },
  { name: 'Roll-On Deodorant', category: 'Toiletries' },
  { name: 'Blistex DCT (Daily Conditioning Treatment) ', category: 'Toiletries' },

  // Electronics
  { name: 'Smartphone', category: 'Electronics' },
  { name: 'Earphones', category: 'Electronics' },
  { name: 'Headphones', category: 'Electronics' },
  { name: 'C-type Cable / Charger', category: 'Electronics' },
  { name: 'Electric Coffee Grinder', category: 'Electronics' },
  { name: 'Electric Milk Frother', category: 'Electronics' },
  { name: 'USB', category: 'Electronics' },
  { name: 'Keyboard (wireless/wired)', category: 'Electronics' },
  { name: 'Monitor', category: 'Electronics' },

  // Coffee
  { name: 'Terbodore Coffee Beans', category: 'Coffee' },
  { name: 'Magnificent Barista Boys Coffee Beans', category: 'Coffee' },
  { name: 'Babylonstoren Coffee Beans', category: 'Coffee' },
  { name: 'Moka Pot', category: 'Coffee' },
  { name: 'Milk Frothing Pitcher', category: 'Coffee' },

  // Stationery
  { name: 'Notebooks', category: 'Stationery' },
  { name: 'Pens', category: 'Stationery' },
  { name: 'Pencils', category: 'Stationery' },
  
  // Farming
  { name: 'Seeds (Vegetables)', category: 'Farming' },
  { name: 'Seeds (Flowers)', category: 'Farming' },
  { name: 'Seeds (Fruits)', category: 'Farming' },
  { name: 'Compost', category: 'Farming' },
  { name: 'Garden Tools', category: 'Farming' },
  { name: '50% Visibility Nets', category: 'Farming' },
  { name: 'Spray Bottles', category: 'Farming' },
  { name: 'Pot Plants', category: 'Farming' },
  { name: 'Trimming Scissors', category: 'Farming' },
  { name: 'Cocopeat', category: 'Farming' },

  // Self-improvement
  { name: 'Books (pyschology, philosophy& communication)', category: 'Self-improvement' },


  // Ambitious / Luxury
  { name: 'Continental Tyres (185/60/R15)', category: 'Ambitious / Luxury' },
  { name: 'J.Cole VVIP Tickets', category: 'Ambitious / Luxury' },
  { name: 'Samsung A26 5G', category: 'Ambitious / Luxury' }
];

// ── IMAGE DATABASE ──────────────────────────────────────────
// Paste your store image URLs or Supabase Storage links here.
const ITEM_IMAGES = {
  // clothing (tops)
  'Sweaters': 'https://gabeclothing.ca/cdn/shop/files/DSCN1154-A-Copy.webp?v=1685665204&width=1946',
  'Cardigans': 'https://thefoschini.vtexassets.com/arquivos/ids/225095807-800-1067?v=639100169653600000&width=800&height=1067&aspect=true',
  'Knitwear': 'https://www.careofcarl.com/bilder/artiklar/zoom/25657411r_1.jpg?m=1692366376?0413',
  'T-shirts': 'https://www.edgars.co.za/cdn/shop/files/EDG230720249270.jpg?v=1721813896&width=1080',
  'Shirts': 'https://johncraig.co.za/media/catalog/product/cache/8e71962534cb112d3996d77af375c1d8/g/n/gnt25w-gant-poplin-shirt-wht-3000100-100-v1_jpg.jpg',
  'Coats': 'https://godwincharli.com/cdn/shop/collections/Group_6b32f689-8b24-4989-a342-7eb3b4099301.jpg?v=1649759449',
  'Jackets': 'https://bash.com/markham-men-s-slim-knit-stretch-boxy-taupe-jacket-020203acak9/p',

  // pants/trousers
  'Chinos': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Jeans': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Shorts': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Sweatpants': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Cargo Pants': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Pleated Trousers': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Double-Pleated Trousers': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Formal Trousers': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  'Briefs / Boxers': 'https://cdn.shopify.com/s/files/1/0283/0187/2747/products/IMG_20230829_125029_800x.jpg?v=1693304418',
  // ... Add others as needed
};

// ── ❸ DOM ELEMENTS ────────────────────────────────────────────
const gridEl = document.getElementById('wishlistGrid');
const imgOverlay = document.getElementById('imgOverlay');
const overlayImg = document.getElementById('overlayImg');
const overlayDownload = document.getElementById('overlayDownload');

// ── ❹ RENDER LOGIC ────────────────────────────────────────────
function renderStaticWishlist() {
  gridEl.innerHTML = ''; // Clear loader

  // Group items by category
  const categories = [...new Set(WISHLIST_DATA.map(item => item.category))];

  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category-group';
    
    const itemsInCat = WISHLIST_DATA.filter(i => i.category === cat);
    
    section.innerHTML = `
      <h2 class="category-title">${cat}</h2>
      <ul class="item-list">
        ${itemsInCat.map(item => `
          <li class="wish-item" data-name="${item.name.toLowerCase()}">
            <span class="item-bullet">✦</span>
            <span class="item-text">${item.name}</span>
          </li>
        `).join('')}
      </ul>
    `;
    gridEl.appendChild(section);
  });

  setupHoverListeners();
}

// ── ❺ HOVER & DOWNLOAD LOGIC ──────────────────────────────────
function setupHoverListeners() {
  const items = document.querySelectorAll('.wish-item');
  
  items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const name = item.getAttribute('data-name');
      const imgUrl = ITEM_IMAGES[name] || 'https://via.placeholder.com/400?text=No+Image';
      
      overlayImg.src = imgUrl;
      imgOverlay.style.display = 'flex';
      
      // Position overlay near mouse or fixed
      imgOverlay.style.left = `${e.pageX + 20}px`;
      imgOverlay.style.top = `${e.pageY - 100}px`;
    });

    item.addEventListener('mouseleave', () => {
      imgOverlay.style.display = 'none';
    });
  });
}

// Initial Run
renderStaticWishlist();