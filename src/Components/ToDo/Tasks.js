import el from 'date-fns/esm/locale/el/index.js';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import './Tasks.css'

const Tasks = () => {

    const { data: tasks, refetch } = useQuery('tasks', () => fetch(`http://localhost:5000/Task`)
        .then(res => res.json()))


    const TaskDelete = (props) => {

        const url = `http://localhost:5000/Task/${props}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch()
                    toast('The Task Is Deleted')

                }
                else {
                    toast('The Task Is not Deleted')
                }
            })
    }

    return (
        <div className='all-task-div p-[15px]'>

            {
                tasks?.map(task => <div class="card w-full bg-neutral text-neutral-content mx-auto">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title "> {task.Name} </h2>
                        <p>{task.Discription}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Complete</button>
                            <button class="btn btn-outline btn-error" onClick={() => TaskDelete(task._id)}>Delete</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Tasks;