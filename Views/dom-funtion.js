function getValueById(id) {
    return document.getElementById(id).value;
}
function setFocusById(id) {//MI FUNCION
    //via D.O.M
    document.getElementById(id).focus();
}
function updateValueById(id,value) {
    //actualizar por medio del D.O.M el html
    document.getElementById(id).value = value;
}
function updateHtmlById(id,value) {
    //actualizar por medio del D.O.M el html
    document.getElementById(id).innerHTML = value;
}    

 /*dom-functions*/     
 function getById(id) {
    return document.getElementById(id);
}