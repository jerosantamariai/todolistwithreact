import React, { useState, Component } from 'react';
import ListaToDo from './component/listaToDo';

class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    hanldeKeyDown = e => {
        if (e.keyCode == 13) {
            console.log(e.keyCode);
            console.log(e.target.value)
        }
    }

    nuevaTarea = () => {
        return this.hanldeKeyDown();
    }

    borrarTarea = () => {
        console.log("borrar esta tarea")
    }

    render() {
        return (
            <>

                <div className="container d-flex justify-content-center mt-5">
                    <div className="card col-md-8" >
                        <div className="card-header text-center bg-transparent"><h1>Lista de tareas por hacer</h1> </div>
                        <div className="card-body ">
                            <ListaToDo />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;