//import Login from "./Login"
import Dashboard from "./screens/Dashboard";
import Table from "./screens/DataTablePage";
import './css/general.css';
export default function App() {

  return (
    <>
      {/*Barra de cima*/}
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row content-end">
                <div className="flex justify-start">
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/2491/2491010.png" className="h-10 w-10>" alt="..."/>
                </li>
                <li className="text-center bg-gray-50 text-gray-800 pl-3 pt-1">
                  <h3 className="font-mono text-2xl flex ">FRIDA Security </h3>
                </li>
                </div>
              </ul>
            </div>
            <div className="flex justify-between">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row content-end px-2">
                <li className=" text-xs text-center text-gray-800">
                  <a href="/">Admin</a>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row content-end px-2">
                <li className="text-xs text-center text-gray-800">
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/*  */}
        <div className="flex justify-start">
        <Dashboard />
        <Table/>
        </div>
      
    
    </>
  );
}
