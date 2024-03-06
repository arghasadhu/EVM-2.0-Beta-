import React from 'react'

const Feedback = () => {
  return (
    <div className='w-full h-screen '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='md:text-5xl text-4xl font-bol inline border-b-4 border-gray-500 font-bold font-evmtitle md:tracking-widest tracking-wider '>Please give your Genuine Feedback</p>
                <p className='py-6 font-extrabold text-lg'>Submit the form below</p>
            </div>

            <div className='flex items-center justify-center'>
                <form action="https://getform.io/f/2ab46948-0f96-493c-8ec9-f0f839883e45" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text"
                    name='name' placeholder='Enter your Name' className='font-para p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' />
                <textarea name="message" id=""  rows="10" placeholder='Write your thoughts about our work...' className='my-4 p-2 bg-transparent border-2 font-para rounded-md focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-0 mx-auto flex items-center rounded-md hover:scale-110 duration-300' name='submit'>Submit</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Feedback