import { InputText } from "primereact/inputtext";
import "../index.css";

export default function Logo({ query, setQuery }) {
  <header id="header" className="mb-2 mx-5">
    <div className="d-flex align-items-center justify-content-between">
      {/* <h3 className='text-white'>SHMOVIE FANATICS</h3> */}
      <a href="/">
        <img
          className="logo"
          src="https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230421T002509Z&X-Amz-Expires=19894&X-Amz-Signature=0adc59afcf6a893d961af662ee59a6c76bdf645ab228b2e553dc019090ec2b75&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Apr%202023%2005%3A56%3A43%20GMT"
          alt="logo"
        />
      </a>
      <span className="p-float-label p-input-icon-left mb-3">
        <i className="pi pi-search" />
        <InputText
          id="lefticon"
          value={query}
          setQuery={setQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="lefticon">Search for a movie</label>
      </span>
    </div>
  </header>;
}
