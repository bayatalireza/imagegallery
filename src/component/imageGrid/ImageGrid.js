import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { db, storage } from "../../firebase/Config";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";

export const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleDelete = async (e, imgId, imgUrl) => {
    e.stopPropagation();
    try {
      await deleteDoc(doc(db, "images", imgId));

      const imgRef = ref(storage, imgUrl);
      await deleteObject(imgRef);
    } catch (error) {
      console.log(error);
    }
  };
  const showBtnAfterDel = () => {
    setTimeout(() => {
      setShowDeleteButton(true);
    }, 300);
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            onMouseEnter={showBtnAfterDel}
            onMouseLeave={() => setShowDeleteButton(false)}
            whileHover={{opacity:1}}
            layout
          >
            <motion.img src={doc.url} alt="upload images" initial={{opacity:0}} animate={{opacity: [0.5, 1]}}  transition={{delay: 1}}/>
            {showDeleteButton && (
              <button
                className="delete-button"
                onClick={(e) => handleDelete(e, doc.id, doc.url)}
              >
                Delete
              </button>
            )}
          </motion.div>
        ))}
    </div>
  );
};
