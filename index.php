<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="robots" content="noindex, nofollow" />
        <title>Générateur de signature mail - Laroche & Associés</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
        <section class="section-form">
            <h1 class="section-title">Générateur de signature mail</h1>
            <form class="form" id="form">
                <div class="form-group">
                    <label for="firstname" class="label">Prénom*</label>
                    <input type="text" name="firstname" id="firstname" class="input" required />
                </div>
                <div class="form-group">
                    <label for="lastname" class="label">Nom*</label>
                    <input type="text" name="lastname" id="lastname" class="input" required />
                </div>
                <div class="form-group">
                    <label for="linkedin_url" class="label">URL Profil Linkedin</label>
                    <input type="text" name="linkedin_url" id="linkedin_url" class="input" />
                </div>
                <div class="form-group">
                    <label for="position_in_company" class="label">Fonction*</label>
                    <input type="text" name="position_in_company" id="position_in_company" class="input" required />
                </div>
                <div class="form-group">
                    <label for="phone_1" class="label">Téléphone n°1*</label>
                    <input type="text" name="phone_1" id="phone_1" class="input" required />
                </div>
                <div class="form-group">
                    <label for="phone_2" class="label">Téléphone n°2</label>
                    <input type="text" name="phone_2" id="phone_2" class="input" />
                </div>
                <div class="form-group">
                    <label for="email" class="label">E-mail*</label>
                    <input type="email" name="email" id="email" class="input" required />
                </div>
                <div class="actions">
                    <button type="button" class="btn-submit" id="btn-generate">Générer</button>
                </div>
                <p class="mandatory">* champs obligatoires</p>
            </form>
            <div class="code-title">Code HTML à copier dans votre logiciel de messagerie</div>
            <textarea class="textarea-result" id="result" readonly></textarea>
            <div class="actions">
                <button type="button" class="btn-submit" id="btn-copy">Copier le code HTML</button>
            </div>
        </section>
        <script src="assets/js/jquery-3.6.0.min.js"></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>
