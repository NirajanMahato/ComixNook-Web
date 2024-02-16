import AdminSidebar from "./adminComponents/adminSidebar.jsx";

const AdminDashboard = () =>{

    // Get current date & Format the date
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return(
        <>
            <div className={"dashboard-main-div"}>
                <AdminSidebar/>
                <div className={"ml-60 px-6 pt-6 items-center"}>
                    <div className={"flex items-center justify-between"}>
                        <h1 className={"text-2xl text-gray-800 gilroy-bold"}>Hello, Nirajan</h1>
                        <h1 className={"text-gray-400 text-sm"}>{formattedDate}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard