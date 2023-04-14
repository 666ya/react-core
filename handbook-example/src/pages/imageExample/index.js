import { useState } from 'react'
import dog from  '../../dog.jpg'
import './style.css'
export default function Picture() {
  const [isImage,setIsImage] = useState(false)
  return (
    <div className={isImage ? "background":  "background  background--active" }  onClick={()=> {
      setIsImage(false)
    }}>
      <img
        className={isImage ? "picture picture--active":  "picture" }
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src={dog}
        onClick={(e) => {
          e.stopPropagation()
          setIsImage(true)
        }}
      />
    </div>
  );
}
