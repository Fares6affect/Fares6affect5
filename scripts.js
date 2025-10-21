"use strict";
window.addEventListener("DOMContentLoaded", () => {
    let ArrOfPrice = [125, 250, 500];
    let ArrOfVal = [0, 0, 0];
    document.querySelectorAll("#Calculator .PrPr").forEach(button => {
        button.addEventListener("click", function (event) {
            let inp = document.createElement('input');
            event.target.replaceWith(inp);
            inp.id = event.target.id;
            inp.addEventListener("input", function (event) {
                ArrOfVal[parseInt(event.target.id)] = parseFloat(this.value);
            });
        });
    });
    let pr = document.querySelector("#Pr");
    pr.addEventListener("click", function () {
        let sp = document.querySelector(".EndPrice");
        if (!sp) {
            sp = document.createElement('span');
            sp.classList.add("EndPrice");
            pr.insertAdjacentElement("afterend",sp);
        }
        sp.textContent = EndPriceF();
    });
    function EndPriceF() {
        let res = 0;
        for (let i = 0; i < 3; i++)
            res += ArrOfPrice[i] * ArrOfVal[i];
        return res;
    }
});