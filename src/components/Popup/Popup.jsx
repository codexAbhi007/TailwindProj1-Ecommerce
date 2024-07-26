import React from "react";
import { RxCross2 } from "react-icons/rx";
const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* header  */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <RxCross2 className="text-xl cursor-pointer" onClick={()=>setOrderPopup(false)}/>
                </div>
              </div>

            {/* Form section  */}
              <div className="mt-4">
                <input type="text" placeholder="Name" className="border-gray-300 dark:bg-gray-800 w-full rounded-full border dark:border-gray-500 px-2 py-1 mb-4" />
                <input type="email" placeholder="Email" className="border-gray-300 dark:bg-gray-800 w-full rounded-full border dark:border-gray-500 px-2 py-1 mb-4" />
                <input type="text" placeholder="Address" className="border-gray-300 dark:bg-gray-800 w-full rounded-full border dark:border-gray-500 px-2 py-1 mb-4" />
              </div>

              <div className="flex justify-center">
                <div className="btn w-max">Order Now</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
