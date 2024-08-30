document.addEventListener('DOMContentLoaded', function() {
    // メニューのトグル機能
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
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

    // 趣味の詳細表示トグル
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDetail = document.getElementById(targetId);

            // すべての詳細情報を非表示にする
            document.querySelectorAll('.details').forEach(detail => {
                if (detail !== targetDetail) {
                    detail.style.display = 'none';
                }
            });

            // クリックされたボタンに対応する詳細情報を表示する
            if (targetDetail) {
                if (targetDetail.style.display === 'block') {
                    targetDetail.style.display = 'none'; // すでに表示されている場合は非表示にする
                } else {
                    targetDetail.style.display = 'block'; // 表示する
                }
            }
        });
    });

    // モーダル表示用のスクリプト
    document.querySelectorAll('.hobby-image').forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modal-image');
            modal.style.display = 'flex';
            modalImage.src = this.src;
        });
    });

    document.querySelector('.modal-close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});


