import { useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../serviecs/apiservices";


const UpdateUserModal = () => {
        const [fullName, setfullName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phone, setPhone] = useState("");
    
        const[isModalOpen, setIsModalOpen] = useState(false);
            const handleSubmitBtn = async ()=> {
        const res = await createUserAPI(fullName, email, password, phone)
            if(res.data){
                    notification.success({
                        message:"create user",
                        description: "Tạo user thành công !"
                })
                resetAndCloseModal();
                //await loadUser();
            }
            else{
                notification.error({
                    message:"Error create user",
                    description:JSON.stringify(res.message)
                })
            }
            }

        const resetAndCloseModal = () => {
            setIsModalOpen(false);
            setfullName("");
            setEmail("");
            setPassword("");
            setPhone("");
          }

    return (
         <Modal
                title="Update a User"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable = {false}
                okText={"Save"}
            >
                 <div style = {{display:"flex", gap: "15px", flexDirection: "column"}}>
                    <div>
                        <span>FullName</span>
                        <Input 
                            value={fullName}
                            onChange={(event)=>{console.log(setfullName(event.target.value))}}
                        />
                 </div>
                 <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => {console.log(setEmail(event.target.value))}}
                    />
                 </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => {console.log(setPassword(event.target.value))}}
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