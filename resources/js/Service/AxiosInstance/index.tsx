import axios, { AxiosError } from "axios";

const axiosApi = axios.create({
  baseURL:'http://localhost:8000/api',
  withCredentials:true
})

axiosApi.interceptors.response.use(
  response => response,
  (error:AxiosError) => {
    if(error.response?.status === 401){
      window.location.href = '/login'
    }
  }
)

export { axiosApi }