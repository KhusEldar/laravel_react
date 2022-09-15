import { Table } from "antd"
import { postApi } from "../../../Service"
import useSWR from "swr"


const PostTable = () => {

  const { data,mutate } = useSWR('getAllPosts',() => postApi.getAll())

  const dataColumns = [
    {
      key:'title',
      dataIndex:"title",
      title:"Название",
    },
    {
      key:'desc',
      dataIndex:"desc",
      title:"Описание"
    }
  ]

  return ( <Table columns={dataColumns} bordered size="small" loading={!!data}/>)
}

export { PostTable }