import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI, updateUserAPI } from "../../serviecs/apiservices";


const UpdateUserModal = (props) => {
        const [fullName, setfullName] = useState("");
        const [id, setId] = useState("");
        const [phone, setPhone] = useState("");

        const { isModalUpdateOpen, SetIsModalUpdateOpen, 
                dataUpdate, setDataUpdate,
                loadUser
                } = props;
    
        useEffect(() =>{
            if(dataUpdate){
                setfullName(dataUpdate.fullName);
                setId(dataUpdate._id);
                setPhone(dataUpdate.phone);
            }
        },[dataUpdate])
        const handleSubmitBtn = async ()=> {
        const res = await updateUserAPI(id, fullName, phone)
            if(res.data) {
                    notification.success({
                        message:"update user",
                        description: "Cập nhật thành công !"
                })
                resetAndCloseModal();
                await loadUser();
            }
            else{
                notification.error({
                    message:"Error create user",
                    description:JSON.stringify(res.message)
                })
            }
            }

        const resetAndCloseModal = () => {
            SetIsModalUpdateOpen(false);
            setfullName("");
            setId("");
            setPhone("");
            setDataUpdate("");
          }
    return (
         <Modal
                title="Update a User"
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable = {false}
                okText={"Save"}
            >
                 <div style = {{display:"flex", gap: "15px", flexDirection: "column"}}>
                    
                     <div>
                    <span>ID</span>
                    <Input
                        value={id}  
                        disabled
                    />
                 </div>
                    <div>
                        <span>FullName</span>
                        <Input 
                            value={fullName}
                            onChange={(event)=>{console.log(setfullName(event.target.value))}}
                        />
                 </div>
                <div>
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(event) => {console.log(setPhone(event.target.value))}}
                    />
                    </div>
                </div>
            </Modal>
    )
}

export default UpdateUserModal;