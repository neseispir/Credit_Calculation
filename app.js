const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesaplaBtn = document.querySelector(".btn-danger");
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if(select.value === "Konut Kredisi"){
        oran = 1.29;
    }else if(select.value ==="Ihtıyac Kredisi"){
        oran = 1.99;
    }else if(select.value === "Arac Kredisi"){
        oran = 1.79;
    }
    if(!select.value || !vade.value || !tutar.value){
        alert("lütfen kredi türü, vade ve tutar bilgilerini giriniz")
    }
    const faiz = oran/ 100;
    taksit = (tutar.value*(faiz*(1+faiz)**vade.value))
/((1+faiz)** vade.value-1);
sonuc();

});
const sonuc = () =>{
    const sonuclar = document.querySelector(".sonuclar");
    sonuclar.innerHTML = `<h2 class = "mt-3 text-info"> Kredi Bilgileri </h2>
    <table class = "table table-bordered border-warning mt-4">
    <tbody>
    <tr>Kredi Miktarı </th>
    <td>${tutar.value}₺ </td>
    <td>Kredi Tipi</td>
    </tr>
    <tr>
    <th>Vade</th>
    <td>${vade.value}</td>
    <th>Faiz Orani</th>
    <td>${oran}</td>
  </tr>
  <tr>
    <th>Toplam Tutar</th>
    <td>${(taksit * vade.value).toFixed(2)} ₺</td>
    <th>Taksit Tutari</th>
    <td>${taksit.toFixed(2)}₺</td>
  </tr>
</tbody>
  
  
  </table>`;
};