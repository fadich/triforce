;(function () {
    let Triforce = function () {
        let settings = {
            speed: 1
        };

        let elements = [];

        this.init = () => {
            initLayout();
        }

        function initLayout() {
            return new Promise(function (resolve, reject) {
                document.body.innerHTML += getTemplate()

                resolve()
            })
        }

        function getTemplate() {
            return `<div class="tf-bg"><div class="tf-wrap"><div class="row"><div class="triangle triangle-red"></div></div><div class="row"><div class="triangle triangle-yellow"></div><div class="triangle triangle-blue"></div></div></div></div>`
        }
    };

    window.Triforce = Triforce;
})();