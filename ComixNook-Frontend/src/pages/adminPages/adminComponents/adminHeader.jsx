import "./adminHeader.css"

const AdminHeader = () =>{
    return(
        <>
            <header className={"dashboard-header"}>
                <h1>Dashboard</h1>

                <div className={"user-wrapper"}>
                    <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} alt={"N"}/>
                    <div className={"user-details"}>
                        <h4>Admin</h4>
                        <small>Super admin</small>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AdminHeader