(function () {
  /* ===== Settings ===== */
  var VIDEO = "media/hero.mp4";

  /* ===== Shared copy (EN / ES) ===== */
  var T = {
    tag: ["The New Way to Drink.", "La nueva forma de brindar."],
    desc: [
      "Mexico’s pioneer portfolio of premium alcohol-free spirits and RTDs.",
      "El portafolio pionero en México de destilados premium y coctelería libres de alcohol.",
    ],
    cta: ["Discover NULA", "Descubre NULA"],
    note: [
      "Nothing missing. Everything to experience.",
      "La experiencia completa, libre de alcohol.",
    ],
    contactUs: ["Contact us", "Contáctanos"],
  };
  var UI = {
    wa: ["WhatsApp", "WhatsApp"],
    em: ["Email", "Correo"],
    pion: [
      "Pioneering premium alcohol-free beverages in Mexico",
      "Pioneros en bebidas premium libres de alcohol en México",
    ],
    follow: ["Follow", "Síguenos"],
    dist: [
      "Distribution — Premium Alcohol-Free Beverage Distribution, Mexico",
      "Distribution — Distribución de bebidas premium libres de alcohol, México",
    ],
    privacy: ["Privacy", "Privacidad"],
    terms: ["Terms", "Términos"],
  };

  /* ===== Navigation structure ===== */
  var MENU = [
    [
      ["Company", "Compañía"],
      [
        ["Why Nula", "Por qué Nula", "why-nula"],
        ["Our story", "Nuestra historia", "our-story"],
        ["Manifesto", "Manifiesto", "manifesto"],
        ["Sober curious", "Mundo Sobrio", "sober-curious"],
      ],
    ],
    [
      ["Portfolio", "Portafolio"],
      [
        ["Brands", "Marcas", "brands"],
        ["RTD", "Listos para brindar", "rtd"],
        ["Wine", "Vino", "wine"],
        ["Spirits", "Destilados", "spirits"],
      ],
    ],
    [
      ["Hospitality", "Hospitalidad"],
      [
        ["Hotels", "Hoteles", "hotels"],
        ["Restaurants", "Restaurantes", "restaurants"],
        ["Bars", "Bares", "bars"],
        ["Events", "Eventos", "events"],
        ["Corporate", "Corporativos", "corporate"],
      ],
      "hospitality",
    ],
    [["Bring NULA", "Compra NULA"], [["Contact", "Contacto", "contact"]]],
  ];
  var FN = [
    ["Our Story", "Nuestra historia", "our-story"],
    ["Portfolio", "Portafolio", "brands"],
    ["Hospitality", "Hospitalidad", "hospitality"],
    ["Bring NULA", "Compra NULA", "contact"],
  ];

  /* ===== Page titles [en, es]. Pages without a custom renderer (privacy, terms)
     also carry body copy [.., .., body en, body es]. ===== */
  var P = {
    "why-nula": ["Why NULA", "Por qué NULA"],
    "our-story": ["Our story", "Nuestra historia"],
    manifesto: ["Manifesto", "Manifiesto"],
    "sober-curious": ["Sober curious", "Mundo Sobrio"],
    brands: ["Brands", "Marcas"],
    rtd: ["RTD", "Listos para brindar"],
    wine: ["Wine", "Vino"],
    spirits: ["Spirits", "Destilados"],
    hospitality: ["Hospitality", "Hospitalidad"],
    hotels: ["Hotels", "Hoteles"],
    restaurants: ["Restaurants", "Restaurantes"],
    bars: ["Bars", "Bares"],
    events: ["Events", "Eventos"],
    corporate: ["Corporate", "Corporativos"],
    contact: ["Contact", "Contacto"],
    privacy: [
      "Privacy",
      "Privacidad",
      "Privacy policy placeholder.",
      "Política de privacidad (texto de ejemplo).",
    ],
    terms: [
      "Terms",
      "Términos",
      "Terms of use placeholder.",
      "Términos de uso (texto de ejemplo).",
    ],
  };

  /* ===== Rendering helpers + per-page renderers (R) and after-render hooks (AF) ===== */
  var icon = function (n) {
    return '<svg class="i" aria-hidden="true"><use href="#i-' + n + '"/></svg>';
  };
  var X = function (a) {
    return L(a).replace(/\{\{(.*?)\}\}/g, '<span class="g">$1</span>');
  };
  var LK = function (h, a) {
    return '<a class="tlink" href="#' + h + '">' + L(a) + "</a>";
  };
  var BT = function (h, a) {
    return '<a class="btn" href="#' + h + '">' + L(a) + "</a>";
  };
  var PH = function (t, c) {
    return '<div class="ph ' + (c || "") + '">' + t + "</div>";
  };
  var EY = function (a) {
    return '<div class="eyebrow">' + L(a) + "</div>";
  };
  var R = {},
    AF = {};

  /* ===== PAGE: Why NULA ===== */
  R["why-nula"] = function () {
    var pil = [
      ["Flavor", "Sabor", "flavor"],
      ["Sophistication", "Sofisticación", "sophistication"],
      ["Experience", "Experiencia", "experience"],
      ["Gastronomy", "Gastronomía", "gastronomy"],
      ["Wellness", "Bienestar", "wellness"],
      ["Socializing", "Socialización", "events"],
      ["Choice", "Elección", "choice"],
      ["Authenticity", "Autenticidad", "authenticity"],
    ];
    return (
      /* Hero */
      '<section class="bd bd-hero"><div class="sec">' +
      EY(["Why NULA", "Por qué NULA"]) +
      '<h1 class="big">' +
      L(["The new world of drinking.", "El nuevo mundo de brindar."]) +
      "</h1><p>" +
      L([
        "For generations, alcohol has been part of how we celebrate, connect, dine, unwind and experience life. But today, we are choosing differently.",
        "Por generaciones, el alcohol ha sido parte de cómo celebramos, convivimos, comemos, relajamos y creamos experiencias. Pero hoy, elegimos diferente.",
      ]) +
      "</p></div></section>" +
      /* Intro: text + photo */
      '<section class="bd bd-red"><div class="sec two"><div><p>' +
      L([
        "NULA brings to you top-shelf alcohol-free RTD, wines, and spirits to Mexico, carefully selected for their flavor, quality, sophistication and ability to belong at the table, behind the bar and at the center of the experience.",
        "NULA trae a México lo mejor en bebidas listas para beber, vinos y destilados libres de alcohol, seleccionados por su sabor, calidad, sofisticación y por su lugar en la mesa, detrás de la barra y en el centro de cualquier experiencia.",
      ]) +
      '</p><h2 class="mid">' +
      X([
        "The experience doesn’t need to change. {{The choice does.}}",
        "La experiencia no tiene que cambiar. {{La elección sí.}}",
      ]) +
      "</h2>" +
      BT("brands", ["Explore the NULA World →", "Explora el mundo NULA →"]) +
      "</div>" +
      '<img class="side-pic" src="media/whynula/whynulapic.jpg" alt="' +
      L(["Enjoying NULA", "Disfrutando NULA"]) +
      '" loading="lazy">' +
      "</div></section>" +
      /* Quote */
      '<section class="bd bd-dark"><div class="sec cen"><p>' +
      L([
        "We think the experience is something else entirely.",
        "Creemos que la experiencia es algo completamente distinto.",
      ]) +
      '</p><h2 class="quote">' +
      X([
        "It’s a {{flavor}}. It’s a {{ritual}}.<br>It’s a {{connection}}. It’s a {{choice}}.",
        "Es un {{sabor}}. Es un {{ritual}}.<br>Es una {{conexión}}. Es una {{elección}}.",
      ]) +
      "</h2></div></section>" +
      /* Pillars */
      '<section class="bd bd-deep"><div class="sec cen">' +
      EY(["The NULA World", "El mundo NULA"]) +
      '<h2 class="mid">' +
      L([
        "The core pillars of every brand we carry.",
        "Los pilares de cada marca que representamos.",
      ]) +
      '</h2><div class="tiles">' +
      pil
        .map(function (t) {
          return (
            '<div class="tile">' +
            (t[2]
              ? '<img src="media/whynula/' + t[2] + '.jpg" alt="' + L(t) + '" loading="lazy" decoding="async">'
              : PH("Photo")) +
            "<b>" + L(t) + "</b></div>"
          );
        })
        .join("") +
      "</div><p>" +
      L([
        "The NULA world is everything you want to experience, and the secret is: you will remember all of it.",
        "El mundo NULA es todo lo que quieres experimentar, y el secreto es: lo vas a recordar todo.",
      ]) +
      "</p><p>" +
      L([
        "Every brand we carry, we chose for a reason.",
        "Cada marca que representamos, la elegimos por una razón.",
      ]) +
      " " +
      LK("our-story", ["Our Story →", "Nuestra historia →"]) +
      "</p></div></section>" +
      /* What we believe */
      '<section class="bd bd-warm"><div class="sec">' +
      EY(["What we believe", "En qué creemos"]) +
      '<h2 class="mid">' +
      L([
        "The way the world drinks is changing, and the best tables, bars and hotels are already adapting. Mexico is asking for it too.",
        "La forma en que el mundo brinda está cambiando, y las mejores mesas, bares y hoteles ya se están adaptando. México ya lo está pidiendo también.",
      ]) +
      "</h2><p>" +
      L([
        "Alcohol-free isn’t a second option anymore. It belongs on every great menu, next to the finest wine and the best pour. The places that offer it lead. The ones that don’t will be asked for it. It’s time to make the difference.",
        "Lo libre de alcohol ya no es una segunda opción. Pertenece en toda gran carta, junto al mejor vino y al mejor destilado. Los lugares que lo ofrecen marcan la pauta. A los que no, se los van a pedir. Es hora de marcar la diferencia.",
      ]) +
      '</p><p class="accent">' +
      L([
        "Great hospitality means everyone at the table has something worth raising.",
        "La buena hospitalidad es que todos en la mesa tengan algo con lo que valga la pena brindar.",
      ]) +
      "</p></div></section>" +
      /* Closing CTA */
      '<section class="bd bd-dark"><div class="sec cen"><h2 class="mid">' +
      L([
        "People are seeking a sober world of well-curated beverages.",
        "Hay quienes buscan un mundo sobrio de bebidas bien curadas.",
      ]) +
      "</h2>" +
      LK("sober-curious", ["Discover Sober Curious →", "Descubre Mundo Sobrio →"]) +
      "</div></section>"
    );
  };

  /* ===== PAGE: Our Story ===== */
  R["our-story"] = function () {
    var s = [
      [
        "The idea for NULA began unexpectedly. While studying for his master’s degree in Boston, Pedro was introduced to a trend he hadn’t really noticed before: a growing number of people, particularly younger generations, were changing their relationship with alcohol. At first, it was simply an interesting observation.",
        "La idea de NULA comenzó de forma inesperada. Mientras estudiaba su maestría en Boston, Pedro conoció una tendencia que no había notado antes: cada vez más personas, sobre todo en las generaciones más jóvenes, estaban cambiando su relación con el alcohol. Al principio, fue solo una observación interesante.",
      ],
      [
        "Then came the questions. Was this a temporary trend? Was it about health? Lifestyle? Wellness? Social habits? Or was something bigger happening?",
        "Luego vinieron las preguntas. ¿Era una tendencia pasajera? ¿Se trataba de salud? ¿Estilo de vida? ¿Bienestar? ¿Hábitos sociales? ¿O estaba pasando algo más grande?",
      ],
      [
        "Pedro started researching. What he found was more than a passing trend. A new category of beverages was emerging around the world, one built for people who still wanted flavor, sophistication and the social experience of drinking, minus the blackout. That was the moment the idea became bigger than a trend to think about; it became something to do.",
        "Pedro empezó a investigar. Lo que encontró era más que una moda pasajera. Una nueva categoría de bebidas estaba surgiendo en todo el mundo, hecha para quienes todavía querían sabor, sofisticación y la experiencia social de beber, pero sin tener que olvidar. Ese fue el momento en que la idea se volvió más grande que una tendencia de pensar; se volvió algo por hacer.",
      ],
      [
        "Mexico was ready for this conversation. {{And NULA was born with a simple belief: you shouldn’t have to give up the experience just because you’re choosing not to drink alcohol.}}",
        "México estaba listo para esta conversación. {{Y NULA nació con una creencia simple: no deberías tener que renunciar a la experiencia solo porque eliges no tomar alcohol.}}",
      ],
    ];
    return (
      '<section class="bd bd-hero"><div class="sec cen"><h1 class="big">' +
      L(["Our Story", "Nuestra historia"]) +
      "</h1>" +
      '<img class="bio" src="media/ourstory/bio.jpg" alt="Pedro, founder of NULA">' +
      '<div class="eyebrow">' +
      L(["Pedro · Founder", "Pedro · Fundador"]) +
      '</div></div></section><section class="bd bd-red"><div class="sec story">' +
      s
        .map(function (p) {
          return "<p>" + X(p) + "</p>";
        })
        .join("") +
      "</div></section>" +
      '<section class="bd bd-dark"><div class="sec cen"><h2 class="mid">' +
      X([
        "Nothing missing. {{Everything to experience.}}",
        "La experiencia completa, {{libre de alcohol.}}",
      ]) +
      '</h2><div class="gal">' +
      '<img src="media/ourstory/friends-story.jpg" alt="' + L(["Friends sharing a toast", "Amigos brindando"]) + '" loading="lazy">' +
      '<img src="media/ourstory/dinner-story.jpg" alt="' + L(["Dinner around the table", "Cena alrededor de la mesa"]) + '" loading="lazy">' +
      '<img src="media/ourstory/bar-story.jpg" alt="' + L(["A night at the bar", "Una noche en el bar"]) + '" loading="lazy">' +
      "</div></div></section>"
    );
  };

  /* ===== PAGE: Manifesto ===== */
  var CREED = [
    [
      "",
      "We believe a drink is more than what’s in the glass. It’s the conversation around the table.",
      "Creemos que un trago es más que lo que hay en la copa. Es la conversación alrededor de la mesa.",
    ],
    [
      "",
      "The first sip. The first toast. The music. The food. The people. The moment.",
      "El primer sorbo. El primer brindis. La música. La comida. La gente. El momento.",
    ],
    [
      "",
      "For too long, we’ve believed that alcohol had to be part of the moment.",
      "Por mucho tiempo, hemos creído que el alcohol tenía que ser parte del momento.",
    ],
    [
      "",
      "We think the experience is something else entirely. {{It’s a flavor. It’s a ritual. It’s a connection. It’s a choice.}}",
      "Creemos que la experiencia es algo completamente distinto. {{Es un sabor. Es un ritual. Es una conexión. Es una elección.}}",
    ],
    [
      "",
      "So choose the drink that feels right for you. Choose the cocktail. Choose the aperitif. Choose the night. Choose the moment.",
      "Así que elige el trago que va contigo. Elige el cóctel. Elige el aperitivo. Elige la noche. Elige el momento.",
    ],
    ["peak", "Choose NULA.", "Elige NULA."],
    [
      "",
      "Our name comes from null. Zero. Nothing. Zero alcohol. {{Nothing missing.}}",
      "Nuestro nombre viene de nulo. Cero. Nada. Cero alcohol. {{Nada falta.}}",
    ],
    [
      "peak",
      "Nothing missing. {{Everything to experience.}}",
      "La experiencia completa, {{libre de alcohol.}}",
    ],
  ];
  var GL = [
    ["The experience", "La experiencia"],
    ["The choice", "La elección"],
    ["Nothing missing", "Nada falta"],
  ];

  R.manifesto = function () {
    return (
      '<section class="bd bd-red"><div class="sec"><div class="creed"><div id="cr">' +
      CREED.map(function (c) {
        return '<p class="fi ' + c[0] + '">' + X([c[1], c[2]]) + "</p>";
      }).join("") +
      "</div>" +
      '<div class="gl"><svg viewBox="0 0 100 330" id="glass" aria-hidden="true"><defs>' +
      '<clipPath id="bw"><path d="M10.5 12H89.5L80.5 288Q79.5 306 62 306H38Q20.5 306 19.5 288Z"/></clipPath>' +
      '<linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C99A5E"/><stop offset="1" stop-color="#8A6237"/></linearGradient></defs>' +
      '<g clip-path="url(#bw)"><g id="liq"><ellipse cx="50" cy="40" rx="44" ry="12" fill="#B08F57" opacity=".18"/><rect x="0" y="40" width="100" height="280" fill="url(#lg)"/></g></g>' +
      '<g fill="none" stroke="#B08F57" stroke-width="1.6" stroke-linejoin="round"><path d="M8 10H92L82 288Q81 308 62 308H38Q19 308 18 288Z"/><path d="M50 308V320M32 320H68"/></g></svg>' +
      '<small id="gl">' +
      L(GL[0]) +
      "</small></div></div></div></section>" +
      '<section class="bd bd-warm"><div class="sec cen">' +
      EY(["Company’s DNA", "El ADN de la compañía"]) +
      '<h2 class="big">' +
      X([
        "The experience stays. {{The alcohol doesn’t have to.}}",
        "La experiencia se queda. {{El alcohol no tiene que quedarse.}}",
      ]) +
      "</h2></div></section>"
    );
  };
  var mfScroll = null;
  AF.manifesto = function () {
    if (mfScroll) window.removeEventListener("scroll", mfScroll);
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll(".fi").forEach(function (e) {
      io.observe(e);
    });
    var cr = document.getElementById("cr"),
      liq = document.getElementById("liq"),
      gl = document.getElementById("gl"),
      ticking = false;
    function upd() {
      ticking = false;
      if (!cr.isConnected) {
        window.removeEventListener("scroll", mfScroll);
        io.disconnect();
        mfScroll = null;
        return;
      }
      var r = cr.getBoundingClientRect(),
        p = Math.max(
          0,
          Math.min(
            1,
            (innerHeight * 0.55 - r.top) / (r.height - innerHeight * 0.1),
          ),
        );
      liq.setAttribute("transform", "translate(0 " + p * 266 + ")");
      gl.textContent = L(GL[p < 0.34 ? 0 : p < 0.72 ? 1 : 2]);
    }
    mfScroll = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(upd);
      }
    };
    window.addEventListener("scroll", mfScroll, { passive: true });
    upd();
  };

  /* ===== PAGE: Mundo Sobrio / Sober Curious ===== */
  var SC = [
    [
      "30%",
      "Mexico’s alcohol-free beer has grown this much every year since 2019.",
      "La cerveza libre de alcohol en México ha crecido considerablemente cada año desde 2019.",
    ],
    [
      "0.6%",
      "Alcohol-free’s share of Mexico today, vs. 6–10% in developed markets. The runway is enormous.",
      "La participación de lo libre de alcohol en México hoy, frente al 6–10% en mercados desarrollados. El terreno por recorrer es enorme.",
    ],
    [
      "$13B+",
      "The global alcohol-free category, growing around 7% a year.",
      "La categoría global libre de alcohol, creciendo alrededor de 7% al año.",
    ],
  ];
  var CD = [
    [
      "It’s global",
      "Es global",
      "Not a niche. A wave.",
      "No es un nicho. Es una ola.",
      "In the US, the share of 18–34s who drink fell from 72% to 62% in two decades. In the UK, about a third of under-25s don’t drink at all. Nearly half of Gen Z now reach for alcohol-free.",
      "En EE. UU. solo el 54% de los adultos bebe, el mínimo en ocho décadas. El 65% de la Generación Z planea beber menos en 2026. Y ya llegó a México: el consumo entre adolescentes bajó del 28% al 17.8%.",
      "https://time.com/7203140/gen-z-drinking-less-alcohol/",
      "https://www.cronista.com/mexico/opinion-mx/era-sober-curious-el-desplome-del-consumo-de-alcohol-en-eeuu-contagia-a-mexico-y-frena-exportaciones",
      "global",
    ],
    [
      "The culture",
      "La cultura",
      "It’s everywhere you look.",
      "Está en todas partes.",
      "Alcohol-free bars and bottle shops opening in major cities. Fine-dining restaurants building full non-alcoholic pairings. Athletes and artists making mindful drinking aspirational.",
      "Bares y tiendas sin alcohol abriendo en las grandes ciudades. Restaurantes de alta cocina creando maridajes sin alcohol. Atletas y artistas haciendo del consumo consciente algo aspiracional.",
      "https://www.foodnavigator.com/Article/2024/01/10/Alcohol-free-low-alcohol-drinks-How-big-is-the-global-market",
      "https://www.infobae.com/espana/2026/01/10/las-coctelerias-se-adaptan-a-los-jovenes-abstemios-y-sobrio-curiosos-hacer-un-coctel-sin-alcohol-ya-no-es-solo-mezclar-zumos-ponemos-el-mismo-trabajo/",
      "cultural",
    ],
    [
      "Why now",
      "Por qué ahora",
      "A generation chose differently.",
      "Una generación eligió distinto.",
      "Wellness, clarity, and better products are rewriting the rules. Almost two-thirds of young adults say they want to drink more mindfully, without giving up the ritual.",
      "Bienestar, claridad y mejores productos están cambiando las reglas. Casi dos tercios de los jóvenes dicen que quieren beber de forma más consciente, sin renunciar al ritual.",
      "https://www.mintel.com/insights/food-and-drink/gen-z-sober-curious-generation/",
      "https://www.vinetur.com/2025013184349/what-is-the-sober-curious-movement.html",
      "whynow",
    ],
    [
      "A lifestyle",
      "Un estilo de vida",
      "Balance, not sacrifice.",
      "Equilibrio, no renuncia.",
      "Mindful drinking is about balance, not cutting things out. It’s part of the same shift toward living well: moving more, resting better, choosing what actually makes the night feel good.",
      "El consumo consciente se trata de equilibrio, no de renunciar. Es parte del mismo cambio hacia vivir bien: moverse más, descansar mejor y elegir lo que de verdad hace que la noche se sienta bien.",
      "https://www.countryandtownhouse.com/food-and-drink/mindful-drinking-movement/",
      "https://www.forbesargentina.com/negocios/fin-happy-hour-wellness-pone-jaque-industria-alcohol-n85447",
      "lifestyle",
    ],
  ];

  R["sober-curious"] = function () {
    var k = lang === "es" ? 1 : 0,
      k2 = k ? 7 : 6,
      rm = L(["Read more →", "Leer más →"]);
    return (
      '<section class="bd bd-hero"><div class="sec">' +
      EY(["The Movement", "El movimiento"]) +
      '<h1 class="big">' +
      L(["Sober Curious", "Mundo Sobrio"]) +
      '</h1><div class="stats">' +
      SC.map(function (s) {
        return "<div><b>" + s[0] + "</b>" + L([s[1], s[2]]) + "</div>";
      }).join("") +
      "</div>" +
      '<p style="font-size:1.4rem">' +
      X([
        "A whole world is drinking differently, by choice. Not less life. More {{of it.}}",
        "Todo el mundo está bebiendo distinto, por elección. No menos vida. Más {{de ella.}}",
      ]) +
      "</p></div></section>" +
      '<section class="bd bd-red"><div class="sec">' +
      EY(["What’s happening", "Lo que está pasando"]) +
      '<div class="cds">' +
      CD.map(function (c) {
        return (
          '<a class="cd" href="' +
          c[k2] +
          '" target="_blank" rel="noopener">' +
          '<img src="media/sobercurious/' + c[8] + '.jpg" alt="' + L([c[2], c[3]]) + '" loading="lazy">' +
          '<div class="pn"><em>' +
          L([c[0], c[1]]) +
          "</em><h3>" +
          L([c[2], c[3]]) +
          '</h3><div class="mo"><p>' +
          L([c[4], c[5]]) +
          "</p><span>" +
          rm +
          "</span></div></div></a>"
        );
      }).join("") +
      "</div>" +
      '<a class="mk" href="' +
      L([
        "https://www.marketdataforecast.com/market-reports/latin-america-non-alcoholic-beverage-market",
        "https://www.vinetur.com/2026021996555/no-and-low-alcohol-drinks-surge-as-global-market-set-to-grow-37-by-2027.html",
      ]) +
      '" target="_blank" rel="noopener"><b>$84B → $118B</b><p>' +
      L([
        "Latin America’s non-alcoholic beverage market, from USD 84.6B in 2024 to a projected USD 118.4B by 2029. The region is one of the fastest-moving in the world.",
        "El mercado de bebidas sin alcohol de América Latina, de USD 84.6 mil millones en 2024 a una proyección de USD 118.4 mil millones para 2029. La región es una de las de mayor movimiento en el mundo.",
      ]) +
      "</p></a></div></section>" +
      '<section class="bd bd-warm"><div class="sec cen">' +
      EY(["And now", "Y ahora"]) +
      '<h2 class="big">' +
      L(["Mexico.", "México."]) +
      "</h2><p>" +
      L([
        "The world has been drinking this way for years. We’re bringing it here.",
        "El mundo lleva años brindando así. Lo estamos trayendo aquí.",
      ]) +
      "</p>" +
      BT("contact", ["Bring NULA →", "Compra NULA →"]) +
      "</div></section>" +
      '<section class="bd bd-dark"><p class="src">' +
      L([
        "Figures as of 2024. Sources: IWSR, Gallup, Mintel, MarketDataForecast, Grupo Modelo (via Mexico Business News).",
        "Cifras al 2024. Fuentes: IWSR, Gallup, Mintel, MarketDataForecast, Grupo Modelo (vía Mexico Business News).",
      ]) +
      "</p></section>"
    );
  };

  /* ===== PAGE: Brands (portfolio with category filter) ===== */
  var cat = "spirits";
  var CAT = {
    spirits: ["Spirits", "Destilados", "#B08F57"],
    aperitif: ["Aperitif", "Aperitivo", "#D2693C"],
    rtd: ["RTD Cocktails", "Cócteles listos", "#4F9C86"],
    wine: ["Wine", "Vino", "#A8456A"],
    beer: ["Beer", "Cerveza", "#D9B23A"],
    all: ["All", "Todo"],
  };
  var TY = {
    zp: ["Zero-proof spirit", "Destilado sin alcohol"],
    ap: ["Apéritif", "Aperitivo"],
    sap: ["Sparkling apéritif", "Aperitivo espumoso"],
    rtd: ["RTD cocktail", "Cóctel listo"],
    vp: ["Variety pack", "Paquete variado"],
    aw: ["Alcohol-removed wine", "Vino sin alcohol"],
  };
  var PR = [
    [
      "Drink Monday",
      "spirits",
      "Monday Gin",
      "zp",
      "750ml",
      "Juniper, citrus and a crisp botanical bite. Built for a clean G&amp;T or a Negroni that keeps you sharp.",
      "Enebro, cítricos y un toque botánico seco. Hecho para un G&amp;T limpio o un Negroni que te mantiene lúcido.",
    ],
    [
      "Drink Monday",
      "spirits",
      "Monday Whiskey",
      "zp",
      "750ml",
      "Warm oak, vanilla and a smoky finish. Sips neat over ice like the real thing.",
      "Roble cálido, vainilla y un final ahumado. Se bebe solo con hielo como el de verdad.",
    ],
    [
      "Drink Monday",
      "spirits",
      "Monday Mezcal",
      "zp",
      "750ml",
      "Smoky agave with earthy depth. Made for a mindful Paloma or mezcal sour.",
      "Agave ahumado con profundidad terrosa. Para una Paloma consciente o un mezcal sour.",
    ],
    [
      "Drink Monday",
      "spirits",
      "Monday Rum",
      "zp",
      "750ml",
      "Caramel, toasted spice and island warmth. The base for a daiquiri or spiced mule.",
      "Caramelo, especia tostada y calidez isleña. La base de un daiquiri o un mule especiado.",
    ],
    [
      "Ghia",
      "aperitif",
      "Aperitif Original",
      "ap",
      "500ml",
      "A Mediterranean apéritif with bitter orange, ginger and rosemary. Over ice with soda, nothing else needed.",
      "Un aperitivo mediterráneo con naranja amarga, jengibre y romero. Con hielo y soda, nada más.",
    ],
    [
      "Ghia",
      "aperitif",
      "Berry Ghia",
      "ap",
      "500ml",
      "The classic with a wild-berry twist. Darker, fruitier, just as complex.",
      "El clásico con un giro de frutos rojos. Más oscuro, más frutal, igual de complejo.",
    ],
    [
      "Ghia",
      "aperitif",
      "Le Fizz",
      "sap",
      "750ml",
      "Lightly sparkling, bittersweet and bright. A grab-and-go apéritif.",
      "Ligeramente espumoso, agridulce y brillante. Un aperitivo listo para llevar.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Bee’s Knees",
      "rtd",
      "250ml can",
      "Honeyed citrus and a whisper of herb. A gin-sour classic, zero proof.",
      "Cítricos con miel y un toque de hierba. El clásico gin sour, sin alcohol.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Grapefruit Fizz",
      "rtd",
      "250ml can",
      "Sharp pink grapefruit over soft bubbles. Crisp and refreshing.",
      "Toronja rosa intensa sobre burbujas suaves. Fresco y refrescante.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Lavender French 75",
      "rtd",
      "250ml can",
      "Floral lavender meets bright lemon and fine sparkle. Elegant and celebratory.",
      "Lavanda floral con limón brillante y burbuja fina. Elegante y festivo.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Mimosa",
      "rtd",
      "250ml can",
      "Bright orange and delicate bubbles. Brunch, any hour.",
      "Naranja brillante y burbujas delicadas. Brunch, a cualquier hora.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Mojito",
      "rtd",
      "250ml can",
      "Fresh mint and lime, cool and clean. Summer in a can.",
      "Menta fresca y limón, frío y limpio. Verano en lata.",
    ],
    [
      "Blind Tiger",
      "rtd",
      "Variety Pack",
      "vp",
      "250ml cans",
      "A taste of the whole lineup. The easiest way to find your favorite.",
      "Una probada de todo el portafolio. La forma más fácil de encontrar tu favorito.",
    ],
    [
      "DeSoi",
      "aperitif",
      "Spritz Italiano",
      "ap",
      "250ml can",
      "Bittersweet orange and herbal bite, lightly sparkling. The spritz, reimagined.",
      "Naranja agridulce con toque herbal, ligeramente espumoso. El spritz, reinventado.",
    ],
    [
      "DeSoi",
      "aperitif",
      "Très Rosé",
      "ap",
      "250ml can",
      "Delicate rose, berry and a soft floral finish. Pretty and poised.",
      "Rosa delicada, frutos rojos y un final floral suave. Bonito y elegante.",
    ],
    [
      "DeSoi",
      "aperitif",
      "Vino Violette",
      "ap",
      "250ml can",
      "Violet, plum and a touch of spice. Like a glass of red, reinvented.",
      "Violeta, ciruela y un toque de especia. Como una copa de tinto, reinventada.",
    ],
    [
      "DeSoi",
      "rtd",
      "Moscow Mule",
      "rtd",
      "250ml can",
      "Spicy ginger and fresh lime with a sharp kick. The mule, unplugged.",
      "Jengibre especiado y limón fresco con un golpe firme. El mule, sin alcohol.",
    ],
    [
      "DeSoi",
      "rtd",
      "Haute Margarita",
      "rtd",
      "250ml can",
      "Bright lime and agave with a salted edge. A margarita you can have another of.",
      "Limón brillante y agave con borde salado. Una margarita de la que puedes repetir.",
    ],
    [
      "Surely",
      "wine",
      "Red Blend",
      "aw",
      "750ml",
      "Bold and dry with dark fruit and soft tannin. A red that holds the table.",
      "Intenso y seco, con fruta oscura y tanino suave. Un tinto que sostiene la mesa.",
    ],
    [
      "Surely",
      "wine",
      "Sparkling Brut",
      "aw",
      "750ml",
      "Crisp, dry sparkling with fine bubbles and citrus lift. For the toast.",
      "Espumoso seco y crujiente, con burbuja fina y toque cítrico. Para el brindis.",
    ],
    [
      "Surely",
      "wine",
      "Sparkling Brut Can",
      "aw",
      "250ml can",
      "The Sparkling Brut, single-serve. Pop, pour, done.",
      "El Sparkling Brut, en porción individual. Abrir, servir, listo.",
    ],
    [
      "Surely",
      "wine",
      "Sparkling Rosé Can",
      "aw",
      "250ml can",
      "Dry sparkling rosé in a can. Strawberry, citrus, elegance to go.",
      "Rosado espumoso seco en lata. Fresa, cítrico y elegancia para llevar.",
    ],
    [
      "Surely",
      "wine",
      "Rosé",
      "aw",
      "750ml",
      "Pale, dry and delicate. Red berry and a clean, crisp finish.",
      "Pálido, seco y delicado. Frutos rojos y un final limpio y crujiente.",
    ],
    [
      "Surely",
      "wine",
      "Sauvignon Blanc",
      "aw",
      "750ml",
      "Bright, zesty and herbaceous. Citrus and green apple, beautifully dry.",
      "Brillante, cítrico y herbáceo. Cítricos y manzana verde, bellamente seco.",
    ],
  ];

  /* Product photos by product name. Products not listed show a placeholder. */
  var IMG = {
    "Monday Gin": "media/monday/monday-gin.jpg",
    "Monday Whiskey": "media/monday/monday-whiskey.jpg",
    "Monday Mezcal": "media/monday/monday-mezcal_.jpg",
    "Grapefruit Fizz": "media/tiger/tiger-grapefruit.jpg",
    "Lavender French 75": "media/tiger/tiger-french.jpg",
  };

  function bg() {
    var list =
        cat === "all"
          ? PR
          : PR.filter(function (p) {
              return p[1] === cat;
            }),
      nb = {};
    list.forEach(function (p) {
      nb[p[0]] = 1;
    });
    nb = Object.keys(nb).length;
    var chips = ["spirits", "aperitif", "rtd", "wine", "beer", "all"]
      .map(function (c) {
        return (
          '<button class="chip' +
          (c === cat ? " on" : "") +
          '" data-c="' +
          c +
          '">' +
          L(CAT[c]) +
          "</button>"
        );
      })
      .join("");
    var cnt =
      cat === "beer"
        ? L(["Coming soon", "Próximamente"])
        : list.length +
          L([" products · ", " productos · "]) +
          nb +
          L([nb === 1 ? " brand" : " brands", nb === 1 ? " marca" : " marcas"]);
    var cards = list
      .map(function (p) {
        var c = CAT[p[1]];
        return (
          '<div class="pc" tabindex="0" style="--c:' +
          c[2] +
          '"><div class="pi">' +
          (IMG[p[2]]
            ? '<img src="' + IMG[p[2]] + '" alt="' + p[2] + '" loading="lazy" decoding="async">'
            : PH("Photo")) +
          '</div><span class="ct">' +
          L(c) +
          '</span><div class="pt"><small>' +
          p[0] +
          "</small><b>" +
          p[2] +
          '</b></div><div class="pd"><small>' +
          p[0] +
          "</small><b>" +
          p[2] +
          "</b><p>" +
          L([p[5], p[6]]) +
          "</p><em>" +
          L(TY[p[3]]) +
          " · " +
          p[4] +
          "</em></div></div>"
        );
      })
      .join("");
    if (cat === "beer")
      cards =
        '<div class="pc dash" tabindex="0" style="--c:' +
        CAT.beer[2] +
        '"><div class="pi">' +
        PH(L(["Coming soon", "Próximamente"])) +
        '</div><span class="ct">' +
        L(CAT.beer) +
        '</span><div class="pd"><p>' +
        L([
          "Premium alcohol-free beer is joining the portfolio soon. Want first access? Reach out.",
          "La cerveza premium sin alcohol llegará pronto al portafolio. ¿Quieres acceso anticipado? Escríbenos.",
        ]) +
        "</p></div></div>";
    return (
      '<div class="chips">' +
      chips +
      '</div><p class="cnt">' +
      cnt +
      '</p><div class="pgrid">' +
      cards +
      "</div>"
    );
  }
  R.brands = function () {
    var sj = encodeURIComponent(
      L(["Product request for NULA", "Solicitud de producto para NULA"]),
    );
    return (
      '<section class="bd bd-hero"><div class="sec">' +
      EY(["The Portfolio", "El portafolio"]) +
      '<h1 class="big">' +
      L(["The Brands", "Las marcas"]) +
      "</h1><p>" +
      L([
        "A curated lineup of the world’s best alcohol-free spirits, aperitifs, cocktails and wine. Filter by category to find what fits.",
        "Una selección curada de los mejores destilados, aperitivos, cócteles y vinos libres de alcohol del mundo. Filtra por categoría para encontrar lo que buscas.",
      ]) +
      '</p><p class="strip">' +
      L([
        "Low in sugar · No artificial additives · Premium natural ingredients · Every brand hand-picked",
        "Bajas en azúcar · Sin aditivos artificiales · Ingredientes premium y naturales · Cada marca elegida a mano",
      ]) +
      "</p>" +
      BT("contact", ["Bring NULA", "Compra NULA"]) +
      "</div></section>" +
      '<section class="bd bd-red"><div class="sec"><div id="bg">' +
      bg() +
      "</div>" +
      "</div></section>" +
      '<section class="bd bd-dark"><div class="sec cen band"><h2 class="mid">' +
      L([
        "Don’t see what you’re looking for?",
        "¿No encuentras lo que buscas?",
      ]) +
      "</h2><p>" +
      L([
        "Tell us what your venue needs and we’ll source it. Our portfolio keeps growing, and a lot of it starts with a request like yours.",
        "Cuéntenos qué necesita tu espacio y lo conseguimos. Nuestro portafolio sigue creciendo, y mucho empieza con una solicitud como la tuya.",
      ]) +
      '</p><a class="btn solid" href="https://wa.me/525664733266" target="_blank" rel="noopener">' +
      icon("wa") +
      'WhatsApp</a><a class="btn" href="mailto:hola@nuladistribution.com?subject=' +
      sj +
      '">' +
      L(["Email us", "Escríbenos"]) +
      "</a></div></section>" +
      '<section class="bd bd-warm"><div class="sec cen"><h2 class="mid">' +
      L(["Ready to carry these?", "¿Listo para tenerlas?"]) +
      '</h2><a class="btn solid" href="#contact">' +
      L(["Bring NULA", "Compra NULA"]) +
      "</a></div></section>"
    );
  };
  AF.brands = function () {
    var b = document.getElementById("bg");
    b.onclick = function (e) {
      var c = e.target.closest(".chip");
      if (c) {
        cat = c.dataset.c;
        b.innerHTML = bg();
      }
    };
  };
  ["rtd", "wine", "spirits"].forEach(function (k) {
    R[k] = function () {
      cat = k;
      return R.brands();
    };
    AF[k] = AF.brands;
  });

  /* ===== PAGE: Hospitality hub + segment pages (Hotels, Restaurants, Bars, Events, Corporate) ===== */
  var HL = function (a) {
    var s = L(a).split("|");
    return s[0] + '<br><span class="g">' + s[1] + "</span>";
  };
  var AM = function (t) {
    return t.replace(/&/g, "&amp;");
  };
  var HUB = [
    [
      "hotels",
      "Hotels & Resorts",
      "Hoteles y Resorts",
      "Minibars, poolside, room service and events. A full alcohol-free program for every corner of the property.",
      "Minibar, alberca, room service y eventos. Un programa libre de alcohol para cada rincón de la propiedad.",
    ],
    [
      "restaurants",
      "Restaurants",
      "Restaurantes",
      "Pairings and apéritifs that hold their own next to the wine list. No guest left with just soda.",
      "Maridajes y aperitivos que se sostienen junto a la carta de vinos. Ningún comensal se queda con solo un refresco.",
    ],
    [
      "bars",
      "Bars",
      "Bares",
      "A real alcohol-free cocktail menu. Craft, not compromise, for the designated and the sober-curious.",
      "Una carta real de coctelería sin alcohol. Oficio, no concesión, para el conductor designado y el sobrio curioso.",
    ],
    [
      "events",
      "Events",
      "Eventos",
      "Weddings, galas and tastings where every guest has something worth raising.",
      "Bodas, galas y catas donde cada invitado tiene algo con qué brindar.",
    ],
    [
      "corporate",
      "Corporate",
      "Corporativo",
      "Inclusive, daytime-friendly gatherings. Great hospitality without the liability.",
      "Reuniones incluyentes y aptas para el día. Buena hospitalidad sin la responsabilidad.",
    ],
  ];

  R.hospitality = function () {
    var cols = [
      [
        "We deliver",
        "Entregamos",
        "A curated, ready-to-serve portfolio of the world’s best alcohol-free spirits, aperitifs, cocktails and wine, brought to your door.",
        "Un portafolio curado y listo para servir de los mejores destilados, aperitivos, cócteles y vinos sin alcohol del mundo, en tu puerta.",
      ],
      [
        "We train your team",
        "Capacitamos a tu equipo",
        "We sit down with your bartenders and servers so they know each product, how it’s built, and why it belongs on the menu.",
        "Nos sentamos con tus bartenders y meseros para que conozcan cada producto, cómo se prepara y por qué pertenece en la carta.",
      ],
      [
        "We help you sell it",
        "Te ayudamos a venderlo",
        "Menu guidance, serving suggestions and the talking points that turn a curious guest into a repeat order.",
        "Guía de carta, sugerencias de servicio y los argumentos que convierten a un comensal curioso en un pedido recurrente.",
      ],
    ];
    return (
      '<section class="bd bd-hero"><div class="sec">' +
      EY(["Hospitality", "Hospitalidad"]) +
      '<h1 class="big">' +
      X([
        "Alcohol-free belongs {{in every room you run.}}",
        "Lo libre de alcohol {{pertenece en cada espacio que manejas.}}",
      ]) +
      "</h1><p>" +
      L([
        "Every venue serves a different moment. NULA helps each one meet the growing number of guests who want something exceptional without the alcohol. Find your space below.",
        "Cada lugar vive un momento distinto. NULA ayuda a cada uno a responder a los cada vez más huéspedes que quieren algo excepcional sin alcohol. Encuentra tu espacio abajo.",
      ]) +
      "</p></div></section>" +
      '<section class="bd bd-red"><div class="sec">' +
      EY(["More than a distributor", "Más que un distribuidor"]) +
      '<h2 class="mid">' +
      X([
        "We don’t just drop off cases. {{We help you serve them.}}",
        "No solo dejamos las cajas. {{Te ayudamos a servirlas.}}",
      ]) +
      "</h2><p>" +
      L([
        "NULA is a partner, not a pallet. We deliver the products, then we train your team to understand them and sell them, so the alcohol-free order is handled with the same confidence as everything else behind the bar.",
        "NULA es un socio, no una tarima. Entregamos los productos y después capacitamos a tu equipo para que los entiendan y los vendan, para que el pedido sin alcohol se maneje con la misma confianza que todo lo demás detrás de la barra.",
      ]) +
      '</p><div class="cols3">' +
      cols
        .map(function (c) {
          return (
            '<div class="col"><b>' +
            L(c) +
            "</b><p>" +
            L([c[2], c[3]]) +
            "</p></div>"
          );
        })
        .join("") +
      "</div></div></section>" +
      '<section class="bd bd-deep"><div class="sec">' +
      EY(["Where you serve", "Donde sirves"]) +
      '<h2 class="mid">' +
      L([
        "Built for every side of hospitality.",
        "Hecho para cada lado de la hospitalidad.",
      ]) +
      '</h2><div class="hcs">' +
      HUB.map(function (h, i) {
        return (
          '<a class="hc" href="#' +
          h[0] +
          '"><span class="nm">0' +
          (i + 1) +
          "</span><h3>" +
          AM(L([h[1], h[2]])) +
          "</h3><p>" +
          L([h[3], h[4]]) +
          "</p></a>"
        );
      }).join("") +
      '<a class="hc cta" href="#contact"><span class="nm">06</span><h3>' +
      L([
        "Not sure where to start? Tell us about your space and we’ll build the right fit.",
        "¿No sabes por dónde empezar? Cuéntanos de tu espacio y armamos lo ideal.",
      ]) +
      "</h3><p><b>" +
      L(["Bring NULA →", "Compra NULA →"]) +
      "</b></p></a></div></div></section>"
    );
  };

  var HS = {
    hotels: [
      "From check-in to last call,|something for everyone.",
      "Del check-in al último trago,|algo para todos.",
      "A resort runs a dozen bars a day without calling them that. The minibar at midnight, the welcome drink at the pool, the toast at the wedding. NULA makes sure the guest who isn’t drinking still feels taken care of at every one.",
      "Un resort maneja una docena de bares al día sin llamarlos así. El minibar a medianoche, el coctel de bienvenida en la alberca, el brindis en la boda. NULA se asegura de que el huésped que no toma también se sienta atendido en cada uno.",
      "Every corner of the property.",
      "Cada rincón de la propiedad.",
      [
        [
          "Minibars & in-room",
          "Minibar y en habitación",
          "Premium cans and splits in the minibar and on the room-service menu. The quiet amenity guests notice and remember.",
          "Latas y botellas premium en el minibar y en el menú de room service. La amenidad discreta que el huésped nota y recuerda.",
        ],
        [
          "Pool & beach bars",
          "Bares de alberca y playa",
          "Refreshing, low-sugar spritzes and cocktails that hold up in the sun, so no one’s stuck with a soda by the water.",
          "Spritzes y cocteles refrescantes y bajos en azúcar que aguantan el sol, para que nadie se quede con un refresco junto al agua.",
        ],
        [
          "Restaurants & lounges",
          "Restaurantes y lounges",
          "Apéritifs and pairings on the menu, giving the table a real choice next to the wine list.",
          "Aperitivos y maridajes en el menú, dando a la mesa una opción real junto a la carta de vinos.",
        ],
        [
          "A trained team",
          "Un equipo capacitado",
          "We sit down with your bar and F&B staff so they know every product and how to recommend it, from the pool bar to room service.",
          "Nos sentamos con tu personal de bar y A&B para que conozcan cada producto y cómo recomendarlo, del bar de alberca al room service.",
        ],
      ],
      "Guests are already asking. {{Now you have the answer.}}",
      "Los huéspedes ya lo están pidiendo. {{Ahora tienes la respuesta.}}",
      "Mindful drinking is one of the fastest-growing guest expectations in luxury hospitality. Offering it well sets your property apart.",
      "El consumo consciente es una de las expectativas de huésped que más rápido crece en la hospitalidad de lujo. Ofrecerlo bien distingue a tu propiedad.",
      "Build your property’s alcohol-free program.",
      "Arma el programa libre de alcohol de tu propiedad.",
    ],
    restaurants: [
      "A menu where|no one settles for a soda.",
      "Una carta donde|nadie se conforma con un refresco.",
      "The guest who isn’t drinking tonight still wants to be part of the meal. An apéritif to start, something considered with each course, a real end to the evening. NULA gives your menu an answer worthy of the rest of it.",
      "El comensal que hoy no toma igual quiere ser parte de la comida. Un aperitivo para empezar, algo pensado en cada tiempo, un buen final de la noche. NULA le da a tu carta una respuesta a la altura del resto.",
      "Across the whole meal.",
      "En toda la comida.",
      [
        [
          "The apéritif",
          "El aperitivo",
          "Start the table off right. A bittersweet, grown-up pour that opens the appetite, drinking or not.",
          "Arranca bien la mesa. Un trago agridulce y adulto que abre el apetito, tome o no tome.",
        ],
        [
          "Pairings by the course",
          "Maridaje por tiempo",
          "Alcohol-free wines and apéritifs matched to the menu, so the non-drinker gets a pairing, not an afterthought.",
          "Vinos y aperitivos sin alcohol combinados con el menú, para que el que no toma reciba un maridaje, no una ocurrencia.",
        ],
        [
          "The zero-proof cocktail",
          "El coctel sin alcohol",
          "A short, well-built list of alcohol-free cocktails that feel designed, not improvised.",
          "Una carta corta y bien construida de cocteles sin alcohol que se sienten diseñados, no improvisados.",
        ],
        [
          "A trained floor",
          "Un piso capacitado",
          "We train your servers on the pairings and pours so they recommend with confidence, turning the no-alcohol order into an upsell, not an apology.",
          "Capacitamos a tus meseros en los maridajes y servicios para que recomienden con seguridad, convirtiendo el pedido sin alcohol en una venta, no en una disculpa.",
        ],
      ],
      "A better no-alcohol option {{lifts the whole check.}}",
      "Una mejor opción sin alcohol {{levanta toda la cuenta.}}",
      "Guests who don’t drink still want to spend on the experience. Give them something worth ordering and the table’s average rises with it.",
      "Los comensales que no toman igual quieren gastar en la experiencia. Dales algo que valga la pena pedir y el promedio de la mesa sube con ello.",
      "Put NULA on your menu.",
      "Pon NULA en tu carta.",
    ],
    bars: [
      "A zero-proof list|with nothing to apologize for.",
      "Una carta sin alcohol|de la que no hay que disculparse.",
      "A good bar already knows how to make someone feel welcome. The alcohol-free order shouldn’t break that. With real spirits and craft cocktails behind the bar, “I’m not drinking tonight” gets the same answer as everyone else: what would you like?",
      "Un buen bar ya sabe hacer sentir bienvenido a alguien. El pedido sin alcohol no debería romper eso. Con destilados reales y coctelería de autor detrás de la barra, “hoy no tomo” recibe la misma respuesta que todos: ¿qué te preparo?",
      "Behind every pour.",
      "Detrás de cada trago.",
      [
        [
          "A real cocktail menu",
          "Una carta real de cocteles",
          "Zero-proof builds that stand on their own, listed with pride next to the rest, not buried under “mocktails.”",
          "Tragos sin alcohol que se sostienen solos, en la carta con orgullo junto al resto, no escondidos como “mocktails”.",
        ],
        [
          "Spirits that mix",
          "Destilados que mezclan",
          "Gin, whiskey, mezcal and rum with no alcohol, so your bartenders build the classics without a workaround.",
          "Gin, whiskey, mezcal y ron sin alcohol, para que tus bartenders armen los clásicos sin inventar un atajo.",
        ],
        [
          "The grab-and-go can",
          "La lata lista para servir",
          "Ready-to-drink cocktails for volume nights and service speed, with no drop in quality.",
          "Cocteles listos para noches de volumen y velocidad de servicio, sin bajar la calidad.",
        ],
        [
          "Bartender training",
          "Capacitación de bartenders",
          "We train your bartenders on every product, how to build with it, and how to sell it, so the zero-proof order gets real craft, not a shrug.",
          "Capacitamos a tus bartenders en cada producto, cómo prepararlo y cómo venderlo, para que el pedido sin alcohol reciba oficio de verdad, no un gesto de desgano.",
        ],
      ],
      "The sober guest is {{still a paying guest.}}",
      "El cliente sobrio {{igual es un cliente que paga.}}",
      "The fastest-growing bar tabs include an alcohol-free order. A craft zero-proof menu keeps the table together and the register moving.",
      "Las cuentas de bar que más crecen incluyen un pedido sin alcohol. Una carta de autor sin alcohol mantiene la mesa junta y la caja en movimiento.",
      "Stock your bar with NULA.",
      "Surte tu barra con NULA.",
    ],
    events: [
      "Every guest raises a glass,|no exceptions.",
      "Cada invitado brinda,|sin excepciones.",
      "A wedding, a gala, a product launch. There’s always someone who isn’t drinking, and they feel it most when the toast goes up. NULA makes the alcohol-free option as considered as the open bar, so the whole room is included in the moment.",
      "Una boda, una gala, un lanzamiento. Siempre hay alguien que no toma, y lo siente más cuando llega el brindis. NULA hace que la opción sin alcohol sea tan pensada como la barra libre, para que todo el salón sea parte del momento.",
      "From welcome to last toast.",
      "De la bienvenida al último brindis.",
      [
        [
          "Weddings",
          "Bodas",
          "A signature alcohol-free cocktail and a real toast pour, so the pregnant bridesmaid and the sober uncle are in the photo too.",
          "Un coctel sin alcohol de autor y un buen trago para el brindis, para que la dama embarazada y el tío sobrio también salgan en la foto.",
        ],
        [
          "Galas & fundraisers",
          "Galas y recaudaciones",
          "An elegant zero-proof option that matches the room, keeping every guest comfortable and spending.",
          "Una opción sin alcohol elegante a la altura del salón, que mantiene a cada invitado cómodo y consumiendo.",
        ],
        [
          "Tastings & launches",
          "Catas y lanzamientos",
          "Curated flights and pairings for brand events, where the product, not the buzz, is the point.",
          "Flights y maridajes curados para eventos de marca, donde el producto, no la borrachera, es el punto.",
        ],
        [
          "Staff & service support",
          "Apoyo de servicio y staff",
          "We brief your catering and event staff on what to pour, when and how, so the alcohol-free service runs as smoothly as the bar.",
          "Orientamos a tu personal de banquetes y eventos sobre qué servir, cuándo y cómo, para que el servicio sin alcohol fluya tan bien como la barra.",
        ],
      ],
      "Inclusion is {{the detail they remember.}}",
      "La inclusión {{es el detalle que recuerdan.}}",
      "The guest who was thought of tells the story afterward. A considered alcohol-free offering turns a logistics line-item into a moment of care.",
      "El invitado en quien se pensó lo cuenta después. Una oferta sin alcohol bien pensada convierte un renglón de logística en un gesto de cuidado.",
      "Plan your event with NULA.",
      "Planea tu evento con NULA.",
    ],
    corporate: [
      "Hospitality at work,|without the liability.",
      "Hospitalidad en el trabajo,|sin la responsabilidad.",
      "Office happy hours, client dinners, team offsites. The expectation to drink at work is fading fast, and nobody wants to be the one nursing a water. NULA lets you host well, keep it inclusive and professional, and skip the risk that comes with an open bar on the company’s name.",
      "Happy hours de oficina, cenas con clientes, offsites de equipo. La expectativa de tomar en el trabajo se desvanece rápido, y nadie quiere ser el que carga un vaso de agua. NULA te deja recibir bien, mantenerlo incluyente y profesional, y evitar el riesgo de una barra libre a nombre de la empresa.",
      "Every gathering on the clock.",
      "Cada reunión en horario laboral.",
      [
        [
          "Office & team events",
          "Eventos de oficina y equipo",
          "A premium alcohol-free option for happy hours and celebrations, so no one feels pressure either way.",
          "Una opción premium sin alcohol para happy hours y celebraciones, para que nadie sienta presión en ningún sentido.",
        ],
        [
          "Client entertaining",
          "Atención a clientes",
          "Host a dinner or close a deal over something that still feels like an occasion, with a clear head on both sides.",
          "Ofrece una cena o cierra un trato con algo que sigue siendo una ocasión, con la cabeza clara de ambos lados.",
        ],
        [
          "Offsites & retreats",
          "Offsites y retiros",
          "Stock the fridge with something better than seltzer, keeping the team sharp through long working days.",
          "Surte el refri con algo mejor que agua mineral, manteniendo al equipo despierto en jornadas largas.",
        ],
        [
          "Gifting & amenities",
          "Regalos y amenidades",
          "Curated alcohol-free gift sets and in-office amenities that read as thoughtful, not obligatory.",
          "Sets de regalo sin alcohol curados y amenidades de oficina que se leen como un detalle, no una obligación.",
        ],
      ],
      "Inclusive by default {{is the modern standard.}}",
      "Incluyente por defecto {{es el estándar moderno.}}",
      "A workplace that offers a real alcohol-free choice signals care for every employee, and sidesteps the liability of pushing drinks on the clock.",
      "Un lugar de trabajo que ofrece una opción real sin alcohol demuestra cuidado por cada empleado, y evita la responsabilidad de empujar tragos en horario laboral.",
      "Bring NULA to your workplace.",
      "Lleva NULA a tu empresa.",
    ],
  };

  HUB.forEach(function (h, idx) {
    R[h[0]] = function () {
      var d = HS[h[0]],
        bk =
          '<a class="back" href="#hospitality">← ' +
          L(["Back to Hospitality", "Volver a Hospitalidad"]) +
          "</a>";
      return (
        '<section class="bd bd-hero"><div class="sec">' +
        bk +
        '<div class="eyebrow">' +
        AM(L([h[1], h[2]])) +
        " · 0" +
        (idx + 1) +
        '</div><h1 class="big">' +
        HL([d[0], d[1]]) +
        "</h1><p>" +
        L([d[2], d[3]]) +
        "</p></div></section>" +
        '<section class="bd bd-red"><div class="sec">' +
        EY(["Where NULA fits", "Dónde encaja NULA"]) +
        '<h2 class="mid">' +
        L([d[4], d[5]]) +
        '</h2><div class="ucs">' +
        d[6]
          .map(function (c, n) {
            return (
              '<div class="uc"><span class="nm">0' +
              (n + 1) +
              "</span><b>" +
              AM(L([c[0], c[1]])) +
              "</b><p>" +
              AM(L([c[2], c[3]])) +
              "</p></div>"
            );
          })
          .join("") +
        "</div></div></section>" +
        '<section class="bd bd-dark"><div class="sec cen"><h2 class="quote">' +
        X([d[7], d[8]]) +
        "</h2><p>" +
        L([d[9], d[10]]) +
        "</p></div></section>" +
        '<section class="bd bd-warm"><div class="sec"><h2 class="mid">' +
        L([d[11], d[12]]) +
        '</h2><a class="btn solid" href="#contact">' +
        L(["Bring NULA", "Compra NULA"]) +
        '</a><a class="btn" href="#brands">' +
        L(["See the Portfolio", "Ver el portafolio"]) +
        "</a>" +
        '<p class="bk2">' +
        bk +
        "</p></div></section>"
      );
    };
  });

  /* ===== PAGE: Bring NULA (contact + form) ===== */
  R.contact = function () {
    var au = [
        ["Hotels", "Hoteles"],
        ["Restaurants", "Restaurantes"],
        ["Bars", "Bares"],
        ["Event Planners", "Organizadores"],
        ["Corporate", "Corporativo"],
      ],
      wa = icon("wa"),
      em = icon("mail");
    var f = function (id, lab, inner) {
      return (
        '<div><label for="' + id + '">' + L(lab) + "</label>" + inner + "</div>"
      );
    };
    return (
      '<section class="bd bd-hero"><div class="sec">' +
      EY(["Carry NULA", "Lleva NULA"]) +
      '<h1 class="big">' +
      X([
        "Bring the new way to drink {{to your guests.}}",
        "Lleva la nueva forma de beber {{a tus invitados.}}",
      ]) +
      "</h1><p>" +
      L([
        "NULA brings premium alcohol-free spirits, wine and RTDs to every table, room and moment you serve. Delivered and supported across Mexico and the USA.",
        "NULA lleva destilados, vinos y coctelería premium libres de alcohol a cada mesa, habitación y momento que ofreces. Con entrega y acompañamiento en México y Estados Unidos.",
      ]) +
      '</p><div class="pills">' +
      au
        .map(function (a) {
          return "<span>" + L(a) + "</span>";
        })
        .join("") +
      "</div></div></section>" +
      '<section class="bd bd-red"><div class="sec cgrid"><form id="cf">' +
      EY(["Tell us about your venue", "Cuéntanos sobre tu espacio"]) +
      '<div class="fg">' +
      f(
        "cn",
        ["Name", "Nombre"],
        '<input id="cn" required placeholder="' +
          L(["Your name", "Tu nombre"]) +
          '">',
      ) +
      f(
        "cb",
        ["Business", "Negocio"],
        '<input id="cb" required placeholder="' +
          L(["Venue or company", "Espacio o empresa"]) +
          '">',
      ) +
      f(
        "ct",
        ["Type of venue", "Tipo de espacio"],
        '<select id="ct">' +
          au
            .concat([["Other", "Otro"]])
            .map(function (a) {
              return "<option>" + L(a) + "</option>";
            })
            .join("") +
          "</select>",
      ) +
      f(
        "ce",
        ["Email", "Correo"],
        '<input id="ce" type="email" required placeholder="' +
          L(["you@business.com", "tu@negocio.com"]) +
          '">',
      ) +
      '<div class="full"><label for="cm">' +
      L(["What are you looking for?", "¿Qué estás buscando?"]) +
      '</label><textarea id="cm" placeholder="' +
      L([
        "Menu additions, an event, a full program…",
        "Opciones de menú, un evento, un programa completo…",
      ]) +
      '"></textarea></div></div>' +
      '<p style="margin:1.4rem 0 0"><button class="btn solid" type="submit">' +
      L(["Start the conversation", "Inicia la conversación"]) +
      '</button></p><p class="fnote" id="fs">' +
      L(["We reply in under 24 hours.", "Respondemos en menos de 24 hrs."]) +
      "</p></form>" +
      "<aside>" +
      EY(["Or reach us directly", "O contáctanos directo"]) +
      '<a class="dc" href="https://wa.me/525664733266" target="_blank" rel="noopener"><i style="background:#25D366;color:#073b1a">' +
      wa +
      "</i><span><small>WhatsApp</small><b>+52 56 6473 3266</b></span></a>" +
      '<a class="dc" href="mailto:hola@nuladistribution.com"><i style="background:var(--gold);color:#2a0a0a">' +
      em +
      "</i><span><small>" +
      L(["Email", "Correo"]) +
      "</small><b>hola@nuladistribution.com</b></span></a>" +
      '<p style="margin-top:1.4rem">' +
      L([
        "Prefer to talk it through? Message us on WhatsApp and we’ll help you identify the right drinks for your business. You won’t want to miss this — be one of the first.",
        "¿Prefieres platicarlo? Escríbenos por WhatsApp y te ayudamos a identificar cuáles son las bebidas ideales para tu negocio. No te querrás quedar fuera de esto: sé de los primeros.",
      ]) +
      "</p></aside></div></section>" +
      '<section class="bd bd-dark"><div class="sec cen"><h2 class="big">' +
      X([
        "Nothing missing. {{Everything to experience.}}",
        "La experiencia completa, {{libre de alcohol.}}",
      ]) +
      "</h2></div></section>"
    );
  };
  AF.contact = function () {
    document.getElementById("cf").onsubmit = function (e) {
      e.preventDefault();
      var v = function (i) {
        return document.getElementById(i).value;
      };
      var body = [
        "Name: " + v("cn"),
        "Business: " + v("cb"),
        "Type of venue: " + v("ct"),
        "Email: " + v("ce"),
        "",
        "Message:",
        v("cm"),
      ].join("\n");
      location.href =
        "mailto:hola@nuladistribution.com?subject=" +
        encodeURIComponent("NULA inquiry — " + v("cb")) +
        "&body=" +
        encodeURIComponent(body);
      document.getElementById("fs").textContent = L([
        "Opening your email app to send this. If nothing opens, write to hola@nuladistribution.com.",
        "Abriendo tu app de correo para enviarlo. Si no se abre, escribe a hola@nuladistribution.com.",
      ]);
    };
  };

  /* ===== Language, navigation and router ===== */
  var lang = "en";
  try {
    var s = localStorage.getItem("nula-lang");
    if (s === "es" || s === "en") lang = s;
  } catch (e) {}
  var L = function (a) {
    return a[lang === "es" ? 1 : 0];
  };

  function slug() {
    return (location.hash || "").slice(1);
  }

  function buildNav() {
    var cur = slug(),
      h = "";
    MENU.forEach(function (m) {
      var on =
        m[1].some(function (c) {
          return c[2] === cur;
        }) || m[2] === cur;
      var single = m[1].length === 1;
      if (single) {
        h +=
          '<div class="item"><a class="t' +
          (on ? " on" : "") +
          '" href="#' +
          m[1][0][2] +
          '">' +
          L(m[0]) +
          "</a></div>";
      } else {
        h +=
          '<div class="item">' +
          (m[2]
            ? '<a class="t' +
              (on ? " on" : "") +
              '" href="#' +
              m[2] +
              '">' +
              L(m[0]) +
              "</a>"
            : '<button type="button" class="t' +
              (on ? " on" : "") +
              '">' +
              L(m[0]) +
              "</button>") +
          '<div class="sub">' +
          m[1]
            .map(function (c) {
              return (
                '<a class="' +
                (c[2] === cur ? "on" : "") +
                '" href="#' +
                c[2] +
                '">' +
                L([c[0], c[1]]) +
                "</a>"
              );
            })
            .join("") +
          "</div></div>";
      }
    });
    document.getElementById("nav").innerHTML = h;
    document.getElementById("fn").innerHTML = FN.map(function (f) {
      return '<a href="#' + f[2] + '">' + L([f[0], f[1]]) + "</a>";
    }).join("");
  }

  /* ===== Home page and generic page ===== */
  function home() {
    return (
      '<section class="hero">' +
      (VIDEO
        ? '<video src="' + VIDEO + '" autoplay muted loop playsinline></video>'
        : "") +
      '<div class="in"><h1 class="word">NULA</h1><p class="tag">' +
      L(T.tag) +
      '</p><p class="desc">' +
      L(T.desc) +
      "</p>" +
      '<a class="btn" href="#why-nula">' +
      L(T.cta) +
      '</a><p class="note">' +
      L(T.note) +
      "</p></div></section>"
    );
  }

  function page(s) {
    if (R[s]) return R[s]();
    var p = P[s];
    var h =
      '<section class="bd bd-hero"><div class="pg"><div class="eyebrow">NULA</div><h1>' +
      L([p[0], p[1]]) +
      "</h1>" +
      "<p>" +
      L([p[2], p[3]]) +
      '</p><a class="btn" href="#contact">' +
      L(T.contactUs) +
      "</a>";
    return h + "</div></section>";
  }

  /* ===== Render + event wiring ===== */
  function render() {
    var s = slug(),
      p = P[s];
    document.body.classList.toggle("home", !p);
    document.getElementById("main").innerHTML = p ? page(s) : home();
    document.title =
      (p ? L([p[0], p[1]]) + " — " : "") +
      "NULA — " +
      L(T.tag).replace(/\.$/, "");
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.getElementById("en").classList.toggle("on", lang === "en");
    document.getElementById("es").classList.toggle("on", lang === "es");
    document.querySelectorAll("[data-k]").forEach(function (e) {
      e.textContent = L(UI[e.dataset.k]);
    });
    buildNav();
    document.getElementById("nav").classList.remove("open");
    window.scrollTo(0, 0);
    if (p && AF[s]) AF[s]();
  }
  function setLang(l) {
    lang = l;
    try {
      localStorage.setItem("nula-lang", l);
    } catch (e) {}
    render();
  }
  document.getElementById("en").onclick = function () {
    setLang("en");
  };
  document.getElementById("es").onclick = function () {
    setLang("es");
  };
  document.getElementById("burger").onclick = function () {
    document.getElementById("nav").classList.toggle("open");
  };
  document.getElementById("hide").onclick = function () {
    document.getElementById("float").classList.add("min");
  };
  document.getElementById("show").onclick = function () {
    document.getElementById("float").classList.remove("min");
  };
  window.addEventListener("hashchange", render);
  render();
})();
