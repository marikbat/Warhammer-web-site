function checkInequalities() {
    // Получаем значения A, B и C
    let A = parseFloat(document.getElementById("A").value);
    let B = parseFloat(document.getElementById("B").value);
    let C = parseFloat(document.getElementById("C").value);
    let result = document.getElementById("result");

    // Проверяем условия неравенств
    if (A < B && B < C) {
        result.value = "Неравенство 1 выполняется.";
        document.getElementById("send").disabled = false;
    } else if (A < B && B > C) {
        result.value = "Неравенство 2 выполняется.";
        document.getElementById("send").disabled = false;
    } else {
        result.value = "Ни одно из неравенств не выполняется.";
        document.getElementById("send").disabled = true;
    }
}
window.onload = function() {
    document.getElementById("verify").onclick = checkInequalities;
    document.getElementById("send").onclick = function() {
        if (!document.getElementById("send").disabled) {
            document.forms["UserEnter"].submit();
        }
    };
    document.getElementById("send").disabled = true;
};