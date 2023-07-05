export default function Drawer({ isOpen, setIsOpen }) {
  return (
    (
      <div className='drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b  bg-[#4338CA] fixed top-0 left-0 shadow-2xl'>
          <div className='flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch'>
            <div className='flex w-full justify-end'>
                <img src="/public/filled.png" onClick={() => setIsOpen(!isOpen)} className='sm:hidden flex justify-end ms-[20%] h-[24px]' />
            </div>
            <div className='flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]'>
                <img src="/src/assets/images/logoMenu.png" className='w-[50px] mb-2 sm:m-0' />
              <div className='flex flex-col ms-3'>
                  <p className='text-[14px]'>mail@gmail.com</p>
              </div>


                <img src="/src/assets/images/filled.svg" onClick={() => setIsOpen(!isOpen)} className='hidden sm:block ms-[20%] w-[24px] h-[24px] hoover:' />


            </div>
            <div className='lg:text-lg'>
                  <p className='p-3  bg-[#ffffff] text-[#4338CA] w-[250px] sm:w-[400px] rounded-md'>Home</p>
                  <p className='p-3'>Register</p>
                  <p className='p-3'>Log in</p>
                </div>
          </div>
      </div>
      )
  );
}
