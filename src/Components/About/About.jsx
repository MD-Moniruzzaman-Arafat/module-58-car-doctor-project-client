import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-3/6 relative'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl w-[500px] h-[350px]" />
                    <img src={parts} className="w-[300px] absolute top-44 left-32 shadow-2xl border-8 border-white rounded-lg" />
                </div>
                <div className='w-3/6 space-y-3'>
                    <h1 className="text-xl text-[#FF3811] font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold w-96">We are qualified & of experience in this field</h1>
                    <p className=" text-base font-normal text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <p className="text-base font-normal text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;