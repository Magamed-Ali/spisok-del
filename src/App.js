import React, {useState} from 'react';
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";

function App(props) {
    const  [todos, setTodos] = useState([
        {text: "Продать квартиру ",
        favorite: false,
        },
        {text: "Купить бананы ",
            favorite: false,
            id: 0
        },
        {text: "Выучить уроки по JS ",
            favorite: false,
            id: 1
        },
        {text: "Выучить React",
            favorite: false,
            id: 2
        }
    ]);
    const [text, setText] = useState("");

    const deleteTodo = (deletTodo)=> {
        const filtered = todos.filter((to,index)=>{
            if(index === deletTodo){
                return false
            }
            return true
        });
       return  setTodos(filtered);
    }
    const makeFavorite = (i) => {
        const newTodos = todos.map((item,index) => {
           if(index === i){
               return {
                   ...item,
                   favorite: !item.favorite
               }
           }
           return item;
        });

        return  setTodos(newTodos);
    }



    const addTodo = () => {
        setTodos([{
            text: text,
            Favorite: false
        }, ...todos]);
        setText("")
    }
    return (
        <div className="app">
          <Header/>
          <Form text={text} setText={setText} addTodo={addTodo}/>
          <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
        </div>



    );
}

export default App;