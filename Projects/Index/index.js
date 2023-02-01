        function cngclr() {
            var menu = document.getElementsByClassName('dropbtn')[0];
            var top1 = document.getElementsByClassName('top')[0];
            top1.style.backgroundColor = 'white';
            // trigger this function every time the user scrolls
            window.onscroll = function (event) {
                var scroll = window.pageYOffset;
                if (scroll > 30) {
                    menu.style.backgroundColor = '#dee1e6'
                    top1.style.backgroundColor = '#dee1e6';
                    top1.style.transitionDuration = "0.5s"
                    menu.style.transitionDuration = "0.5s"
                } else {
                    menu.style.backgroundColor = 'white'
                    top1.style.backgroundColor = 'white';
                }
            }
        }

        function load() {
            document.getElementById('divFirst').style.height = document.querySelector('.top').offsetHeight + 'px';
        }
        window.onresize = function () {
            load()
        }