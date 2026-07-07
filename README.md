<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hampton Connect | Alexandria / Pentagon South</title>
  <link rel="stylesheet" href="styles.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <header class="hero" id="home">
    <nav class="topbar">
      <div class="brand">
        <div class="brand-badge">Hampton<br><span>by Hilton</span></div>
        <div><strong>Hampton Connect</strong><small>Alexandria / Pentagon South</small></div>
      </div>
      <a class="phone-pill" href="tel:17036714800">☎ 703-671-4800</a>
    </nav>
    <div class="hero-content">
      <p class="eyebrow">Digital Guest Concierge</p>
      <h1>Welcome to Hampton Inn</h1>
      <h2>Alexandria / Pentagon South</h2>
      <p>Your mobile guide for hotel info, breakfast, Wi‑Fi, dining, transportation, attractions, and guest help.</p>
      <div class="hero-actions">
        <a href="#quick" class="btn primary">Explore the Guide</a>
        <a href="#contact" class="btn ghost">Contact Front Desk</a>
      </div>
    </div>
    <aside class="weather-card"><span>☀️</span><b>84°F</b><p>Alexandria, VA</p><small>Perfect day to explore Old Town.</small></aside>
  </header>

  <main>
    <section class="section" id="quick">
      <div class="section-title"><h2>Quick Access</h2><p>Everything guests need, just a tap away.</p></div>
      <div class="quick-grid">
        <a class="quick-card" href="#hotel"><span>🏨</span><b>Hotel Information</b></a>
        <a class="quick-card" href="#dining"><span>🍳</span><b>Breakfast & Dining</b></a>
        <a class="quick-card" href="#wifi"><span>📶</span><b>Wi‑Fi Access</b></a>
        <a class="quick-card" href="#map"><span>🗺️</span><b>Maps & Directions</b></a>
        <a class="quick-card" href="#restaurants"><span>🍽️</span><b>Restaurants Nearby</b></a>
        <a class="quick-card" href="#shopping"><span>🛍️</span><b>Shopping & Essentials</b></a>
        <a class="quick-card" href="#transport"><span>🚇</span><b>Metro & Transportation</b></a>
        <a class="quick-card" href="#airport"><span>✈️</span><b>Airport Information</b></a>
        <a class="quick-card" href="#attractions"><span>📸</span><b>Local Attractions</b></a>
        <a class="quick-card" href="#contact"><span>🎧</span><b>Contact & Help</b></a>
      </div>
    </section>

    <section class="two-col section">
      <div class="panel concierge" id="services">
        <h2>Digital Concierge</h2><p>Need something? We’re here to help.</p>
        <a href="tel:17036714800">🧺 Request Extra Towels <span>›</span></a>
        <a href="tel:17036714800">🧹 Request Housekeeping <span>›</span></a>
        <a href="tel:17036714800">🛏️ Request Extra Pillows <span>›</span></a>
        <a href="tel:17036714800">🔧 Maintenance Request <span>›</span></a>
        <a href="tel:17036714800" class="call">☎ Call Front Desk <b>703-671-4800</b></a>
      </div>
      <div class="panel" id="attractions">
        <div class="section-title compact"><h2>Explore Alexandria</h2><a href="#map">View Map ›</a></div>
        <div class="cards">
          <article><img src="images/old-town.svg" alt="Old Town Alexandria"><h3>Old Town Alexandria</h3><p>Historic charm, waterfront views, shops, and dining.</p><a href="https://www.google.com/maps/search/Old+Town+Alexandria" target="_blank">Directions</a></article>
          <article><img src="images/pentagon-city.svg" alt="Pentagon City"><h3>Pentagon City</h3><p>Shopping, dining, and entertainment near the hotel.</p><a href="https://www.google.com/maps/search/Pentagon+City" target="_blank">Directions</a></article>
          <article><img src="images/dc.svg" alt="Washington DC"><h3>Washington, D.C.</h3><p>Iconic landmarks, museums, monuments, and history.</p><a href="https://www.google.com/maps/search/Washington+DC+National+Mall" target="_blank">Directions</a></article>
        </div>
      </div>
    </section>

    <section class="two-col section">
      <div class="map panel" id="map">
        <h2>Area Map</h2>
        <div class="fake-map">
          <span class="pin hotel">Hampton Inn</span><span class="pin metro">Pentagon City Metro</span><span class="pin airport">DCA Airport</span><span class="pin oldtown">Old Town</span><span class="road"></span>
        </div>
      </div>
      <div class="panel info" id="hotel">
        <h2>Need to Know</h2>
        <dl><dt>Check‑in</dt><dd>3:00 PM</dd><dt>Check‑out</dt><dd>11:00 AM</dd><dt>Breakfast</dt><dd>Ask front desk for current hours</dd><dt>Wi‑Fi</dt><dd>Free high-speed internet</dd><dt>Parking</dt><dd>Confirm with front desk</dd><dt>Front Desk</dt><dd>24/7 Assistance</dd></dl>
      </div>
    </section>

    <section class="section grid-sections">
      <div class="panel" id="wifi"><h2>Wi‑Fi</h2><p>Free Wi‑Fi is available for guests. Ask the front desk for the current network name and password.</p></div>
      <div class="panel" id="dining"><h2>Breakfast</h2><p>Enjoy Hampton’s hot breakfast. Please confirm current breakfast hours at the front desk.</p></div>
      <div class="panel" id="restaurants"><h2>Restaurants Nearby</h2><p>Tap directions for nearby dining options including Old Town Alexandria, Pentagon City, and local restaurants.</p></div>
      <div class="panel" id="shopping"><h2>Shopping & Essentials</h2><p>Nearby essentials include Target, grocery stores, pharmacies, and shopping centers.</p></div>
      <div class="panel" id="transport"><h2>Metro & Transportation</h2><p>Use Metro, rideshare, taxi, or local transit for easy access to Washington, D.C. and Alexandria.</p></div>
      <div class="panel" id="airport"><h2>Airport Information</h2><p>Ronald Reagan Washington National Airport is the closest major airport. Tap the map for directions.</p></div>
    </section>

    <section class="section panel faq">
      <h2>FAQ</h2>
      <button>What time is check‑out?<span>11:00 AM</span></button>
      <button>Is Wi‑Fi free?<span>Yes, free Wi‑Fi is available for guests.</span></button>
      <button>How do I contact the front desk?<span>Call 703‑671‑4800 or visit the front desk.</span></button>
    </section>
  </main>

  <footer id="contact">
    <h2>Questions?</h2><p>Call the front desk anytime for assistance.</p><a href="tel:17036714800">☎ 703-671-4800</a>
  </footer>
  <nav class="bottom-nav"><a href="#home">🏠<span>Home</span></a><a href="#hotel">🏨<span>Hotel</span></a><a href="#dining">🍽️<span>Dining</span></a><a href="#services">🧳<span>Services</span></a><a href="#contact">☎<span>Call</span></a></nav>
</body>
</html>
