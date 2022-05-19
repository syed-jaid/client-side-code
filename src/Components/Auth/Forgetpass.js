import React from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Spnnier from '../ForAll/Spnnier';

const Forgetpass = () => {

    const [updatePassword, updating, error] = useUpdatePassword(auth);

    // react form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    const onSubmit = async data => {
        await updatePassword(data.email);
        console.log(error, updating)
    };

    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    if (updating) {
        return <Spnnier></Spnnier>;
    }

    return (
        <div className='flex h-screen justify-center h-full my-[50px]'>
            <div className="card  w-full max-w-sm shadow-2xl ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <h1 className='text-center text-xl font-semibold mb-[20px]'>Forget Password</h1>

                        <div className="form-control">
                            {/* email  */}
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Requierd"
                                },
                                pattern: {
                                    value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                    message: "provid a valid Email"
                                }
                            })}
                                type='email' className="input input-bordered" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red]">{errors.email.message}</span>}
                            </label>
                            <small className=''>
                                {signInError}
                            </small>

                            {/* login btn  */}
                            <div className="form-control mt-[18px]">
                                <input className="btn btn-accent text-white" type="submit" value="Send Email" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Forgetpass;