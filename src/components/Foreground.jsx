import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Important Document",
      filesize: "2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Presentation Slides",
      filesize: "5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "View Details", tagColor: "blue" },
    },
    {
      desc: "Photos",
      filesize: "10mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
