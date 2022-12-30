import axios from "axios";

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.className = "headline";
  headlineDiv.textContent = makale.anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgDiv = document.createElement("div");
  imgDiv.className = "img-container";

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", makale.yazarFoto);
  imgDiv.appendChild(imgElement);

  const authorName = document.createElement("span");
  authorName.textContent = `${makale.yazarAdi} tarafından`;

  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorName);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener("click", (event) => {
    if (event.target.matches("div") && event.target.classList.contains("card"))
      console.log(event.target.querySelector(".headline").textContent);
    else if (
      event.target.matches("div") &&
      (event.target.classList.contains("headline") ||
        event.target.classList.contains("author"))
    )
      console.log(
        event.target.parentElement.querySelector(".headline").textContent
      );
  });
  return cardDiv;

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
};

const cardEkleyici = (secici) => {
  const cardsDiv = document.querySelector(secici);

  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    for (let key in response.data.makaleler) {
      for (let i = 0; i < response.data.makaleler[key].length; i++) {
        cardsDiv.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
