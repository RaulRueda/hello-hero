//Libraries
import axios from "axios";

//Configuration
import { loginUrl } from "../config.json";

const Login = async (email, password) => {
  return await axios
    .post(loginUrl + "login", {
      email: email,
      password: password
    })
    .then(function(response) {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        return true;
      } else {
        return false;
      }
    })
    .catch(function(error) {
      console.log(error);

      return false;
    });
};

export default Login;
