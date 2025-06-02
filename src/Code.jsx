// import { useRef } from "react";

// function App()
// {
//   let name=useRef();
//   let email=useRef();
//   function submitdata(event)
//   {
//     event.preventDefault();
//     console.log(name.current.value,email.current.value);
//     name.current.value="";
//     email.current.value="";

//   }
//   return (
//     <>
//     <div  className="w-96 mx-auto border mt-56">
//       <form action="" onSubmit={submitdata}>
//       <input type="text" ref={name} placeholder="enter your name" />
//       <input type="email" ref={email} placeholder="enter your email" />
//       <input type="submit" value="submit"/>
//       </form>
//     </div>
//     </>
//   )
// }
// export default App;


// below example is for controlled statement hai 
// isme hum usestate ka use karte hai jabki upper wala ke liye useref ka use kiye hainiche wala example
// mai state mai value save hota hai value prop se aata hai value={name} and onchnge se setname mai value
// store ho jata hai 


// import { useRef, useState } from "react";

// function App()
// {
//     let [name,setName]=useState("");
//     let [email,setemail]=useState("");
//     function submitdata(e)
//     {
//       e.preventDefault();
//         console.log(name,email)
//         setName("");
//         setemail("");
//     }

//   return (
//     <>
//     <div  className="w-96 mx-auto border mt-56">
//       <form action="" onSubmit={submitdata}>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" />
//       <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter your email" />
//       <input type="submit" value="submit"/>
//       </form>
//     </div>
//     </>
//   )
// }
// export default App;




// ye ek thid party forms humlog use karte hai formdata ko store ke liye
// import { useRef, useState } from "react";
// import { useForm } from "react-hook-form";

// function App()
// {
//     let {register,handleSubmit}=useForm();
// function submitdata(data)
// {
//   console.log(data);
// }

//   return (
//     <>
//     <div  className="w-96 mx-auto border mt-56">
//       {/* <form action="" onSubmit={handleSubmit(data=>console.log(data))}> */}
//       <form action="" onSubmit={handleSubmit(submitdata)}>
//       <input type="text" {...register('name')} placeholder="enter your name" />
//       <input type="email" {...register('email')} placeholder="enter your email" />
//       <input type="submit" value="submit"/>
//       </form>
//     </div>
//     </>
//   )
// }
// export default App;