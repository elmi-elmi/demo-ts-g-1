import axios from "axios";


interface Todo{
    id:number,
    title:string,
    completed:boolean
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(res=> {
    const todo = res.data as Todo
    console.log(todo)
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(ID,title,finished)


});

const logTodo = (id:number, title:string, completed:boolean)=>{
    console.log(`
    The Todo with ID: ${id},
    Has a title of: ${title},
    Is it finished?  ${completed}
    `)
}

