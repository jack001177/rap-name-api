const express = require ('express')
const app = express()
const Port = 8000
const rappers = {
  '21 savage' :{
'age':29,
'birthname':'sheryaen',
'birthlocation':'london, England'
  },
  'chance the raper' :{
    'age':31,
    'birthname':'kayren',
    'birthlocation':'us, los Angeles'
      },
      'unknown' :{
        'age':0,
        'birthname':'///',
        'birthlocation':'////'
          }
}


app.get('/', (request, response)=>{

  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{

  let rappersName = request.params.name.toLocaleLowerCase()
  if(rappers[rappersName]){
       response.json(rappers[rappersName])
  }else{
    response.json(rappers['unknown'])
  }
})

app.listen(Port , ()=>{

  console.log(`the server is running in the port ${Port}`)
})