import React from 'react'
import { close, mountana } from '../../../assets';
import { Link } from 'react-router-dom';

export default function PopUpMenu({ isOpen, onClose }) {
  return (
    <div
      className={`${isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden'}`}
    >
      <div className="modal-container bg-white z-50 overflow-y-auto lg:flex lg:items-center w-full h-full">

        <div className="modal-content text-left">
          <div className='px-6 py-4 lg:px-8 lg:py-4 flex items-center justify-between w-full z-10'>
            <Link className='md:mr-8 md:p-6' to='/'>
              <img className='w-40 lg:w-60' src={mountana} alt='Logo' />
            </Link>

            <button className='lg:hidden bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full' onClick={onClose}>
              <img
                src={close}
                alt="Bell"
                className="w-6 h-6 inline-block"
              />
            </button>
          </div>
          <div className="p-8">
            <ul
              className="lg:flex lg:items-center lg:w-auto"
            >
              <li className="mr-6">
                <a href="#">Home</a>
              </li>
              <li className="mr-6">
                <a href="#">About</a>
              </li>
              <li className="mr-6">
                <a href="#">Services</a>
              </li>
              <li className="">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
