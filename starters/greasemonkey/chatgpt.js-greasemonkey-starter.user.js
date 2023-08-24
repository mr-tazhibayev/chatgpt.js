// ==UserScript==
// @name          ChatGPT Userscript
// @description   A Greasemonkey template to start using chatgpt.js like a boss
// @author        chatgpt.js
// @namespace     https://chatgpt.js.org
// @version       2023.8.24
// @license       MIT
// @match         https://chat.openai.com/*
// @icon          https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon48.png
// @icon64        https://raw.githubusercontent.com/kudoai/chatgpt.js-greasemonkey-starter/main/media/images/icons/robot/icon64.png
// @require       https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@a73c962d8ea7a48d81e8fd260c91b23175753b59/dist/chatgpt-2.1.1.min.js
// @grant         none
// @noframes
// @homepageURL   https://github.com/kudoai/chatgpt.js-greasemonkey-starter
// @supportURL    https://github.com/kudoai/chatgpt.js-greasemonkey-starter/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license.

(async () => {
    await chatgpt.isLoaded();
    chatgpt.printAllFunctions(); // in console
    chatgpt.alert('≫ ChatGPT script loaded! 🚀', // title
        'Success! Press Ctrl+Shift+'
            + ( navigator.userAgent.indexOf('Firefox') > -1 ? 'K' : 'J' )
            + ' to view all chatgpt.js functions.', // msg
        function getHelp() { window.open('https://github.kudoai.com/chatgpt.js-greasemonkey-starter/issues', '_blank', 'noopener'); }); // button

    // Your code here...

})();
