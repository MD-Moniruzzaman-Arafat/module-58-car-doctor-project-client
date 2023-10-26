
const ChackOutForm = () => {
    return (
        <div className="card flex-shrink-0 w-full shadow-2xl my-10 bg-base-100">
            <form className="card-body " onSubmit="">
                <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="LastName" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" name="yourPhone" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="YourEmail" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea className="border rounded-md border-gray-300 p-5" name="yourMessage" placeholder="Your Message" id="" cols="30" rows="10"></textarea>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] text-white">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default ChackOutForm;