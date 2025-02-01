import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBlogs(data.articles))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  console.log(blogs);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Blogs
      </h2>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="w-full p-4">
              <div className="p-6 border border-neutral-700 rounded-xl hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-extrabold mb-4 text-gradient-to-r from-orange-500 to-red-400">
                  {blog.title}
                </h3>
                <p className="text-neutral-400 font-semibold">Author: {blog.author}</p>
                <p className="text-neutral-400 font-semibold mb-6">Source: {blog.source}</p>
                {blog.sections.map((section, secIndex) => (
                <div key={secIndex} className="text-neutral-400 mb-6">
                  <h4 className="text-[#5D3A00]">{section.heading}</h4>
                  <br />
                  <p className="mb-1">{section.content.summary}</p>
                  <ul className="list-disc list-inside mb-1"></ul>
                  {section.content.key_points?.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {typeof point === "string" ? (
                          point
                        ) : (
                          <>
                            <strong>{point.subheading}:</strong>
                            <ul className="list-disc list-inside ml-4">
                              {point.details?.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                              ))}
                            </ul>
                          </>
                        )}
                    </li>
                  ))}
                </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
