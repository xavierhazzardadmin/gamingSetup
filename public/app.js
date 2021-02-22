// var btn = document.getElementById(
//     "submit"
// );
// const addItem = document.querySelector(
//     "#addItem"
// );
// const totalView = document.querySelector(
//     "#total"
// );
// // const totalText = document.querySelectorAll(".total")[0];
// const textShow = document.querySelector(
//     "#textShow"
// );
// var total = 0;
// var savings = 500;

// const sleep = (milliseconds) => {
//     return new Promise((resolve) =>
//         setTimeout(
//             resolve,
//             milliseconds
//         )
//     );
// };

// addItem.addEventListener(
//     "click",
//     () => {
//         const inputs = document.querySelectorAll(
//             ".formInput"
//         );

//         setTimeout(() => {
//             createItem(
//                 inputs[0].value,
//                 inputs[1].value,
//                 savings,
//                 inputs[2].value,
//                 inputs[3].value
//             );
//             inputs[0].value = "";
//             inputs[1].value = "";
//             inputs[2].value = "";
//             inputs[3].value = "";
//         }, 200);
//     }
// );

// addEventListener("keydown", (e) => {
//     const inputs = document.querySelectorAll(
//         ".formInput"
//     );

//     if (e.key == "Enter") {
//         setTimeout(() => {
//             createItem(
//                 inputs[0].value,
//                 inputs[1].value,
//                 savings,
//                 inputs[2].value,
//                 inputs[3].value
//             );
//             inputs[0].value = "";
//             inputs[1].value = "";
//             inputs[2].value = "";
//             inputs[3].value = "";
//         }, 200);
//     }
// });

// function showTotal() {
//     var op = 0;
//     while (op <= 100) {
//         setInterval(() => {
//             console.log("worked");
//         }, 100);
//     }
// }

// function createItem(
//     name,
//     price,
//     budget,
//     link,
//     img
// ) {
//     const body = document.querySelectorAll(
//         ".items"
//     )[0];
//     const div = document.createElement(
//         "div"
//     );
//     const p1 = document.createElement(
//         "p"
//     );
//     const p2 = document.createElement(
//         "p"
//     );
//     const p3 = document.createElement(
//         "p"
//     );
//     const del = document.createElement(
//         "button"
//     );
//     const linkTag = document.createElement(
//         "a"
//     );
//     const linkBtn = document.createElement(
//         "button"
//     );

//     div.classList.add("item");
//     p1.classList.add("top");
//     p2.classList.add("middle");
//     p3.classList.add("bottom");
//     del.classList.add("faBtn");
//     linkTag.setAttribute(
//         "target",
//         "_blank"
//     );
//     console.log(link);
//     linkTag.setAttribute("href", link);
//     linkBtn.classList.add("faBtn");
//     if (img) {
//         console.log(img);
//         const image = document.createElement(
//             "img"
//         );
//         image.src = img;
//         image.classList.add("img");
//         div.classList.add("pic");
//         div.classList.remove("item");
//         div.appendChild(image);
//     }
//     const nameSpan = `<span class="value">${name}</span>`;
//     const priceSpan = `<span class="value">£${price}</span>`;
//     var savingsSpan = `<span class="value">£${
//         budget - price
//     }</span>`;
//     p1.innerHTML = `Name: ${nameSpan}`;
//     p2.innerHTML = `Price: ${priceSpan}`;
//     p3.innerHTML = `Amount left: ${savingsSpan}`;
//     del.innerHTML = `<i class="fas fa-trash-alt"></i>`;
//     linkBtn.innerHTML = `<i class='fas fa-link'></i>`;
//     linkTag.appendChild(linkBtn);

//     //add text to each item
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     div.appendChild(del);
//     div.appendChild(linkTag);
//     body.appendChild(div);
//     div.classList.add("show");
//     total = total + parseFloat(price);
//     savings -= parseFloat(price);
//     totalView.innerHTML = `${total}`;
//     del.addEventListener(
//         "click",
//         function () {
//             setTimeout(() => {
//                 this.parentElement.classList.add(
//                     "hide"
//                 );
//                 sleep(500).then(() => {
//                     this.parentElement.remove();
//                 });
//                 savings += parseFloat(
//                     price
//                 );
//                 total -= parseFloat(
//                     price
//                 );
//                 totalView.innerHTML = `${total}`;
//                 if (total == 0) {
//                     textShow.classList.remove(
//                         "show"
//                     );
//                     textShow.classList.add(
//                         "hide"
//                     );
//                 }
//             });
//         }
//     );
//     textShow.classList.add("show");
// }

// createItem(
//     "1440p Monitor",
//     400,
//     "amazon.com",
//     "google.com"
// );
