import ModuleList from '../Modules/List';
import Status from '../Status/status';
function Home() {
  return (
    <div className="row">
      <div className="col - 8">
        <ModuleList />
      </div>
      <div className="col-3">
        <Status />
      </div>
    </div>
  );
}
export default Home;
