import React from 'react';
import './Create.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import { Link, useNavigate } from "react-router-dom"

function Create() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const navigate = useNavigate();

    const [user, SetUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        SetUser(currentUser)

    })



    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
            navigate("/Login")
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {

        await signOut(auth);

    }



    return (
        <div className='login'>
            <div className="login_container">
                <p>START FOR FREE</p>
                <h1>Create new account</h1>
                <div className="create_account">
                    <input placeholder='Email@gmail.com' onChange={(event) => {
                        setRegisterEmail(event.target.value)
                    }} />
                    <input placeholder='Password (min 8 character)' onChange={(event) => {
                        setRegisterPassword(event.target.value)
                    }} />
                    <button onClick={register}>Sign up</button>

                    <Link to='/Login' >
                    <p>Already have an Account? <span>Sign in</span></p>
                    </Link>
                </div>

            </div>




        </div>
    )
}

export default Create


{/* <div className="logout_container">
<h1>User login:{user?.email}</h1>
<button onClick={logout}>Logout</button>
</div> */}