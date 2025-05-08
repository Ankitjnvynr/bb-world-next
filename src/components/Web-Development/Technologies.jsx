import React from "react";

const sunnahList = [
  {
    id: "./images/Industries/Web-Dev/logos/PHP-logo.svg.png",
    title: "PHP",
    source: "PHP Framework is the essential foundation for building PHP web applications using libraries. These libraries comprise commonly used functions that save developers time to start code from scratch.",
  },
  {
    id: "./images/Industries/Web-Dev/logos/laravel.avif",
    title: "Laravel",
    source: "It is a new yet prevalent framework with elegant syntax. It makes the development process enjoyable for the user. Laravel is used to build websites with model-view-controller (MVC) patterns.",
  },
  {
    id: "./images/Industries/Web-Dev/logos/react.png",
    title: "React",
    source: "Is a highly used JavaScript library and an excellent tool for creating interactive applications for web, mobile, and other platforms. It works only on the user interface. The important feature is to be simple, fast and scalable.",
  },
  {
    id: "./images/Industries/Web-Dev/logos/asp.jpeg",
    title: "ASP.NET",
    source: "Asp.net Developed and marked by Microsoft, this web application framework allows the creation of dynamic websites. It is a fast, reliable, free and easy to use framework providing complete control for development.",
  },
  {
    id: "./images/Industries/Web-Dev/logos/node.png",
    title: "Node.js",
    source:
      "It allows users to run JavaScript on the server as full-stack technology for web development. It has non-blocking architecture and unique features. It will enable the developers to create all types of server-side tools.",
  },
  {
    id: "./images/Industries/Web-Dev/logos/angular.webp",
    title: "Angular",
    source:
      " It allows developers to build dynamic, single-page web applications using HTML, CSS, and TypeScript. Angular’s component-based architecture and two-way data binding .",
  },
];

const Technologies = () => {
  return (
    <>
     <div className="flex flex-col items-center px-4 mt-10 sm:px-6 md:px-10 bg-gray-100  font-sans py-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700"></h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 -mt-1">Our Web Development</h2>
        <p className="bg-blue-950 mt-4 px-4 py-2 text-xl text-white rounded shadow font-extrabold">
         Technologies
        </p>
      </div>
      </div>
    
      <div className="p-8 w-full px-4 flex flex-wrap justify-center gap-6 bg-gray-100 ">
  {sunnahList.map((item) => (
    <div
      key={item.id}
      className="w-full xs:w-[100%] sm:w-[45%] lg:w-[40%] tab:w-[47%] md:w-[48%]  bg-white rounded-xl shadow-lg flex flex-row items-start p-4"
    >
      <div className="xs:w-full xs:h-[45%] s:h-[90%] lg:h-[50%] lg:w-[100%] tab:h-[60%] xl:h-[90%] md:h-[50%] " >
        <img src={item.id} alt="" className="xs:w-[100%] xs:h-[100%] tab:w-[100%]  lg:w-[100%] w-20 h-20 flex items-center justify-center text-white text-lg font-bold bg-transparent rounded-full shadow " />
      </div>
      <div className="text-gray-800 lg:px-5 xs:px-3">
        <p className="font-semibold text-base lg:text-xl">{item.title}</p>
        <p className="text-sm text-gray-600 mt-1">{item.source}</p>
      </div>
    </div>
  ))}
</div>

  
    </>
  );
};

export default Technologies;
