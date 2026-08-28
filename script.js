/* ================= ICONS ================= */
const icons = {
  console: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="10" rx="4" stroke="currentColor" stroke-width="1.6"/><circle cx="7" cy="13" r="1.4" fill="currentColor"/><circle cx="17" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="14" r="1.2" fill="currentColor"/></svg>`,
  gpu: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="9" rx="1.5" stroke="currentColor" stroke-width="1.6"/><circle cx="7" cy="10.5" r="2" stroke="currentColor" stroke-width="1.4"/><circle cx="14" cy="10.5" r="2" stroke="currentColor" stroke-width="1.4"/><path d="M2 18h6M2 20.5h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  keyboard: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  mouse: `<svg viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 13v-1a8 8 0 0116 0v1" stroke="currentColor" stroke-width="1.6"/><rect x="2.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="17.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  chair: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4h12l-1 9H7L6 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 13l-2 7M17 13l2 7M7 20h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.6"/><path d="M9 8a3 3 0 016 0" stroke="currentColor" stroke-width="1.6"/></svg>`,
  disc: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  cable: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 8a4 4 0 018 0v8a4 4 0 008 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
};
const grads = {
  gold:"linear-gradient(135deg,#3a2c07,#5c4610)",
  pink:"linear-gradient(135deg,#3a0a1f,#5c1233)",
  teal:"linear-gradient(135deg,#093a2c,#0f5c42)",
  blue:"linear-gradient(135deg,#1b2350,#28316b)"
};

/* =================================================================
   PRODUCT DATA
   A FICHA opera em regime de DROPSHIPPING: não existe estoque próprio.
   Cada produto informa o fornecedor e o prazo de envio (dias úteis).
   ================================================================= */
const products = [
  // consoles
  {id:1,cat:"consoles",name:"Console FX Series X 1TB — pacote com 2 controles",icon:"console",grad:"blue",old:"R$ 4.299,00",now:"R$ 3.649,00",inst:"12x R$ 304,08 sem juros",rating:5,reviews:412,sale:15,frete:true,fornecedor:"TechImport Distribuidora",prazoMin:7,prazoMax:15},
  {id:2,cat:"consoles",name:"Console Astra One Pro 825GB",icon:"console",grad:"pink",old:null,now:"R$ 3.999,00",inst:"12x R$ 333,25 sem juros",rating:5,reviews:298,sale:0,frete:true,fornecedor:"Astra Games Brasil",prazoMin:6,prazoMax:12},
  {id:3,cat:"consoles",name:"Handheld RetroDeck OLED 512GB",icon:"console",grad:"teal",old:"R$ 2.899,00",now:"R$ 2.199,00",inst:"10x R$ 219,90 sem juros",rating:4,reviews:167,sale:24,frete:false,fornecedor:"RetroDeck Global",prazoMin:12,prazoMax:22},
  {id:4,cat:"consoles",name:"Console clássico MiniPlay 30 jogos inclusos",icon:"console",grad:"gold",old:null,now:"R$ 449,00",inst:"6x R$ 74,83 sem juros",rating:4,reviews:855,sale:0,frete:true,fornecedor:"MiniPlay Fábrica",prazoMin:5,prazoMax:10},

  // placas
  {id:5,cat:"placas",name:"Placa de vídeo Vortex RTX 4070 Ti 12GB",icon:"gpu",grad:"teal",old:"R$ 5.499,00",now:"R$ 4.599,00",inst:"12x R$ 383,25 sem juros",rating:5,reviews:203,sale:16,frete:true,fornecedor:"Vortex Hardware Imports",prazoMin:8,prazoMax:16},
  {id:6,cat:"placas",name:"Placa de vídeo Nébula RX 7800 XT 16GB",icon:"gpu",grad:"pink",old:"R$ 3.999,00",now:"R$ 3.299,00",inst:"12x R$ 274,92 sem juros",rating:5,reviews:189,sale:17,frete:true,fornecedor:"Nébula Componentes",prazoMin:8,prazoMax:14},
  {id:7,cat:"placas",name:"Placa de vídeo Comet GTX 1660 Super 6GB",icon:"gpu",grad:"blue",old:null,now:"R$ 1.199,00",inst:"10x R$ 119,90 sem juros",rating:4,reviews:511,sale:0,frete:false,fornecedor:"Comet Distribuidora",prazoMin:10,prazoMax:20},
  {id:8,cat:"placas",name:"Placa de vídeo Vortex RTX 4090 24GB",icon:"gpu",grad:"gold",old:"R$ 12.999,00",now:"R$ 10.999,00",inst:"12x R$ 916,58 sem juros",rating:5,reviews:77,sale:15,frete:true,fornecedor:"Vortex Hardware Imports",prazoMin:10,prazoMax:20},

  // perifericos
  {id:9,cat:"perifericos",name:"Teclado mecânico Ignis TKL switch marrom",icon:"keyboard",grad:"gold",old:"R$ 549,00",now:"R$ 399,00",inst:"8x R$ 49,88 sem juros",rating:5,reviews:640,sale:27,frete:true,fornecedor:"Ignis Peripherals",prazoMin:5,prazoMax:9},
  {id:10,cat:"perifericos",name:"Mouse Vortex Pulse 26000 DPI sem fio",icon:"mouse",grad:"pink",old:"R$ 399,00",now:"R$ 289,00",inst:"6x R$ 48,17 sem juros",rating:5,reviews:722,sale:28,frete:true,fornecedor:"Vortex Hardware Imports",prazoMin:5,prazoMax:9},
  {id:11,cat:"perifericos",name:"Headset Astra 7.1 surround com microfone",icon:"headset",grad:"teal",old:"R$ 459,00",now:"R$ 349,00",inst:"6x R$ 58,17 sem juros",rating:4,reviews:388,sale:24,frete:true,fornecedor:"Astra Games Brasil",prazoMin:6,prazoMax:11},
  {id:12,cat:"perifericos",name:"Mousepad XL costurado 900x400mm",icon:"mouse",grad:"blue",old:null,now:"R$ 89,00",inst:"3x R$ 29,67 sem juros",rating:5,reviews:1204,sale:0,frete:false,fornecedor:"Comet Distribuidora",prazoMin:7,prazoMax:14},
  {id:13,cat:"perifericos",name:"Teclado 60% Nebula wireless hot-swap",icon:"keyboard",grad:"pink",old:"R$ 699,00",now:"R$ 549,00",inst:"10x R$ 54,90 sem juros",rating:5,reviews:214,sale:21,frete:true,fornecedor:"Nébula Componentes",prazoMin:7,prazoMax:13},
  {id:14,cat:"perifericos",name:"Webcam Comet 1440p 60fps com tripé",icon:"cable",grad:"gold",old:null,now:"R$ 329,00",inst:"6x R$ 54,83 sem juros",rating:4,reviews:96,sale:0,frete:true,fornecedor:"Comet Distribuidora",prazoMin:6,prazoMax:12},

  // cadeiras
  {id:15,cat:"cadeiras",name:"Cadeira gamer Ignis Pro reclinável 180°",icon:"chair",grad:"pink",old:"R$ 1.899,00",now:"R$ 1.399,00",inst:"12x R$ 116,58 sem juros",rating:5,reviews:329,sale:26,frete:true,fornecedor:"Ignis Peripherals",prazoMin:10,prazoMax:18},
  {id:16,cat:"cadeiras",name:"Mesa gamer Vortex com passagem de cabos",icon:"chair",grad:"blue",old:null,now:"R$ 799,00",inst:"10x R$ 79,90 sem juros",rating:4,reviews:145,sale:0,frete:false,fornecedor:"Vortex Hardware Imports",prazoMin:9,prazoMax:16},
  {id:17,cat:"cadeiras",name:"Suporte triplo de monitor articulado",icon:"chair",grad:"teal",old:"R$ 549,00",now:"R$ 429,00",inst:"6x R$ 71,50 sem juros",rating:5,reviews:88,sale:22,frete:true,fornecedor:"Comet Distribuidora",prazoMin:8,prazoMax:14},
  {id:18,cat:"cadeiras",name:"Luz de ambiente RGB para setup (5m)",icon:"cable",grad:"gold",old:null,now:"R$ 119,00",inst:"3x R$ 39,67 sem juros",rating:4,reviews:602,sale:0,frete:true,fornecedor:"Nébula Componentes",prazoMin:5,prazoMax:10},

  // jogos
  {id:19,cat:"jogos",name:"Jogo Crimson Horizon — edição física",icon:"disc",grad:"pink",old:"R$ 299,00",now:"R$ 199,00",inst:"4x R$ 49,75 sem juros",rating:5,reviews:980,sale:33,frete:true,fornecedor:"MiniPlay Fábrica",prazoMin:4,prazoMax:8},
  {id:20,cat:"jogos",name:"Jogo Nebula Tactics — edição colecionador",icon:"disc",grad:"gold",old:"R$ 349,00",now:"R$ 279,00",inst:"6x R$ 46,50 sem juros",rating:5,reviews:412,sale:20,frete:true,fornecedor:"Nébula Componentes",prazoMin:5,prazoMax:9},
  {id:21,cat:"jogos",name:"Jogo Static Drift — corrida arcade",icon:"disc",grad:"teal",old:null,now:"R$ 149,00",inst:"3x R$ 49,67 sem juros",rating:4,reviews:267,sale:0,frete:false,fornecedor:"Astra Games Brasil",prazoMin:5,prazoMax:10},

  // acessorios
  {id:22,cat:"acessorios",name:"Controle sem fio Astra compatível multi-plataforma",icon:"cable",grad:"blue",old:"R$ 349,00",now:"R$ 279,00",inst:"6x R$ 46,50 sem juros",rating:5,reviews:530,sale:20,frete:true,fornecedor:"Astra Games Brasil",prazoMin:5,prazoMax:9},
  {id:23,cat:"acessorios",name:"Case de transporte rígido para handheld",icon:"cable",grad:"pink",old:null,now:"R$ 99,00",inst:"3x R$ 33,00 sem juros",rating:4,reviews:311,sale:0,frete:false,fornecedor:"RetroDeck Global",prazoMin:8,prazoMax:15},
  {id:24,cat:"acessorios",name:"Cartão de memória 1TB alta velocidade",icon:"cable",grad:"gold",old:"R$ 699,00",now:"R$ 549,00",inst:"8x R$ 68,63 sem juros",rating:5,reviews:190,sale:21,frete:true,fornecedor:"Comet Distribuidora",prazoMin:5,prazoMax:10}
];

const deals = products.filter(p=>p.sale>=20).slice(0,7);

function starString(n){
  return "★★★★★".slice(0,n) + "☆☆☆☆☆".slice(0,5-n);
}

function cardHTML(p){
  return `
  <div class="card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
    <div class="notch"></div>
    <div class="thumb" style="background:${grads[p.grad]}; color:var(--gold)">
      ${icons[p.icon]}
      <div class="badges">
        ${p.sale ? `<span class="chip sale">-${p.sale}%</span>` : ""}
        ${p.frete ? `<span class="chip frete">Frete grátis</span>` : ""}
      </div>
    </div>
    <div class="cat-eyebrow">${p.cat}</div>
    <h3>${p.name}</h3>
    <div class="rating"><span class="stars">${starString(p.rating)}</span> (${p.reviews})</div>
    <div class="price-block">
      ${p.old ? `<span class="old-price">${p.old}</span>` : ""}
      <span class="now-price">${p.now}</span>
      <span class="installment">${p.inst}</span>
    </div>
    <div class="dropship-note">📦 Enviado por ${p.fornecedor} · ${p.prazoMin}–${p.prazoMax} dias úteis</div>
    <button class="add-btn" onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
  </div>`;
}

function dealHTML(p){
  return `
  <div class="deal-card">
    <div class="deal-timer"><span class="dot"></span> termina em 03:42:1${p.id%9}</div>
    <div class="thumb" style="background:${grads[p.grad]}; height:100px;">${icons[p.icon]}</div>
    <div class="cat-eyebrow" style="margin-top:10px;">${p.cat}</div>
    <h3 style="font-size:13px;">${p.name}</h3>
    <div class="price-block">
      ${p.old ? `<span class="old-price">${p.old}</span>` : ""}
      <span class="now-price" style="font-size:16px;">${p.now}</span>
    </div>
    <div class="dropship-note">📦 ${p.fornecedor} · ${p.prazoMin}–${p.prazoMax} dias</div>
    <button class="add-btn" onclick="addToCart(${p.id})">Adicionar</button>
  </div>`;
}

document.getElementById("dealsStrip").innerHTML = deals.map(dealHTML).join("");
document.getElementById("grid-consoles").innerHTML = products.filter(p=>p.cat==="consoles").map(cardHTML).join("");
document.getElementById("grid-placas").innerHTML = products.filter(p=>p.cat==="placas").map(cardHTML).join("");
document.getElementById("grid-perifericos").innerHTML = products.filter(p=>p.cat==="perifericos").map(cardHTML).join("");
document.getElementById("grid-cadeiras").innerHTML = products.filter(p=>p.cat==="cadeiras").map(cardHTML).join("");

/* ================= CATEGORY NAV FILTER ================= */
document.getElementById("catNav").addEventListener("click", (e)=>{
  const btn = e.target.closest("button");
  if(!btn) return;
  document.querySelectorAll("#catNav button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  const cat = btn.dataset.cat;
  if(cat === "todos"){
    document.querySelectorAll(".section .grid").forEach(g=>g.closest(".section").style.display = "");
    document.querySelectorAll(".card").forEach(c=>c.style.display = "");
    return;
  }
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display = c.dataset.cat === cat ? "" : "none";
  });
  document.querySelectorAll(".section .grid").forEach(g=>{
    const hasVisible = [...g.children].some(c=>c.style.display !== "none");
    g.closest(".section").style.display = hasVisible ? "" : "none";
  });
});

/* ================= SEARCH FILTER ================= */
document.getElementById("searchInput").addEventListener("input", (e)=>{
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll("#catNav button").forEach(b=>b.classList.remove("active"));
  document.querySelector('#catNav button[data-cat="todos"]').classList.add("active");
  document.querySelectorAll(".card").forEach(c=>{
    const match = c.dataset.name.includes(q);
    c.style.display = match ? "" : "none";
  });
  document.querySelectorAll(".section .grid").forEach(g=>{
    const hasVisible = [...g.children].some(c=>c.style.display !== "none");
    g.closest(".section").style.display = hasVisible ? "" : "none";
  });
});

/* ================= CART ================= */
let cart = {}; // id -> qty

function toggleCart(open){
  document.getElementById("drawer").classList.toggle("open", open);
  document.getElementById("overlay").classList.toggle("open", open);
}

function addToCart(id){
  cart[id] = (cart[id]||0) + 1;
  renderCart();
  showToast(products.find(p=>p.id===id).name);
}
function changeQty(id, delta){
  cart[id] = (cart[id]||0) + delta;
  if(cart[id] <= 0) delete cart[id];
  renderCart();
}
function removeItem(id){
  delete cart[id];
  renderCart();
}

function parsePrice(str){
  return parseFloat(str.replace("R$","").trim().replace(/\./g,"").replace(",","."));
}
function formatPrice(n){
  return "R$ " + n.toLocaleString("pt-BR", {minimumFractionDigits:2, maximumFractionDigits:2});
}

function renderCart(){
  const body = document.getElementById("cartBody");
  const ids = Object.keys(cart);
  let count = 0, total = 0;
  ids.forEach(id=>{ count += cart[id]; });
  document.getElementById("cartCount").textContent = count;

  if(ids.length === 0){
    body.innerHTML = `<div class="empty-cart">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8a3 3 0 016 0"/></svg>
      <p>Seu carrinho está zerado.<br>Bora garimpar umas fichas?</p>
    </div>`;
    document.getElementById("cartTotal").textContent = formatPrice(0);
    return;
  }

  body.innerHTML = ids.map(id=>{
    const p = products.find(x=>x.id==id);
    const qty = cart[id];
    const priceNum = parsePrice(p.now);
    total += priceNum * qty;
    return `
    <div class="cart-item">
      <div class="cart-thumb" style="background:${grads[p.grad]}; color:var(--gold)">${icons[p.icon]}</div>
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <div class="p">${p.now}</div>
        <div class="dropship-note">📦 ${p.fornecedor} · ${p.prazoMin}–${p.prazoMax} dias úteis</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
          <button class="remove-x" onclick="removeItem(${id})">remover</button>
        </div>
      </div>
    </div>`;
  }).join("");

  document.getElementById("cartTotal").textContent = formatPrice(total);
}

/* =================================================================
   FECHAR PEDIDO
   Sem backend por enquanto: calculamos o prazo consolidado (pior caso
   entre os fornecedores dos itens do carrinho) direto no front-end.
   ================================================================= */
function finalizarPedido(){
  const ids = Object.keys(cart);
  if(ids.length === 0) return;

  let prazoMin = 0, prazoMax = 0;
  ids.forEach(id=>{
    const p = products.find(x=>x.id==id);
    prazoMin = Math.max(prazoMin, p.prazoMin);
    prazoMax = Math.max(prazoMax, p.prazoMax);
  });

  const pedidoId = 1000 + Math.floor(Math.random()*9000);
  alert(
    `Pedido #${pedidoId} registrado!\n\n` +
    `Como trabalhamos com dropshipping, cada item será enviado direto ` +
    `pelo fornecedor. Prazo estimado do pedido: ${prazoMin}–${prazoMax} dias úteis.`
  );
  cart = {};
  renderCart();
  toggleCart(false);
}

let toastTimer;
function showToast(name){
  const toast = document.getElementById("toast");
  document.getElementById("toastText").textContent = `Adicionado: ${name.length>38? name.slice(0,38)+"…":name}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"), 2400);
}

renderCart();
