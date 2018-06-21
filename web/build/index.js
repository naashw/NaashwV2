/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/web/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/index.js":
/*!********************************!*\
  !*** ./web/assets/js/index.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



$(document).ready(function () {

  $("body").click(function () {
    console.log('Clic !');
  });

  //  TYPED.JS ==================================================================================================================//
  var typed = $("#typed");

  var typedSujets = $("#typed");

  $(function () {
    typedSujets.typed({
      strings: ["  Salut,</br> moi c'est Taskin Hasan, j'ai 19 ans,</br> je suis développeur <b>PHP/SYMFONY</b> formée à <a target='_blank' href='https://www.wildcodeschool.fr'> la Wild Code School</a></br> à coté de cela je me forme en <b>JS/REACT</b> pour devenir FULL-STACK.</br> Avant ça, j'ai fais 3 ans en <b>BAC PRO systèmes éléctroniques numériques</b>. </br>Je suis actuellement en <b>recherche de stage</b> pour début Août d'une durée de 3 à 4 mois.</br> Mon site est en amélioration continue !"],
      typeSpeed: 2,
      loop: false
    });
  });

  // ==================================================================================================================//

  /* $(".button-collapse").sideNav({
     closeOnClick: true,
     draggable: true
   }); */
  // $('.parallax').parallax();

  $("#portfolio-selector-timeline").addClass("active");

  $("#portfolio-selector-card").on("click", function () {
    $("#portfolio-selector-card").addClass("active");
    $("#portfolio-selector-timeline").removeClass("active");
    $("#portfolio-timeline").hide();
    $("#portfolio-card").show();
  });
  $("#portfolio-selector-timeline").on("click", function () {
    $("#portfolio-selector-timeline").addClass("active");
    $("#portfolio-selector-card").removeClass("active");
    $("#portfolio-card").hide();
    $("#portfolio-timeline").show();
  });
});

/***/ })

/******/ });