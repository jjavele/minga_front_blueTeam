import Home from "./Home"
import { Link as Anchor } from 'react-router-dom'

export default function MangaForm() {
    let user = JSON.parse(localStorage.getItem("user"));
    let role = user.role;

    if (role == 1) {
        return (
            <div className="flex h-screen text-[#4338CA]">
            <div className="bg-white w-full sm:w-1/2 flex justify-center items-center flex-col gap-4">
                <p className='font-montserrat font-normal text-xl '>Change role to</p>
                <img src="/src/assets/images/minga.png" className="h-[10vh] my-2" alt="background" />
                <Anchor to="/authorregister" className='w-[70%] flex justify-center'>
                    <label htmlFor="author" className="w-full cursor-pointer text-center border-2 border-gray-200 rounded-lg | md:flex md:justify-center | lg:justify-between lg:text-start hover:border-[#4338CA] active:border-3 active:border-[#4338CA]">
                        <div className="flex">
                            <img src="./src/assets/images/aut.png" className="lg:inline-block w-20 h-9 self-center m-2" />
                            <div className="m-2">
                                <h1 className="font-bold">Join as an Author!</h1>
                                <p className="text-sm">I&apos;m a reader writting a manga</p>
                            </div>
                        </div>
                    </label>
                </Anchor>
            </div>
            <div className='hidden sm:flex sm:flex-col h-screen w-1/2 bg-[url(/src/assets/images/role.png)] bg-no-repeat bg-center bg-cover'>
                <p className='text-white font-montserrat font-medium text-2xl leading-7	mt-[15vh] px-[10%]'>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.   </p>
                <p className='text-white font-montserrat font-normal text-base leading-5 mt-[15vh] px-[10%]'>
                    Ignacio Borraz
                </p>

            </div>
        </div>
        );
    } else if (role != 1) {
        return <Home />;
    }
}
