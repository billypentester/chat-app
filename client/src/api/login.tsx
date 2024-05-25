import axios from "axios";

const login = async(data:any) => {
    const { data: response } = await axios.post('http://localhost:3000/auth/login', data);
    return response;
}

export { login }