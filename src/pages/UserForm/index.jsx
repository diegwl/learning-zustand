import React from "react";
import useUserStore from "../../stores/user";
import { useState } from "react";
import "./styles.css";

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const addUser = useUserStore(state => state.addUser);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        addUser({
            name,
            email
        })
    };
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="Nome" value={name} onChange={handleChangeName}/>
                <input name="email" placeholder="Email" value={email} onChange={handleChangeEmail}/>
                <button type="submit" >Create User</button>
            </form>
        </div>
    );
}

export default UserForm;