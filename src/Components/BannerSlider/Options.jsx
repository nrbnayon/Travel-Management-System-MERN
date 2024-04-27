import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Options = () => {
  return (
    <div className="banner-text-container bg-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto bg-blue-400 p-5 rounded-lg">
        <h3 className="banner-title text-3xl font-bold text-white mb-4">
          Explore Your Travel
        </h3>
        <p className="banner-desc text-white">
          Plan your dream vacation with Euro Travel. Discover new horizons and
          create lasting memories with our curated travel experiences.
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Select Date" />
          </DemoContainer>
        </LocalizationProvider>
        <div className="flex flex-wrap mt-4">
          {/* Dropdowns and Button */}
          <div className="w-full sm:w-1/2 md:w-1/3 mt-4 sm:mt-0">
            <label className="block text-white font-medium">Where to Go</label>
            <select name="dropdown" className="dropdown-select">
              <option value="" disabled selected hidden>
                When
              </option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-4 sm:mt-0">
            <label className="block text-white font-medium">Select Type</label>
            <select name="dropdown" className="dropdown-select">
              <option value="" disabled selected hidden>
                Select Type
              </option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="England">England</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Switzerland">Switzerland</option>
            </select>
          </div>
          <div className="w-full mt-6">
            <button className="primary-btn">
              <i className="fas fa-search mr-2"></i>Find Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
