// ==UserScript==
// @name         JS CSS
// @namespace    http://2200ce.wordpress.com/
// @version      0.1
// @description  A notification system that displays inbox count on the tab
// @author       Focus Style - https://stackoverflow.com/users/3187127/focus-style
// @include      https://javascript.info/*
// @grant        none
// @match        *://*.javascript.info/*
// @match        *://*.javascript.ru/*

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
addGlobalStyle('#comments  {display: none !important;}');
addGlobalStyle('a[href="#comments"] {display: none !important;}');

addGlobalStyle('body {background: #2d2d2d; color: #e7e8eb;} :link, a, .breadcrumbs__link {color: #3ca4ff;} a:hover, a:active, .working-hover .breadcrumbs__link:hover, .working-hover a:hover {color: #378ad3;}');
addGlobalStyle('.sitetoolbar {background: #2d2d2d;}');
addGlobalStyle('.sitetoolbar__link_logo {mix-blend-mode: screen; filter: invert(100%) grayscale(100%);}');
addGlobalStyle('.sitetoolbar__dropdown-button {color: #e7e8eb;} .buy-book-button {box-shadow: inset 0 0 0 2px #3d3d3d;} .sitetoolbar__login, .sitetoolbar__user, .sitetoolbar__search-toggle {color: #e7e8eb !important;}');
addGlobalStyle('.sidebar {background: #2d2d2d; border-right: 1px solid #454545;}');
addGlobalStyle('.sitetoolbar__lang-switcher {border-right: 2px solid #454545;}');
addGlobalStyle('.tutorial-progress[value] {background: #454545 !important;} .tutorial-progress::-webkit-progress-bar {background: #454545 !important;} .tutorial-progress::-webkit-progress-bar::-webkit-progress-value {background: #454545 !important;}');
addGlobalStyle('.toolbar__button:active, .toolbar__button:link, .toolbar__button:visited, .working-hover .toolbar__button:hover {color: #2d2d2d;');
addGlobalStyle('.line-numbers .line-numbers-rows, .line-numbers-rows>span:before, .line-numbers .line-numbers-rows:after {background: #515151;}');
addGlobalStyle('color black, pre[class*=language-], pre[class*=language-]>code { text-shadow: none;');
addGlobalStyle('.token.atrule, .token.attr-value, .token.keyword {color: #67b5d7;} .token.boolean, .token.number, .token.property, .token.tag {color: #c24b8e;}');
addGlobalStyle('.token.cdata, .token.comment, .token.doctype, .token.prolog {color: #91a0b0;} .language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url {color: #b69370;}');
addGlobalStyle('.token.attr-name, .token.selector, .token.string {color: #99be4e;}');
addGlobalStyle('.formatted table tr {border-bottom: 1px solid #323232;} .formatted table tr:nth-child(2n) {background: #323232;}');
addGlobalStyle('.page-footer {background: #2d2d2d; border-top: 2px solid #454545;}');


addGlobalStyle('.main .mask-inline {padding: 0; background: #888770; outline: 2px solid #888770;}');


addGlobalStyle('.frontpage-content {background: #2d2d2d;}');
addGlobalStyle(':visited {color: #3759d3;} .frontpage-content .list__link {color: #3ca4ff;}');
addGlobalStyle('.frontpage-banner:before {border-bottom: 19px solid #2d2d2d;');
addGlobalStyle('.frontpage-content__title {color: #ffffff;}');
addGlobalStyle('.frontpage-content .list__title {border-bottom: 1px solid #414141;}');
addGlobalStyle('');


addGlobalStyle('pre[class*=language-] {background: #3d3d3d;} .main code {background: #3d3d3d;} .main .block-highlight .mask {background: #555045; outline: 1px solid #555045;} .main .block-highlight {background: #5f5847;}');
addGlobalStyle('.important {border: 3px solid #3d3d3d;}');









