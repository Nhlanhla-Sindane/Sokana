// ── YOUR WISHLIST DATA ──────────────────────────────────────
const WISHLIST_DATA = [
  // Clothing (Tops)
  {name: 'Sweaters', category: 'Clothing (Tops)', url: 'https://gabeclothing.ca/cdn/shop/files/DSCN1154-A-Copy.webp?v=1685665204&width=1946'},
  { name: 'Cardigans', category: 'Clothing (Tops)', url: 'https://thefoschini.vtexassets.com/arquivos/ids/225095807-800-1067?v=639100169653600000&width=800&height=1067&aspect=true' },
  { name: 'Knitwear', category: 'Clothing (Tops)', url: 'https://www.careofcarl.com/bilder/artiklar/zoom/25657411r_1.jpg?m=1692366376?0413' },
  { name: 'T-shirts', category: 'Clothing (Tops)', url: 'https://www.edgars.co.za/cdn/shop/files/EDG230720249270.jpg?v=1721813896&width=1080' },
  { name: 'Shirts', category: 'Clothing (Tops)', url: 'https://johncraig.co.za/media/catalog/product/cache/8e71962534cb112d3996d77af375c1d8/g/n/gnt25w-gant-poplin-shirt-wht-3000100-100-v1_jpg.jpg' },
  { name: 'Coats', category: 'Clothing (Tops)', url: 'https://godwincharli.com/cdn/shop/collections/Group_6b32f689-8b24-4989-a342-7eb3b4099301.jpg?v=1649759449' },
  { name: 'Jackets', category: 'Clothing (Tops)', url: 'https://bash.com/markham-men-s-slim-knit-stretch-boxy-taupe-jacket-020203acak9/p' },
  { name: 'Hoodies', category: 'Clothing (Tops)', url: 'https://bash.com/markham-men-s-slim-knit-stretch-boxy-taupe-jacket-020203acak9/p' },

  // Pants / Trousers
  { name: 'Chinos', category: 'Pants/Trousers', url: 'https://www.lepantalon.com/cdn/shop/files/LEPANTALON_FP_SHOPIFY_CHINOCLASSIQUE_BEIGE_1.jpg?v=1740489152' },
  { name: 'Jeans', category: 'Pants/Trousers', url: 'https://wrogn.com/cdn/shop/files/1_6b8140c5-6f1f-4483-9452-2c5fa2f45e09.jpg?v=1749210688' },
  { name: 'Shorts', category: 'Pants/Trousers', url: 'https://johncraig.co.za/media/catalog/product/cache/8e71962534cb112d3996d77af375c1d8/b/e/ber02kh-bertolini-elasticated-cargo-short-khali-bers24-002b-v1_jpg.jpg' },
  { name: 'Sweatpants', category: 'Pants/Trousers', url: 'https://thefoschini.vtexassets.com/arquivos/ids/225735998-300-400/adcf2332-50e6-4f58-bc57-1744e3f48724.png?v=639114122946930000' },
  { name: 'Cargo Pants', category: 'Pants/Trousers', url: 'https://m.media-amazon.com/images/I/81xRg0piFpL._AC_UY1100_.jpg' },
  { name: 'Pleated Trousers', category: 'Pants/Trousers', url: 'https://www.dickies.co.za/api/catalog/product/3/_/3_2.png?width=596&height=596&store=dickies&image-type=image' },
  { name: 'Double-Pleated Trousers', category: 'Pants/Trousers', url: 'https://www.realmenrealstyle.com/wp-content/uploads/2025/01/man-wearing-charcoal-gray-pleated-pants-with-a-white-oxford-shirt.jpg' },
  { name: 'Formal Trousers', category: 'Pants/Trousers', url: 'https://www.hollomen.com/cdn/shop/files/ibiza-black-trousers-754257.jpg?v=1723454634' },
  { name: 'Briefs / Boxers', category: 'Pants/Trousers', url: 'https://www.edgars.co.za/cdn/shop/files/15_4af7ffa2-4b17-42c7-b6e7-0fef1306e827.png?v=1759306038&width=1000' },

  // Headwear
  { name: 'Beanies', category: 'Headwear', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijggY5JFtMcpEw33kDwZCAANCdDNQ8FaMVg&s' },
  { name: 'Bucket Hats', category: 'Headwear', url: 'https://skipperbar.co.za/media/catalog/product/cache/8e71962534cb112d3996d77af375c1d8/s/t/str4g-evans-towelling-grey-v1_jpg.jpg' },
  { name: 'Baseball Caps', category: 'Headwear', url: 'https://www.neweracap.co.za/cdn/shop/products/0f2c1c85deb18869238e9c26227259b0_c0905f5d-59ed-4be3-9e9b-8b722016a9e1.jpg?v=1670836419' },
  { name: 'Xhosa Hat/Cap', category: 'Headwear', url: 'https://img.bobshop.co.za/image/upload/f_auto,c_fit,w_900,h_900,d_notfound.png/user_images/597/3755597/190604191934_062d63db62c7ac209cae826216f6242a--hunting-clothes-sharp-dressed-man.jpg' },
  { name: 'Fedora', category: 'Headwear', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-97vy2-xt1MCk8Y64K1W7h36hJLZJUhqJw&s' },

  // Accessories
  { name: 'Rings', category: 'Accessories', url: 'https://za.shein.com/Carbon-Fiber-Stainless-Steel-ECG-Ring-Gold-Fashionable-ECG-Ring-Love-Declaration-Unisex-Wedding-Ring-p-76789333.html?src_identifier=st%3D2%60sc%3Drings+men%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1778076242242&mallCode=1&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_76789333%7C0-2&pageListType=4&main_attr=27_112' },
  { name: 'Silk Scarves', category: 'Accessories', url: 'https://www.legit.co.za/products/2-pack-chain-print-satin-scarves-neutral-42288801' },
  { name: 'Belts', category: 'Accessories', url: '' },
  { name: 'Tie', category: 'Accessories', url: '' },
  { name: 'Suit Handkerchief', category: 'Accessories', url: 'https://cdn.shopify.com/s/files/1/0338/1123/4955/files/Chihiro-Japanese-Geisha-Pocket-Square-Handkerchief-For-Men-Cravat-Club-Menswear-Style_1024x1024.jpg?v=1690364655' },
  { name: 'Glasses (Clear)', category: 'Accessories', url: 'https://funkytradition.com/cdn/shop/files/classic-transparent-round-glasses-sunglasses-for-men-and-women-funkytradition-341166.jpg?crop=center&height=800&v=1723496860&width=800' },
  { name: 'Sunglasses', category: 'Accessories', url: 'https://www.edgars.co.za/cdn/shop/files/32841301-ONEFIT_1024x1024.png?v=1721128575' },
  { name: 'Socks', category: 'Accessories', url: '' },
  { name: 'Watch', category: 'Accessories', url: '' },

  // Shoes
  { name: 'Sneakers', category: 'Shoes', url: 'https://i.ebayimg.com/images/g/f7YAAOSweh9jNHPR/s-l1200.jpg' },
  { name: 'Loafers', category: 'Shoes', url: 'https://smittys.co.za/cdn/shop/products/WhatsAppImage2022-06-13at1.02.53PM_grande.jpg?v=1661323369' },
  { name: 'Sandals', category: 'Shoes', url: '' },
  { name: 'Slippers', category: 'Shoes', url: '' },
  { name: 'Work Boots', category: 'Shoes', url: '' },


  // Toiletries
  { name: 'Soap', category: 'Toiletries', url: '' },
  { name: 'Face Wash', category: 'Toiletries', url: '' },
  { name: 'Face Moisturizer', category: 'Toiletries', url: '' },
  { name: 'Body Lotion', category: 'Toiletries', url: '' },
  { name: 'Toothpaste', category: 'Toiletries', url: '' },
  { name: 'Toothbrush', category: 'Toiletries', url: '' },
  { name: 'Scrub', category: 'Toiletries', url: '' },
  { name: 'Perfume / Cologne (Oud)', category: 'Toiletries', url: 'https://static.sweetcare.com/img/prd/max/v-638200521167478486/dolce-gabbana-009172dg-1.jpg' },
  { name: 'Deodorant Spray', category: 'Toiletries', url: '' },
  { name: 'Roll-On Deodorant', category: 'Toiletries', url: '' },
  { name: 'Blistex DCT (Daily Conditioning Treatment) ', category: 'Toiletries', url: '' },

  // Electronics
  { name: 'Smartphone', category: 'Electronics', url: '' },
  { name: 'Earphones', category: 'Electronics', url: '' },
  { name: 'Headphones', category: 'Electronics', url: '' },
  { name: 'C-type Cable / Charger', category: 'Electronics', url: '' },
  { name: 'Electric Coffee Grinder', category: 'Electronics', url: '' },
  { name: 'Electric Milk Frother', category: 'Electronics', url: '' },
  { name: 'USB', category: 'Electronics', url: '' },
  { name: 'Keyboard (wireless/wired)', category: 'Electronics', url: '' },
  { name: 'Monitor', category: 'Electronics', url: '' },

  // Coffee
  { name: 'Terbodore Coffee Beans', category: 'Coffee', url: '' },
  { name: 'Magnificent Barista Boys Coffee Beans', category: 'Coffee', url: '' },
  { name: 'Babylonstoren Coffee Beans', category: 'Coffee', url: '' },
  { name: 'Moka Pot', category: 'Coffee', url: '' },
  { name: 'Milk Frothing Pitcher', category: 'Coffee', url: '' },

  // Stationery
  { name: 'Notebooks', category: 'Stationery', url: '' },
  { name: 'Pens', category: 'Stationery', url: '' },
  { name: 'Pencils', category: 'Stationery', url: '' },

  // Farming
  { name: 'Seeds (Vegetables)', category: 'Farming', url: '' },
  { name: 'Seeds (Flowers)', category: 'Farming', url: '' },
  { name: 'Seeds (Fruits)', category: 'Farming', url: '' },
  { name: 'Compost', category: 'Farming', url: '' },
  { name: 'Garden Tools', category: 'Farming', url: '' },
  { name: '50% Visibility Nets', category: 'Farming', url: '' },
  { name: 'Spray Bottles', category: 'Farming', url: '' },
  { name: 'Pot Plants', category: 'Farming', url: '' },
  { name: 'Trimming Scissors', category: 'Farming', url: '' },
  { name: 'Cocopeat', category: 'Farming', url: '' },

  // Self-improvement
  { name: 'Books (pyschology, philosophy& communication)', category: 'Self-improvement', url: '' },


  // Ambitious / Luxury
  { name: 'Continental Tyres (185/60/R15)', category: 'Ambitious / Luxury', url: '' },
  { name: 'J.Cole VVIP Tickets', category: 'Ambitious / Luxury', url: '' },
  { name: 'Samsung A26 5G', category: 'Ambitious / Luxury', url: '' }
];

// ── DOM ELEMENTS ────────────────────────────────────────────
const gridEl = document.getElementById('wishlistGrid');
//const imgOverlay = document.getElementById('imgOverlay');
//const overlayImg = document.getElementById('overlayImg');
//const overlayDownload = document.getElementById('overlayDownload');

// ── RENDER LOGIC ────────────────────────────────────────────
function renderStaticWishlist() {
  gridEl.innerHTML = ''; 

  const categories = [...new Set(WISHLIST_DATA.map(item => item.category))];

  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category-group';
    
    const itemsInCat = WISHLIST_DATA.filter(i => i.category === cat);
    
    section.innerHTML = `
      <h2 class="category-title">${cat}</h2>
      <ul class="item-list">
        ${itemsInCat.map(item => `
          <li class="wish-item">
            <span class="item-bullet">✦</span>
            <a href="${item.url}" target="_blank" class="item-link">${item.name}</a>
          </li>
        `).join('')}
      </ul>
    `;
    gridEl.appendChild(section);
  });
}

// Initial Run
renderStaticWishlist();