import logo from './logo.svg';
import './App.css';
import './index.css';
import React, {useState} from "react";

interface Data {
    name: string,
    lastname: string,
    age: number,
    id: number,
}

const initialData = {
    name: '',
    lastname: '',
    age: 0,
    id: 0
}
function App() {
  const [data, setData] = useState<Data>(initialData)

  const [id, setId] = useState<number>(0)
  const handleChange = (e: any) => {
    setData({...data, [e.target.name]: e.target.value, id: id});
    setId(prev => prev + 1)
  }

  const [persons, setPersons] = useState<Data[]>([])
  const handleCreate = (e: any) => {
    e.preventDefault();
    setPersons([...persons, data]);
  }

  const handleDelete = (item:Data) => {
    console.log(item)
      setPersons(persons.filter((p) => item.id !== p.id))
  }

  return (
      <>
        <form action="">
          <input type="text" onChange={handleChange} name={'name'} value={data.name} placeholder={"name"}/>
          <input type="text" onChange={handleChange} name={'lastname'} value={data.lastname} placeholder={"lastname"}/>
          <input type="text" onChange={handleChange} name={'age'} value={data.age} placeholder={"age"}/>
          <button onClick={handleCreate}> Добавить </button>
        </form>

        <div>
          {persons.map((item)=>{
            return (
                <div className={'flex gap-4 mt-[20px]'}>
                  <p>{item.name}</p>
                  <p>{item.lastname}</p>
                  <p>{item.age}</p>

                  <button onClick={()=>handleDelete(item)}>Удалить</button>
                </div>
            )
          })}
        </div>
      </>
  )
}

export default App;
