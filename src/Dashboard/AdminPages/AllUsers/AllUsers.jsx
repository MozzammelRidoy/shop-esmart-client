import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure(); 
    
    
    const {data : users = [], isPending} = useQuery({
        queryKey : ['users'],
        queryFn : async ()=> {
            const res = await axiosSecure.get('/users')
            return res.data; 
        }
    })


    
    return ( 
                <div>
            <h2 className="text-2xl md:text-4xl text-center py-4">All Users</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <td>#{user._id.slice(16, 24)}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.isBaned ? <span className="text-red-500">Banned</span> : <span className="text-green-500">Access</span>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;