async function getResponce() {
    try {
        const response = await fetch("shop.json");
        const content = await response.json(); 
        console.log("Данные из JSON:", content);

        let htmlContent = '';
        for (const item of content) {
            htmlContent += `
                <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
                    <img style="width: 180px" class="align-self-center" src="${item.img}" alt="${item.title}">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}. Цена ${item.price} р.</p>
                    <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                    <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
                </li>`;
        }

        const node_for_insert = document.getElementById("node_for_insert");
        if (node_for_insert) {
            node_for_insert.innerHTML = htmlContent;
        } else {
            console.error("Элемент с id 'node_for_insert' не найден в DOM.");
        }
    } catch (error) {
        console.error("Ошибка при загрузке или обработке данных:", error);
    }
}

getResponce();
