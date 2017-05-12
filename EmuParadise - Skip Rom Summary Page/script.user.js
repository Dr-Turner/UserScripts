// ==UserScript==
// @name         EmuParadise - Skip Rom Summary Page
// @namespace    https://github.com/Dr-Turner
// @version      0.3
// @description  from Rom list takes users straight to 'download' page (skipping the summary page altogether.)
// @author       Dave Turner
// @author       Nadermane
// @match        http://www.emuparadise.me/*
// @match        https://www.emuparadise.me/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addDownload(dict){
        for (var i = 0; i < dict.length; i++){
            dict[i].href += '-download';
        }
    }

    // finds all links that lead to a rom page
    var links = document.querySelectorAll('td > a');
    var links2 = document.querySelectorAll('#list-of-games > a');

    // appends them to go to the download page instead. Simple! :)
    addDownload(links);
    addDownload(links2);
})();
