document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    menuToggle.addEventListener('click', function() {
        menu.classList.add('show');
    });

    menuClose.addEventListener('click', function() {
        menu.classList.remove('show');
    });

    // メニュー外をクリックしたときにも閉じるようにする
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
