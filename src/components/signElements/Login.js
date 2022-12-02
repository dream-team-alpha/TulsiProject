


import './Login.css'
import Logo from '../sigin-images/Tulsi-Logo.png'
import facebook from '../sigin-images/facebook.png';
import google from '../sigin-images/google.png';
import LoginImg from '../sigin-images/Login-image.png';


import Input from './input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';

const schema = yup.object({
    username: yup.string().required("Enter your Name"),
    phoneNumber: yup.string().required("Enter your Mobile Number"),
    email: yup.string().min(6, "Enter a valid email"),
    password: yup.string().min(6, "Password must be 6 characters"),
    conformPassword: yup.string().oneOf([yup.ref("password")],"Password must be match"),
})


function Login() {

  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  

    return (
    
    <section className='login-section'>
        <div className="container-login">
        <div className="row row-item">
            <div className="col-md-4 line">


                <div className="login-form-wraper">
                    <div className="login-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="welcome">
                    <h1>Welcome <br /> Back !</h1>
                </div>

                    <div className='loin-form-container'>
                            <form onSubmit={handleSubmit()}>
                                <div className="mb-3">
                                    <Input
                                        id = "email"
                                        label="Email"
                                        type="email"
                                        placeholder = "Enter Email"
                                        register = {{...register("email")}}
                                        errorMessage = { errors.email?.message}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Input
                                        id = "password"
                                        label="Password"
                                        type="password"
                                        placeholder = "Enter Password"
                                        register = {{...register("password")}}
                                        errorMessage = { errors.password?.message}
                                    />
                                </div>
                                <p class="h6 reset"><a href='/'>Forgot your password?</a></p>
                                
                                <button id='log-btnxxx'>Login</button>

                                <div className='button-class'>
                                    <button className ="login-child"><img src={facebook} alt="" />Facebook</button>
                                    <button className ="login-child"><img src={google} alt="" />Google</button>
                                </div>
                                
                                <p class="h6 ask"><a to='/'>Don't have an account?</a></p>

                                <Link to='/signUp' className='create-account'>Create account</Link>
                            </form>
                    </div>
                </div>
            </div>


            <div className="col-md-8 line2">
                <img src={LoginImg} alt="image Loading" />
            </div>
        </div>
    </div>
    </section>
    );
}

export default Login;









