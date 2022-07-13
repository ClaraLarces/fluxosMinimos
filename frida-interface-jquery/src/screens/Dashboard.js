import React, { useState } from "react";
const Dashboard = () => {
 /* const [numero, setNumero] = useState(10)
  const handleChange = (e) =>  {
    setNumero(e.target.value)
  }*/
  return (
    <>
     {/* <div>
        <select
          defaultValue={numero}
          onChange={e => {
            handleChange(e)
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="100">100</option>
        </select>
        <p>{`You selected ${numero}`}</p>

        </div> */}
      <div className="bg-purple pt-3 h-screen w-56 flex " >
        <div className=" absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex ">
          <div className="px-2 items-center ">
            <ul className="mt-4 ">
              <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 items-center mb-6 ">
                <div className="branquinho flex items-center w-52">
                  <a className= "text-black text-sm ml-2" href="/">Registrar Database</a>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 items-center mb-6">
                <div className="flex items-center">
                  <a className= "text-white text-sm ml-2" href="/">Anonymization</a>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 items-center mb-6">
                <div className="flex items-center">
                  <a className= " text-white text-sm ml-2" href="/">API</a></div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 items-center mb-6">
                <div className="flex items-center"></div>
              </li>

              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center"></div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
                <div className="flex items-center"></div>
              </li>
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full">
              <div className="relative ">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Dashboard;
