export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <p className="text-white mx-2">
        &copy; {new Date().getFullYear()} SHMOVIE FANATICS
      </p>
      <p className="text-white mx-2">
        <i className="pi pi-github" />
      </p>
    </div>
  );
}
