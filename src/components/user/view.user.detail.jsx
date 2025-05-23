import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const{
        dataDetail,
        setdataDetail,
        isDetailOpen,
        setIsdataDetailOpen
    } = props;
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
                <div>
                    <img
                        height={150} width={150}
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
                    <input type = 'file' hidden id='btnUpload' />
                </div>
                {/* <Button type="primary" >
                    Upload Avarta
                </Button> */}
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