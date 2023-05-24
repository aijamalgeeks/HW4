const request  = new XMLHttpRequest()
request.open('GET',"data.json")
request.setRequestHeader('Content-Type', 'application.json')
request.send()
request.addEventListener('load', () =>{
    const data = JSON.parse(request.response)
    console.log(data)
})