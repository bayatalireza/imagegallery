import Title from "./component/title/Title"
import './App.css';
import UploadForm from "./component/upload/UploadForm";
import {ImageGird, ImageGrid} from "./component/imageGrid/ImageGrid"

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
