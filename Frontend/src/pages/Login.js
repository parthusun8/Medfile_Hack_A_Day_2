import React from 'react'
import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg ml-4 mt-5">
          {/*  */}
          <input    

            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
            className="leading-loose block box-border w-full rounded border-white px-10px py-15px mb-8px bg-slate-600" 
          />
          {errors?.firstName?.type === "required" && <p>This field is required</p>}
          {errors?.firstName?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label className='leading-loose text-left block text-blue-600 mb-8px '>Last Name</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className="leading-loose block box-border w-full rounded border-white px-10px py-15px mb-8px bg-slate-600 text-white"/>
          {errors?.lastName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label className='leading-loose text-left block text-blue-600 mb-8px '>Age</label>
          <input {...register("age", { min: 18, max: 99 })} className="leading-loose block box-border w-full rounded border-white px-10px py-15px mb-8px bg-slate-600"/>
          {errors.age && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}
          <button type="submit" className='mt-2 border-4 rounded border-rose-500 bg-black text-teal-200'>Submit</button>
        </form>
      );
}

export default Login