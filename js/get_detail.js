if(document.referrer == "") location.href = "/"

let track = "Subjects"
let data = JSON.parse(localStorage.getItem("data"))
//setting title
document.title = data.student_name


let cont_ = document.querySelectorAll(".i")
let profile_img = document.querySelector(".profile_img")
let profile_details = document.querySelector(".profile_details > span")
let tabs = document.querySelectorAll('.tab')
let tf = true 
let tab_ = document.querySelector(".tab_")
let tabs_ = document.querySelectorAll(".tab__")

profile_img.innerText = data.student_name[0]
profile_details.innerText = `  ${data.student_name}`

//acadmic
tabs[0].onclick = () => {
    tab_.style.display = tf ? "block" : "none" 
    tf = !tf
}

//eximination
tabs[1].onclick = () => {
    cont_.forEach(e => (e.style.display = "none"))
    cont_[2].style.display = "flex"
    track = "Eximination details"
}

//hostel
tabs[2].onclick = () => {
    cont_.forEach(e => (e.style.display = "none"))
    cont_[3].style.display = "flex"
    track = "Hostel details"

}

//subjects
tabs_[0].onclick = () => {
    cont_.forEach(e => e.style.display = "none")
    cont_[0].style.display = "flex"
    track = "Subjects"

}

//attendance
tabs_[1].onclick = () => {
    cont_.forEach(e => (e.style.display = "none"))
    cont_[1].style.display = "flex"
    track = "Attendance"

}

// document.querySelector(".print").onclick = () => {
//     print(track)
// }







function print(f) {
    const filename = f
    html2canvas(document.querySelector("#nodeToRenderAsPDF")).then(canvas => {
        let pdf = new jsPDF("p", "mm", "a4")
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298)
        pdf.save(filename)
    })
}







































// var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5" //window.location.href
// var url = new URL(url_string)
// var c = url.searchParams.get("c")
// console.log(c)