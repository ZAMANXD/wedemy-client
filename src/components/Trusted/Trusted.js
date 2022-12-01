import React from 'react';
import { ReactComponent as BrandIcon1 } from './box-dark.svg';
import { ReactComponent as BrandIcon2 } from './eventbrite-dark.svg';
import { ReactComponent as BrandIcon3 } from './nasdaq-dark.svg';
import { ReactComponent as BrandIcon4 } from './netapp-dark.svg';
import { ReactComponent as BrandIcon5 } from './tcs-dark.svg';
import { ReactComponent as BrandIcon6 } from './volkswagen-dark.svg';

const Trusted = () => {
  return (
    <div>
      <h3 className="text-3xl">Trusted by over 13,400 great teams</h3>
      <p className="mt-3">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="flex mt-8 items-center justify-between">
        <BrandIcon1></BrandIcon1>
        <BrandIcon2></BrandIcon2>
        <BrandIcon3></BrandIcon3>
        <BrandIcon4></BrandIcon4>
        <BrandIcon5></BrandIcon5>
        <BrandIcon6></BrandIcon6>
      </div>
    </div>
  );
};

export default Trusted;
