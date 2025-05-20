import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../serviecs/apiservices';
import { useEffect, useState } from 'react';


const UserTable = () =>{
    const [dataUsers, setDataUsers] = useState([

    ]);

    //empty array = run once
    useEffect(() => {
        console.log("run effect:111 ")
        loadUser();
    }, []);

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
        setDataUsers(res.data)
    }

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