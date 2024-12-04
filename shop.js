async function getResponce() {
    try {
        const response = await fetch("shop.json");
        const content = await response.json();
        console.log("Данные из JSON:", content);

        let htmlContent = '';
        for (const item of content) {
            htmlContent += `
                <div class="product-item">
                    <img src="${item.img}" alt="${item.title}">
                    <h5>${item.title}</h5>
                    <p>${item.description}</p>
                    <p>Цена: <strong>${item.price} $.</strong></p>
                    <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                    <p>Заказать: <input type="number" name="amount" min="0" value="0"></p>
                </div>`;
        }

        const node_for_insert = document.getElementById("node_for_insert");
        if (node_for_insert) {
            node_for_insert.innerHTML = `<div class="product-list">${htmlContent}</div>`;
        } else {
            console.error("Элемент с id 'node_for_insert' не найден.");
        }
    } catch (error) {
        console.error("Ошибка при загрузке или обработке данных:", error);
    }
}

getResponce();
