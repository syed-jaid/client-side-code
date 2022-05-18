import React from 'react';
import { toast } from 'react-toastify';

const InputPart = () => {

    // the add task at on submit 
    const onSubmit = (e) => {
        e.preventDefault();

        //  user task info like name and Discription
        const userTask = {
            Name: e.target.tname.value,
            Discription: e.target.Discription.value
        }

        // sending the  task data to the database
        fetch('http://localhost:5000/addTask', {
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
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="card flex-shrink-0 w-[450px] max-w-sm shadow-2xl bg-base-100">
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