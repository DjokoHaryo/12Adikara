// --- Hamburger Menu Logic ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        // Toggle class 'active' untuk navigasi
        navLinks.classList.toggle('active');
        // Toggle class 'is-active' untuk animasi ikon hamburger
        mobileMenu.classList.toggle('is-active');
    });

    // Menutup menu jika salah satu link diklik (opsional, bagus untuk HP)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        });
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Hanya jalan jika di halaman yang sama
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 1. DATA BASE ALUMNI LENGKAP
const dataAlumni = [
    {
        id: "abid",
        nama: "Abid Aryadi",
        role: "Anggota",
        fotoCard: "images/zoom/abid.jpg",
        fotoDetail: "images/abid.JPG", // Kosongkan jika belum ada foto, otomatis pakai inisial nama
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: "adam",
        nama: "Adam Rizky S.",
        role: "Anggota",
        fotoCard: "images/zoom/adam.jpg",
        fotoDetail: "images/adam.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "adit",
        nama: "Aditya Yasirudin",
        role: "Anggota",
        fotoCard: "images/zoom/cuple.jpg",
        fotoDetail: "images/cuple.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "agha",
        nama: "Agha Athari",
        role: "Anggota",
        fotoCard: "images/zoom/agha.jpg",
        fotoDetail: "images/agha.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "aldi",
        nama: "Aldi Faiz",
        role: "Anggota",
        fotoCard: "images/zoom/aldi.jpg",
        fotoDetail: "images/aldi.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "aqila",
        nama: "Aqila Khairil",
        role: "Anggota",
        fotoCard: "images/zoom/aqila.jpg",
        fotoDetail: "images/aqila.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "arya",
        nama: "Arya Hakim",
        role: "Anggota",
        fotoCard: "images/zoom/arya.jpg",
        fotoDetail: "images/arya.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "zahra",
        nama: "Az Zahra Amani",
        role: "Anggota",
        fotoCard: "images/zoom/zahra.jpg",
        fotoDetail: "images/zahra.JPG",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "djoko",
        nama: "Djoko Haryo Baskoro",
        role: "Informatics Cadet",
        fotoCard: "images/zoom/djoko.jpg",
        fotoDetail: "images/djoko.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "sandy",
        nama: "Elsandy Mirza",
        role: "Anggota",
        fotoCard: "images/zoom/elsandy.jpg",
        fotoDetail: "images/elsandy.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "elvira",
        nama: "Elvira Istiama",
        role: "Anggota",
        fotoCard: "images/zoom/elvira.jpg",
        fotoDetail: "images/elvira.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "fadel",
        nama: "Fadel Ragil",
        role: "Anggota",
        fotoCard: "images/zoom/fadel.jpg",
        fotoDetail: "images/fadel.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "fadghom",
        nama: "Fadghom A.",
        role: "Anggota",
        fotoCard: "images/zoom/fadghom.jpg",
        fotoDetail: "images/fadghom.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "merci",
        nama: "Genoveva Holy Merci",
        role: "Anggota",
        fotoCard: "images/zoom/merci.jpg",
        fotoDetail: "images/merci.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "iqcy",
        nama: "Iqcy Ulima",
        role: "Anggota",
        fotoCard: "images/zoom/iqcy.jpg",
        fotoDetail: "images/iqcy.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "jasson",
        nama: "Jasson Ifan K.",
        role: "Anggota",
        fotoCard: "images/zoom/jasson.jpg",
        fotoDetail: "images/jasson.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "joshua",
        nama: "Joshua Natan",
        role: "Anggota",
        fotoCard: "images/zoom/joshua.jpg",
        fotoDetail: "images/joshua.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "najib",
        nama: "M. Abdun Najib",
        role: "Anggota",
        fotoCard: "images/zoom/najib.jpg",
        fotoDetail: "images/najib.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "fachri",
        nama: "M. Fachri Yusmar",
        role: "Anggota",
        fotoCard: "images/zoom/fahri.jpg",
        fotoDetail: "images/fahri.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "fauzan",
        nama: "M. Fauzan",
        role: "Anggota",
        fotoCard: "images/zoom/fauzan.jpg",
        fotoDetail: "images/fauzan.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "hafizh",
        nama: "M. Hafizh",
        role: "Anggota",
        fotoCard: "images/zoom/apis.jpg",
        fotoDetail: "images/apis.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "raffi",
        nama: "M. Raffi A.",
        role: "Anggota",
        fotoCard: "images/zoom/rafi.jpg",
        fotoDetail: "images/rafi.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "revan",
        nama: "M. Revan Alkamar",
        role: "Anggota",
        fotoCard: "images/zoom/revan.jpg",
        fotoDetail: "images/revan.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "mareska",
        nama: "Mareska Surya",
        role: "Anggota",
        fotoCard: "images/zoom/mareskha.jpg",
        fotoDetail: "images/mareskha.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "adib",
        nama: "Muh. Adib Al-Fathi",
        role: "Anggota",
        fotoCard: "images/zoom/adib.jpg",
        fotoDetail: "images/adib.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "julfan",
        nama: "Muhammad Julfan",
        role: "Anggota",
        fotoCard: "images/zoom/julfan.jpg",
        fotoDetail: "images/julfan.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "nino",
        nama: "Nino Alfaridzy",
        role: "Anggota",
        fotoCard: "images/zoom/nino.jpg",
        fotoDetail: "images/nino.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "rizky",
        nama: "Rizky Putra",
        role: "Anggota",
        fotoCard: "images/zoom/rizky.jpg",
        fotoDetail: "images/rizky.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "sheren",
        nama: "Sheren Putri",
        role: "Anggota",
        fotoCard: "images/zoom/sheren.jpg",
        fotoDetail: "images/sheren.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "timothy",
        nama: "Timothy Grace",
        role: "Anggota",
        fotoCard: "images/zoom/timoti.jpg",
        fotoDetail: "images/timoti.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
    {
        id: "yeremi",
        nama: "Yeremi Pandapotan O.",
        role: "Anggota",
        fotoCard: "images/zoom/yeremi.jpg",
        fotoDetail: "images/yeremi.JPG",
        instagram: "https://instagram.com/username_djoko", // Ganti dengan link asli
        linkedin: "https://linkedin.com/in/username_djoko",  // Ganti dengan link asli
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Tertarik pada pengembangan perangkat lunak, pemrograman C++/Python, serta sistem teknologi modern. Salam kenal!"
    },
];

// 2. LOGIKA UNTUK HALAMAN ALUMNI (alumni.html) - Membuat Grid Kartu
const alumniContainer = document.getElementById('alumni-container');
if (alumniContainer) {
    dataAlumni.forEach(alumni => {
        const card = document.createElement('div');
        card.className = 'alumni-card';

        let srcFoto = alumni.fotoCard ? alumni.fotoCard : `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.nama)}&background=e2e8f0&color=475569&size=400`;

        card.innerHTML = `
            <img src="${srcFoto}" alt="${alumni.nama}" loading="lazy">
            <div class="alumni-info">
                <h3>${alumni.nama}</h3>
                <p>${alumni.role}</p>
            </div>
        `;

        // Ketika kartu diklik, arahkan ke halaman detail dengan parameter ID unik
        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${alumni.id}`;
        });

        alumniContainer.appendChild(card);
    });
}

// 3. LOGIKA UNTUK HALAMAN DETAIL (detail.html) - Menampilkan Informasi Spesifik
if (window.location.pathname.includes('detail.html')) {
    // Mengambil ID dari URL parameter (?id=...)
    const urlParams = new URLSearchParams(window.location.search);
    const idAlumni = urlParams.get('id');

    // Mencari data alumni yang cocok dengan ID di URL
    const alumni = dataAlumni.find(item => item.id === idAlumni);

    if (alumni) {
        // Pasang data ke elemen HTML di detail.html
        document.getElementById('detail-nama').innerText = alumni.nama;
        document.getElementById('detail-role').innerText = alumni.role;
        document.getElementById('detail-deskripsi').innerText = alumni.deskripsi;

        let srcFoto = alumni.fotoDetail ? alumni.fotoDetail : `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.nama)}&background=e2e8f0&color=475569&size=400`;
        document.getElementById('detail-foto').src = srcFoto;

        // Atur link sosial media
        const igBtn = document.getElementById('detail-ig');
        const liBtn = document.getElementById('detail-linkedin');

        if (alumni.instagram) { igBtn.href = alumni.instagram; } else { igBtn.style.display = 'none'; }
        if (alumni.linkedin) { liBtn.href = alumni.linkedin; } else { liBtn.style.display = 'none'; }
    } else {
        // Jika ID tidak ditemukan, tampilkan pesan error sederhana
        document.querySelector('.profile-detail-container').innerHTML = "<h2>Profil alumni tidak ditemukan.</h2>";
    }
}

// Smooth scrolling (Tetap dipertahankan)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
    });
});
