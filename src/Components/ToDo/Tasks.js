
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Tasks.css'

const Tasks = () => {

    const user = useAuthState(auth)

    const { data: tasks, refetch } = useQuery('tasks', () => fetch(`http://localhost:5000/Task?email=${user[0]?.email}`)
        .then(res => res.json()))

    // delete the tesk 
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

    //    after Complete the task 
    const CompleteTask = (props) => {

        const url = `http://localhost:5000/Task/${props}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    refetch()
                    toast('The Task Is Completed')
                }
            })
    }

    return (
        <div className='all-task-div p-[15px]'>

            {
                tasks?.map(task => <div key={task._id} class="card w-full bg-neutral text-neutral-content mx-auto">
                    <div class="card-body items-center text-center">
                        {
                            task?.done === 'done' ? <h2 class="card-title line-through">{task.Name} </h2> :
                                <h2 class="card-title "> {task.Name} </h2>
                        }

                        <p>{task.Discription}</p>
                        <div class="card-actions justify-end">
                            {
                                task?.done === 'done' ? <button class="btn btn-primary" >Completed</button> :
                                    <button class="btn btn-primary" onClick={() => CompleteTask(task._id)}>Complete</button>
                            }
                            <button class="btn btn-outline btn-error" onClick={() => TaskDelete(task._id)}>Delete</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Tasks;