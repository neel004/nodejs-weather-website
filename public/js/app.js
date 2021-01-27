const weatherForm = document.querySelector('button')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#error')
const successMessage = document.querySelector('#success')

// errorMessage.textContent = 'jskdsk'

weatherForm.addEventListener('click',(e)=>{
    e.preventDefault()
    const location = search.value
    errorMessage.textContent = 'Loading...'
    successMessage.textContent = ''
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error) {
            errorMessage.textContent = data.error
            console.error(data.error)
        }
        else{
            errorMessage.textContent=''
            successMessage.textContent = 'latitude and longitudes of '+ data.city+',' + data.country+' are : ' + data.latitude +' & ' + data.longitude +' and '+"\n"+'the temperature is '+ data.temperature +' degree celcius. Weather is '+ data.description 
            console.log(data)
            console.log(data.longitude)
        }
    })
})   
    
})

