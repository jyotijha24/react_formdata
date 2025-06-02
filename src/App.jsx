import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function App()
{
    let {register,handleSubmit}=useForm();
function submitdata(data)
{
  console.log(data);
}

  return (
    <>
    <div  className="w-96 mx-auto border mt-56">
      {/* <form action="" onSubmit={handleSubmit(data=>console.log(data))}> */}
      <form action="" onSubmit={handleSubmit(submitdata)}>
      <input type="text" {...register('name')} placeholder="enter your name" />
      <input type="email" {...register('email')} placeholder="enter your email" />
      <input type="submit" value="submit"/>
      </form>
    </div>
    </>
  )
}
export default App;