import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../serviecs/apiservices';
import { useState } from 'react';


const UserTable = () =>{
    const [dataUsers, setDataUsers] = useState([
        {_id: "g", fullName: 23, email: "hn"},
        {_id: "h", fullName: 23, email: "hn"}
    ]);

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

   
    const loadUser = async() => {
        const res = await fetchAllUserAPI()
        //setDataUsers(res.data)
    }

    loadUser();

    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}
export default UserTable;