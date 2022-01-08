let vize = prompt ("Vize notunuzu giriniz:")
let final = prompt ("Final notunuzu giriniz:")
let grade;
if (vize <=100 && vize > 0 && final <=100 && final > 0) {
    let info = (vize*30)/100+(final*70)/100
    if (info <= 100 && info > 0) {
        if (info >= 90) {
            grade = "AA"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 85) {
            grade = "BA"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 80) {
            grade = "BB"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 75) {
            grade = "CB"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 70) {
            grade = "CC"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 65) {
            grade = "DC"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 60) {
            grade = "DD"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 50) {
            grade = "FD"
            document.querySelector("#text-info").innerHTML = grade
        } else if (info >= 0) {
            grade = "FF"
            document.querySelector("#text-info").innerHTML = grade
        }
    } else {
        document.querySelector("#text-info").innerHTML = `Geçerli bir değer giriniz. Girdiğiniz değer: ${info}`
    }
} else {
    document.querySelector("#text-info").innerHTML = `Geçerli vize ve final notu giriniz. Vize notunuz: ${vize} | Final notunuz: ${final}`
}

