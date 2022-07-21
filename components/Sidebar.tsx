// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import { css } from "twind/css";
import { loadContent } from "../utils/load.ts";
import PostCard from "./PostCard.tsx";

const posts = await loadContent("posts/");

function SearchIcon() {
  return (
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      />
    </svg>
  );
}

export default function Sidebar() {
  const postProps: any[] = [];

  for (const [_key, post] of posts.entries()) {
    postProps.push(post);
  }

  postProps.sort((a: any, b: any) => {
    return a["date"] < b["date"] ? 1 : -1;
  });

  return (
    <aside
      className={tw`sticky top-0 z-0 h-screen w-[28rem] items-center justify-start overflow-y-auto bg-dark-side md:flex md:flex-col gap-5 pb-4 pt-0 text-dark-text ${css(
        {
          "&::-webkit-scrollbar": apply`bg-dark-accent-quartertrans w-5`,
          "&::-webkit-scrollbar-thumb": apply`bg-dark-accent-solid border-transparent border-[7px] border-solid bg-clip-content rounded-xl`,
        }
      )}`}
    >
      <div
        className={tw`flex flex-row w-full gap-4 sticky top-0 pt-4 bg-gradient-to-b from-dark-side via-dark-side to-transparent px-4`}
      >
        <div
          className={tw`w-full px-5 py-3 font-semibold bg-dark-bg rounded-xl text-sm uppercase shadow-xl`}
        >
          <p>All Posts</p>
        </div>
        <button
          className={tw`flex flex-row items-center w-[fit-content] bg-dark-nav rounded-xl hover:rounded-3xl transition-all duration-200 ease-linear group shadow-xl`}
        >
          <div
            className={tw`w-[fit-content] bg-dark-accent-semitrans p-3 rounded-xl text-dark-accent-solid hover:rounded-3xl hover:bg-dark-accent-solid hover:text-dark-nav transition-all duration-200 ease-linear`}
          >
            <SearchIcon />
          </div>
          <span
            className={tw`fixed group-hover:scale-100 bg-dark-nav absolute left-[34rem] z-0 font-semibold m-2 w-auto min-w-max origin-left scale-0 rounded-3xl uppercase px-6 py-2 text-sm text-dark-text transition-all duration-100`}
          >
            Search Post
          </span>
        </button>
      </div>
      <div className={tw`mx-4 flex flex-col justify-center items-center gap-5`}>
        {postProps.map((data: any, key: any) => {
          return (
            <PostCard
              key={key}
              path={"/posts" + data.path}
              title={data.title}
              date={data.date}
              desc={data.desc}
              tag={data.tag}
            />
          );
        })}
      </div>
    </aside>
  );
}
