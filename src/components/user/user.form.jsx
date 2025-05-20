import { Button, Input, message, notification, Modal } from "antd";
import { useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../serviecs/apiservices";

const UserForm = () => {
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
      setIsModalOpen(false)
      }
      else{
        notification.error({
            message:"Error create user",
            description:JSON.stringify(res.message)
        })
      }
    }


    return (
        <div className = "user-form" style ={{ margin:"10px 0"}}>
            <div style = {{display:"flex", gap: "15px", flexDirection: "column"}}>
                <div style = {{ display: "flex", justifyContent: "space-between"}} >
                    <h3>Table Users</h3>
                    <Button

                     onClick={() => setIsModalOpen(true)}
                     type="primary">Create user </Button>
                </div>

            </div>
            <Modal
                title="Create User"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable = {false}
                okText={"Create"}
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
        </div>
    )
}

export default UserForm;