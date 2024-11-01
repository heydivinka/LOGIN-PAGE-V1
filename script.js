// Mendapatkan elemen modal
var modal = document.getElementById("LoginModal");

// Mendapatkan tombol yang membuka modal
var btn = document.getElementById("openModal");

// Mendapatkan elemen <span> yang menutup modal
var span = document.getElementsByClassName("close")[0];

// Menampilkan modal
function showModal() {
    modal.style.display = "block";
    modal.style.opacity = "1";
}

// Menyembunyikan modal
function hideModal() {
    modal.style.display = "none";
    modal.style.opacity = "0";
}

// Event listener untuk membuka dan menutup modal
btn.onclick = function() {
    showModal();
}

span.onclick = function() {
    hideModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}

// Validasi input form dan SweetAlert
document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validasi sederhana
    if (username.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username harus memiliki setidaknya 3 karakter.'
        });
        return;
    }

    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password harus memiliki setidaknya 6 karakter.'
        });
        return;
    }

    // Logika autentikasi
    if (username === 'admin' && password === 'password') {
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil!',
            text: 'Selamat datang kembali!'
        }).then(() => {
            hideModal(); // Tutup modal setelah SweetAlert ditutup
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal',
            text: 'Username atau password salah.'
        });
    }
});
