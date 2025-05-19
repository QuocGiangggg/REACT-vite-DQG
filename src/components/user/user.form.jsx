import { Button, Input, message, notification } from "antd";
import { useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../serviecs/apiservices";

const UserForm = () => {
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async ()=> {
      const res = await createUserAPI(fullName, email, password, phone)
      console.log(">>check res: ", res);
      if(res.data){
          notification.success({
        message:"create user",
        description: "Tạo user thành công !"
      })
      }
      else{
        notification.error({
            message:"Error create user",
            description:JSON.stringify(res.message)
        })
      }
    }
    return (
        <div className = "user-form" style ={{ margin:"20px 0"}}>
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
                <div>
                    <Button
                     onClick={handleClickBtn}
                     type="primary">Create user </Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;