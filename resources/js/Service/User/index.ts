import { axiosApi } from "../AxiosInstance";

const userApi = {
  getAll: async () => await axiosApi.get(`/user`)
}

export { userApi }