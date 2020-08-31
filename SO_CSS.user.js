// ==UserScript==
// @name         SO CSS
// @namespace    http://2200ce.wordpress.com/
// @version      0.1
// @description  A notification system that displays inbox count on the tab
// @author       Focus Style - https://stackoverflow.com/users/3187127/focus-style
// @include      http://stackoverflow.com/*
// @grant        none
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @run-at       document-start
// ==/UserScript==


function addGlobalStyle(css) {
    let head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('.review-button-item .js-review-button::after  {display: none !important;}');