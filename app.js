const axios = require('axios')

// Promise chaining
axios.get('https://api.chucknorris.io/jokes/random').then(response => {
  console.log(1, response.data.value)
  return axios.get('https://api.chucknorris.io/jokes/random')
}).then(response => {
  console.log(2, response.data.value)
  return axios.get('https://api.chucknorris.io/jokes/random')
}).then(response => {
  console.log(3, response.data.value)
  return axios.get('https://api.chucknorris.io/jokes/random')
}).then(response => {
  console.log(4, response.data.value)
  return axios.get('https://api.chucknorris.io/jokes/random')
}).catch(error => {
  console.log(error)
}).finally(() => {
  console.log('Done')
})

// Promise All (paralelo, se uma falha todas falham)
Promise.all([
  axios.get('https://api.chucknorris.io/jokes/random'),
  axios.get('https://api.chucknorris.io/jokes/random'),
  axios.get('https://api.chucknorris.io/jokes/random')
]).then(response => {
  response.forEach(res => {
    console.log(res.data.value)
  })
}).catch(error => {
  console.log(error)
})

// Promise All Settled (executa todas e trata uma por uma)
Promise.allSettled([
  axios.get('https://api.chucknorris.io/jokes/random'),
  axios.get('https://api.chucknorris.io/jokes/random'),
  axios.get('https://api.chucknorris.io/jokes/random')
]).then(response => {
  response.forEach(res => {
    console.log(res.status, res.value ? res.value.data.value : 'erro')
  })
}).catch(error => {
  console.log(error)
})

// Promisify 
const sayHello = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) 
        resolve('Hello ' + name)
      reject('Cannot greet a person without a name')
    }, 2000);
  })
}

// Promisify 
const timer = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}


// Async Await
const main = async () => {
  let greets = []

  try {
    greets = await Promise.all([
      sayHello('Renan'),
      sayHello('Samuel'),
      sayHello('Mariana')
    ])
  } catch (error) {
    console.log(error)
  }
  
  greets.forEach(element => {
    console.log(element)
  });
}

main()

