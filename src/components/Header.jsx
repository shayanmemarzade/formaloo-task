import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <header>
        <nav className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-4 ">
          <div className="flex flex-wrap justify-between items-center mx-auto container">
            <div className="justify-between items-center flex w-auto ">
              <ul className="flex mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to={`/editor`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Editor mode</Link>
                </li>
                <li>
                  <Link to={`/guest`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Guest mode</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
