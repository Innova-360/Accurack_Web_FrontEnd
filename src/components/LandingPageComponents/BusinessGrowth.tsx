// function BusinessGrowth() {
//     return (
//         <div className="bg-[#065B6A] mt-20 overflow-x-hidden pb-28">
//             {/* Heading */}
//             <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
//                 <div className="mt-20">
//                     <span className="text-[#50BED2]">
//                         Realtime{" "}
//                         <img
//                             src="/underlineLight.svg"
//                             className="size-1/4 m-auto md:hidden lg:hidden xl:hidden"
//                             alt="underline"
//                         />
//                     </span>
//                     Business Growth Analytics
//                 </div>
//                 <img
//                     src="/underlineLight.svg"
//                     className="size-1/4 ml-54 hidden md:block lg:block xl:block"
//                     alt="underline"
//                 />
//             </div>

//             {/* Images */}
//             <div className="mt-16 px-4 pb-10">
//                 <div className="mt-16 px-4">
//                     <div className="flex flex-col items-center justify-center gap-14 md:grid md:grid-cols-2 md:gap-10 md:justify-items-center max-w-5xl m-auto">
//                         <img src="/bg1.png" alt="bg1" className="w-full max-w-xs" />
//                         <img src="/bg2.png" alt="bg2" className="w-full max-w-xs" />
//                         <img src="/bg3.png" alt="bg3" className="w-full max-w-xs" />
//                         <img src="/bg4.png" alt="bg4" className="w-full max-w-xs" />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default BusinessGrowth;



import { motion } from 'framer-motion';

function BusinessGrowth() {
    return (
        <div className="bg-[#065B6A] mt-5 overflow-x-hidden pb-28">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col"
            >
                <div className="mt-20">
                    <span className="text-[#50BED2]">
                        Realtime{" "}
                        <img
                            src="/underlineLight.svg"
                            className="size-1/4 m-auto md:hidden lg:hidden xl:hidden"
                            alt="underline"
                        />
                    </span>
                    Business Growth Analytics
                </div>
                <img
                    src="/underlineLight.svg"
                    className="size-1/4 ml-54 hidden md:block lg:block xl:block"
                    alt="underline"
                />
            </motion.div>

            {/* Images */}
            <div className="mt-16 px-4 pb-10">
                <div className="mt-16 px-4">
                    <div className="flex flex-col items-center justify-center gap-14 md:grid md:grid-cols-2 md:gap-10 md:justify-items-center max-w-5xl m-auto">
                        {['/bg1.png', '/bg2.png', '/bg3.png', '/bg4.png'].map((src, index) => (
                            <motion.img
                                key={src}
                                src={src}
                                alt={`bg${index + 1}`}
                                className="w-full max-w-xs"
                                initial={{ opacity: 0, x: -150 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessGrowth;

