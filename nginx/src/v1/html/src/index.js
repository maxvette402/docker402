import {getBitcoinBlockCount} from './bitcoin-block-count.js';

document.addEventListener("DOMContentLoaded", async function (event) {
    // bitcoin-block-count
    if (document.getElementById("bitcoin-block-count")) {
        document.getElementById("bitcoin-block-count").innerText = await getBitcoinBlockCount();
    }
});
