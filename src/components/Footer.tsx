import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-12">
           <div className='grid grid-cols-1 md:grid-cols-4 gap-8 border-b-2'>
              {/* Address Section */}
              <div className='text-[#9F9F9F] text-sm'>
                <p>400 University Drive Suite 200</p>
                <p>Coral Gables,</p>
                <p> FL 33134 USA</p>
              </div>
      
              {/* Links Section */}
              <div>
                <h4 className="text-[#9F9F9F] text-sm font-medium mb-3">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-black hover:text-blue-500">Home</a></li>
                  <li><a href="#" className="text-black hover:text-blue-500">Shop</a></li>
                  <li><a href="#" className="text-black hover:text-blue-500">About</a></li>
                  <li><a href="#" className="text-black hover:text-blue-500">Contact</a></li>
                </ul>
              </div> 
      
              {/* Help Section */}
              <div>
                <h4 className="text-[#9F9F9F] text-sm font-medium mb-3">Help</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-black hover:text-blue-500">Payment Options</a></li>
                  <li><a href="#" className="text-black hover:text-blue-500">Returns</a></li>
                  <li><a href="#" className="text-black hover:text-blue-500">Privacy Policies</a></li>
                </ul>
              </div>
              {/*news letter */}
              <div className='text-sm font-medium mb-3'>
                <h3 className='text-[#9F9F9F]'>Newsletter</h3>
                <div className='flex md:gap-6 lg:gap-0 md:flex-col lg:flex-row items-center mt-8'>
                  <input type= 'email' placeholder='Enter Your Email Address' 
                  className='flex-1 px-4 py-2 border-b-2 border-black rounded-1-md focus:outline-none focus:ring-1 focus:ring-black' />
                  <button className='text-black px-4 py-2 rounded-r-md hover:bg-blue-500 border-b-2 outline-none border-black ml-2'>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            {/* bottom footer */}
            <div className='mt-8 text-[#9F9F9F]'>
                <p>2022 Meubel House. All rights reverved</p>
            </div>
              </div>
          </footer>
        );
      }

      export default Footer