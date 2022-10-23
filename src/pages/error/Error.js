import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Error.scss';

const Error = () => {
  return (
    <div className="error">
      {/* sidebar */}
      <Sidebar />

      {/* new content */}
      <div className="newContainer">
        {/* navbar */}
        <Navbar />

        <div className="info">
            404: Page Not Found
        </div>
      </div>
    </div>
  );
};

export default Error;
