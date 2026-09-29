var $=function(s){return document.querySelector(s)};
function nep(n){return String(Math.round(n)).replace(/\B(?=(\d{2})*\d{3}(?!\d))/g,",")}
function rs(n){return "NPR "+nep(n)}
var P=[
 {
  "id": 1,
  "e": "Everest Base Camp Trek",
  "r": "Khumbu",
  "d": 14,
  "p": 185000,
  "k": "trek",
  "lv": "Challenging",
  "b": "Mar–May, Oct–Nov",
  "a": "5,545 m at Kala Patthar",
  "s": "The classic walk to the foot of the world's highest mountain, through Sherpa villages and monasteries.",
  "h": [
   "Namche Bazaar and Tengboche monastery",
   "Close views of Everest, Lhotse and Ama Dablam",
   "Sunrise from Kala Patthar"
  ],
  "w": "Solukhumbu district in the Himalaya, in Sagarmatha National Park, north-east of Kathmandu.",
  "t": "Fly Kathmandu to Lukla (about 35 minutes, weather permitting), then walk.",
  "g": "You climb slowly so your body can adjust to altitude. Good fitness and warm layers are needed.",
  "y": "peak",
  "c": [
   "#bcd9ea",
   "#6f8fa8",
   "#3b5a4a"
  ]
 },
 {
  "id": 2,
  "e": "Annapurna Homestay Trek",
  "r": "Annapurna",
  "d": 7,
  "p": 38000,
  "k": "trek",
  "lv": "Moderate",
  "b": "Oct–Nov, Mar–May",
  "a": "about 2,600 m",
  "s": "A gentler trek linking Gurung villages, where you sleep and eat in family homes.",
  "h": [
   "Ghandruk village life",
   "Rhododendron forest, in bloom in Mar–Apr",
   "Views of Annapurna South and Machhapuchhre"
  ],
  "w": "Annapurna region, north of Pokhara.",
  "t": "Drive Kathmandu to Pokhara (6–7 hours) or fly (about 25 minutes), then a short drive to the trail.",
  "g": "Stone steps make some days steep. Suits first-time trekkers who can walk 4–6 hours a day.",
  "y": "hills",
  "c": [
   "#bcd9ea",
   "#4f9a63",
   "#2f6b48"
  ]
 },
 {
  "id": 3,
  "e": "Langtang Valley Trek",
  "r": "Langtang",
  "d": 8,
  "p": 42000,
  "k": "trek",
  "lv": "Moderate",
  "b": "Mar–May, Oct–Nov",
  "a": "3,870 m at Kyanjin Gompa",
  "s": "A valley trek close to Kathmandu, from forest and Tamang villages up to a glacier valley.",
  "h": [
   "Langtang village, rebuilt after the 2015 earthquake",
   "Kyanjin Gompa and local yak cheese",
   "Views of Langtang Lirung"
  ],
  "w": "Langtang National Park, Rasuwa district, north of Kathmandu near the Tibet border.",
  "t": "Drive Kathmandu to Syabrubesi (about 7–8 hours), then walk.",
  "g": "Your stay supports villages rebuilt after the earthquake. Take time to adjust to altitude.",
  "y": "peak",
  "c": [
   "#c9dfe8",
   "#7a94a8",
   "#2f6b48"
  ]
 },
 {
  "id": 4,
  "e": "Manaslu Circuit",
  "r": "Manaslu",
  "d": 12,
  "p": 110000,
  "k": "trek",
  "lv": "Challenging",
  "b": "Mar–May, Sep–Nov",
  "a": "5,160 m at Larkya La pass",
  "s": "A remote circuit around the world's eighth-highest mountain, with few other trekkers.",
  "h": [
   "Tibetan-style villages such as Samagaon",
   "Crossing the Larkya La pass",
   "Views of Manaslu"
  ],
  "w": "Manaslu Conservation Area, Gorkha district, north-west of Kathmandu.",
  "t": "Drive Kathmandu to Soti Khola (about 8–9 hours), then walk.",
  "g": "A restricted-area permit and a guide are required; we arrange both. Long days and a high pass need good fitness.",
  "y": "peak",
  "c": [
   "#d5e4ee",
   "#5f7f96",
   "#4a6b52"
  ]
 },
 {
  "id": 5,
  "e": "Upper Mustang Journey",
  "r": "Mustang",
  "d": 9,
  "p": 125000,
  "k": "culture",
  "lv": "Moderate",
  "b": "Mar–Nov",
  "a": "about 3,800 m at Lo Manthang",
  "s": "A dry high-desert kingdom of red cliffs, cave monasteries and a walled medieval town.",
  "h": [
   "Lo Manthang walled city",
   "Cave monasteries and painted temples",
   "Red cliffs of the Kali Gandaki valley"
  ],
  "w": "Mustang district, north of the Annapurna range, near the Tibet border.",
  "t": "Fly Kathmandu to Pokhara, then Pokhara to Jomsom (about 20 minutes), then continue by jeep and on foot.",
  "g": "It is dry and windy, so bring sun protection. A restricted-area permit is needed and arranged for you.",
  "y": "hills",
  "c": [
   "#f3d9a0",
   "#c9a24a",
   "#a5763a"
  ]
 },
 {
  "id": 6,
  "e": "Poon Hill Sunrise Trek",
  "r": "Annapurna",
  "d": 5,
  "p": 24000,
  "k": "trek",
  "lv": "Easy",
  "b": "Oct–Nov, Mar–Apr",
  "a": "3,210 m at Poon Hill",
  "s": "A short trek famous for a sunrise over the Dhaulagiri and Annapurna ranges.",
  "h": [
   "Sunrise from Poon Hill",
   "Ghorepani and Tadapani villages",
   "Rhododendron forest"
  ],
  "w": "Annapurna region, near Pokhara.",
  "t": "Drive Pokhara to Nayapul (about 1.5 hours), then walk.",
  "g": "Long stone stairways are steep, but the trek is short and suits beginners.",
  "y": "hills",
  "c": [
   "#f6c98b",
   "#5fae7e",
   "#2f6b48"
  ]
 },
 {
  "id": 7,
  "e": "Rara Lake Quiet Trek",
  "r": "Karnali",
  "d": 6,
  "p": 46000,
  "k": "lake",
  "lv": "Moderate",
  "b": "Apr–May, Sep–Nov",
  "a": "about 3,000 m at the lake",
  "s": "Nepal's largest lake, in a quiet national park of pine forest in the far west.",
  "h": [
   "Walk around Rara Lake",
   "Pine and juniper forest",
   "Village life in Mugu"
  ],
  "w": "Rara National Park, Mugu district, in remote north-west Nepal.",
  "t": "Fly Kathmandu to Nepalgunj, then to Talcha airport near the lake, then a short walk or drive.",
  "g": "Very few visitors, so facilities are simple. Nights are cold even in spring.",
  "y": "lake",
  "c": [
   "#a9d0e6",
   "#3f6b5a",
   "#3d7fa8"
  ]
 },
 {
  "id": 8,
  "e": "Pokhara Lakes & Farms",
  "r": "Gandaki",
  "d": 3,
  "p": 18000,
  "k": "lake",
  "lv": "Easy",
  "b": "Oct–Apr",
  "a": "about 1,600 m at Sarangkot",
  "s": "A relaxed lakeside base with easy walks, boat rides and mountain views.",
  "h": [
   "Phewa Lake by boat",
   "Sarangkot sunrise viewpoint",
   "Organic farm and women's craft group"
  ],
  "w": "Pokhara city, Kaski district, at the foot of the Annapurna range.",
  "t": "Fly Kathmandu to Pokhara (about 25 minutes) or drive (6–7 hours).",
  "g": "Suits families and older travellers. No special fitness needed.",
  "y": "lake",
  "c": [
   "#bcd9ea",
   "#4f7f6a",
   "#3d8fb8"
  ]
 },
 {
  "id": 9,
  "e": "Chitwan Community Safari",
  "r": "Chitwan",
  "d": 3,
  "p": 21500,
  "k": "wild",
  "lv": "Easy",
  "b": "Oct–Mar",
  "a": "about 150 m, lowland",
  "s": "Jungle walks and canoe rides in the Terai, where you can see rhinos, deer and crocodiles.",
  "h": [
   "One-horned rhinoceros",
   "Gharial crocodiles on the river",
   "Tharu culture and dance"
  ],
  "w": "Chitwan National Park in the southern lowlands (Terai).",
  "t": "Drive Kathmandu to Sauraha (about 5 hours), or fly to Bharatpur and drive.",
  "g": "It is hot and humid in Apr–Jun and rainy in Jun–Sep. Tiger sightings are rare.",
  "y": "jungle",
  "c": [
   "#f3d9a0",
   "#2f7a4a",
   "#4f9fb8"
  ]
 },
 {
  "id": 10,
  "e": "Bardiya Tiger Trail",
  "r": "Bardiya",
  "d": 3,
  "p": 23000,
  "k": "wild",
  "lv": "Easy",
  "b": "Oct–Apr",
  "a": "about 150 m, lowland",
  "s": "A quieter jungle park than Chitwan, with a good chance to see wild elephants and, with luck, tigers.",
  "h": [
   "Tracking with local guides",
   "Karnali River and gharial",
   "Tharu villages"
  ],
  "w": "Bardiya National Park in the western Terai.",
  "t": "Fly Kathmandu to Nepalgunj, then drive about 2–3 hours.",
  "g": "Sightings are never guaranteed. Walks start at dawn and are slow and quiet.",
  "y": "jungle",
  "c": [
   "#f6d8a8",
   "#3f8a4a",
   "#5aa0b0"
  ]
 },
 {
  "id": 11,
  "e": "Lumbini Cycle & Culture",
  "r": "Lumbini",
  "d": 2,
  "p": 14000,
  "k": "culture",
  "lv": "Easy",
  "b": "Oct–Mar",
  "a": "flat, about 100 m",
  "s": "The birthplace of the Buddha, a UNESCO World Heritage Site with monasteries from many countries.",
  "h": [
   "Maya Devi Temple and the Ashoka Pillar",
   "Monastery zone with temples from many countries",
   "Cycling through nearby villages"
  ],
  "w": "Rupandehi district in the southern lowlands near the Indian border.",
  "t": "Fly Kathmandu to Bhairahawa (about 35 minutes), then drive 30–40 minutes.",
  "g": "The ground is flat, so it suits all ages. Summers are very hot; go out early in the morning.",
  "y": "stupa",
  "c": [
   "#f6c98b",
   "#fff",
   "#6fa35a"
  ]
 },
 {
  "id": 12,
  "e": "Kathmandu Valley Heritage",
  "r": "Kathmandu Valley",
  "d": 3,
  "p": 16000,
  "k": "culture",
  "lv": "Easy",
  "b": "Oct–Nov, Mar–Apr",
  "a": "about 1,400 m",
  "s": "Old royal squares, Hindu and Buddhist shrines and living traditions in and around the capital.",
  "h": [
   "Patan and Bhaktapur Durbar Squares",
   "Boudhanath stupa and Swayambhunath",
   "Pashupatinath temple area"
  ],
  "w": "Kathmandu, Lalitpur and Bhaktapur, in the central valley.",
  "t": "You start in Kathmandu, so no long travel is needed.",
  "g": "Streets are busy. Dress modestly at temples and remove shoes when asked.",
  "y": "stupa",
  "c": [
   "#f2d8b0",
   "#e8ddd0",
   "#8a6a4a"
  ]
 },
 {
  "id": 13,
  "e": "Bandipur & Tansen Hill Towns",
  "r": "Central hills",
  "d": 3,
  "p": 15000,
  "k": "culture",
  "lv": "Easy",
  "b": "Oct–Apr",
  "a": "about 1,000 m at Bandipur",
  "s": "Two old hill towns with Newar-style streets, viewpoints and short village walks.",
  "h": [
   "Bandipur bazaar and Tundikhel viewpoint",
   "Siddha Cave near Bandipur",
   "Tansen and its hand-woven dhaka cloth"
  ],
  "w": "Tanahun and Palpa districts in the central hills.",
  "t": "Drive Kathmandu to Bandipur (about 4–5 hours), then continue to Tansen by road.",
  "g": "The old bazaar in Bandipur is closed to traffic. Bring shoes that suit cobbled streets.",
  "y": "hills",
  "c": [
   "#cfe3ee",
   "#7fb98a",
   "#4f8a5a"
  ]
 },
 {
  "id": 14,
  "e": "Ilam Tea Garden Stay",
  "r": "Ilam",
  "d": 3,
  "p": 17000,
  "k": "lake",
  "lv": "Easy",
  "b": "Mar–May, Oct–Nov",
  "a": "about 1,200 m",
  "s": "Green tea hills in the far east, with tea picking, small estates and sunrise viewpoints.",
  "h": [
   "Tea picking and factory visit",
   "Antu Danda sunrise viewpoint",
   "Homestays with tea growers"
  ],
  "w": "Ilam district in far eastern Nepal, near the Indian border.",
  "t": "Fly Kathmandu to Bhadrapur (about 50 minutes), then drive about 4 hours.",
  "g": "Roads are winding and the hills are often misty and cool. Spring is the main tea-picking season.",
  "y": "hills",
  "c": [
   "#dcecf3",
   "#6fbf8a",
   "#2f7a4a"
  ]
 },
 {
  "id": 15,
  "e": "Gosaikunda Lake Trek",
  "r": "Rasuwa",
  "d": 6,
  "p": 39000,
  "k": "trek",
  "lv": "Challenging",
  "b": "Mar–May, Oct–Nov",
  "a": "4,380 m at the lake",
  "s": "A high trek to a sacred alpine lake visited by Hindu and Buddhist pilgrims.",
  "h": [
   "Gosaikunda sacred lakes",
   "Views from Laurebina pass",
   "Rhododendron forest below the lakes"
  ],
  "w": "Langtang National Park, Rasuwa district, north of Kathmandu.",
  "t": "Drive Kathmandu to Dhunche (about 6–8 hours), then walk.",
  "g": "Height is gained quickly, so guides are trained in altitude safety. Expect large pilgrim crowds at the August full-moon festival.",
  "y": "lake",
  "c": [
   "#b7d6e8",
   "#5f7f96",
   "#2f6485"
  ]
 }
];
function scene(k){var c=k.c,t=k.y,b='<svg viewBox="0 0 300 150" aria-hidden="true"><rect width="300" height="150" fill="'+c[0]+'"/>',e='</svg>';
if(t=="peak")return b+'<path d="M0 120 70 50l30 30 60-70 70 90 40-30 30 50v30H0z" fill="'+c[1]+'"/><path d="M160 10l-18 26 12 6 8-8 10 10 12-8zM70 50l-12 18 10 4 6-6 8 8z" fill="#fff"/><path d="M0 150v-20l120-10 180 12v18z" fill="'+c[2]+'"/>'+e;
if(t=="hills")return b+'<circle cx="240" cy="34" r="16" fill="#f0c060"/><path d="M0 100q70-50 150-10t150-20v80H0z" fill="'+c[1]+'"/><path d="M0 122q150-30 300 0M0 136q150-24 300 0" stroke="'+c[2]+'" stroke-width="5" fill="none"/>'+e;
if(t=="lake")return b+'<path d="M0 76 60 40l50 26 60-38 70 44 60-24v28H0z" fill="'+c[1]+'"/><rect y="72" width="300" height="78" fill="'+c[2]+'"/><path d="M40 96h50M120 108h70M210 100h60M70 126h60M170 130h80" stroke="#dcecf3" stroke-width="2"/>'+e;
if(t=="jungle")return b+'<circle cx="230" cy="44" r="22" fill="#f0a868"/><path d="M0 150V92l60-10 60 16 70-20 110 20v52z" fill="'+c[1]+'"/><path d="M50 100V40M50 60l-14-10M50 68l16-12M120 104V30M120 52l-16-12M120 62l18-14M250 104V50M250 66l-14-8" stroke="#1b4d30" stroke-width="5" fill="none"/><path d="M0 130q80-14 160 0t140-6v26H0z" fill="'+c[2]+'"/>'+e;
return b+'<circle cx="60" cy="50" r="20" fill="#fbe7b8"/><path d="M110 112c0-40 40-48 40-48s40 8 40 48z" fill="'+c[1]+'"/><rect x="146" y="30" width="8" height="34" fill="#f0f0f0"/><path d="M150 30l-8-12h16z" fill="#e8b33a"/><path d="M0 150v-30h300v30z" fill="'+c[2]+'"/>'+e}
var cat="all",infoId=0;
var CATS=[["all","All places"],["trek","Mountain treks"],["wild","Wildlife"],["culture","Culture & heritage"],["lake","Lakes & hills"]];
function badge(k){return '<span class="badge lv-'+k.lv+'">'+k.lv+'</span>'}
function drawGrid(){
 $("#chips").innerHTML=CATS.map(function(c){var n=c[0]==="all"?P.length:P.filter(function(k){return k.k===c[0]}).length;return '<button data-cat="'+c[0]+'" aria-pressed="'+(cat===c[0])+'" class="'+(cat===c[0]?"act":"")+'">'+c[1]+' ('+n+')</button>'}).join("");
 $("#pkgGrid").innerHTML=P.filter(function(k){return cat==="all"||k.k===cat}).map(function(k){return '<article class="card">'+scene(k)+'<div class="b"><h3>'+k.e+'</h3><div class="meta">'+k.r+' · '+k.d+' days</div><div>'+badge(k)+' <span class="badge">Best: '+k.b+'</span></div><p>'+k.s+'</p><ul class="hl">'+k.h.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul><div class="price">'+rs(k.p)+'<small>per person</small></div><div class="acts"><button class="btn alt" data-info="'+k.id+'">Details</button><button class="btn" data-book="'+k.id+'">Book now</button></div></div></article>'}).join("");
 document.querySelectorAll("[data-cat]").forEach(function(b){b.onclick=function(){cat=b.dataset.cat;drawGrid()}});
 document.querySelectorAll("[data-info]").forEach(function(b){b.onclick=function(){info(Number(b.dataset.info))}});
 document.querySelectorAll("[data-book]").forEach(function(b){b.onclick=function(){location.hash="#/book/"+b.dataset.book}})}
function info(id){var k=P.filter(function(x){return x.id===id})[0];infoId=id;
 $("#dT").textContent=k.e;$("#dR").textContent=k.r+" · "+k.d+" days · "+rs(k.p)+" per person";
 $("#dBadges").innerHTML=badge(k)+' <span class="badge">Best: '+k.b+'</span>';$("#dS").textContent=k.s;
 $("#dH").innerHTML=k.h.map(function(x){return '<li>'+x+'</li>'}).join("");
 $("#dL").innerHTML=[["Where",k.w],["Getting there",k.t],["Highest point",k.a],["Best time",k.b],["Good to know",k.g]].map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join("");
 $("#dM").classList.add("on");$("#dBook").focus()}
function closeInfo(){$("#dM").classList.remove("on")}
document.querySelectorAll("[data-close]").forEach(function(b){b.onclick=closeInfo});
$("#dM").onclick=function(e){if(e.target===this)closeInfo()};
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeInfo()});
$("#dBook").onclick=function(){closeInfo();location.hash="#/book/"+infoId};
drawGrid();
$("#stats").innerHTML=[["70%","of price stays local"],["8","guests max per group"],["0","single-use plastic bottles"],["NPR 1,500","per trip to ranger funds"]].map(function(s){return "<div><b>"+s[0]+"</b>"+s[1]+"</div>"}).join("");

