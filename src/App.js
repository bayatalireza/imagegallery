import Title from "./component/title/Title"
import './App.css';
import UploadForm from "./component/upload/UploadForm";
import { ImageGrid } from "./component/imageGrid/ImageGrid"
import { Modal } from "./component/modal/Modal";
import { useState } from "react";

function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
