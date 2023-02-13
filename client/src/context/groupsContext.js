import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";
import axios from "axios";
export const GroupsContext = createContext();

const GroupsContextProvider = () => {
    const [groups,setGroups] = useState([]);


    let token = localStorage.getItem("token");
    let id;
    if (token) {
        const { _id } = jwtdecode(token);
        id = _id;
    }

    const getAllGroups = async() => {
        try{
            const res= await axios.get("http://localhost:3500/api/groups"+id )
            setGroups(res.data);
        }
        catch (error){
            console.log(error.message)

        }
    }

    const uplaodGroup = async() => {
        try{
            const res = await axios.post(`http://localhost:3500/api/groups/${groups.groupId}`+ id);
            setGroups(res.data);
        }
        catch(error){
            console.log(error.message)
        }
    }

    const deleteGroup = async() => {
        try{
            const res = await axios.delete(`http://localhost:3500/api/groups/${groups.groupId}` + id)
            setGroups(res.data);

        }
        catch(error){
            console.log(error.message)
        }
    }

    return(
        <div>
            <GroupsContext.Provider
            value={{
                getAllGroups,
                groups,
                setGroups,
                uplaodGroup,
                deleteGroup



            }}
            />
        </div>
    )

}

export default UserGroupsProvider;