import React, { useState } from "react";
import { createPortal } from "react-dom";


const DataTablePage = () => {
  const [page, setPage] = useState(1);
  /* const [numero, setNumero] = useState(10)
  const handleChange = (e) =>  {
    setNumero(e.target.value) 
  }*/ 

  return (
    /* <div>
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
        </div> */
    <div className="bg-purple rounded-md w-full p-3">
      <div className=" flex items-center justify-between pb-6 bg-white">
        <div>
          <h2 className="text-gray-600 font-semibold">Products Oder</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            {/* Search */}
            <input
              className="bg-gray-50 outline-none ml-1 block "
              type="text"
              name=""
              id=""
              placeholder="search..."
            />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              New Report
            </button>
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Create
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white px-4 sm:px-8  overflow-x-auto flex justify-center">
          {/* eh aqui q começa aquela tabela feia q eu fiz */}
          <div className="bg-white inline-block min-w-full shadow rounded-lg overflow-hidden">
            {/* essa div eh o quadradin ao redor da table v */}
              <div className="flex justify-center">
              <table className="text-sm text-left text-gray-500 dark:text-gray-400" id="tabela">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                    <th scope="col" className="px-5 py-3 ">
                      Base de Dados
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Nome do Banco
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Host
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Porta
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Usuário
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Schema(s)
                    </th>
                    <th scope="col" className="px-5  py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">-</td>
                  </tr>
                </tbody>
              </table>
              </div>
            
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* eh aq q termina */}
        </div>
      </div>
    </div>
  );
};
export default DataTablePage;
