function checkInequalities() {
    let A = parseInt(document.getElementById("A").value);
    let B = parseInt(document.getElementById("B").value);
    let C = parseInt(document.getElementById("C").value);
    let result = document.getElementById("result");

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
