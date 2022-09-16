import { axiosApi } from "../AxiosInstance";


const postApi = {
  getAll: async () => await axiosApi.get('/post'),
  createPost: async (post:any)=> await axiosApi.post('/post', post).then(res => res).catch(res => res)
}

export { postApi }