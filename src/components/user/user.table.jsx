import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../serviecs/apiservices';



const UserTable = (props) =>{
    const { dataUsers } = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

   

    console.log("rerender 000")

    return (
        <Table 
        columns={columns} 
        dataSource={dataUsers}
        rowKey={"_id"} 
         />
    )
}
export default UserTable;