import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mb-20">
            <ServicesHeader></ServicesHeader>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
                {
                    services.map(data => <ServicesCard key={data._id} data={data}></ServicesCard>)
                }
            </div>
            <button className="btn btn-outline rounded-sm block w-50 mx-auto btn-primary">More Services</button>
        </div>
    );
};

export default Services;