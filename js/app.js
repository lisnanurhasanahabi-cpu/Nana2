const products = [
  {
    id: "dress-midi",
    name: "Floral Midi Dress",
    category: "Pakaian",
    price: 420000,
    stock: 14,
    image: "image/Midi Dress.jpeg",
    desc: "Dress floral dengan bahan ringan untuk acara santai maupun semi-formal.",
    descEn: "A lightweight floral dress for casual and semi-formal occasions.",
  },
  {
    id: "blazer-linen",
    name: "Linen Office Blazer",
    category: "Pakaian",
    price: 680000,
    stock: 8,
    image: "image/Blazer Linen.jpeg",
    desc: "Blazer linen warna netral untuk tampilan kerja yang rapi dan modern.",
    descEn: "A neutral linen blazer for polished and modern work looks.",
  },
  {
    id: "sneakers-cream",
    name: "Cream Daily Sneakers",
    category: "Sepatu",
    price: 590000,
    stock: 12,
    image: "image/Sneakers Cream .jpeg",
    desc: "Sneakers nyaman untuk aktivitas harian dengan desain minimal.",
    descEn: "Comfortable daily sneakers with a clean minimalist design.",
  },
  {
    id: "heels-maroon",
    name: "Maroon Classic Heels",
    category: "Sepatu",
    price: 730000,
    stock: 6,
    image: "image/Heels Maroon.jpeg",
    desc: "Heels elegan aksen maroon dan gold untuk pesta, kerja, dan acara spesial.",
    descEn:
      "Elegant maroon and gold heels for parties, work, and special events.",
  },
  {
    id: "tote-leather",
    name: "Structured Tote Bag",
    category: "Tas",
    price: 850000,
    stock: 7,
    image: "image/Tote Leather.jpeg",
    desc: "Tas tote dengan ruang luas untuk laptop, dompet, dan kebutuhan harian.",
    descEn: "A spacious tote bag for laptops, wallets, and daily essentials.",
  },
  {
    id: "mini-bag",
    name: "Mini Shoulder Bag",
    category: "Tas",
    price: 390000,
    stock: 10,
    image: "image/Mini Bag.jpeg",
    desc: "Tas kecil untuk outfit hangout dengan aksen simpel dan manis.",
    descEn: "A compact bag for hangout outfits with simple, sweet accents.",
  },
  {
    id: "watch-gold",
    name: "Gold Minimal Watch",
    category: "Aksesoris",
    price: 320000,
    stock: 15,
    image: "image/Watch.jpeg",
    desc: "Jam tangan minimalis untuk melengkapi tampilan formal dan kasual.",
    descEn: "A minimalist watch to complete formal and casual outfits.",
  },
  {
    id: "scarf-satin",
    name: "Satin Pattern Scarf",
    category: "Aksesoris",
    price: 180000,
    stock: 18,
    image: "image/Scarf.jpeg",
    desc: "Scarf satin bermotif untuk aksen leher, rambut, atau tas.",
    descEn: "A patterned satin scarf for styling the neck, hair, or bag.",
  },
  {
    id: "shirt-white",
    name: "White Essential Shirt",
    category: "Pakaian",
    price: 260000,
    stock: 20,
    image: "image/White Shirt.jpeg",
    desc: "Kemeja putih basic yang mudah dipadukan untuk banyak gaya.",
    descEn: "A basic white shirt that is easy to style in many ways.",
  },
  {
    id: "denim-jacket",
    name: "Soft Denim Jacket",
    category: "Pakaian",
    price: 520000,
    stock: 9,
    image: "image/Denim Jacket.jpeg",
    desc: "Jaket denim santai untuk gaya kasual yang tetap rapi.",
    descEn: "A relaxed denim jacket for casual looks that still feel neat.",
  },
  {
    id: "loafers-brown",
    name: "Brown Smart Loafers",
    category: "Sepatu",
    price: 640000,
    stock: 11,
    image: "image/Loafers.jpeg",
    desc: "Loafers cokelat untuk tampilan smart casual dan kerja.",
    descEn: "Brown loafers for smart casual and work outfits.",
  },
  {
    id: "bracelet-pearl",
    name: "Pearl Charm Bracelet",
    category: "Aksesoris",
    price: 210000,
    stock: 16,
    image: "image/Bracekelet Pearl.jpeg",
    desc: "Gelang pearl charm untuk aksen manis di outfit harian.",
    descEn: "A pearl charm bracelet for a sweet accent in daily outfits.",
  },
];

const storageKeys = {
  cart: "arthae_cart",
  adminProducts: "arthae_admin_products",
  orders: "arthae_orders_reset",
  stock: "arthae_stock",
  user: "arthae_user",
  lang: "arthae_lang",
};

const pageLinks = {
  home: "beranda.html",
  products: "produk.html",
  cart: "keranjang.html",
  admin: "admin.html",
};

const el = (selector) => document.querySelector(selector);
const whatsappNumber = "6282190002026";

const translations = {
  id: {
    login: "Login",
    account: "Akun",
    logout: "Keluar Akun",
    addCart: "Tambah ke Keranjang",
    detail: "Detail Produk",
    stock: "Stok",
    soldOut: "Stok Habis",
    buyWa: "Beli via WhatsApp",
    checkout: "Checkout Sekarang",
    historyEmpty: "Belum ada transaksi.",
    savedAccount: "Akun pembeli berhasil disimpan.",
    productNotFound: "Produk tidak ditemukan",
    tryOtherFilter: "Coba kata kunci atau filter lain.",
    cartEmpty: "Keranjang masih kosong",
    chooseProduct: "Silakan pilih produk fashion dulu.",
    shopProducts: "Belanja Produk",
    remove: "Hapus",
    removeProduct: "Hapus Produk",
    status: "Status",
    buyer: "Pembeli",
    total: "Total",
    productAdded: "Produk berhasil ditambahkan.",
    noAdminProducts: "Belum ada produk tambahan dari admin.",
    noOrders: "Belum ada pesanan masuk.",
    historyHint: "Transaksi yang berhasil checkout akan tampil di sini.",
    stockEmptyAlert: "Stok produk habis.",
    stockLimitAlert: "Jumlah produk di keranjang sudah sesuai stok tersedia.",
    stockNotEnough: "Stok {name} tidak cukup.",
    orderSuccess: "Nomor pesanan {id} berhasil dibuat dengan metode {payment}.",
    waGreeting: "Halo Arthae', saya ingin membeli:",
    noProduct: "- Belum ada produk",
    name: "Nama",
    waitingPayment: "Menunggu Pembayaran",
    processing: "Diproses",
    shipped: "Dikirim",
    done: "Selesai",
    updateStatus: "Update Status",
  },
  en: {
    login: "Login",
    account: "Account",
    logout: "Logout",
    addCart: "Add to Cart",
    detail: "Product Detail",
    stock: "Stock",
    soldOut: "Sold Out",
    buyWa: "Buy via WhatsApp",
    checkout: "Checkout Now",
    historyEmpty: "No transactions yet.",
    savedAccount: "Buyer account saved.",
    productNotFound: "Product not found",
    tryOtherFilter: "Try another keyword or filter.",
    cartEmpty: "Your cart is empty",
    chooseProduct: "Please choose fashion products first.",
    shopProducts: "Shop Products",
    remove: "Remove",
    removeProduct: "Remove Product",
    status: "Status",
    buyer: "Buyer",
    total: "Total",
    productAdded: "Product added successfully.",
    noAdminProducts: "No additional admin products yet.",
    noOrders: "No orders yet.",
    historyHint: "Successful checkout transactions will appear here.",
    stockEmptyAlert: "This product is out of stock.",
    stockLimitAlert: "The cart quantity already matches available stock.",
    stockNotEnough: "{name} stock is not enough.",
    orderSuccess: "Order number {id} was created successfully with {payment}.",
    waGreeting: "Hello Arthae', I want to buy:",
    noProduct: "- No products yet",
    name: "Name",
    waitingPayment: "Waiting for Payment",
    processing: "Processing",
    shipped: "Shipped",
    done: "Completed",
    updateStatus: "Update Status",
  },
};

function getData(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (error) {
    return fallback;
  }
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function currentLang() {
  return getData(storageKeys.lang, "id");
}

function t(key) {
  return translations[currentLang()]?.[key] || translations.id[key] || key;
}

function interpolate(text, values = {}) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    text,
  );
}

function categoryLabel(category) {
  if (currentLang() !== "en") return category;
  return (
    {
      Pakaian: "Clothing",
      Sepatu: "Shoes",
      Tas: "Bags",
      Aksesoris: "Accessories",
    }[category] || category
  );
}

function statusLabel(status) {
  const labels = {
    "Menunggu Pembayaran": t("waitingPayment"),
    Diproses: t("processing"),
    Dikirim: t("shipped"),
    Selesai: t("done"),
  };
  return labels[status] || status;
}

function paymentLabel(payment) {
  const labels = {
    "":
      currentLang() === "en"
        ? "Choose payment method"
        : "Pilih metode pembayaran",
    "Midtrans Virtual Account": "Midtrans Virtual Account",
    "E-Wallet": "E-Wallet",
    "Transfer Bank Manual":
      currentLang() === "en" ? "Manual Bank Transfer" : "Transfer Bank Manual",
  };
  return labels[payment] || payment;
}

function productDesc(product) {
  return currentLang() === "en" ? product.descEn || product.desc : product.desc;
}

function currentUser() {
  return getData(storageKeys.user, null);
}

function saveUser(user) {
  setData(storageKeys.user, user);
  renderAccount();
}

function productStock(product) {
  const stockData = getData(storageKeys.stock, {});
  return Number(stockData[product.id] ?? product.stock ?? 0);
}

function updateProductStock(id, stock) {
  const stockData = getData(storageKeys.stock, {});
  stockData[id] = Math.max(0, Number(stock));
  setData(storageKeys.stock, stockData);
}

function reduceStock(items) {
  items.forEach((item) => {
    const product = allProducts().find(
      (productItem) => productItem.id === item.id,
    );
    if (!product) return;
    updateProductStock(item.id, productStock(product) - item.qty);
  });
}

