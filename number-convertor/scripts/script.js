document.getElementById("inputSubmit").onclick = function () {

    let temp

    if (document.getElementById("cBtn").selected) {
        temp = document.getElementById("inputField").value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById("resultLabel").innerHTML = temp + "C"
    }
    if (document.getElementById("fBtn").selected) {
        temp = document.getElementById("inputField").value
        temp = Number(temp)
        temp = toFarenheit(temp)
        document.getElementById("resultLabel").innerHTML = temp + "F"
    }
}


function toFarenheit(temp) {
    return (temp * (9 / 5) + 32)
}
function toCelsius(temp) {
    return (temp - 32) * (5 / 9)
}