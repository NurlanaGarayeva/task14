// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)
// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h


// let birthday = new Date("03-28-2024");
// setInterval(() => {
//   let now = new Date();
//   between = now - birthday;
//   // il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365))
//   gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   saniye = Math.trunc((between / 1000) % 60);
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   console.log(%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye, color: rgb(${r}, ${g}, ${b}));
// }, 1000);
// console.log(date);
// console.log(date.getMonth());
// console.log(birthday);





// let text = prompt("Enter text: ");
// let i = 0;
// // hello
// let direction = true;

// let interval = setInterval(() => {
//   if (i === text.length) {
//     direction = false;
//   }
//   if (i === 1) {
//     direction = true;
//   }
//   if (direction) {
//     i++;
//   } else {
//     i--;
//     if (i === 1) {
//       clearInterval(interval);
//     }
//   }

//   console.log(text.slice(0, i));
// }, 200);





let products = [
    {
      id: 1,
      name: "Iphone 14",
      price: 1200,
    },
    {
      id: 2,
      name: "Samsung A70",
      price: 1800,
    },
    {
      id: 3,
      name: "BMW",
      price: 50000,
      pet: ["cat", "dog"],
    },
    {
      id: 4,
      name: "Iphone 15 Pro Max",
      price: 2000,
    },
  ];
  
  let search = prompt("Search: ").toLowerCase();
  let productFilter = products.filter((a) =>
  a.name.toLowerCase().includes(search)
  );
  productFilter.map((product) => console.log(product.name));