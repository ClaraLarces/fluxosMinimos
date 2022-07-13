import React from "react";
const lateralBar = () => {
return (<div className="w-screen relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 " id="tabela">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Base de Dados
                </th>
                <th scope="col" className="px-6 py-3">
                  Nome do Banco
                </th>
                <th scope="col" className="px-6 py-3">
                  Host
                </th>
                <th scope="col" className="px-6 py-3">
                  Porta
                </th>
                <th scope="col" className="px-6 py-3">
                  Usuário
                </th>
                <th scope="col" className="px-6 py-3">
                  Schema(s)
                </th>
                <th scope="col" className="px-6 py-3">
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
);
};
export default lateralBar;