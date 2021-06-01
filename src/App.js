import React, { Component } from 'react';
import SingleItem from "./components/single_todo_item.jsx";
import todoList from "./data/todo_list"


class App extends Component {
    constructor(){
        super();
        this.state={
            todoList
        }
        this.handleChange=this.handleChange.bind(this)
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar">
                    <h1 style={{textAlign: "center"}}>TODO</h1>
                </nav>
                <div className="itemdiv-main"> 
                   {this.state.todoList.map(
                       (n)=>{
                           return (
                               <SingleItem
                                    key={n.id}
                                    id={n.id}
                                    discription={n.discription}
                                    finished={n.finished}
                                    handler={this.handleChange}
                                />
                           )
                       }
                   )}
                </div>
            </div>
         );
    }
    handleChange(id){
        console.log(`Item ${id} Changed1`)
        this.setState(
            (prevState)=>{
                prevState.todoList[id-1].finished=!prevState.todoList[id-1].finished;
                return prevState.todoList;
            }
        )
    }

}
 
export default App;