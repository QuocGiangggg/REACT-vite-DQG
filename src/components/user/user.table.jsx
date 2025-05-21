import { notification, Popconfirm, Space, Table, Tag } from 'antd';
//import { fetchAllUserAPI } from '../../serviecs/apiservices';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUSerAPI } from '../../serviecs/apiservices';



const UserTable = (props) =>{
    const { dataUsers, loadUser } = props;

    const[isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
    const[dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setdataDetail] = useState(null);
    const [isDetailOpen, setIsdataDetailOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
             render: (_, record) => {
                return(
                    <a href ='#' 
                        onClick={()=> {
                            setdataDetail(record);
                            setIsdataDetailOpen(true);
                    }}
                    > {record._id}</a>
                )
             }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style ={{display: "flex", gap: "20px" }}>
                   <EditOutlined  
                        onClick={()=>{
                            setDataUpdate(record);
                            SetIsModalUpdateOpen(true);
                            }}
                         style ={{cursor: "pointer", color: "green"}} />
                         <Popconfirm
                            title = "Xóa người dùng"
                            description = "Bạn chắc chắn xóa user này ?"
                            onConfirm={()=> handleDeleteUser(record._id)}
                            okText="Yes"
                            cancelText="No"
                            placement="left"
                         >
                   <DeleteOutlined style ={{cursor: "pointer", color: "red"}} />
                   </Popconfirm>
                </div>
        
            ),
        },
    ];

   const handleDeleteUser = async(id) =>{
    const res = await deleteUSerAPI(id);
    if(res.data){
        notification.success({
            message:"Delete user",
            description: "Xoas user thành công"
        })
        await loadUser();
    }else{
        notification.error({
            message: "Error delete user",
            description: JSON.stringify(res.message)
        })
    }

   }


    return (
        <>
            <Table 
                columns={columns} 
                dataSource={dataUsers}
                rowKey={"_id"} 
            />
            <UpdateUserModal
                isModalUpdateOpen ={isModalUpdateOpen}
                SetIsModalUpdateOpen={SetIsModalUpdateOpen}
                dataUpdate = {dataUpdate}
                setDataUpdate = {setDataUpdate}
                loadUser = {loadUser}
            />
            <ViewUserDetail 
                dataDetail={dataDetail}
                setdataDetail = {setdataDetail}
                isDetailOpen ={isDetailOpen}
                setIsdataDetailOpen = {setIsdataDetailOpen}
            />
        </>
    )
}
export default UserTable;