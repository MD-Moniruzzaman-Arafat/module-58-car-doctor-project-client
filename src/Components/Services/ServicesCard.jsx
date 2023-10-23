import PropTypes from 'prop-types';
import { HiArrowRight } from "react-icons/hi";

const ServicesCard = ({ data }) => {
    const { img, price, title } = data;
    return (
        <div className="card card-compact w-[370px] bg-base-100 shadow-xl ">
            <figure className="pt-5"><img src={img} alt="car" className='rounded-xl h-52 w-80' /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-end items-center text-[#FF3811]">
                    <p className='card-title'>Price: ${price}</p>
                    <button className="btn text-[#FF3811] bg-transparent border-none hover:bg-transparent"><HiArrowRight></HiArrowRight></button>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    data: PropTypes.object,
}

export default ServicesCard;