function orderMessage(items = cartItems()) {
  const user = currentUser();
  const summary = cartSummary();
  const lines = items
    .map(
      (item) =>
        `- ${item.name} x${item.qty} (${formatRupiah(item.price * item.qty)})`,
    )
    .join("\n");
  return [
    t("waGreeting"),
    lines || t("noProduct"),
    `${t("total")}: ${formatRupiah(summary.total)}`,
    user ? `${t("name")}: ${user.name}` : "",
    user ? `WA: ${user.phone}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function allProducts() {
  return [...products, ...getData(storageKeys.adminProducts, [])];
}

function cartItems() {
  return getData(storageKeys.cart, []);
}

function saveCart(items) {
  setData(storageKeys.cart, items);
  updateCartBadge();
  renderCart();
}

function cartSummary() {
  const subtotal = cartItems().reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const admin = subtotal > 0 ? 5000 : 0;
  const discount = subtotal >= 1000000 ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + admin - discount;
  return { subtotal, admin, discount, total };
}

function productCard(product) {
  const stock = productStock(product);
  const isSoldOut = stock <= 0;
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <span class="category">${categoryLabel(product.category)}</span>
        <h3>${product.name}</h3>
        <div class="price">${formatRupiah(product.price)}</div>
        <div class="stock-badge ${isSoldOut ? "empty-stock" : ""}">${isSoldOut ? t("soldOut") : `${t("stock")}: ${stock}`}</div>
        <div class="product-actions">
          <button class="detail-btn" data-detail="${product.id}">${t("detail")}</button>
          <button class="cart-btn" data-add="${product.id}" ${isSoldOut ? "disabled" : ""}>${isSoldOut ? t("soldOut") : t("addCart")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featuredGrid = el("#featuredGrid");
  if (!featuredGrid) return;
  featuredGrid.innerHTML = allProducts().slice(0, 4).map(productCard).join("");
}

function renderProducts() {
  const grid = el("#productGrid");
  if (!grid) return;

  const keyword = el("#searchInput")?.value.toLowerCase().trim() || "";
  const category = el("#categoryFilter")?.value || "Semua";
  const price = el("#priceFilter")?.value || "Semua";

  const filtered = allProducts().filter((product) => {
    const matchKeyword = product.name.toLowerCase().includes(keyword);
    const matchCategory = category === "Semua" || product.category === category;
    const matchPrice =
      price === "Semua" ||
      (price === "low" && product.price < 300000) ||
      (price === "mid" && product.price >= 300000 && product.price <= 700000) ||
      (price === "high" && product.price > 700000);

    return matchKeyword && matchCategory && matchPrice;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(productCard).join("")
    : `<div class="empty-state product-card"><h3>${t("productNotFound")}</h3><p>${t("tryOtherFilter")}</p></div>`;
}

function updateCartBadge() {
  const badge = el("#cartBadge");
  if (!badge) return;
  const totalQty = cartItems().reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalQty;
}

function addToCart(id) {
  const product = allProducts().find((item) => item.id === id);
  if (!product) return;
  const stock = productStock(product);
  if (stock <= 0) {
    alert(t("stockEmptyAlert"));
    return;
  }

  const cart = cartItems();
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    if (existing.qty >= stock) {
      alert(t("stockLimitAlert"));
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  window.location.href = "keranjang.html";
}

function changeQty(id, change) {
  const product = allProducts().find((item) => item.id === id);
  const stock = product ? productStock(product) : 0;
  const cart = cartItems()
    .map((item) => {
      if (item.id !== id) return item;
      return { ...item, qty: Math.min(stock, item.qty + change) };
    })
    .filter((item) => item.qty > 0);
  saveCart(cart);
}

function removeCart(id) {
  saveCart(cartItems().filter((item) => item.id !== id));
}

function renderCart() {
  const cartBox = el("#cartItems");
  if (!cartBox) return;

  const cart = cartItems();
  const summary = cartSummary();

  cartBox.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <span class="category">${categoryLabel(item.category)}</span>
          <div class="price">${formatRupiah(item.price)}</div>
          <div class="stock-badge">${t("stock")}: ${productStock(item)}</div>
          <div class="qty-controls">
            <button data-qty-minus="${item.id}">-</button>
            <strong>${item.qty}</strong>
            <button data-qty-plus="${item.id}" ${item.qty >= productStock(item) ? "disabled" : ""}>+</button>
          </div>
        </div>
        <button class="remove-btn" data-remove="${item.id}">${t("remove")}</button>
      </article>
    `,
        )
        .join("")
    : `
      <div class="empty-state product-card">
        <h3>${t("cartEmpty")}</h3>
        <p>${t("chooseProduct")}</p>
        <a class="primary-btn link-btn" href="produk.html">${t("shopProducts")}</a>
      </div>
    `;

  if (el("#subtotalText"))
    el("#subtotalText").textContent = formatRupiah(summary.subtotal);
  if (el("#adminText"))
    el("#adminText").textContent = formatRupiah(summary.admin);
  if (el("#discountText"))
    el("#discountText").textContent = `-${formatRupiah(summary.discount)}`;
  if (el("#totalText"))
    el("#totalText").textContent = formatRupiah(summary.total);
  if (el("#checkoutBtn")) el("#checkoutBtn").disabled = cart.length === 0;
  if (el("#waCheckoutBtn")) el("#waCheckoutBtn").disabled = cart.length === 0;
}

