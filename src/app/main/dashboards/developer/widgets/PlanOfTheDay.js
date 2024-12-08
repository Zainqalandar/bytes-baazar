import { memo } from 'react';

function PlanOfTheDay() {
    return (
        <div className="rounded w-full  overflow-auto p-2 sm:p-6">
            {/* <div className="flex justify-between items-center mb-6 gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <div className="p-3 shadow-box background-btn-color rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                             className="bi bi-activity" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                        </svg>
                    </div>
                    <h1 className="text-xl font-medium">
                        Plan Of the Day
                    </h1>
                </div>
                <button className="dropbtn shadow-box background-btn-color rounded px-3 py-1 text-white">
                    Add Report
                </button>
                <div id="nav-bar-show-3 show-2"
                     className=" dropdown-content-2 top-[285px] left-[50%] center-div absolute hidden w-[50%] h-fit rounded-lg overflow-hidden">
                    <div className=" w-full h-full bg-gray-50 box-shadow-modal">
                        <div className="flex justify-between items-center background-color w-full py-2 px-4">
                            <h1 className="text-xl text-white font-medium">
                                Plan of the day
                            </h1>
                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                 fill="currentColor" className="bi bi-x cursor-pointer" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    fill="white"></path>
                            </svg>

                        </div>
                        <div className="px-8 py-6 grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                    Project Name
                                </label>
                                <select
                                    className="bg-white shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                                    <option >Choose a project</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                    Status
                                </label>
                                <select
                                    className="bg-white shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                                    <option >Choose a Status</option>
                                    <option value="US">done</option>
                                    <option value="CA">Progress</option>
                                    <option value="FR">Rejected</option>
                                    <option value="DE">On hold</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1 className="px-8 text-lg text-[#5D54A4] font-medium">
                                Required Time :
                            </h1>
                            <div className="px-8 pt-2 pb-6 grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                        Hours
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Hours"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                        Mints
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Mints"/>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h1 className="px-8 text-lg text-[#5D54A4] font-medium">
                                Done Time :
                            </h1>
                            <div className="px-8 pt-2 pb-6 grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                        Hours
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Hours"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                        Mints
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Mints"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <table>
                <thead>
                <tr className="text-color border-b flex items-center">
                    <th className="p-3 text-start min-w-[300px]">
                        Project-Name
                    </th>
                    <th className="p-3 text-start min-w-[450px]">
                        Project-Work
                    </th>
                    <th className="p-3 text-start min-w-[200px]">
                        Status
                    </th>
                    <th className="p-3 text-start min-w-[200px]">
                        Required Time
                    </th>
                    <th className="p-3 text-start min-w-[200px]">
                        Done Time
                    </th>
                    <th className="p-3 text-start min-w-[200px]">
                        Edit / Delete
                    </th>
                </tr>
                </thead>
                <tbody className="tbody">
                <tr className="border-b text-color flex items-center">
                    <td className="p-3 min-w-[300px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[450px]">
                        ssss

                    </td>
                    <td className="p-3 min-w-[200px]">
                        <button
                            className="uppercase text-xs font-medium py-1 background-btn-color px-3  rounded text-white">
                            Done
                        </button>
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px] flex gap-2 items-center">
                        <button className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                <path
                                    d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z" fill="none"
                                      stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="p-2 rounded bg-red-500 transition duration-300 hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                 className="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b text-color flex items-center">
                    <td className="p-3 min-w-[300px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[450px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        <button
                            className="uppercase text-xs font-medium py-1 background-color-info px-3  rounded text-white">
                            Progress
                        </button>
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px] flex gap-2 items-center">
                        <button className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                            <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                <path
                                    d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z" fill="none"
                                      stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button className="p-2 rounded bg-red-500 transition duration-300 hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                 className="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b text-color flex items-center">
                    <td className="p-3 min-w-[300px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[450px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        <button
                            className="uppercase text-xs font-medium py-1 background-color-reject px-3  rounded text-white">
                            Rejected
                        </button>
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px] flex gap-2 items-center">
                        <button className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"
                                 fill="none">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                <path
                                    d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z" fill="none"
                                      stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="p-2 rounded bg-red-500 transition duration-300 hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                 className="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b text-color flex items-center">
                    <td className="p-3 min-w-[300px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[450px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        <button
                            className="uppercase text-xs font-medium py-1 background-color-on-hold px-3  rounded text-white">
                            on hold
                        </button>
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px]">
                        ssss
                    </td>
                    <td className="p-3 min-w-[200px] flex gap-2 items-center">
                        <button className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                            <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                <path
                                    d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6 6 8 6L22 6"
                                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z" fill="none"
                                      stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button className="p-2 rounded bg-red-500 transition duration-300 hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                 className="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default memo(PlanOfTheDay);



