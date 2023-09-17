import React from 'react';
import PricingFeatures from '../PricingFeatures/PricingFeatures';


const SinglePriceOption = ({option}) => {
    console.log(option)
    const {name,price,img} = option
    return (
        <div className='px-5 '>
            <div className="card mx-auto  w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="gym" className="rounded-xl" />
  </figure>
  <div className="p-10 pt-10 tec items-center text-center">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className='card-title my-3'>{price}</p>
    
    {
        option.features.map((feature,index)=>
            <PricingFeatures
            feature={feature}
            key={index}
            ></PricingFeatures>)
    }
    <div className="card-actions mt-12 px-10">
      <button className="absolute inset-x-5 rounded-xl bottom-5 btn btn-info border-none bg-purple-500 text-white">Buy Membership</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SinglePriceOption;