<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>Отель Seneshal — Mini App</title>
    <meta name="color-scheme" content="light dark">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
  </head>
  <body>
    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img src="logo.svg" class="logo" alt="Seneshal">
        <h1 class="title">Бутик‑отель Seneshal</h1>
        <p class="subtitle">Атмосфера европейского шале на берегу озера Сенеж</p>
      </div>
    </header>

    <main class="container">
      <section class="card card-info">
        <h2>О нас</h2>
        <p>
          На территории — два ресторана Chalet и Grill, VILLA SPA, два жилых комплекса в стиле французских шале,
          винотека и виды на самое большое озеро Подмосковья. Завтрак включён, Wi‑Fi и парковка — бесплатно.
        </p>
        <ul class="bullets">
          <li>Адрес: Московская область, г. Солнечногорск, Тимоновское шоссе, с3</li>
          <li><a class="link" data-link="maps" href="https://yandex.ru/maps/-/CHD1RX4S" target="_blank" rel="noopener">Открыть на карте</a></li>
          <li>Завтрак: 8:30–11:30 · Рестораны: Chalet 12:00–23:00, Grill 14:00–23:00</li>
        </ul>
      </section>

      <section class="grid">
        <a id="btn-site" class="action action-primary" href="#" target="_blank" rel="noopener">
          <div class="action-icon">🏨</div>
          <div class="action-text">
            <strong>Официальный сайт</strong>
            <span>seneshal.com</span>
          </div>
        </a>

        <a id="btn-book" class="action action-accent" href="#" target="_blank" rel="noopener">
          <div class="action-icon">💬</div>
          <div class="action-text">
            <strong>Забронировать в чате</strong>
            <span>Открыть диалог с ботом</span>
          </div>
        </a>

        <a id="btn-support" class="action action-quiet" href="#" target="_blank" rel="noopener">
          <div class="action-icon">🛟</div>
          <div class="action-text">
            <strong>Поддержка</strong>
            <span>Написать менеджеру</span>
          </div>
        </a>
      </section>

      <section class="card card-rooms">
        <h2>Категории номеров</h2>
        <div class="rooms">
          <div class="room">
            <div class="room-title">Deluxe</div>
            <div class="room-desc">Уютные номера 15 м² · King Size · Wi‑Fi · Мини‑бар</div>
          </div>
          <div class="room">
            <div class="room-title">Lux</div>
            <div class="room-desc">Просторные 20–22 м² · Некоторые с балконом и камином</div>
          </div>
          <div class="room">
            <div class="room-title">Premium Lux</div>
            <div class="room-desc">До 45 м² · Разделённые зоны · До 5 гостей</div>
          </div>
          <div class="room">
            <div class="room-title">Королевский/Президентский</div>
            <div class="room-desc">82–85 м² · Веранда на озеро · 2 комнаты</div>
          </div>
        </div>
        <button id="btn-catalog" class="button">Открыть каталог номеров</button>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-row">
        <a class="link" href="tel:+79031147676">+7 903 114‑76‑76</a>
        <span class="dot">·</span>
        <a class="link" href="https://seneshal.com" target="_blank" rel="noopener">seneshal.com</a>
      </div>
      <div class="footer-row small">© Seneshal, все права защищены</div>
    </footer>

    <script src="script.js"></script>
  </body>
  </html>
