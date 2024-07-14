import { useEffect, useState } from "react";
import { getAllPosts } from "@/utils/api/posts";
import parseTextFromHtml from "@/utils/domParser";

const RenderBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await getAllPosts();
      setBlogs(data);
    } catch (error) {
      console.warn("Error: ", error);
      setBlogs([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (Array.isArray(blogs) && blogs.length < 0) {
    return <div>No Blogs found</div>;
  }

  return (
    <>
      {blogs.map((blog) => (
        <a
          key={blog.id}
          href={`/post/${blog.id}`}
          title={blog.title}
          className="group"
        >
          <article className="h-full flex-1 duration-200">
            <div className="w-full flex flex-col flex-1 items-start justify-between">
              <div>
                <div>
                  <p className="font-medium text-black group-hover:text-salmon-600">
                    {blog.title}
                  </p>
                </div>
                <p className="text-slate-600 line-clamp-3 font-normal mt-4 leading-6">
                  {parseTextFromHtml(blog.desc)}
                </p>
              </div>
            </div>
          </article>
        </a>
      ))}
    </>
  );
};

function Blogs() {
  return (
    <section>
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 py-32">
        <div className="border-b pb-5">
          <div className="max-w-xl">
            <p className="text-black font-serif text-4xl font-semibold">
              LooBlog's archive
            </p>
            <p className="text-slate-600 mt-4 text-lg">
              Our archived blog posts
            </p>
          </div>
        </div>
        <div className="grid gap-12 grid-cols-1 lg:gap-10 lg:space-y-0 sm:grid-cols-2 border-b mt-12 pb-12">
          <RenderBlogs />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
