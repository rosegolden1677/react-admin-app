import './List.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
  return (
    <div className="list">
      {/* sidebar */}
      <Sidebar />

      <div className="listContainer">
        {/* navbar */}
        <Navbar />

        {/* data table */}
        <Datatable />
      </div>
    </div>
  );
};

export default List;
