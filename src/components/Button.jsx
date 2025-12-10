

export default function Button({title, className}) {
  return (
      <button className={`flex items-center bg-[#C4EE18] font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px] cursor-pointer ${className}`}>
            <span className="mr-2.5 font-medium text-[#19324d]">{title}</span>
            {/* Arrow Icon */}
            <div className="w-6 h-6 bg-white text-[#19324D] rounded-[1px] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </button>
  )
}
