const express = require("express");
const router = express.Router();

const data = {
  title: "Popüler Kurslar",
  list_group: [
    "Web Geliştirme",
    "Mobil Uygulamalar",
    "Veri Analizi",
    "Programlama",
  ],
  blogs: [
    {
      id: 1,
      title: "Komple Uygulamalı Web Geliştirme",
      explain:
        " Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass,Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
      img: "1.jpeg",
      anasayfa: true,
      onay: true,
    },
    {
      id: 2,
      title: " Python ile Sıfırdan İleri Seviye Python Programlama",
      explain:
        "  Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
      img: "2.jpeg",
      anasayfa: true,
      onay: true,
    },
    {
      id: 3,
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      explain:
        "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      img: "3.jpeg",
      anasayfa: true,
      onay: true,
    },
    {
      id: 4,
      title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
      explain:
        "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular,React ve VueJs için sağlam bir temel oluşturun.",
      img: "3.jpeg",
      anasayfa: true,
      onay: true,
    },
  ],
};

const path = require("path");

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs", data);
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});
console.log("asdasd");

module.exports = router;
