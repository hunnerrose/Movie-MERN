import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="flex justify-center">
      <div class="text-center py-4">
        <p className="text-white">
          &copy; {new Date().getFullYear()} SHMOVIE FANATICS {""}
        </p>
        <a
          href="https://github.com/hunnerrose/Movie-MERN"
          class="flex items-center text-white hover:text-gray-400 focus:text-gray-400"
        >
          <FaGithub class="mx-auto" size={25} />
        </a>
      </div>
    </footer>
  );
}
