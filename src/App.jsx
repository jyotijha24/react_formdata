import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Card from "./Card";

function App()
{
  let {register,handleSubmit,reset}=useForm();
  let [User,setuser]=useState([]);
  function uploaddata(data)
  {
    setuser([...User,data])
    reset();
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit(uploaddata)}>
      <input type="text" {...register('image')} placeholder="image"/>
      <input type="text" {...register('name')} placeholder="enter name"/>
    <input type="email" {...register('email')} placeholder="enter email"/>
      <input type="submit" value="submit"/>
    </form>
    <div className="mx-auto flex gap-2 flex-wrap h-screen w-full items-center justify-center">
    {
     User.length>0 ? User.map((details)=>{ return <Card imge={details.image} name={details.name} email={details.email}/> }):<h1>no user</h1>
   
    } 
    </div>
    </>

  )
}
export default App;