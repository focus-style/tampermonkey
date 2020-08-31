// ==UserScript==
// @name         Tab Notifier
// @namespace    http://2200ce.wordpress.com/
// @version      0.1
// @description  A notification system that displays inbox count on the tab
// @author       Focus Style - https://stackoverflow.com/users/3187127/focus-style
// @include      http://stackoverflow.com/*
// @grant        none
// @match        *://*.stackexchange.com/*
// @match        *://stackoverflow.com/*
// @match        *://www.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// ==/UserScript==

// simple title changin on inbox and reputatuon

const constTitle = document.title;
const faviconImageOriginal = $('link[rel="shortcut icon"]')[0].href;


setInterval(function(){
    let inbox = $('.inbox-button-item .js-unread-count').html();
    let acievment = $('.achievements-button-item .js-unread-count').html();
    //let favicon = $('link[rel="shortcut icon"]');
    if ((inbox != 0) && (acievment != '+0')) {
        document.title = inbox + ' ' + acievment + ' - ' + constTitle;
        //favicon.attr('href', src);
    } else if (acievment != '+0') {
        document.title = acievment + ' - ' + constTitle;
    } else if (inbox != 0) {
        document.title = inbox + ' - ' + constTitle;
    } else {
        document.title = constTitle;
    }
}, 1000);



// insert jQuery to the script
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = "(" + addFaviconCounter.toString() + ")(jQuery)";
document.body.appendChild(script);


function addFaviconCounter($) {

  // get title tag
  let titleElement = document.title;
  let faviconImageOriginal = $('link[rel="shortcut icon"]')[0].href;

  setInterval(function(e){
    let inbox = $('.inbox-button-item .js-unread-count').html();
    let acievment = $('.achievements-button-item .js-unread-count').html();

    let faviconURL = faviconImageOriginal; // path to stackoverflow default favicon

    if (inbox != 0) {
      //console.log(faviconURL);
      let counterValue = (inbox > 9 ) ? '\u221E;' : inbox, // get counter value (we show infinity symbol if counter excided 99 value)
      canvas = document.createElement("canvas"), // create canvas element to draw favicon
      ctx = canvas.getContext('2d'),
      faviconImage = new Image(); // tmp image for original favicon

      canvas.width = 16;
      canvas.height = 16;

      var image = new Image();
      image.onload = function() {
        ctx.drawImage(image, 0, 0);
      };
      image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEUAAAD2cgnycAnycArybwfycAnwbQfxcArzcArycAn/VQDybgnxcAnycAnycAjzbwjyaw30dQvxcQnycArybwnwcQfycQnxcArudxHxcQnycArycAjycQjzbwnycAn0cgvxcAjxcAmeo6nycAn////XumDvAAAAInRSTlMAHcJkJ+gjSWvIAzriibZ+Exg2oHdGUYIPcdbTPaXvL129TyOK4gAAAAFiS0dEJLQG+ZkAAAAHdElNRQfkBQoTDCfxg3tuAAAAbUlEQVQY022OyQ6AIAxEBxVXxH1fUPz/f/QgpIT4Tp2XaVrAwuARhJ6IeOykMAHSLCdRiDKHrJxKLQPW8NakuCuAng/jZMS8rFs67yJyVvbj7BS9cPQJqxcS6iqlOG8btbnT2knj+SDhdTWBH16iswcK9IKYxwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0xMFQxOToxMjozOSswMDowMHFGhlgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMTBUMTk6MTI6MzkrMDA6MDAAGz7kAAAAAElFTkSuQmCC';
      //console.log(faviconImageOriginal);

      image.onload = function() {
        // draw original favicon
        ctx.drawImage(image, 0, 0);

        // draw counter rectangle holder
        ctx.beginPath();
        ctx.rect(6, 6, 16, 10);
        ctx.fillStyle = "#c4524f";
        ctx.fill();

        // copunter font settings
        ctx.font = "10px Normal Arial";
        ctx.fillStyle = "#ffffff";

        // get counter metrics
        let metrics = ctx.measureText(counterValue);
        let counterTextX = (metrics.width == 10) ? 6 : 9; // detect counter value position

        // draw counter on favicon
        ctx.fillText(counterValue , counterTextX , 15, 16);

        // append new favicon to document head section
        faviconURL = canvas.toDataURL();
        //console.log(faviconURL);
        $('link[rel$=icon]').remove();
        $('head').append($('<link rel="shortcut icon" type="image/x-icon" href="' + faviconURL + '"/>' ));
      }
      faviconImage.src = faviconURL; // create original favicon
    } else {
      // if there is no counte value we draw default favicon
      $('link[rel$=icon]').remove();
      $('head').append($('<link rel="shortcut icon" type="image/x-icon" href="' + faviconURL + '"/>'));
    }



  }, 1000);
}






































