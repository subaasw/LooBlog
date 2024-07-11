import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "@/utils/axiosConfig";
import useDominantColor from "@/hooks/useDominantColor";

import GhostImage from "@/assets/ghost.png";
import BgImage from "@/assets/image.png";
import useImageTransparency from "../hooks/useImageTransparency";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, [cat]);

  if (true) {
    return <Main />;
  }
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const RenderBackgroundImageBlock = ({ image, title }) => {
  const hasTransparency = useImageTransparency(image);
  const dominatorColor = useDominantColor(image);

  if (hasTransparency) {
    return (
      <div
        class="w-full absolute inset-0"
        style={{
          backgroundColor: dominatorColor,
        }}
      >
        <img class="float-right h-full" src={image} alt={title} />
      </div>
    );
  }

  return (
    <div class="w-full absolute inset-0">
      <img
        class="w-full aspect-video h-full object-cover"
        src={GhostImage}
        alt={title}
      />
    </div>
  );
};

const Main = () => {
  return (
    <>
      <section>
        <div class="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-32">
          <div class="border-b pb-5 text-balance">
            <p class="text-black font-serif text-4xl lg:text-8xl uppercase font-semibold">
              Welcome to user's blog!
            </p>
            <p class="text-slate-600 mt-4 text-lg">
              Advice, Strategies, Insights and Stories for the success of
              companies, schools and start-ups.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto 2xl:max-w-screen-2xl md:px-12 px-8 grid py-12 space-y-6">
          <a
            href="/posts/1"
            title="The Secret Garden of Elsie"
            aria-label="Elsie discovers a hidden garden in the middle of the city and uncovers a magical world of talking animals and enchanted plants"
          >
            <div class="w-full lg:pt-6 relative">
              <article class="mx-auto 2xl:max-w-7xl md:px-12 lg:py-24 px-4 py-4">
                <RenderBackgroundImageBlock
                  image={GhostImage}
                  title="12 recrents of javascript"
                />
                <div class="relative 2xl:max-w-7xl lg:mt-24 max-w-6xl md:p-10 mx-auto p-4">
                  <div class="bg-wood-100 p-4 lg:-mb-[8.5rem] lg:p-10 max-w-xl sm:p-8 text-balance">
                    <div>
                      <h1 class="text-black uppercase font-serif text-5xl font-bold">
                        The Secret Garden of Elsie
                      </h1>
                      <p class="text-black mt-4 text-lg">
                        Elsie discovers a hidden garden in the middle of the
                        city and uncovers a magical world of talking animals and
                        enchanted plants
                      </p>
                    </div>
                    <div class="items-center inline-flex space-x-1 mt-10">
                      <p class="font-medium text-gray-900 text-sm">
                        Alejandro Martinez
                      </p>
                      <span aria-hidden="true">·</span>
                      <div class="flex text-gray-500 text-sm">
                        <time datetime="Mon Jan 01">Mon Jan 01</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </a>
        </div>
      </section>
      <section>
        <div class="2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 py-12">
          <div class="grid gap-4 grid-cols-1 lg:gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                href={`/post/${post.id}`}
                key={post.id}
                title={post.title}
                className="group"
              >
                <article className="h-full flex-1">
                  <div className="w-full block inset-0">
                    <img
                      className="w-full aspect-video h-full object-cover"
                      src={post.img}
                      alt={post.title}
                    />
                  </div>
                  <div className="w-full flex flex-col items-start justify-between -mt-20 p-4">
                    <div className="w-full p-4 lg:p-8 bg-wood-100 h-full flex flex-col justify-between text-balance">
                      <div>
                        <p className="font-medium text-black uppercase text-xl font-serif">
                          The Time Traveler's Notebook
                        </p>
                        <p className="text-slate-600 line-clamp-2 mt-12 text-sm">
                          A mysterious notebook falls into the hands of a young
                          woman, leading her on a journey through time as she
                          learns about the lives of those who came before her.
                        </p>
                      </div>
                      <div className="items-center inline-flex mt-1 space-x-1">
                        <p className="font-medium text-gray-900 text-xs">
                          Giovanni Russo
                        </p>
                        <span aria-hidden="true">·</span>
                        <div className="flex text-gray-500 text-xs">
                          <time dateTime="Wed Jan 03">Wed Jan 03</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
