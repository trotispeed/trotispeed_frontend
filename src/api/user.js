
import Api from './api';


// Passing configuration object to axios

export const Login =  async (credentials, nav , set) => {
    await Api.post('register/',credentials).then(function (response) {
        console.log(response.data)
        nav.push('Home')
    })
      .catch(function (error) {
        console.log(error);
        set(1)
      });
}

export const register =  async (credentials, nav , set) => {
    await Api.post('login/',credentials).then(function (response) {
        console.log(response.data)
        nav.push('Home')
    })
        .catch(function (error) {
            console.log('🥵 error =>' , error);
            set(1)
        });
}



// this is brands api

export const Test =  async (credentials, nav , set) => {
  await Api.get('brands/',credentials).then(function (response) {
      console.log(response.data)
      nav.push('Home')
  })
    .catch(function (error) {
      console.log(error);
      set(1)
    });
}

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
  await Api.post('Valid/',credentials).then(function (response) {
      console.log(response.data)
      nav.push('Home')
  })
    .catch(function (error) {
      console.log(error);
      set(1)
    });
}


// this is Counter api

export const Counter =  async (credentials, nav , set) => {
  await Api.get('Valid/',credentials).then(function (response) {
      console.log(response.data)
      nav.push('Home')
  })
    .catch(function (error) {
      console.log(error);
      set(1)
    });
}