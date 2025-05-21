import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const{
        dataDetail,
        setdataDetail,
        isDetailOpen,
        setIsdataDetailOpen
    } = props;
    return(
        <Drawer title="Chi tiết User"
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