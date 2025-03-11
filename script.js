document.addEventListener("DOMContentLoaded", function () {
    const tracklistSection = document.querySelector(".album-tracklist");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    tracklistSection.classList.add("show");
                }
            });
        },
        { threshold: 0.3 } // 30% элемента должны быть видны
    );

    observer.observe(tracklistSection);
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // Все ссылки в меню
    const albumImage = document.querySelector(".album-image"); // Альбомное изображение

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Останавливаем мгновенный переход
            const target = this.href;

            albumImage.classList.add("fade-out"); // Добавляем эффект исчезновения

            setTimeout(() => {
                window.location.href = target; // Переход на страницу после анимации
            }, 800); // Дождёмся завершения анимации (0.8s)
        });
    });
});

