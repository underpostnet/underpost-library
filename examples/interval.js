// install es6-string-html

window._APP = {
    render: function () {
        htmls("body", "");
        !this.sec ? this.sec = 0 : null;
        console.log("sec", this.sec);
        append("body", /*html*/`
                    <style>
                        body {
                            background: white;
                            color: black;
                        }

                        .test-icon {
                            width: 100px;
                            height: 100px;
                            top: 5px;
                            left: 5px;
                            background: red;
                        }
                    </style>
                    <div class='fix test-icon'> </div>
                    ${spr(/*html*/`sec ${this.sec} <br>`, this.sec*10)}
            `);
        this.interval ? clearInterval(this.interval) : null;
        this.interval = setInterval(() => {
            this.sec++;
            this.render();
        }, 1000);
    }
};

window._APP.render();