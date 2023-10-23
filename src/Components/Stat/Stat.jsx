import { FcCalendar, FcPhone } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
const Stat = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal w-full shadow mb-20  bg-[#151515] text-white py-10">

            <div className="stat text-center flex items-center justify-center">
                <div className="text-2xl">
                    <FcCalendar></FcCalendar>
                </div>
                <div>
                    <div className="text-sm font-medium">We are open monday-friday</div>
                    <div className="text-2xl font-bold">7:00 am - 9:00 pm</div>
                </div>
            </div>

            <div className="stat text-center flex items-center justify-center">
                <div className="text-2xl">
                    <FcPhone></FcPhone>
                </div>
                <div>
                    <div className="text-sm font-medium">Have a question?</div>
                    <div className="text-2xl font-bold">+2546 251 2658</div>
                </div>
            </div>

            <div className="stat text-center flex items-center justify-center">
                <div className="text-2xl text-red-700">
                    <FaLocationDot></FaLocationDot>
                </div>
                <div>
                    <div className="text-sm font-medium">We are open monday-friday</div>
                    <div className="text-2xl font-bold">7:00 am - 9:00 pm</div>
                </div>
            </div>

        </div>
    );
};

export default Stat;