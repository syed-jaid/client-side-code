import React from 'react';
import { Link } from 'react-router-dom';

const GetStart = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello Sir</h1>
                    <h1 class="text-3xl font-bold">The simplest way to keep your tasks arranged will .</h1>
                    <Link to='addtask'> <button class="btn btn-primary mt-[15px]">Add Task</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GetStart;