"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import HTML from '../images/html.png'
import CSS from '../images/css.png'

function TabsTheme() {
  const tabs = [
    {
      title: "HTML",
      value: "html",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-white bg-opacity-10 border backdrop-blur-md shadow-md">
          <Image
          src={HTML}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
           />
        </div>
      ),
    },
    {
      title: "CSS",
      value: "css",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-white bg-opacity-10 border backdrop-blur-md shadow-md">
          <Image
          src={CSS}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
           />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white bg-opacity-10 border backdrop-blur-md shadow-md">
          <Image
          src={HTML}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white bg-opacity-10 border backdrop-blur-md shadow-md">
          <Image
          src={HTML}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-white bg-opacity-10 border backdrop-blur-md shadow-md">
          <Image
          src={HTML}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}



export default TabsTheme;