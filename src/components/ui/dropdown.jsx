import { useState } from 'react'

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
    <div>
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500"
        id="dropdown-menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Dropdown
      </button>
    </div>

    {isOpen && (
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          {options.map((option) => (
            <a
              key={option}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}
export default Dropdown