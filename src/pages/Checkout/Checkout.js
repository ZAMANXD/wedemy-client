import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Checkout.module.css';

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className=" w-2/4 mx-auto py-10 lg:px-0 px-4">
      <h2 className="text-center text-4xl font-bold">Checkout</h2>
      <div className="lg:flex justify-between">
        <div className=" w-full">
          <h3 className="mt-10 mb-3 text-3xl inline-block px-3 rounded text-black">
            Course Details
          </h3>

          <table className="table mx-auto w-full">
            <tbody>
              <tr>
                <td>Name:</td>
                <td className="text-white">{data.name}</td>
              </tr>
              <tr>
                <td>Instructor:</td>
                <td className="text-white">{data.instructor}</td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td className="text-white">{data.totalHours} Hours</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td className="text-white">${data.price}</td>
              </tr>
            </tbody>
            <h3 className="mt-10 mb-3 text-3xl inline-block px-3 rounded text-black">
              Customer Details
            </h3>
            <tbody>
              <tr>
                <td>Name:</td>
                <td className="text-white">{user.displayName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="text-white">{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
