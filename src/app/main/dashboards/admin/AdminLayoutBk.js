import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import ArrowRightButton from 'app/shared-components/ArrowRightButton';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import UsersDashboardHeader from '../shared-components/UsersDashboardHeader';
import reducer from './store';

const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
    },
    '& .FusePageSimple-toolbar': {},
    '& .FusePageSimple-content': {},
    '& .FusePageSimple-sidebarHeader': {},
    '& .FusePageSimple-sidebarContent': {},
}));

function AdminDashboard(props) {
    return (
        <Root
            header={
                <UsersDashboardHeader
                    buttons={
                        <ArrowRightButton
                            to="/apps/profile"
                            component={Link}
                            title="My Account"
                            className="bg-custom-purple"
                        />
                    }
                />
            }
            content={
                <div className="my-36 flex flex-1 flex-col gap-16">
                    <div className="flex flex-wrap justify-between">
                        <div className="flex gap-3 items-center ">
                            <div className="p-3 shadow-box background-btn-color rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white"
                                     className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                </svg>
                            </div>
                            <h3 className="font-medium">
                                Dashboard
                            </h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <h3 className="font-light text-gray-600">
                                Overveiw
                            </h3>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="#5D54A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="feather feather-alert-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 gap-8">
                        <div className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color ">
                            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Weekly Sales</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                </div>
                                <h5 className="text-2xl font-medium">
                                    $ 790w578
                                </h5>
                            </div>
                            <div>
                                Increased bt 60%
                            </div>
                        </div>
                        <div
                            className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color-info ">
                            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Weekly Sales</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-diamond-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
                                    </svg>
                                </div>
                                <h5 className="text-2xl font-medium">
                                    $ 790w578
                                </h5>
                            </div>
                            <div>
                                Increased bt 60%
                            </div>
                        </div>
                        <div
                            className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color-succes">
                            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Weekly Sales</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                </div>
                                <h5 className="text-2xl font-medium">
                                    $ 790w578
                                </h5>
                            </div>
                            <div>
                                Increased bt 60%
                            </div>
                        </div>
                        <div
                            className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color-green ">
                            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Weekly Sales</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-diamond-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
                                    </svg>
                                </div>
                                <h5 className="text-2xl font-medium">
                                    $ 790w578
                                </h5>
                            </div>
                            <div>
                                Increased bt 60%
                            </div>
                        </div>
                        <div
                            className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color-mix">
                            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h4 className="text-lg">Weekly Sales</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                         className="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                </div>
                                <h5 className="text-2xl font-medium">
                                    $ 790w578
                                </h5>
                            </div>
                            <div>
                                Increased bt 60%
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full bg-white overflow-auto p-2 sm:p-6">
                        <div className="flex justify-between items-center mb-6 gap-2 flex-wrap">
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
                            <button
                                className="dropbtn shadow-box background-btn-color rounded px-3 py-1 text-white">
                                Add Report
                            </button>
                            <div id="nav-bar-show-3"
                                 className=" dropdown-content-2 top-[50%] left-[50%] center-div absolute hidden w-[50%] h-[90%] rounded-lg overflow-hidden">
                                <div className=" w-full h-full bg-gray-50 box-shadow-modal">
                                    <div
                                        className="flex justify-between items-center background-color w-full py-2 px-4">
                                        <h1 className="text-xl text-white font-medium">
                                            Plan of the day
                                        </h1>
                                        <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="30"
                                             height="30" fill="currentColor" className="bi bi-x cursor-pointer"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="px-8 py-6 grid grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                                Project Name
                                            </label>
                                            <select
                                                className="bg-white shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                                                <option selected>Choose a project</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="pl-1 block text-[#5D54A4] text-base font-medium">
                                                Username
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>
                                            Required Time
                                        </h1>
                                        <div className="px-8 py-6 grid grid-cols-2 gap-6">
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
                        </div>
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
                                    <button
                                        className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                                        <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                            <path
                                                d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                                stroke="white" strokeWidth="3" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
                                                  fill="none"
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
                                    <button
                                        className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                                        <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                            <path
                                                d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                                stroke="white" strokeWidth="3" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
                                                  fill="none"
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
                                    <button
                                        className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                                        <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                            <path
                                                d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                                stroke="white" strokeWidth="3" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
                                                  fill="none"
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
                                    <button
                                        className="p-2 rounded bg-green-500 transition duration-300 hover:bg-green-600">
                                        <svg width="16" height="16" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                            <path
                                                d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                                stroke="white" strokeWidth="3" strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
                                                  fill="none"
                                                  stroke="white" strokeWidth="3" strokeLinejoin="round"
                                            />
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
                    <div className="relative rounded w-full bg-white overflow-auto p-2 sm:p-6">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="p-2 shadow-box background-btn-color rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                     className="bi bi-emoji-wink-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z"/>
                                </svg>
                            </div>
                            <h1 className="text-xl font-medium">
                                Date Of Birth
                            </h1>
                        </div>
                        <div className="flex gap-4 overflow-auto">
                            <div
                                className="min-w-[300px] max-w-[300px] relative border rounded-lg overflow-hidden after">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                {/*<img className="max-w-full max-h-full"*/}
                                                {/*     src="assets/images/ks/unnamed.gif"*/}
                                                {/*     alt="user"/>*/}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="line-clamp-1 absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            -- --
                                        </p>
                                    </div>
                                    <button className="shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                            <div
                                className="min-w-[300px] max-w-[300px] border rounded-lg overflow-hidden relative soon">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="line-clamp-1 absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            -- --
                                        </p>
                                    </div>
                                    <button className="shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                            <div
                                className="min-w-[300px] max-w-[300px] border relative rounded-lg overflow-hidden relative soon">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="line-clamp-1 absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            __ __
                                        </p>
                                    </div>
                                    <button className="shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                            <div
                                className="min-w-[300px] max-w-[300px] border rounded-lg overflow-hidden relative soon">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="line-clamp-1 absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            -- --
                                        </p>
                                    </div>
                                    <button className="shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                            <div
                                className="min-w-[300px] max-w-[300px] border rounded-lg overflow-hidden relative soon">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            -- --
                                        </p>
                                    </div>
                                    <button
                                        className="line-clamp-1 shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                            <div
                                className="min-w-[300px] max-w-[300px] border rounded-lg overflow-hidden relative soon">
                                <div className="flex flex-col">
                                    <div className="min-h-[180px] relative p-2 gap-1 flex backgroud">
                                        <div className="w-full h-full relative">
                                            <figure className="absolute top-1 right-6 border w-20 h-20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                                    <path
                                                        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                                </svg>
                                            </figure>
                                        </div>
                                        <p className="line-clamp-1 absolute text-white py-0.5 bottom-0 left-0 glass w-full text-center">
                                            -- --
                                        </p>
                                    </div>
                                    <button className="shadow-box background-btn-color px-3 py-2 text-white">
                                        15 April
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}
export default withReducer('adminDashboard', reducer)(AdminDashboard);
