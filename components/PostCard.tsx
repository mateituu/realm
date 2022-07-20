// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function PostCard(props: any) {
  return (
    <a
      href={props.path}
      className={tw`ring ring-transparent flex flex-col justify-between block w-full px-5 py-3 bg-dark-accent-quartertrans rounded-xl hover:bg-dark-accent-semitrans hover:ring-dark-accent-solid transition-all duration-200 ease-linear text-dark-text box-border`}
    >
      <div>
        <p className={tw`text-dark-accent-solid font-semibold`}>{props.title}</p>
        <p className={tw`text-dark-text text-xs mb-2`}>{props.date}</p>
        <p className={tw`text-dark-text text-sm mb-1`}>{props.desc}</p>
      </div>
      <div className={tw`box-border flex-wrap flex flex-row`}>
        {props.tag.map((el: string, index: any) => (
          <p
            key={index}
            className={tw`bg-dark-accent-solid text-xs text-dark-side uppercase font-semibold px-2.5 py-0.5 mt-1 mb-1 rounded-3xl mr-2`}
          >
            {el}
          </p>
        ))}
      </div>
    </a>
  );
}