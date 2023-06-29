export default function Display({ show, setShow }) {
  return (
    <div className="drawer flex flex-col text-center">
      <p
        onClick={() => setShow(!show)}
        className="close bg-[#4338CA] w-[33vw] md:w-[10vw] text-[#FFF]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </p>
      <p className="option bg-[#4338CA] [font-family:Roboto] font-bold w-[33vw] md:w-[10vw] text-[#FFF] p-3">
        HOME
      </p>
      <p className="option bg-[#4338CA] [font-family:Roboto] font-bold w-[33vw] md:w-[10vw] text-[#FFF] p-3">
        SIGN IN
      </p>
      <p className="option bg-[#4338CA] [font-family:Roboto] font-bold w-[33vw] md:w-[10vw] text-[#FFF] p-3">
        REGISTER
      </p>
    </div>
  );
}
