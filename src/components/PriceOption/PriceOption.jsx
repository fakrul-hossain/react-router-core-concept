import React, { useEffect, useState } from 'react';
import SinglePriceOption from '../SinglePriceOption/SinglePriceOption';

const PriceOption = () => {

    const [pricingOptions,setPricingOptions] = useState([])
   
    useEffect(() =>{
       const URL = 'pricing.json'
       fetch(URL)
       .then(res => res.json())
       .then(data => setPricingOptions(data))
    },[])


    return (
        <div className=''>
            <h1 className='text-4xl text-center font-bold text-purple-600'>Best Pricing Options</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7">
                {
                    pricingOptions.map(option => <SinglePriceOption
                key={option.id}
                option={option}    
                ></SinglePriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOption;