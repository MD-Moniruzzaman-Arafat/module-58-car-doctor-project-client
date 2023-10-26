import chackOutImg from "../../assets/images/checkout/checkout.png";

const CheckOutHeader = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full ">
            <img src={chackOutImg} className=" rounded-xl h-[300px] w-[1152px]" />
            <div className="absolute flex h-full top-0 items-center w-[1152px] rounded-xl bottom-16 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-5 mx-10'>
                    <h1 className='text-6xl font-bold w-[450px] text-white'>Check Out</h1>
                </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 mx-8 -bottom-6   gap-5 ">
                <p className="bg-[#FF3811] p-3 text-white rounded-tl-box rounded-tr-box">Home/Checkout</p>
            </div>
        </div>
    );
};

export default CheckOutHeader;