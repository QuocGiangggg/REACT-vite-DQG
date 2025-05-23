import { Button, Drawer } from "antd";
import { useState } from "react";
import { handleUploadFile } from "../../serviecs/apiservices";

const ViewUserDetail = (props) => {
    const{
        dataDetail,
        setdataDetail,
        isDetailOpen,
        setIsdataDetailOpen
    } = props;
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const handleOnChangeFile = (event) => {
        if(!event.target.files || event.target.files.length ===0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if(file){ 
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }
        const handleUpdateUserAvatar = async() => {
            //1: upload file
            const resUpload = await handleUploadFile(selectedFile, "avatar")
            console.log("check", resUpload)
            //2: update user
        }
    return( 
        <Drawer
            width={"40vw"} 
            title="Chi tiết User"
            onClose={() => {
                setdataDetail(null);
                setIsdataDetailOpen(false);
            }}
            open = {isDetailOpen}
        >
            {dataDetail? <>
                <p>ID: {dataDetail._id}</p>
                <br/>
                <p>Full Name: {dataDetail.fullName}</p>
                <br/>
                <p>Email: {dataDetail.email}</p>
                <br/>
                <p>Phone Number: {dataDetail.phone}</p>
                <br/>
                <p>Avatar:</p>
                <div style = {{
                    marginTop: "10px",
                    height: "150px",
                    width:"150px",
                    border :"1px solid #ccc"        
                }} >
                    <img
                        style ={{ height: "100%", witdh: "100%", objectFit: "contain"}}
                        src ={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
                </div>
                <div>
                    <label htmlFor='btnUpload' style= {{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "green",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} >
                        Upload Avatar
                    </label>
                    <input 
                        type = 'file' hidden id='btnUpload'
                        // onChange={handleOnChangeFile}
                        onChange = {(event) => handleOnChangeFile(event)}
                        />
                        
                </div>
            {preview &&
                <>
                 <div style = {{
                    marginTop: "10px",
                    height: "150px",
                    width:"150px",
                    marginBottom: "15px",       
                     }} >
                    <img
                        style ={{ height: "100%", witdh: "100%", objectFit: "contain"}}
                        src ={preview}/>
                  </div>
                     <Button 
                     type="primary" 
                     onClick={()=> handleUpdateUserAvatar()}
                     >Save</Button>
                </>
             }
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    )
}

export default ViewUserDetail;