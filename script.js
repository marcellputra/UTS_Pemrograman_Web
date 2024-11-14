// Contoh JavaScript untuk menampilkan pesan ketika formulir dikirim
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form submit secara default

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Terima kasih, ' + name + '! Kami akan menghubungi Anda segera.');
    } else {
        alert('Harap isi semua kolom dengan benar!');
    }
});
