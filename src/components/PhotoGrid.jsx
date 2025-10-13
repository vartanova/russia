import React from "react";

import PhotoGrid0 from "./../assets/photoGrid/__item.jpg"
import PhotoGrid2 from "./../assets/photoGrid/__item-2.jpg"
import PhotoGrid3 from "./../assets/photoGrid/__item-3.jpg"
import PhotoGrid4 from "./../assets/photoGrid/__item-4.jpg"
import PhotoGrid5 from "./../assets/photoGrid/__item-5.jpg"
import PhotoGrid6 from "./../assets/photoGrid/__item-6.jpg"
import PhotoGrid7 from "./../assets/photoGrid/__item-7.jpg"
import PhotoGrid8 from "./../assets/photoGrid/__item-8.jpg"
import PhotoGrid9 from "./../assets/photoGrid/__item-9.jpg"
import PhotoGrid10 from "./../assets/photoGrid/__item-10.jpg"
import PhotoGrid11 from "./../assets/photoGrid/__item-11.jpg"
import PhotoGrid12 from "./../assets/photoGrid/__item-12.jpg"







const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 min-[425px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <img
        className="w-full"
        src={PhotoGrid11}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid10}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid9}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid8}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid7}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid6}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid5}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid4}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid3}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid2}
        alt="photo"
      />
      <img
        className="w-full"
        src={PhotoGrid12}
        alt="photo"
      />

      <img
        className="w-full"
        src={PhotoGrid0}
        alt="photo"
      />
    </div>
  );
};

export default PhotoGrid;
