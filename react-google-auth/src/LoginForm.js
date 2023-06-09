import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { projectId, auth, signInWithGoogle } from "./Firebase";

export const LoginForm = (props) => {
    const loginImageURL = process.env.PUBLIC_URL + "/btn_google_signin_light_normal_web.png";
    return (

        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/assets/logo.png" alt="hyper" height={200} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

                    <div className="flex align-items-center justify-content-between mb-6">
                        <div className="flex align-items-center">
                            <Checkbox id="rememberme" className="mr-2" />
                            {/* onChange={e => setChecked(e.checked)} checked={checked} */}
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                    </div>
                    <Button label="Sign In" icon="pi pi-user" className="w-full" />
                    <div className="text-center text-600 font-medium mt-4 mb-4">Or</div>
                    <input type="image" alt="Sign in with Google"
                        onClick={signInWithGoogle} src={loginImageURL} />
                </div>
            </div>
        </div>
    );
};