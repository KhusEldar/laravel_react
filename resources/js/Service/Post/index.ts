import { axiosApi } from "../AxiosInstance";


const postApi = {
  getAll: async () => await axiosApi.get('/post')
}

export { postApi }