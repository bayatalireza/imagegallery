import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { db, storage } from "../../firebase/Config";
import { deleteObject, ref } from "firebase/storage";

export const ImageGrid = ({setSelectedImage}) => {

  const { docs } = useFirestore("images");

  const handleDelete = async (e, imgId, imgUrl) => {

    e.stopPropagation()
    try {
      await deleteDoc(doc(db, 'images', imgId ))

      const imgRef = ref(storage, imgUrl)
      await deleteObject(imgRef)

    } catch (error) {
      console.log(error);
      
    }
  }  

  return (
    <motion.div className="img-grid">
      {docs &&
        docs.map(doc => (
          
          <div className="img-wrap" key={doc.id} onClick={()=>setSelectedImage(doc.url)}>
            <img src={doc.url} alt="upload images" />
            <button className="delete-button" onClick={e => handleDelete(e,doc.id,doc.url)}>Delete</button>
          </div>
        ))}
    </motion.div>
  );
};
