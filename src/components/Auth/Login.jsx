import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const authUrl = "https://mighty-chamber-40377.herokuapp.com/api/login"
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const result = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
        console.log('result', result)
        if (result.message == 'user Authenicated') {
            // everythign went fine
            console.log('Got the token:', result.token);
            localStorage.setItem('token', result.token)
            history.push('/dashboard')

            toast.success('Success', {
                position: "top-right",
                autoClose: 5000,
            })
        } else {
            alert(result.error)
        }
    }

    return (
        <Fragment>
            <div id="mytask-layout" className="theme-indigo">
                {/* main body area */}
                <div className="main p-2 py-3 p-xl-5 ">
                    {/* Body: Body */}
                    <div className="body d-flex p-0 p-xl-5">
                        <div className="container-xxl">
                            <div className="row g-0">
                                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                                    <div style={{ maxWidth: '25rem' }}>
                                        <div className="text-center mb-5">
                                            <svg width="4rem" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </div>
                                        <div className="mb-5">
                                            <h2 className="color-900 text-center">My-Task Let's Management Better</h2>
                                        </div>
                                        {/* Image block */}
                                        <div className>
                                            <img src="../assets/images/login-img.svg" alt="login-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                                    <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{ maxWidth: '32rem' }}>
                                        {/* Form */}
                                        <form className="row g-1 p-3 p-md-4" >
                                            <div className="col-12 text-center mb-1 mb-lg-5">
                                                <h1>Sign in</h1>
                                                <span> Access to our dashboard.</span>
                                            </div>

                                            <div className="col-12">
                                                <div className="mb-2">
                                                    <label className="form-label">Email address</label>
                                                    <input type="email" className="form-control form-control-lg" placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-2">
                                                    <div className="form-label">
                                                        <span className="d-flex justify-content-between align-items-center">
                                                            Password

                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control form-control-lg" placeholder="***************"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 text-center mt-4">
                                                <a className="btn btn-lg btn-block btn-light lift text-uppercase" atl="signin"
                                                    onClick={handleSubmit}
                                                >SIGN IN</a>
                                            </div>
                                            <div className="col-12 text-center mt-4">

                                            </div>
                                        </form>
                                        {/* End Form */}
                                    </div>
                                </div>
                            </div> {/* End Row */}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Login