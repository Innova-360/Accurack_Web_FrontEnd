

function SeamlessIntegration() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-20 bg-[var(--primary-color)] overflow-x-hidden'>
        <div className="mt-20 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
            <div className=''>Seamless POS <span className="text-[#50BED2]">Integration</span></div>
            {/* <img src="/underlineLight.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" /> */}
        </div>
        <div className='w-[110%] lg:w-[85%] xl:w-[85%] mt-20 px-4'><img src="/phone.png" alt="phone" /></div>
    </div>
    <div className='relative md:h-[9rem] lg:h-[9rem] h-[6rem] -z-10 bottom-14 md:bottom-64 lg:bottom-64'><img src="/lines.svg" alt="lines" /></div>
    </>
  )
}

export default SeamlessIntegration