function showDetail(id) {
  const product = allProducts().find((item) => item.id === id);
  const detailContent = el("#detailContent");
  if (!product || !detailContent) return;

  detailContent.innerHTML = `
    <div class="detail-layout">
      <img src="${product.image}" alt="${product.name}">
      <div class="detail-text">
        <p class="eyebrow">${categoryLabel(product.category)}</p>
        <h3>${product.name}</h3>
        <div class="price">${formatRupiah(product.price)}</div>
        <div class="stock-badge">${t("stock")}: ${productStock(product)}</div>
        <p>${productDesc(product)}</p>
        <button class="primary-btn" data-add="${product.id}" ${productStock(product) <= 0 ? "disabled" : ""}>${productStock(product) <= 0 ? t("soldOut") : t("addCart")}</button>
      </div>
    </div>
  `;

  openModal("detailModal");
}

function openModal(id) {
  const modal = el(`#${id}`);
  if (modal) modal.classList.remove("hidden");
}

function closeModal(id) {
  const modal = el(`#${id}`);
  if (modal) modal.classList.add("hidden");
}

function checkout(orderData) {
  const summary = cartSummary();
  const orders = getData(storageKeys.orders, []);
  const items = cartItems();
  const overStock = items.find((item) => item.qty > productStock(item));
  if (overStock) {
    alert(interpolate(t("stockNotEnough"), { name: overStock.name }));
    return;
  }
  const order = {
    id: `AR${String(Date.now()).slice(-6)}`,
    buyer: orderData.name,
    phone: orderData.phone,
    address: orderData.address,
    city: orderData.city,
    postcode: orderData.postcode,
    payment: orderData.payment,
    total: summary.total,
    status: "Menunggu Pembayaran",
    items,
    createdAt: new Date().toISOString(),
  };

  orders.unshift(order);
  setData(storageKeys.orders, orders);
  reduceStock(items);
  saveCart([]);
  closeModal("checkoutModal");
  el("#checkoutForm")?.reset();
  if (el("#successText")) {
    el("#successText").textContent = interpolate(t("orderSuccess"), {
      id: order.id,
      payment: paymentLabel(order.payment),
    });
  }
  openModal("successModal");
  renderHistory();
  renderProducts();
  renderFeatured();
}

