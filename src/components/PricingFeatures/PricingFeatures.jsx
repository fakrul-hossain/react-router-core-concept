import React from "react";
import { GiCheckMark } from 'react-icons/gi';

const PricingFeatures = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 text-[16px] font-medium  items-center">
        <GiCheckMark className=" border-2 text-xl rounded-xl border-green-500/100  text-green-500"></GiCheckMark>
        {feature}
      </p>
    </div>
  );
};

export default PricingFeatures;
