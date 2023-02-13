import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";
import axios from "axios";
export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({});
    const [users, setUsers]=useState([]);
    const [user, setUser] = useState([]);
    const [group, setGroups] = useState([]);



    let token = localStorage.getItem("token");
    let id;
    if (token) {
        const { _id } = jwtdecode(token);
        id = _id;
    }

    const getAllUsers = async() => {
        try{
            const res= await axios.get("http://localhost:3500/api/users"+id )
            
            setUsers(res.data);
        }
        catch (error){
            console.log(error.message)

        }
    }

    const getUserInfoById = async() => {
        try{
            const res = await axios.get(`http://localhost:3500/api/users/byId/${users.userId}/${users.studentId}` +id)
            setUsers (res.data);
        }

        catch(error){
            console.log(error.message)
        }
    }

    const getUserByGroup = async() => {
        try{
            
            const res = await axios.get(`http://localhost:3500/api/users/byGroup/${user.userId}/${user.group}` +id)
            setGroups = res.data;
        }
        catch(error){
            console.log(error.message);
        }
    }

    const updateUserById = async() => {
        try{
            const data = user;
            const res = await axios.post(`http://localhost:3500/api/users/${user.userId}`+id, data);
            setUser(res.data);
        }
        catch(error){
            console.log(error.message)
        }
    }

    const updateUserInfo = async() => {
        try{
            const data = user;
            const res = await axios.patch(`http://localhost:3500/api/users/${users.userId}/:${users.studentId}`+id, data);
            setUser(res.data);
        }
        catch(error){
            console.log(error.message)
        }

    }




    return(
       
            <UserContext.Provider
            value={{
                loginData,
                setLoginData,
                getAllUsers,
                users,
                getUserInfoById,
                user,
                setUser,
                getUserByGroup,
                group,
                setGroups,
                updateUserById,
                updateUserInfo,
            }}
            >
                {children}
                </UserContext.Provider>
        
    )
}

export default UserContextProvider;