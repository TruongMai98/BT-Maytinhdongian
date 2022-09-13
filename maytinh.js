let view = document.getElementById('screen');
function clickN(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function can() {
    view.value="";
}