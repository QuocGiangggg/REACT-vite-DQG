import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../serviecs/apiservices';

const UserPage=()=>{
        const [dataUsers, setDataUsers] = useState([
    
        ]);
    
        //empty array = run once
        useEffect(() => {
            loadUser();
        }, []);

        const loadUser = async() => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }


    return (
        <div style ={{padding: "20px"}}>
            <div>
                <UserForm loadUser = {loadUser} />
                <UserTable 
                    dataUsers = {dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </div>
    )
}

export default UserPage;