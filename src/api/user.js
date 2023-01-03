
import Api from './api';


// Passing configuration object to axios

export const Login =  async (credentials, nav) => {
    await Api.post('register/',credentials).then(function (response) {
        console.log(response.data)
        nav.push('Home')
    })
        
      .catch(function (error) {
        console.log(error);
      });

}