function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k))}localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
var user=store("hn_user"),nextHash="#/";
function hs(s){var h=5381;for(var i=0;i<s.length;i++){h=((h<<5)+h+s.charCodeAt(i))|0}return String(h)}
function say(el,t,bad){el.className="msg"+(bad?" err":"");el.textContent=t}
function fail(m,f,t){say(m,t,1);var w=f.closest(".chk")||f;w.insertAdjacentElement("afterend",m);f.focus();m.scrollIntoView({block:"nearest"})}
function okEmail(e){return /^\S+@\S+\.\S+$/.test(e)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function addDays(iso,n){var d=new Date(iso+"T00:00:00");d.setDate(d.getDate()+n);return d}
function fmt(d){return d.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}
function accounts(){return store("hn_accounts")||{}}
function tripById(id){return P.filter(function(k){return k.id===id})[0]}

/* ---------- pages (hash routing) ---------- */
function show(v){["home","login","book"].forEach(function(x){$("#v-"+x).classList.toggle("on",x===v)});window.scrollTo(0,0)}
function route(){var h=location.hash;$("#links").classList.remove("on");$("#menu").setAttribute("aria-expanded","false");
 if(h.indexOf("#/login")===0){show("login")}
 else if(h.indexOf("#/book")===0){show("book");initBook(Number(h.split("/")[2])||0)}
 else{show("home");var t=h.length>2?document.getElementById(h.slice(1)):null;if(t)t.scrollIntoView()}}
window.addEventListener("hashchange",route);

/* ---------- login page ---------- */
function paintUser(){$("#loginBtn").textContent=user?"Log out ("+user.name.split(" ")[0]+")":"Log in";renderMine()}
function tab(w){$("#fIn").hidden=w!=="in";$("#fUp").hidden=w!=="up";$("#tabIn").classList.toggle("act",w==="in");$("#tabUp").classList.toggle("act",w==="up");say($("#lmsg"),"")}
$("#tabIn").onclick=function(){tab("in")};$("#tabUp").onclick=function(){tab("up")};
function finish(u){user=u;store("hn_user",u);$("#bName").value="";$("#bEmail").value="";paintUser();var h=nextHash||"#/";nextHash="#/";location.hash=h}
$("#doIn").onclick=function(){var m=$("#lmsg"),e=$("#ie").value.trim().toLowerCase(),a=accounts()[e];
 if(!okEmail(e))return say(m,"Enter a valid email address.",1);
 if(!a)return say(m,"No account found for this email. Choose Create account.",1);
 if(a.pw!==hs($("#ip").value))return say(m,"Wrong password. Try again.",1);
 finish({name:a.name,email:e})};
$("#doUp").onclick=function(){var m=$("#lmsg"),n=$("#un").value.trim(),e=$("#ue").value.trim().toLowerCase(),p=$("#up").value,acc=accounts();
 if(!n)return say(m,"Enter your full name.",1);
 if(!okEmail(e))return say(m,"Enter a valid email address.",1);
 if(p.length<6)return say(m,"Password must be at least 6 characters.",1);
 if(p!==$("#uc").value)return say(m,"The two passwords do not match.",1);
 if(acc[e])return say(m,"This email already has an account. Choose Log in.",1);
 acc[e]={name:n,pw:hs(p)};store("hn_accounts",acc);finish({name:n,email:e})};
$("#loginBtn").onclick=function(){
 if(user){user=null;try{localStorage.removeItem("hn_user")}catch(e){}$("#bName").value="";$("#bEmail").value="";paintUser();route()}
 else{nextHash=location.hash.indexOf("#/login")===0||location.hash.length<3?"#/":location.hash;tab("in");location.hash="#/login"}};
$("#goLogin").onclick=function(){nextHash=location.hash||"#/book"};

/* ---------- booking page ---------- */
var built=false;
function cur(){return tripById(Number($("#bTrip").value))}
function sum(){var k=cur(),g=Number($("#bGuests").value),d=$("#bDate").value;
 $("#sTrip").textContent=k.e;$("#sReg").textContent=k.r;$("#sDur").textContent=k.d+" days";
 $("#sDates").textContent=d?fmt(addDays(d,0))+" to "+fmt(addDays(d,k.d-1)):"Choose a date";
 $("#sPP").textContent=rs(k.p);$("#sG").textContent=g;$("#sTot").textContent=rs(k.p*g)}
function initBook(id){
 if(!built){built=true;
  $("#bTrip").innerHTML=P.map(function(k){return '<option value="'+k.id+'">'+k.e+' ('+rs(k.p)+')</option>'}).join("");
  $("#bGuests").innerHTML=[1,2,3,4,5,6,7,8].map(function(n){return '<option value="'+n+'">'+n+(n>1?" guests":" guest")+'</option>'}).join("");
  var t=new Date();t.setDate(t.getDate()+7);$("#bDate").min=$("#bDate").value=t.toISOString().slice(0,10)}
 if(id&&tripById(id))$("#bTrip").value=id;
 $("#bDone").hidden=true;$("#bForm").hidden=false;say($("#bMsg"),"");
 $("#bLoginNote").hidden=!!user;
 if(user){if(!$("#bName").value)$("#bName").value=user.name;if(!$("#bEmail").value)$("#bEmail").value=user.email}
 sum()}
["bTrip","bDate","bGuests"].forEach(function(i){$("#"+i).onchange=sum});
$("#bGo").onclick=function(){var m=$("#bMsg"),k=cur(),g=Number($("#bGuests").value),d=$("#bDate").value,n=$("#bName").value.trim(),e=$("#bEmail").value.trim(),ph=$("#bPhone").value.trim();
 if(!d||d<$("#bDate").min)return fail(m,$("#bDate"),"Choose a start date at least 7 days from today.");
 if(!n)return fail(m,$("#bName"),"Enter your full name.");
 if(!okEmail(e))return fail(m,$("#bEmail"),"Enter a valid email address.");
 if(ph.replace(/\D/g,"").length<7)return fail(m,$("#bPhone"),"Enter a phone number with at least 7 digits.");
 if(!$("#bAgree").checked)return fail(m,$("#bAgree"),"Tick the box to accept the responsible travel code.");
 var b={ref:"NA-"+Math.floor(10000+Math.random()*90000),trip:k.e,days:k.d,start:d,guests:g,total:k.p*g,name:n,email:e,phone:ph,pay:document.querySelector('input[name="pay"]:checked').value,note:$("#bNote").value.trim(),owner:user?user.email:null};
 var l=store("hn_bookings")||[];l.push(b);store("hn_bookings",l);
 $("#bForm").hidden=true;$("#bDone").hidden=false;
 $("#dBody").innerHTML='<p>Your reference is <b>'+b.ref+'</b>. Keep it for any questions.</p><p><b>'+esc(k.e)+'</b><br>'+fmt(addDays(d,0))+' to '+fmt(addDays(d,k.d-1))+' · '+g+' guest'+(g>1?"s":"")+'<br>Total: <b>'+rs(b.total)+'</b><br>Payment: '+esc(b.pay)+'</p><p>We will contact <b>'+esc(n)+'</b> at '+esc(e)+' to confirm availability. (Demo: no email is sent.)</p>';
 renderMine();window.scrollTo(0,0)};
$("#again").onclick=function(){location.hash="#/book";initBook(0)};

function renderMine(){var box=$("#mine");if(!user){box.hidden=true;return}
 var l=(store("hn_bookings")||[]).filter(function(b){return b.owner===user.email});box.hidden=false;
 $("#mineList").innerHTML=l.length?l.map(function(b){return '<div class="bk"><div><b>'+esc(b.trip)+'</b><div class="meta">'+b.ref+' · '+fmt(addDays(b.start,0))+' to '+fmt(addDays(b.start,b.days-1))+' · '+b.guests+' guest'+(b.guests>1?"s":"")+'</div></div><div><b>'+rs(b.total)+'</b> <button class="btn alt" style="padding:4px 12px" data-cancel="'+b.ref+'">Cancel</button></div></div>'}).join(""):'<p class="meta">No bookings yet.</p>';
 document.querySelectorAll("[data-cancel]").forEach(function(x){x.onclick=function(){store("hn_bookings",(store("hn_bookings")||[]).filter(function(b){return b.ref!==x.dataset.cancel}));renderMine()}})}

/* ---------- home page bits ---------- */
$("#sendMsg").onclick=function(){var m=$("#cmsg");
 if(!$("#cn").value.trim()||!okEmail($("#ce").value)||!$("#cm").value.trim())return say(m,"Fill in your name, a valid email and a message.",1);
 say(m,"Thank you. We will reply within one working day.");$("#cm").value=""};
$("#menu").onclick=function(){var u=$("#links"),o=u.classList.toggle("on");this.setAttribute("aria-expanded",o)};
paintUser();route();
