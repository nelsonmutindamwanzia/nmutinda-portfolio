function fetchActivity (){
    apiContainer.classList.replace('invisible','visible')
    header.classList.replace('visible','invisible')
    getActivityButton.style.top = '75%'
    getActivityButton.style.transform = 'translate (-50%,-50%) scale(1.3)'

    fetch ('http://www.boredapi.com/api/activity/')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        if (data.link){
            activity.innerHTML = `<span class = "poppins">Activity:</span><a href = ${data.link}><span class = "bold animation">${data.activity}</span></a>`
        } else {
            activity.innerHTML = `<span class = "poppins">Activity:</span><span class = "montserrat">${data.activity}</span>`
            type.innerHTML = `<span class = "poppins">Type:</span><span class = "montserrat">${data.type}</span>`
            participants.innerHTML = `<span class = "poppins">Participants:</span><span class = "montserrat">${data.participants}</span>`
            accessibility.innerHTML = `<span class = "poppins">Accessibility:</span><span class = "montserrat">${data.accessibility}</span>`
        }
    })
}
getActivityButton.addEventListener('click', fetchActivity)