const express = require('express');
const { join } = require("path");
const router = express.Router();
const Authentification = require('./Function/Authentification');

router.use(express.static(__dirname + "/login/Public"));
router.get("/connexion", (req, res) => {
    res.sendFile(join(__dirname + '/login/Public', 'connexion.html'));
});

router.get("/inscription", (req, res) => {
    res.sendFile(join(__dirname + '/login/Public', 'inscription.html'));
});
router.get("/update-password-page", (req, res) => {
    res.sendFile(join(__dirname + '/login/Public', 'update-password.html'));
});

router.use(express.static(__dirname + "/applicationClient"));

router.get("/AccueilClient", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/accueil', 'accueil.html'));
});

router.get("/accueil.js", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/accueil', 'accueil.js'));
});

router.get("/commun.js", (req, res) => {
    res.sendFile(join(__dirname + '/', 'commun.js'));
});

router.get("/logo.png", (req, res) => {
    res.sendFile(join(__dirname + '/Image', 'img.png'));
});

router.get("/profil", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/profil', 'profil.html'));
});

router.get("/profil.js", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/profil', 'profil.js'));
});

router.get("/rendezVous", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/rendezVous', 'rendezVous.html'));
});

router.get("/rendezVous.js", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/rendezVous', 'rendezVous.js'));
});

router.get("/favoris", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/favoris', 'favoris.html'));
});

router.get("/favoris.js", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient/favoris', 'favoris.js'));
});

router.get("/appClient.css", (req, res) => {
    res.sendFile(join(__dirname + '/applicationClient', 'appClient.css'));
});

router.get("/", (req, res) => {
    res.sendFile(join(__dirname + '/', 'home.html'));
});

router.get("/home.js", (req, res) => {
    res.sendFile(join(__dirname + '/', 'home.js'));
});

module.exports = router;
