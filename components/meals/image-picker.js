"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
   const imagePickerRef = useRef();
   const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

   const handlePickImage = () => {
      imagePickerRef.current.click();
   };

   const handleImageChange = (event) => {
      const file = event.target.files[0];
      const fileReader = new FileReader();

      if (!file) {
         setImagePreviewUrl(null);
         return;
      }

      fileReader.onload = () => {
         setImagePreviewUrl(fileReader.result);
      };

      if (file) {
         fileReader.readAsDataURL(file);
      }
   };

   return (
      <div className={classes.picker}>
         <label htmlFor={name} className={classes.label}>
            {label}
         </label>
         <div className={classes.control}>
            <div className={classes.preview}>
               {imagePreviewUrl ? (
                  <Image src={imagePreviewUrl} alt="Preview" fill />
               ) : (
                  <p className={classes.placeholder}>Image Preview</p>
               )}
            </div>
            <input
               ref={imagePickerRef}
               type="file"
               id={name}
               name={name}
               className={classes.input}
               accept="image/png, image/jpeg, image/jpg"
               onChange={handleImageChange}
               required
            />
            <button
               type="button"
               className={classes.button}
               onClick={handlePickImage}
            >
               Pick an Image
            </button>
         </div>
         <p className={classes.instructions}>
            {`Please select an image file (png, jpg, jpeg)`}
         </p>
      </div>
   );
};

export default ImagePicker;
