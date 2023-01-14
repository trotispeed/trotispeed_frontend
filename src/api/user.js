
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

