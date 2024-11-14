document.addEventListener("DOMContentLoaded", function () {
    // Menambahkan efek scroll pada section
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach((section) => {
        appearOnScroll.observe(section);
    });
});
