import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";



export const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:18080/api/auth/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                //'Authorization': localStorage.getItem('userToken')
            },
            body: JSON.stringify({
                username: username,
                password: pass
            })
        })
            .then((res: Response) => {
                console.log(pass);
                return res.json();
            })
    }

    const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:18080/api/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                //'Authorization': localStorage.getItem('userToken')
            },
            body: JSON.stringify({
                username: username,
                password: pass
            })
        })

            .then((res: Response) => {
                console.log(res);
                if (res.status === 200) {
                    navigate("/mainPage");
                }
                return res.json();
            })
            .then((data: any) => {
                localStorage.setItem('userToken', data.accessToken);
                localStorage.setItem('username', data.username);
                localStorage.setItem('avatarUrl', data.avatarURL);
            });
    }

    const switchForm = () => {
        setIsSignIn(!isSignIn);
    }



    if (isSignIn) {
        return (
            <div className='p-5 bg-dark header'>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header"><strong>Sign In</strong></div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmitLogin}>
                                        <div className="form-group row">
                                            <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>
                                            <div className="col-md-6">
                                                <input type="text" id="username" className="form-control" required onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3"></div>
                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" required onChange={(e) => setPass(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 offset-md-4 d-flex signIn-gap">
                                                <button type="button" className="btn btn-link" onClick={switchForm}>
                                                    Register
                                                </button>
                                                <button type="submit" className="btn btn-primary ml-3">
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='p-5 bg-dark header'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header"><strong>Register</strong></div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmitRegister}>
                                        <div className="form-group row">
                                            <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>
                                            <div className="col-md-6">
                                                <input type="text" id="username" className="form-control" required onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3"></div>
                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" required onChange={(e) => setPass(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 offset-md-4 d-flex signIn-gap signInButtonsWidth">
                                                <button type="button" className="btn btn-link" onClick={switchForm}>
                                                    Sign In
                                                </button>
                                                <button type="submit" className="btn btn-primary ml-3">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;