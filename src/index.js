document.addEventListener("DOMContentLoaded", () => {
    apiContainer.classList.replace('invisible','visible')
    // header.classList.replace('visible','invisible')
    getActivityButton.style.top = '75%'
    getActivityButton.style.transform = 'translate (-50%,-50%) scale(1.3)'

    getActivityButton.addEventListener('click', () => {
        fetch ('http://www.boredapi.com/api/activity/')
        .then (res => res.json())
        .then (data => {
        console.log(data)
        if (data.link){
            activity.innerHTML = `<span class = "poppins">Activity: </span><a href = ${data.link}><span class = "bold animation">${data.activity}</span></a>`
            type.innerHTML = `<span class = "poppins">Type: </span><span class = "montserrat">${data.type}</span>`
            participants.innerHTML = `<span class = "poppins">Participants: </span><span class = "montserrat">${data.participants}</span>`
            accessibility.innerHTML = `<span class = "poppins">Accessibility: </span><span class = "montserrat">${data.accessibility}</span>`
        } else {
            activity.innerHTML = `<span class = "poppins">Activity: </span><span class = "montserrat">${data.activity}</span>`
            type.innerHTML = `<span class = "poppins">Type: </span><span class = "montserrat">${data.type}</span>`
            participants.innerHTML = `<span class = "poppins">Participants: </span><span class = "montserrat">${data.participants}</span>`
            accessibility.innerHTML = `<span class = "poppins">Accessibility: </span><span class = "montserrat">${data.accessibility}</span>`
            }
        })
    })
})

function submitComment(){
    let data = "";  
    let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("userComment").value

    data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment
    document.getElementById("data").innerHTML = data  // display data to paragraph
}

function eventCaster(message) {
    let caster = document.getElementById('caster');
    caster.innerHTML = message;
}

document.getElementById('commentForm').addEventListener('mouseover', () => eventCaster ('<span class ="multicolortext2">(You\'ve triggered the Mouseover Event)</span>'))

// Used the following event listeners:
// 1. click
// 2. mouseover
// 3. DomContentLoaded