import React from 'react';

const SinglePriceOption = ({option}) => {
    console.log(option)
    const {name,price,img} = option
    return (
        <div className='px-5 '>
            <div className="card mx-auto  w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="gym" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className='card-title'>{price}</p>
    {
        option.features.map(feature => <p
        className='text-start'
        >
            {feature}
        </p>)
    }
    <div className="card-actions">
      <button className="btn btn-primary">Buy Membership</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SinglePriceOption;