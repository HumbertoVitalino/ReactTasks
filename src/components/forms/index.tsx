import React from 'react';
import Button from '../button';
import style from './forms.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid'


class Forms extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    constructor(props: any) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    state = {
        task: '',
        time: '00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(oldTasks => 
            [...oldTasks, 
                {
                    ...this.state,
                    selected: false,
                    done: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>add a new task</label>
                    <input
                        type='text'
                        name='task'
                        value={this.state.task}
                        onChange={event => 
                            this.setState({
                                ...this.state, task: event.target.value
                            })
                        }
                        id='task'
                        placeholder='what do you want to study?'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>Time</label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        value={this.state.time}
                        onChange={event => 
                            this.setState({
                                ...this.state, time: event.target.value
                            })
                        }
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Button type="submit">Add</Button>
            </form>
        )
    }
}


export default Forms;