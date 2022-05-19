import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const InputPart = () => {

    const user = useAuthState(auth)
    console.log(user[0].email)
    // the add task at on submit 
    const onSubmit = (e) => {
        e.preventDefault();

        //  user task info like name and Discription
        const userTask = {
            Name: e.target.tname.value,
            Discription: e.target.Discription.value,
            email: user[0].email
        }

        // sending the  task data to the database
        fetch('https://mighty-ravine-99930.herokuapp.com/Task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Task is Added')
                    e.target.tname.value = '';
                    e.target.Discription.value = '';
                } else {
                    toast.error('Task is not Added')
                }
            })

    };

    return (
        <div class="hero min-h-screen ">
            <div class="hero-content text-center">
                <div class="card flex-shrink-0 w-[450px] max-w-sm border-emerald-300 bg-base-200">
                    <form onSubmit={onSubmit}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Task Name</span>
                                </label>
                                {/* task name fild */}
                                <input type="text" placeholder="Task Name" name='tname' class="input input-bordered" />
                            </div>
                            <label class="label">
                                <span class="label-text font-bold">Task Discription</span>
                            </label>
                            {/* Task Discription fild*/}
                            <div class="form-control">
                                <textarea class="textarea textarea-info" placeholder="Discription" name='Discription'></textarea>
                            </div>
                            <div class="form-control mt-6">
                                {/* add task submit button  */}
                                <input type="submit" className='btn btn-primary' value="Add Task" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default InputPart;