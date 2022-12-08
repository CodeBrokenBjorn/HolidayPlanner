import axios from "axios";
const API_URL = "https://localhost:8900";

class AuthCheck{

    constructor(username, password){
        this.state ={
            username: username,
            password: password
        }

        this.login = this.login.bind(this);
    }
    login(username, password) {
        return axios
        .post(API_URL + "/login", {
            username,
            password
        })
        .then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user" , JSON.stringify(response.data));

            }
            return console.log(response.data);

        });

    }
    // to log out
    logout() {
        localStorage.removeItem("user");
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    render(){
        return(
            this.props.login(this.username, this.password)
        )
    }
}
export default AuthCheck;