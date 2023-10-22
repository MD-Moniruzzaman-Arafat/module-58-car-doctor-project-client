import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className=" rounded-xl h-[600px] w-[1152px]" />
                <div className="absolute flex h-full top-0 items-center w-[1152px] rounded-xl bottom-16 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-5 mx-10'>
                        <h1 className='text-6xl font-bold w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg font-normal w-[450px] text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn  btn-primary rounded-sm">Discover More</button>
                            <button className="btn btn-outline text-white rounded-sm">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mx-8 bottom-16 gap-5 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className=" rounded-xl h-[600px] w-[1152px]" />
                <div className="absolute flex h-full top-0 items-center w-[1152px] rounded-xl bottom-16 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-5 mx-10'>
                        <h1 className='text-6xl font-bold w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg font-normal w-[450px] text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn  btn-primary rounded-sm">Discover More</button>
                            <button className="btn btn-outline text-white rounded-sm">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mx-8 bottom-16 gap-5 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className=" rounded-xl h-[600px] w-[1152px]" />
                <div className="absolute flex h-full top-0 items-center w-[1152px] rounded-xl bottom-16 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-5 mx-10'>
                        <h1 className='text-6xl font-bold w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg font-normal w-[450px] text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn  btn-primary rounded-sm">Discover More</button>
                            <button className="btn btn-outline text-white rounded-sm">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mx-8 bottom-16 gap-5 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className=" rounded-xl h-[600px] w-[1152px]" />
                <div className="absolute flex h-full top-0 items-center w-[1152px] rounded-xl bottom-16 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-5 mx-10'>
                        <h1 className='text-6xl font-bold w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg font-normal w-[450px] text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn  btn-primary rounded-sm">Discover More</button>
                            <button className="btn btn-outline text-white rounded-sm">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mx-8 bottom-16 gap-5 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;