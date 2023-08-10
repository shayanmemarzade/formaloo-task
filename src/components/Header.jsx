import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <header>
        <nav className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-4 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to={`/editor`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit mode</Link>
                </li>
                <li>
                  <Link to={`/guest`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View mode</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
