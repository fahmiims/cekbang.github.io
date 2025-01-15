document.getElementById("gulaDarahForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form
  
    const waktu = document.getElementById("waktu").value;
    const nilaiGula = document.getElementById("nilai").value;
    const catatan = document.getElementById("catatan").value;
  
    // Perhitungan perkiraan gula darah
    const perkiraanRendah = (nilaiGula * 1.1).toFixed(2);
    const perkiraanTinggi = (nilaiGula * 1.15).toFixed(2);
  
    // Simpan data ke localStorage
    localStorage.setItem("waktuTes", waktu);
    localStorage.setItem("jamTes", new Date().toLocaleTimeString());
    localStorage.setItem("perkiraanRendah", perkiraanRendah);
    localStorage.setItem("perkiraanTinggi", perkiraanTinggi);
    localStorage.setItem("catatan", catatan || "Tidak ada catatan.");
  
    // Pindah ke halaman hasil
    window.location.href = "hasil-perkiraan.html";
  });
  