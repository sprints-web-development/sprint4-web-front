export default function MobileButton({ menuOpen, setMenuOpen }) {
    return (
        <button className="hidden h-auto w-7.5 cursor-pointer flex-col items-end bg-transparent max-[991px]:flex" onClick={() => setMenuOpen(prev => !prev)}>
            <div className={`h-0.5 bg-black transition-[.3s] ease-in ${menuOpen ? 'w-full mb-0 -mt-0.5 -rotate-45' : 'w-full mb-1.25'}`}></div>
            <div className={`h-0.5 bg-black transition-[.3s] ease-in ${menuOpen ? 'w-full mb-0 -mt-0.5 rotate-45' : 'w-3/4 mb-1.25'}`}></div>
            <div className={`h-0.5 bg-black transition-[.3s] ease-in ${menuOpen ? 'hidden' : 'w-1/2'}`}></div>
        </button>
    )
}
