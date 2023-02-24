
import Api from './api';


// Passing configuration object to axios

export const Login =  async (credentials, nav , set) => {
    await Api.post('register/',credentials).then(function (response) {
        console.log(response.data)
        nav.push('Test')
    })
      .catch(function (error) {
        console.log(error);
        set(1)
      });
}

export const register =  async (credentials, nav , set) => {
    await Api.post('login/',credentials).then(function (response) {
        console.log(response.data)
        nav.push('Test')
    })
        .catch(function (error) {
            console.log('🥵 error =>' , error);
            set(1)
        });
}



// this is brands api



// this is scooters api
/*export const Test =  async (credentials, nav , set) => {
  await Api.get('scooter/',credentials).then(function (response) {
      console.log(response.data)
      nav.push('Home')
  })
    .catch(function (error) {
      console.log(error);
      set(1)
    });
}*/

// this is validation api

export const Valid =  async (credentials, nav , set) => {
  await Api.post('validation',credentials).then(function (response) {
      console.log(response.data)
      nav.push('Map')
  })
    .catch(function (error) {
      console.log(error);
      set(1)
    });
}



