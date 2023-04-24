import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='text-center py-4'>
        <p className='text-white'>
          &copy; {new Date().getFullYear()} SHMOVIE FANATICS {''}
        </p>
        <div className='flex items-center justify-center'>
          <a
            href='https://github.com/hunnerrose/Movie-MERN'
            className='text-white'
          >
            <span className='hover:text-gray-400 focus:text-gray-400'>
              <FaGithub
                className='hover:outline-blue-500 hover:scale-110'
                size={25}
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
