import { useRef } from "react";
import Endpoint from "../models/endpoints";
import Footer from "./Footer";



const PlaygroundForm : React.FC<{endpoints : Endpoint[]}> = (props) => { 

  const clientIdHandler = useRef<HTMLInputElement>(null);
  const clientSecretHandler = useRef<HTMLInputElement>(null);
  const endpointHandler = useRef<HTMLSelectElement>(null);
  const commandHandler = useRef<HTMLSelectElement>(null);
  const whereHandler = useRef<HTMLInputElement>(null);
  const sortHandler = useRef<HTMLInputElement>(null);
  const sortOrderHandler = useRef<HTMLSelectElement>(null);
  const pageHandler = useRef<HTMLInputElement>(null);
  const perPageHandler = useRef<HTMLInputElement>(null); 
  const includeHandler = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event : React.FormEvent) => {
    
    event.preventDefault();

    const clientId = clientIdHandler.current!.value;
    const clientSecret = clientSecretHandler.current!.value;
    const endpoint = endpointHandler.current!.value;
    const command = commandHandler.current!.value;
    const where = whereHandler.current!.value;
    const sort = sortHandler.current!.value;
    const sortOrder = sortOrderHandler.current!.value;
    const page = pageHandler.current!.value;
    const perPage = perPageHandler.current!.value;
    const include = includeHandler.current!.value;
    console.log(
      `
      clientId : ${clientId} ,
      clientSecret : ${clientSecret} ,
      endpoint : ${endpoint} ,
      command : ${command} ,
      where : ${where} ,
      sort : ${sort} ,
      sortOrder : ${sortOrder} ,
      page : ${page} ,
      perPage : ${perPage} ,
      include : ${include} ,
      `  
  );

  clientIdHandler.current!.value = '';
  clientSecretHandler.current!.value = '';
  endpointHandler.current!.value = '';
  commandHandler.current!.value = 'read';
  whereHandler.current!.value = '';
  sortHandler.current!.value = '';
  sortOrderHandler.current!.value = 'ASC';
  pageHandler.current!.value = '';
  perPageHandler.current!.value = '';
  includeHandler.current!.value = '';
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden m-2 ">
       <form onSubmit={onSubmitHandler} className="mb-4" >
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-6xl">
          <div className="card">
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="clientId"
                  id="clientId"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  ref={clientIdHandler}
                />
                <label
                  htmlFor="clientId"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Client Id
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="clientSecret"
                  id="clientSecret"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  ref={clientSecretHandler}
                  required
                />
                <label
                  htmlFor="clientSecret"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Client Secret
                </label>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-3">
            Configure the request
          </h1>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-2">
              <label
                htmlFor="endpoint"
                className="block text-sm font-semibold text-gray-800"
              >
                Endpoint
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="endpoint"
                ref={endpointHandler}
                >
                <option value="">-select-</option>
                {props.endpoints.map((endpoint : Endpoint) => (
                  <option key={endpoint.type} value={endpoint.type}>
                    {endpoint.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="command"
                className="block text-sm font-semibold text-gray-800"
              >
                Command
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="command"
                ref={commandHandler}
                >
                <option value="read">Query</option>
                <option value="read-id">Query by ID</option>
                <option value="create">Create</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
            </div>
          </div>

          <div className="mb-2">
            <label
              htmlFor="where"
              className="block text-sm font-semibold text-gray-800"
            >
              Where
            </label>
            <input
              type="text"
              id="where"
              ref={whereHandler}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-700  focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="grid md:grid-cols-4 md:gap-6">
            <div className="mb-2">
              <label
                htmlFor="sort"
                className="block text-sm font-semibold text-gray-800"
              >
                Sort
              </label>

              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="sort"
                  ref={sortHandler}
                  id="sort"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="sortOrder" className="sr-only">
                    Sort Order
                  </label>
                  <select
                    id="sortOrder"
                    name="sortOrder"
                    ref={sortOrderHandler}
                    className="block w-full px-4 py-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 >
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-2">
              <label
                htmlFor="page"
                className="block text-sm font-semibold text-gray-800"
              >
                page
              </label>
              <input
                type="number"
                id="page"
                ref={pageHandler}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-700  focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="perPage"
                className="block text-sm font-semibold text-gray-800"
              >
                Per Page
              </label>
              <input
                type="number"
                id="perPage"
                ref={perPageHandler}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-700  focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="include"
                className="block text-sm font-semibold text-gray-800"
              >
                Include
              </label>
              <input
                type="text"
                id="include"
                ref={includeHandler}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border border-indigo-400 rounded-md focus:border-indigo-700  focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="mt-6 pt-5  pb-5 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 rounded-br-lg to-indigo-500">
            <p className="text-lg text-white font-bold mb-3"> Ready? </p>
            <button className="w-min  px-6 py-2 border-white border-4 text-base tracking-wide text-white bg-gradient-to-r from-indigo-500 to-indigo-500 transition-colors rounded-br-lg duration-200 transform focus:outline-none ">
              Go
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center">
      <Footer/>
      </div>
    </div>
  );
};

export default PlaygroundForm;
