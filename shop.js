async function getResponce() {
    try {
        let responce = await fetch("shop.json");
        let content = await responce.json();
        console.log(content);

        let htmlContent = '';
        for (let key in content) {
            htmlContent += `
                <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
                    <img style="width: 180px" class="align-self-center" src=${content[key].img}>
                    <h5 class="card-title">${content[key].title}</h5>
                    <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
                    <input type="hidden" name="vendor_code" value=${content[key].vendor_code}>
                    <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
                </li>`;
        }
        let node_for_insert = document.getElementById("node_for_insert");
        node_for_insert.innerHTML = htmlContent;
    } catch (error) {
        console.error("Error loading shop.json:", error);
    }
}
getResponce();
