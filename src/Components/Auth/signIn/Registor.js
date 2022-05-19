import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Auth.css'
// import imggoogle from '../../img/google.icon/2.png'
import auth from '../../../firebase.init';
import Spnnier from '../../ForAll/Spnnier';

const Registor = () => {

    // all usestates are here
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setcnfirmpassword] = useState('')
    const [passworderror, setpassworderror] = useState('')
    const [uperrors, setuperror] = useState('')
    const [errors, seterror] = useState('')

    // location 
    const naviget = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    // firebase hook call
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // update user data
    const [updateProfile,
        updating,
        Error
    ] = useUpdateProfile(auth);

    // gooogle and git hub
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // sign up form 
    const heandelSignInSignUp = async (e) => {
        e.preventDefault();
        setname(e.target.name.value)
        setemail(e.target.email.value);
        setpassword(e.target.password.value);
        setcnfirmpassword(e.target.CofrimPassword.value);
        if (confirmpassword === password) {
            await createUserWithEmailAndPassword(email, password)
            seterror('')
            setuperror('')
            setpassworderror('')
            await updateProfile({ displayName: name })
            if (loading) {
                return <Spnnier></Spnnier>

            };

            if (error) {
                seterror(error.message)

            }
        }
        else {
            seterror(error?.message)
            setpassworderror('Your password and confirm password are not maching')
        }

        if (user) {
            naviget(from, { replace: true })
        }
    };

    return (
        <div>
            <div className='form-main-div'>
                <h1 className='form-title'>Please Sign Up</h1>
                {/* all input filds  */}

                <form onSubmit={heandelSignInSignUp}>
                    <div className='all-inputfild-div '>
                        <div>
                            {/* input filds  */}
                            <input className='input-filds' type="name" name="name" placeholder='Enter Name' required />

                            <input className='input-filds' name="email" placeholder='Enter Email Id' required />

                            <input className='input-filds' name="password" placeholder='Enter Password' required />
                            <input className='input-filds' name="CofrimPassword" placeholder='Enter Cofrim Password' required />
                            <p className='w-75 ms-5 text-danger'>{passworderror}</p>
                            <p className='text-center text-danger'>{errors}{uperrors}</p>
                            <Link to='/login' className='mx-[50px] nav-link'>Already have an account</Link>
                            <div className='mx-[37px] mt-[10px]'>
                                <button class="btn btn-wide ">Sign Up</button>
                            </div>
                            <div className='or-part mt-3 mx-3'>
                                <hr />
                                <h5 className='text-or'>or</h5>
                                <hr />
                            </div>
                            <div onClick={() => {
                                signInWithGoogle()
                                    .then(() => {
                                        naviget(from, { replace: true })
                                    })
                            }}>
                                <div className='text-center btn btn-outline btn-success mx-[60px]'>Continue with Google</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registor;