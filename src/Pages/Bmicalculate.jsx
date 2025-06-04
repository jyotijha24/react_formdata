import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Bmicalculate() {

    // let [Bmi,setBmi]=useState([]);
    let [category,setcategory]=useState("") ;
    let [showresult,setshowresult]=useState(false);
    let[age,setage]=useState(false);
    let[formdata,setformdata]=useState({
        "bmi":'',
        "bmiprime":''
    });
    let {register,
        handleSubmit,
        reset,
        formState: { errors }
       }=useForm();
    function checkbmi(data)

    {
        let h=data.height;
        let w=data.weight;
        let hunit=data.heightop;
        let wunit=data.heightop;
        let agedata=data.age;
        console.log(hunit);

         if(h=="" || w =="")
        {
            // alert("please enter height and weight");
            
        } 
    if(hunit==="cm")
    {
         h=h/100;
    }
    else if(hunit==="m")
    {
        h=h;
    }
    else if(hunit==="inch")
    {
        h=h* 0.0254;
    }
    else if(hunit==="feet")
    {
        h=h* 0.3048;
    }
    


    if(wunit==="kg")
    {
        w=w;
    }
    else if(wunit==="gram")
    {
        w=w/1000;
    }
    else if(wunit==="lb")
    {
        w=w * 0.453592;
    }
    else if(wunit==="st")
    {
        w=w * 6.35029;
    }
    console.log(h);
    console.log(w);
        let bmiresult=w/(h*h);
         let bmiprimeresult=bmiresult/25;
       setformdata((prev)=>({
        ...prev,
        bmi:(bmiresult.toFixed(2)),
        bmiprime:(bmiprimeresult.toFixed(2))

       }));
      
       
    // console.log(category);
    if(bmiresult<=18.5)
    {
        setcategory("Underweight");

    }
    else if(bmiresult>18.5 && bmiresult<=24.9)
    {
        setcategory("Normal");
    }
    
    else if(bmiresult>=25 && bmiresult<=29.9)
        {
            
            setcategory("Overweight");
        }
    else if(bmiresult>=30 && bmiresult<=34.9)
            {
                setcategory("Obesity Class I");
            }
    else if(bmiresult>=35 && bmiresult<=39.9)
        {
            setcategory("Obesity Class II");
        }
    else if(bmiresult>=40)
        {
        setcategory("Obesity Class III");
        }    
       setshowresult(true)  ;          
    //   let bmiresultdiv=document.getElementById("bmiresultdiv") ;
    //   if(bmi)
    //   {
    //     bmiresultdiv.style.display="block";   
    //   }
      
    // document.getElementById("height").value="";
    // document.getElementById("weight").value="";
    // bmiresult="";
    // console.log(bmi);
    // console.log("overweight");
        
         if(bmiresult)
    {
        
        
        if(agedata<18)
            {
                setage("Use CDC Growth Charts, consult a doctor");
            }
            else if(agedata>=18 && agedata<=59)
            {
                 setage("Uses standard BMI categories");
            }
            else if(agedata>=60)
            {
                setage("Adjusts the interpretation, allowing slightly higher BMI.");
            }
    }


    }


  return (
    <>
      <form action="" onSubmit={handleSubmit(checkbmi)}>
       <div className="flex justify-center gap-4">
    <div className="w-96 h-auto  mt-30 border-2 text-center border-neutral-300  rounded-xl">
        <h1 className="font-bold mt-2 text-center">BMI Calculator</h1>
        <div className="mt-2 ">
            <p className="text-neutral-600 font-semibold text-left ml-5">Height</p>
            <p id="error_height"   className="text-red-500 text-sm text-left ml-5 hidden ">please enter your height first</p>
            <div className="bg-blue-300 w-[90%] border-0 ml-5 flex mt-2 rounded-xl">
                {/* <!-- <input type="text"> --> */}
                 
        <input id="height" {...register("height", { required: 'Height is required' })} type="text " className="bg-blue-50 w-[90%]  inline -ml-0 h-9  border-gray-300 border-2 rounded-sm hover:border-blue-300 focus:ring-1 focus:ring-blue-600 focus:outline-none focus:bg-white pl-3 font-semibold"/>
            
            
        
        <select id="optionsh" {...register("heightop")} name="options" className="bg-blue-50 focus:border-none  border-gray-300 border-2 focus:bg-blue-100 ">
            
            <option value="cm">cm</option>
            <option value="m">(m)</option>
            <option value="inch">(inch)</option>
            <option value="feet">feet(ft)</option>
        </select>
    </div>
    {errors.height && <p className="text-red-500 text-sm">{errors.height.message}</p>}
    </div>

    <div className="mt-2 ">
        <p className="text-neutral-600 font-semibold text-left ml-5">Weight</p>
        <p id="error_weight"  className="text-red-500 text-sm text-left ml-5 hidden ">please enter your weight first</p>
        <div className="bg-blue-300 w-[90%] border-0 ml-5 flex mt-2">
            {/* <!-- <input type="text"> --> */}
    <input type="text " {...register("weight",{ required: 'Weight is required' })} id="weight" className="bg-blue-50 w-[82%] inline -ml-0 h-9  border-gray-300 border-2 rounded-sm hover:border-blue-300 focus:ring-1 focus:ring-blue-600 focus:outline-none focus:bg-white pl-3 font-semibold"/>
        
        
    
    <select id="optionsw" {...register("weightop")} name="options" className= "bg-blue-50 w-18 focus:border-none  border-gray-300 border-2 focus:bg-blue-100 ">
        
        <option value="kg">kg</option>
        <option value="gram">g</option>
        <option value="lb">(lb)</option>
        <option value="st">(st)</option>
    </select>
</div>
 {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}
</div>
       
        <div className="mt-2">
            <p className="text-neutral-600 font-semibold text-left ml-5">BMI</p>
        <input id="bmi" type="text " value={formdata.bmi} readOnly className="bg-blue-50 w-[90%] mt-2 h-9 border-gray-300 border-2 rounded-sm hover:border-blue-300 focus:ring-1 focus:ring-blue-600 focus:outline-none focus:bg-white pl-3 font-semibold"/>
        </div>
        <div className="mt-2">
            <p className="text-neutral-600 font-semibold text-left ml-5">BMI Prime</p>
        <input id="bmi_prime" value={formdata.bmiprime} type="text " readOnly className="bg-blue-50 w-[90%] mt-2 h-9  border-gray-300 border-2 rounded-sm hover:border-blue-300 focus:ring-1 focus:ring-blue-600 focus:outline-none focus:bg-white pl-3 font-semibold"/>
        </div>
        <div className="mt-2">
            <p className="text-neutral-600 font-semibold text-left ml-5">Age</p>
        <input id="age" type="text "{...register("age",{ required: 'Age is required' })} className="bg-blue-50 w-[90%] mt-2 h-9 border-gray-300 border-2 rounded-sm hover:border-blue-300 focus:ring-1 focus:ring-blue-600 focus:outline-none focus:bg-white pl-3 font-semibold"/>
        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>
        <div className="mt-3 mb-3">
            <button  className="bg-blue-500  rounded-2xl px-3 py-2 font-semibold">Check BMI</button>
        </div>
    </div>
    { showresult  && (<div id="bmiresultdiv" className="w-72  h-64 border-2 mt-80 p-3 border-gray-300 rounded-xl ">
        <p> According to the WHO BMI report, you fall into the <span id="category" className="font-bold text-red-600 text-lg">{category} </span>  category </p>
       <p className="font-bold"> BMI Range	Category</p> 
        <p className="font-semibold">Below 18.5	<span className="text-green-700">Underweight</span></p>
       <p className="font-semibold"> 18.5 - 24.9	<span className="text-blue-700"> Normal weight </span></p> 
        <p className="font-semibold"> 25 -  29.9 <span className="text-red-500">Overweight</span>	</p>
        <p className="font-semibold"> 30   -  34.9	<span className="text-red-600">Obesity className I</span> </p>
       <p className="font-semibold"> 35 -  39.9	<span className="text-red-700"> Obesity className II</span></p> 
        <p className="font-semibold"> 40 and above	<span className="text-red-800">Obesity className III</span></p>

    </div>)}
    


  
</div> 
<div id="agediv"className="border-2  border-gray-300 m-auto h-56 w-96 mt-5 p-3  mb-5 rounded-xl ">
<p className="font-bold text-neutral-500">(age less than 18)-<span id="age18"  className="text-blue-500">{age}</span></p>
<p className="font-bold  text-neutral-500 mt-7">(age between 18 and 60)-<span id="age59" className="text-blue-500">{age}</span></p>
<p className="font-bold  text-neutral-500 mt-7">(age more than 60)-<span id="age60" className="text-blue-500"></span>{age}</p>
</div>
</form>
    </>
  )
}

export default Bmicalculate
