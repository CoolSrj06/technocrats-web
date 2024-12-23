import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 bg-">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome to<br/>
        <ReactTypingEffect
          text={["Technocrats Society"]}
          speed={100} // Typing speed
          eraseSpeed={50} // Erasing speed
          typingDelay={500} // Delay before typing starts
          eraseDelay={2000} // Delay before text erases
          className="bg-gradient-to-r text-[#d4a373] bg-clip-text"
        />
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl pb-28">
      Technocrats focus on leveraging science and technology to solve industry and societal challenges, uniting visionaries to inspire and deliver impactful solutions. We prioritize logic, evidence, and strategic implementation for a better future.
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div> */}
      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default Home;
