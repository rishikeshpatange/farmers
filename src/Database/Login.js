import React from 'react';
import { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();


    const [user, SetUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        SetUser(currentUser)

    })

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
            navigate("/")
        } catch (error) {
            console.log(error.message);
            alert("error")

        }

    }

    const logout = async () => {

        await signOut(auth);

    }

    return (
        <div className='login'>
            <div className='login_container'>
            <h1 className="header__logo">DaresAgro</h1>
                {/* <h1>Log in</h1> */}
                <div className='create_account'>
                    <input placeholder='Email' onChange={(event) => {
                        setLoginEmail(event.target.value)
                    }} />
                    <input onChange={(event) => {
                        setLoginPassword(event.target.value)
                    }} placeholder='Password' />
                    <button onClick={login}>Login</button>
                    <Link to='/Register' >
                    <p>Don't have a account? <span>Sign up</span></p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Login

{/* <div className="logout_container">
                <h1>User login:{user?.email}</h1>
                <button onClick={logout}>Logout</button>
            </div> */}