// Fungsi untuk menyalin link affiliate
function copyAffiliateLink() {
    const affiliateLink = document.getElementById('affiliateLink');
    affiliateLink.select();
    affiliateLink.setSelectionRange(0, 99999); // Untuk mobile
    
    document.execCommand('copy');
    
    // Beri feedback ke pengguna
    const originalText = affiliateLink.nextElementSibling.textContent;
    affiliateLink.nextElementSibling.textContent = 'Link berhasil disalin!';
    
    setTimeout(() => {
        affiliateLink.nextElementSibling.textContent = originalText;
    }, 2000);
}

// Fungsi untuk berbagi via WhatsApp
function shareOnWhatsApp() {
    const link = document.getElementById('affiliateLink').value;
    const message = Hai! Saya ingin merekomendasikan produk ini: ${link};
    const whatsappUrl = https://wa.me/?text=${encodeURIComponent(message)};
    window.open(whatsappUrl, '_blank');
}

// Fungsi untuk berbagi via Facebook
function shareOnFacebook() {
    const link = encodeURIComponent(document.getElementById('affiliateLink').value);
    const facebookUrl = https://www.facebook.com/sharer/sharer.php?u=${link};
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

// Fungsi untuk berbagi via Twitter
function shareOnTwitter() {
    const link = document.getElementById('affiliateLink').value;
    const text = "Lihat produk keren ini!";
    const twitterUrl = https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)};
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Event listener untuk tombol beli
document.querySelector('.buy-btn').addEventListener('click', function() {
    // Ganti URL dengan link affiliate Anda yang mengarah ke halaman pembelian
    window.location.href = 'https://example.com/checkout?ref=12345';
});

// Notifikasi saat halaman dimuat
window.addEventListener('load', function() {
    console.log('Halaman affiliate siap digunakan!');
    
    // Anda bisa menambahkan kode tracking affiliate di sini
    // Contoh: track affiliate view
    // trackAffiliateView('12345');
});