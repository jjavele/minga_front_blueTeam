import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminSwitch from '../components/AdminSwitch.jsx';
import authors_action from '../redux/actions/authors.js';

const { get_authors, update_authors } = authors_action;

export default function AdminPanel() {
    const [view, setView] = useState(false);
    const dispatch = useDispatch();

    const {active, inactive} = useSelector((store) => store.authors);

    useEffect(() => {
        dispatch(get_authors());
    }, []);

    function handleClick() {
        setView(!view);
    }
    return (
        <>
            <div className="h-[100vh] ">
                <div className=" bg-[url('/src/assets/images/admin.png')] w-[100%] h-[70%] flex flex-col justify-center items-center">
                    <h1 className='text-white'>panel</h1>
                    <div className='h-[50vh]'></div>
                    <div className="w-full h-auto sm:h-1/3 md:w-11/12 bg-[#9a9a9a] flex justify-center mb-16">
                        <div className="flex justify-center items-center gap-y-2 rounded-[80px_80px_2px_27px/64px_64px_0px_1px;] m-[-6rem] sm:rounded-[20px_20px_0px_1px;] w-full sm:m-[-4rem] bg-white p-4 sm:p-8 pb-12 sm:pb-10 sm:flex sm:flex-wrap sm:justify-evenly">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-3xl text-center font-extrabold text-[#4338CA]">Entities</p>
                                <div className="bg-[#4338CA] flex items-center h-2 w-28 mr-4 mb-16"></div>

                                <div className="lg:w-[65%] w-full min-h-auto bg-gray-100 border-2 border-gray-200 shadow-sm rounded-[10px_10px_5px_5px] mb-8">
                                    <div className="w-full border-b-2 border-[#4338CA] rounded-[10px_10px_5px_5px]">
                                        <button className={`${view ? 'w-1/2 bg-gray-100 justify-center text-[#4338CA] font-bold cursor-pointer' : 'h-[6vh] w-1/2 bg-gradient-to-b from-[#4338CA] to-[#4338CA] rounded-[10px_0px_0px_0px] text-white font-bold cursor-pointer pointer-events-none'}`}>
                                            <label htmlFor="" className="flex flex-row justify-center w-full" onClick={handleClick}>
                                                Authors
                                                <input type="checkbox" className="" style={{ appearance: 'none' }} value="hola" name="hola" />
                                            </label>
                                        </button>
                                    </div>
                                    {view === false ? (
                                        <div className="flex flex-col h-auto w-full">
                                            {active?.map((author) => (
                                                <div key={author.name} className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 border-gray-200 border-b-2">
                                                    <div className="w-full flex flex-row justify-center">
                                                        <div className="w-full">
                                                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 w-full sm:flex-row sm:justify-between text-[#484964] font-medium">
                                                                <div className="col-span-2 flex justify-center items-centergap-x-1 sm:justify-start">
                                                                    <svg className="h-6 w-6 text-[#4338CA] fill-[#4338CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    <p>{author.name}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center">
                                                                    <p>{author.createdAt}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center">
                                                                    <p>{author.city}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center gap-x-1 sm:gap-x-4">
                                                                    <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={author.photo} alt="" />
                                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                                        <AdminSwitch author={author} action={update_authors} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {inactive?.map((author) => (
                                                <div key={author.name} className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 border-gray-200 border-b-2">
                                                    <div className="w-full flex flex-row justify-center">
                                                        <div className="w-full">
                                                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 w-full sm:flex-row sm:justify-between text-[#484964] font-medium">
                                                                <div className="col-span-2 flex justify-center items-centergap-x-1 sm:justify-start">
                                                                    <svg className="h-6 w-6 text-[#4338CA] fill-[#4338CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    <p>{author.name}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center">
                                                                    <p>{author.createdAt}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center">
                                                                    <p>{author.city}</p>
                                                                </div>
                                                                <div className="col-span-2 flex justify-center items-center gap-x-1 sm:gap-x-4">
                                                                    <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={author.photo} alt="" />
                                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                                        <AdminSwitch author={author} action={update_authors} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
