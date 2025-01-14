import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import UsersOptions from "../../components/userOptions.jsx/UsersOptions";

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        {
            firstName: "Raul",
            lastName: "Santos",
            email: "raul.soutos96@gmail.com",
            role: "ADMIN",
            active: true,
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/api/v1/admin/customers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dashBoard" style={{ display: "flex" }}>
            <div>
                <Sidebar />
            </div>
            <div>
                <UsersOptions users={users} />
            </div>
        </div>
    );
};

export default AdminDashboard;
