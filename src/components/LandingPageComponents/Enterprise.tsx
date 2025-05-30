
function Enterprise() {
  return (
    <div className="max-w-6xl mx-auto p-6 overflow-x-hidden mb-20">
      <div className="mt-32 md:text-5xl lg:text-5xl text-4xl font-bold text-[#0F172A] fonts text-center flex flex-col gap-1.5 justify-center items-center">
        <div><span className="text-[var(--primary-color)]">Enterprise<img
          src="/underline.svg"
          className="size-1/4 m-auto md:hidden lg:hidden xl:hidden"
          alt="underline"
        /></span>-grade Security and reliability</div>
      </div>
      <img
        src="/underline.svg"
        className="size-1/4 ml-20 hidden md:block lg:block xl:block"
        alt="underline"
      />

      {/* Large screens layout */}
      <div className="hidden md:flex relative justify-center items-center mt-32 md:justify-items-center">
        <img
          src="/pentagon2.png"
          alt="Pentagon"
          className="w-72 h-72"
        />

        {/* Position 4 cards around the pentagon */}
        <img
          src="/enterprise1.png"
          alt="Role-Based Access"
          className="absolute top-[-20px] left-[calc(50%-23rem)] w-80"
        />
        <img
          src="/enterprise2.png"
          alt="99.99% Uptime Guarantee"
          className="absolute top-[-20px] right-[calc(50%-23rem)] w-80"
        />
        <img
          src="/enterprise3.png"
          alt="Compliance Certified"
          className="absolute bottom-[-20px] left-[calc(50%-23rem)] w-80"
        />
        <img
          src="/enterprise4.png"
          alt="256-bit Encryption"
          className="absolute bottom-[-20px] right-[calc(50%-23rem)] w-80"
        />
      </div>

      {/* Small/mobile screens carousel */}
      <div className="md:hidden mt-8">
        <img
          src="/pentagon2.png"
          alt="Pentagon"
          className="w-48 mx-auto mb-6"
        />
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-4 w-max">
            {[...Array(2)].flatMap(() =>
              ["enterprise1.png", "enterprise2.png", "enterprise3.png", "enterprise4.png"].map((img, idx) => (
                <img
                  key={`${img}-${idx}`}
                  src={`/${img}`}
                  alt={`Enterprise card ${idx + 1}`}
                  className="w-64 flex-shrink-0"
                />
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Enterprise;

