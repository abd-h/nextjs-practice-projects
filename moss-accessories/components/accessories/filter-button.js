

export default function FilterButton({ onClick }) {
    return (
        <button
            onClick={ onClick }
            className='flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
            <span className='mr-2' >All Filters</span>
            {/* Plus icon*/}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z'
                    clipRule='evenodd'
                />
            </svg>
        </button>
    )
}