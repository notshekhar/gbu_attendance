const URL = "https://raw.githubusercontent.com/notshekhar/gbu_attendance/master/images/"
let images = [
    "_dsf8951.jpg",
    "_dsf8963.jpg",
    "_dsf8982.jpg",
    "_dsf8724a.jpg"
]
let i = 1
let im = images[0]

setInterval(() => {
    im = images[i]
    cssv("im", `url(${URL+im})`)
    i++
    if (i == images.length) i = 0
}, 3000)


document.querySelector(".submit").onclick = () => {
    let student_name = document.querySelector(".student_name").value
    let father_name = document.querySelector(".father_name").value
    let number = document.querySelector(".number").value
    let program = document.querySelector("#program").value
    let discipline = document.querySelector("#discipline").value
    let data = {
        student_name,
        father_name,
        number,
        program,
        discipline
    }
    localStorage.setItem("data", JSON.stringify(data))
    if (
        (student_name.length > 0) &
        (father_name.length > 0) &
        (number.length == 10) &
        (program.length > 0) &
        (discipline.length > 0)
    ) {
        console.log((window.self.location.href = "/get_details"))
    }
}

//get and set css variables
function cssv(name, value) {
    if (name[0] != "-") name = "--" + name //allow passing with or without --
    if (value) document.documentElement.style.setProperty(name, value)
    return getComputedStyle(document.documentElement).getPropertyValue(name)
}