function openWhatsappOrder() {
  if (!cartItems().length) return;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage())}`;
  window.open(url, "_blank");
}

function renderHistory() {
  const historyList = el("#historyList");
  if (!historyList) return;
  const user = currentUser();
  const orders = getData(storageKeys.orders, []);
  const filteredOrders = user
    ? orders.filter((order) => order.phone === user.phone)
    : orders;

  historyList.innerHTML = filteredOrders.length
    ? filteredOrders
        .map(
          (order) => `
      <article class="history-card">
        <div>
          <p class="eyebrow">#${order.id}</p>
          <h3>${order.buyer}</h3>
          <p>${new Date(order.createdAt).toLocaleString(currentLang() === "en" ? "en-US" : "id-ID")}</p>
          <p><strong>${t("status")}:</strong> ${statusLabel(order.status)}</p>
          <p><strong>${t("total")}:</strong> ${formatRupiah(order.total)}</p>
        </div>
        <ul>
          ${order.items.map((item) => `<li>${item.name} x${item.qty}</li>`).join("")}
        </ul>
      </article>
    `,
        )
        .join("")
    : `<div class="empty-state product-card"><h3>${t("historyEmpty")}</h3><p>${t("historyHint")}</p></div>`;
}

function addAdminProduct(event) {
  event.preventDefault();

  const adminProducts = getData(storageKeys.adminProducts, []);
  const name = el("#adminName").value.trim();
  const category = el("#adminCategory").value;
  const price = Number(el("#adminPrice").value);
  const stock = Number(el("#adminStock").value);
  const image = el("#adminImage").value.trim() || "image/Midi Dress.jpeg";
  const desc = el("#adminDesc").value.trim();

  adminProducts.unshift({
    id: `admin-${Date.now()}`,
    name,
    category,
    price,
    stock,
    image,
    desc,
    adminProduct: true,
  });

  setData(storageKeys.adminProducts, adminProducts);
  el("#adminForm").reset();
  renderAdminDashboard();
  alert(t("productAdded"));
}

function removeAdminProduct(id) {
  const remaining = getData(storageKeys.adminProducts, []).filter(
    (item) => item.id !== id,
  );
  setData(storageKeys.adminProducts, remaining);
  renderAdminDashboard();
}

function updateOrderStatus(id) {
  const statuses = ["Menunggu Pembayaran", "Diproses", "Dikirim", "Selesai"];
  const orders = getData(storageKeys.orders, []).map((order) => {
    if (order.id !== id) return order;
    const nextIndex = (statuses.indexOf(order.status) + 1) % statuses.length;
    return { ...order, status: statuses[nextIndex] };
  });
  setData(storageKeys.orders, orders);
  renderAdminDashboard();
}

function renderAdminDashboard() {
  if (!el("#adminProductCount")) return;

  const extraProducts = getData(storageKeys.adminProducts, []);
  const orders = getData(storageKeys.orders, []);
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);

  el("#adminProductCount").textContent = allProducts().length;
  el("#adminOrderCount").textContent = orders.length;
  el("#adminRevenue").textContent = formatRupiah(revenue);

  el("#adminProductList").innerHTML = extraProducts.length
    ? extraProducts
        .map(
          (product) => `
      <article>
        <h4>${product.name}</h4>
        <p>${categoryLabel(product.category)} - ${formatRupiah(product.price)}</p>
        <p><strong>${t("stock")}:</strong> ${productStock(product)}</p>
        <button class="remove-btn" data-remove-admin="${product.id}">${t("removeProduct")}</button>
      </article>
    `,
        )
        .join("")
    : `<p>${t("noAdminProducts")}</p>`;

  el("#adminOrderList").innerHTML = orders.length
    ? orders
        .map(
          (order) => `
      <article>
        <h4>#${order.id} - ${order.buyer}</h4>
        <p>${paymentLabel(order.payment)}</p>
        <p><strong>${t("buyer")}:</strong> ${order.phone}</p>
        <p><strong>${t("status")}:</strong> ${statusLabel(order.status)}</p>
        <p><strong>${t("total")}:</strong> ${formatRupiah(order.total)}</p>
        <button class="status-btn" data-status="${order.id}">${t("updateStatus")}</button>
      </article>
    `,
        )
        .join("")
    : `<p>${t("noOrders")}</p>`;
}

function renderAccount() {
  const user = currentUser();
  const accountBtn = el("#accountBtn");
  if (accountBtn)
    accountBtn.textContent = user
      ? `${t("account")}: ${user.name}`
      : t("login");
  if (el("#accountName")) el("#accountName").value = user?.name || "";
  if (el("#accountPhone")) el("#accountPhone").value = user?.phone || "";
}

function saveAccountFromForm(name, phone) {
  if (!name || !phone) return;
  saveUser({ name, phone });
  alert(t("savedAccount"));
  closeModal("accountModal");
}

function toggleLanguage() {
  const nextLang = currentLang() === "id" ? "en" : "id";
  setData(storageKeys.lang, nextLang);
  applyLanguage();
}

function applyLanguage() {
  const lang = currentLang();
  document.documentElement.lang = lang === "en" ? "en" : "id";
  if (el("#langToggle"))
    el("#langToggle").textContent = lang === "en" ? "ID" : "EN";
  applyStaticTranslations(lang);
  if (el("#checkoutBtn")) el("#checkoutBtn").textContent = t("checkout");
  if (el("#waCheckoutBtn")) el("#waCheckoutBtn").textContent = t("buyWa");
  renderAccount();
  renderProducts();
  renderFeatured();
  renderCart();
  renderHistory();
}

function setText(selector, value) {
  const node = el(selector);
  if (node) node.textContent = value;
}

function setPlaceholder(selector, value) {
  const node = el(selector);
  if (node) node.placeholder = value;
}

function setSelectLabels(selector, labels) {
  const select = el(selector);
  if (!select) return;
  [...select.options].forEach((option, index) => {
    if (labels[index]) option.textContent = labels[index];
  });
}

function applyNavTranslations(lang) {
  const page = document.body.dataset.page;
  const labels =
    lang === "en"
      ? {
          "beranda.html": "Home",
          "produk.html": "Products",
          "keranjang.html": "Cart",
          "admin.html": "Admin",
          "index.html": "Logout",
        }
      : {
          "beranda.html": "Beranda",
          "produk.html": "Produk",
          "keranjang.html": "Keranjang",
          "admin.html": "Admin",
          "index.html": "Keluar",
        };

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === "keranjang.html" || href === "#historySection") {
      const badge = link.querySelector("#cartBadge");
      const cartLabel =
        page === "admin"
          ? lang === "en"
            ? "Orders"
            : "Pesanan"
          : labels["keranjang.html"];
      link.innerHTML =
        href === "#historySection"
          ? lang === "en"
            ? "History"
            : "Riwayat"
          : `${cartLabel} `;
      if (badge) link.appendChild(badge);
      return;
    }
    if (href === "keranjang.html#historySection") {
      link.textContent = lang === "en" ? "History" : "Riwayat";
      return;
    }
    if (labels[href]) link.textContent = labels[href];
  });
}

function applyStaticTranslations(lang) {
  applyNavTranslations(lang);
  const page = document.body.dataset.page;
  const footerText =
    lang === "en"
      ? {
          desc: "Fashion marketplace prototype for modern daily style needs.",
          nav: "Navigation",
          contact: "Contact Us",
          adminDesc:
            "Product and order data are stored in the browser using localStorage.",
        }
      : {
          desc: "Prototype marketplace fashion untuk kebutuhan gaya harian modern.",
          nav: "Navigasi",
          contact: "Hubungi Kami",
          adminDesc:
            "Data produk dan pesanan tersimpan di browser menggunakan localStorage.",
        };

  if (!page && el(".welcome-page")) {
    setText(
      ".welcome-panel .eyebrow",
      lang === "en" ? "Fashion E-Commerce" : "Fashion E-Commerce",
    );
    setText(".welcome-panel h1", "Arthae'");
    setText(
      ".welcome-copy",
      lang === "en"
        ? "Modern outfit collections for campus, work, hangouts, and special events."
        : "Koleksi outfit modern untuk kuliah, kerja, hangout, dan acara spesial.",
    );
    setPlaceholder(
      "#welcomeName",
      lang === "en" ? "Buyer name" : "Nama pembeli",
    );
    setPlaceholder(
      "#welcomePhone",
      lang === "en" ? "WhatsApp number" : "Nomor WhatsApp",
    );
    setText(
      "#welcomeLoginForm .primary-btn",
      lang === "en" ? "Buyer Login" : "Login Pembeli",
    );
    const welcomeLinks = document.querySelectorAll(".welcome-actions a");
    if (welcomeLinks[0])
      welcomeLinks[0].textContent =
        lang === "en" ? "Enter as Admin" : "Masuk Sebagai Admin";
  }

  if (page === "home") {
    setText(
      ".hero-content .eyebrow",
      lang === "en" ? "New Season Collection" : "New Season Collection",
    );
    setText(
      ".hero-content h2",
      lang === "en"
        ? "Daily Style That Feels Light, Polished, and Confident."
        : "Style Harian yang Ringan, Rapi, dan Percaya Diri.",
    );
    setText(
      ".hero-content p:not(.eyebrow)",
      lang === "en"
        ? "Find clothing, shoes, bags, and accessories with a simple shopping flow."
        : "Temukan pilihan pakaian, sepatu, tas, dan aksesoris fashion dengan alur belanja yang mudah.",
    );
    setText(
      ".hero-content .primary-btn",
      lang === "en" ? "Start Shopping" : "Mulai Belanja",
    );
    setText(
      ".section-block .section-title .eyebrow",
      lang === "en" ? "Recommended" : "Rekomendasi",
    );
    setText(
      ".section-block .section-title h2",
      lang === "en" ? "Featured Products" : "Produk Pilihan",
    );
    setText(
      ".about-grid .eyebrow",
      lang === "en" ? "About Us" : "Tentang Kami",
    );
    setText(
      ".about-grid h2",
      lang === "en"
        ? "From basic outfits to statement looks."
        : "Dari basic outfit sampai statement look.",
    );
    setText(
      ".about-grid p:not(.eyebrow)",
      lang === "en"
        ? "Arthae' is an online fashion store prototype that helps users find products by style, category, and budget. This website is responsive for desktop and mobile."
        : "Arthae' adalah prototype toko fashion online yang membantu pengguna menemukan produk sesuai gaya, kategori, dan budget. Website ini dibuat responsif untuk desktop dan mobile.",
    );
    const statSpans = document.querySelectorAll(".stats-grid span");
    if (statSpans[0])
      statSpans[0].textContent =
        lang === "en" ? "Active Products" : "Produk Aktif";
    if (statSpans[1])
      statSpans[1].textContent = lang === "en" ? "Categories" : "Kategori";
    if (statSpans[2])
      statSpans[2].textContent = lang === "en" ? "Satisfaction" : "Kepuasan";
    const reviewTitles = document.querySelectorAll(
      ".section-block .section-title",
    );
    if (reviewTitles[1]) {
      reviewTitles[1].querySelector(".eyebrow").textContent =
        lang === "en" ? "What They Say" : "Apa Kata Mereka";
      reviewTitles[1].querySelector("h2").textContent =
        lang === "en" ? "Customer Reviews" : "Review Pelanggan";
    }
    const reviewCards = document.querySelectorAll(".review-grid article");
    if (reviewCards[0])
      reviewCards[0].querySelector("p").textContent =
        lang === "en"
          ? "Products are easy to find, the interface is clean, and the cart flow is clear."
          : "Produk mudah dicari, tampilannya bersih, dan proses keranjangnya jelas.";
    if (reviewCards[1])
      reviewCards[1].querySelector("p").textContent =
        lang === "en"
          ? "Category and price filters really help choose outfits based on needs."
          : "Filter kategori dan harga membantu banget untuk pilih outfit sesuai kebutuhan.";
    if (reviewCards[2])
      reviewCards[2].querySelector("p").textContent =
        lang === "en"
          ? "The dummy checkout is neat and suitable for an e-commerce website simulation."
          : "Checkout dummy-nya rapi dan cocok untuk simulasi website e-commerce.";
  }

  if (page === "products") {
    setText(".page-hero .eyebrow", lang === "en" ? "Catalog" : "Katalog");
    setText(
      ".page-hero h2",
      lang === "en" ? "Fashion Collection" : "Koleksi Fashion",
    );
    setText(
      ".page-hero p:not(.eyebrow)",
      lang === "en"
        ? "Search your favorite fashion products by name, category, and price."
        : "Cari produk fashion favorit berdasarkan nama, kategori, dan harga.",
    );
    setPlaceholder(
      "#searchInput",
      lang === "en" ? "Search product..." : "Cari produk...",
    );
    setSelectLabels(
      "#categoryFilter",
      lang === "en"
        ? ["All Categories", "Clothing", "Shoes", "Bags", "Accessories"]
        : ["Semua Kategori", "Pakaian", "Sepatu", "Tas", "Aksesoris"],
    );
    setSelectLabels(
      "#priceFilter",
      lang === "en"
        ? [
            "All Prices",
            "Below Rp 300,000",
            "Rp 300,000 - Rp 700,000",
            "Above Rp 700,000",
          ]
        : [
            "Semua Harga",
            "Di bawah Rp 300.000",
            "Rp 300.000 - Rp 700.000",
            "Di atas Rp 700.000",
          ],
    );
    setText("#resetFilter", lang === "en" ? "Reset" : "Reset");
  }

  if (page === "cart") {
    setText(".page-hero .eyebrow", lang === "en" ? "Shopping" : "Belanja");
    setText(".page-hero h2", lang === "en" ? "Cart" : "Keranjang");
    setText(
      ".page-hero p:not(.eyebrow)",
      lang === "en"
        ? "Adjust quantities, remove items, then continue checkout."
        : "Atur jumlah produk, hapus item, lalu lanjutkan checkout.",
    );
    setText(".summary-card .eyebrow", lang === "en" ? "Summary" : "Ringkasan");
    setText(
      ".summary-card h3",
      lang === "en" ? "Payment Total" : "Total Pembayaran",
    );
    const summaryLabels = document.querySelectorAll(".summary-row span");
    if (summaryLabels[0]) summaryLabels[0].textContent = "Subtotal";
    if (summaryLabels[1])
      summaryLabels[1].textContent = lang === "en" ? "Admin Fee" : "Admin";
    if (summaryLabels[2])
      summaryLabels[2].textContent = lang === "en" ? "Discount" : "Diskon";
    if (summaryLabels[3]) summaryLabels[3].textContent = "Total";
    setText("#historySection .eyebrow", lang === "en" ? "History" : "Riwayat");
    setText(
      "#historySection h2",
      lang === "en" ? "Transaction History" : "Riwayat Transaksi",
    );
    setText("#checkoutForm .eyebrow", "Checkout");
    setText("#checkoutForm h3", lang === "en" ? "Buyer Data" : "Data Pembeli");
    setPlaceholder("#buyerName", lang === "en" ? "Full name" : "Nama lengkap");
    setPlaceholder(
      "#buyerPhone",
      lang === "en" ? "Phone number" : "Nomor telepon",
    );
    setPlaceholder(
      "#buyerAddress",
      lang === "en" ? "Full address" : "Alamat lengkap",
    );
    setPlaceholder("#buyerCity", lang === "en" ? "City" : "Kota");
    setPlaceholder(
      "#buyerPostcode",
      lang === "en" ? "Postal code" : "Kode pos",
    );
    setSelectLabels(
      "#paymentMethod",
      lang === "en"
        ? [
            "Choose payment method",
            "Midtrans Virtual Account",
            "E-Wallet",
            "Manual Bank Transfer",
          ]
        : [
            "Pilih metode pembayaran",
            "Midtrans Virtual Account",
            "E-Wallet",
            "Transfer Bank Manual",
          ],
    );
    setText(
      "#checkoutForm .primary-btn",
      lang === "en" ? "Create Order" : "Buat Pesanan",
    );
    setText(
      "#successModal h3",
      lang === "en" ? "Order Successful" : "Pesanan Berhasil",
    );
    setText("#successModal .primary-btn", lang === "en" ? "Done" : "Selesai");
  }

  if (page === "admin") {
    setText(".page-hero .eyebrow", "Admin");
    setText(
      ".page-hero h2",
      lang === "en" ? "Admin Dashboard" : "Dashboard Admin",
    );
    setText(
      ".page-hero p:not(.eyebrow)",
      lang === "en"
        ? "Product and order management simulation using localStorage."
        : "Simulasi pengelolaan produk dan pesanan menggunakan localStorage.",
    );
    setPlaceholder(
      "#adminName",
      lang === "en" ? "Product name" : "Nama produk",
    );
    setPlaceholder(
      "#adminPrice",
      lang === "en" ? "Product price" : "Harga produk",
    );
    setPlaceholder(
      "#adminStock",
      lang === "en" ? "Product stock" : "Stok produk",
    );
    setPlaceholder(
      "#adminImage",
      lang === "en" ? "Product image link" : "Link gambar produk",
    );
    setPlaceholder(
      "#adminDesc",
      lang === "en" ? "Product description" : "Deskripsi produk",
    );
    setSelectLabels(
      "#adminCategory",
      lang === "en"
        ? ["Choose category", "Clothing", "Shoes", "Bags", "Accessories"]
        : ["Pilih kategori", "Pakaian", "Sepatu", "Tas", "Aksesoris"],
    );
    const stats = document.querySelectorAll(".admin-stats article");
    if (stats[0]) {
      stats[0].querySelector("span").textContent =
        lang === "en" ? "Products" : "Produk";
      stats[0].querySelector("p").textContent =
        lang === "en" ? "Active in catalog" : "Aktif di katalog";
    }
    if (stats[1]) {
      stats[1].querySelector("span").textContent =
        lang === "en" ? "Orders" : "Pesanan";
      stats[1].querySelector("p").textContent =
        lang === "en" ? "This month" : "Bulan ini";
    }
    if (stats[2]) {
      stats[2].querySelector("span").textContent =
        lang === "en" ? "Revenue" : "Pendapatan";
      stats[2].querySelector("p").textContent =
        lang === "en" ? "Sales estimate" : "Estimasi penjualan";
    }
    const adminCards = document.querySelectorAll(".admin-card");
    if (adminCards[0]) {
      adminCards[0].querySelector(".eyebrow").textContent =
        lang === "en" ? "Add Product" : "Tambah Produk";
      adminCards[0].querySelector("h3").textContent =
        lang === "en" ? "Product Form" : "Form Produk";
      adminCards[0].querySelector(".primary-btn").textContent =
        lang === "en" ? "Add Product" : "Tambah Produk";
    }
    if (adminCards[1]) {
      adminCards[1].querySelector(".eyebrow").textContent =
        lang === "en" ? "Manage Products" : "Kelola Produk";
      adminCards[1].querySelector("h3").textContent =
        lang === "en" ? "Admin Added Products" : "Produk Tambahan Admin";
    }
    if (adminCards[2]) {
      adminCards[2].querySelector(".eyebrow").textContent =
        lang === "en" ? "Latest Orders" : "Pesanan Terbaru";
      adminCards[2].querySelector("h3").textContent =
        lang === "en" ? "Order Status" : "Status Pesanan";
    }
  }

  const footerBlocks = document.querySelectorAll(".site-footer > div");
  if (footerBlocks[0])
    footerBlocks[0].querySelector("p").textContent =
      page === "admin" && lang === "id"
        ? "Dashboard simulasi untuk marketplace fashion."
        : footerText.desc;
  if (footerBlocks[1]) {
    footerBlocks[1].querySelector("h3").textContent = footerText.nav;
    const footerLinks = footerBlocks[1].querySelectorAll("a");
    if (footerLinks[0])
      footerLinks[0].textContent = lang === "en" ? "Home" : "Beranda";
    if (footerLinks[1])
      footerLinks[1].textContent = lang === "en" ? "Products" : "Produk";
    if (footerLinks[2])
      footerLinks[2].textContent = lang === "en" ? "Cart" : "Keranjang";
  }
  if (footerBlocks[2]) {
    footerBlocks[2].querySelector("h3").textContent =
      page === "admin" ? "Admin" : footerText.contact;
    const paragraph = footerBlocks[2].querySelector("p");
    if (paragraph && page === "admin")
      paragraph.textContent = footerText.adminDesc;
  }

  setPlaceholder("#accountName", lang === "en" ? "Buyer name" : "Nama pembeli");
  setPlaceholder(
    "#accountPhone",
    lang === "en" ? "WhatsApp number" : "Nomor WhatsApp",
  );
  setText("#accountForm h3", lang === "en" ? "Buyer Login" : "Login Pembeli");
  setText(
    "#accountForm .eyebrow",
    lang === "en" ? "Buyer Account" : "Akun Pembeli",
  );
  setText(
    "#accountForm .primary-btn",
    lang === "en" ? "Save Account" : "Simpan Akun",
  );
  setText("#logoutBtn", t("logout"));
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches("[data-page]")) {
    const page = target.dataset.page;
    if (pageLinks[page]) window.location.href = pageLinks[page];
  }
  if (target.matches("[data-add]")) {
    closeModal("detailModal");
    addToCart(target.dataset.add);
  }
  if (target.matches("[data-detail]")) showDetail(target.dataset.detail);
  if (target.matches("[data-qty-minus]"))
    changeQty(target.dataset.qtyMinus, -1);
  if (target.matches("[data-qty-plus]")) changeQty(target.dataset.qtyPlus, 1);
  if (target.matches("[data-remove]")) removeCart(target.dataset.remove);
  if (target.matches("[data-close]")) closeModal(target.dataset.close);
  if (target.matches("#checkoutBtn") && cartItems().length)
    openModal("checkoutModal");
  if (target.matches("#waCheckoutBtn") && cartItems().length)
    openWhatsappOrder();
  if (target.matches("#accountBtn")) openModal("accountModal");
  if (target.matches("#logoutBtn")) {
    localStorage.removeItem(storageKeys.user);
    renderAccount();
    renderHistory();
    closeModal("accountModal");
  }
  if (target.matches("#langToggle")) toggleLanguage();
  if (target.matches("[data-remove-admin]"))
    removeAdminProduct(target.dataset.removeAdmin);
  if (target.matches("[data-status]")) updateOrderStatus(target.dataset.status);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal("detailModal");
    closeModal("checkoutModal");
    closeModal("successModal");
  }
});

el("#searchInput")?.addEventListener("input", renderProducts);
el("#categoryFilter")?.addEventListener("change", renderProducts);
el("#priceFilter")?.addEventListener("change", renderProducts);
el("#resetFilter")?.addEventListener("click", () => {
  el("#searchInput").value = "";
  el("#categoryFilter").value = "Semua";
  el("#priceFilter").value = "Semua";
  renderProducts();
});

el("#checkoutForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  checkout({
    name: el("#buyerName").value.trim(),
    phone: el("#buyerPhone").value.trim(),
    address: el("#buyerAddress").value.trim(),
    city: el("#buyerCity").value.trim(),
    postcode: el("#buyerPostcode").value.trim(),
    payment: el("#paymentMethod").value,
  });
});

el("#adminForm")?.addEventListener("submit", addAdminProduct);

el("#accountForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAccountFromForm(
    el("#accountName").value.trim(),
    el("#accountPhone").value.trim(),
  );
});

el("#welcomeLoginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveUser({
    name: el("#welcomeName").value.trim(),
    phone: el("#welcomePhone").value.trim(),
  });
  window.location.href = "beranda.html";
});

applyLanguage();
renderHistory();
renderAdminDashboard();
updateCartBadge();
