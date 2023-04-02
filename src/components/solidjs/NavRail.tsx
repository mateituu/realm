import {
  Home,
  Newspaper,
  Info,
  ListMusic,
  Scale,
  Code2,
  Book,
} from "lucide-solid";

export default function NavRail(props: any) {
  return (
    <nav
      id={props.id}
      class="bg-neutral-800 box-border h-fit md:h-full fixed md:sticky md:top-0 bottom-0 py-3 px-4 md:px-3 md:py-3 w-full md:w-fit flex md:flex-col justify-center md:justify-between border-t md:border-t-0 md:border-r border-neutral-700 z-50"
    >
      <div class="flex flex-row justify-between md:justify-center w-full md:w-fit md:flex-col gap-3">
        <a
          href="/"
          class={`group nav-item ${
            props.path === "/" ? "nav-item-active" : ""
          }`}
        >
          <Home size={18} />
          <p class="nav-item-label">Home</p>
        </a>
        <a
          href="/posts"
          class={`group nav-item ${
            props.path === "/posts" ? "nav-item-active" : ""
          }`}
        >
          <Newspaper size={18} />
          <p class="nav-item-label">Posts</p>
        </a>
        <a
          href="/diaries"
          class={`group nav-item ${
            props.path === "/diaries" ? "nav-item-active" : ""
          }`}
        >
          <Book size={18} />
          <p class="nav-item-label">Diaries</p>
        </a>
        <a
          href="/lyrics"
          class={`group nav-item ${
            props.path === "/lyrics" ? "nav-item-active" : ""
          }`}
        >
          <ListMusic size={18} />
          <p class="nav-item-label">Song Lyrics</p>
        </a>
        <a
          href="/about"
          class={`group nav-item ${
            props.path === "/about" ? "nav-item-active" : ""
          }`}
        >
          <Info size={18} />
          <p class="nav-item-label">About</p>
        </a>
        <a
          href="/creed"
          class={`md:hidden group nav-item ${
            props.path === "/creed" ? "nav-item-active" : ""
          }`}
        >
          <Scale size={18} />
          <p class="nav-item-label">Journalist's Creed</p>
        </a>
        <a
          href="/oath"
          class={`md:hidden group nav-item ${
            props.path === "/oath" ? "nav-item-active" : ""
          }`}
        >
          <Code2 size={18} />
          <p class="nav-item-label">Programmer's Oath</p>
        </a>
      </div>
      <div class="hidden md:flex flex-col gap-3">
        <a
          href="/creed"
          class={`group nav-item ${
            props.path === "/creed" ? "nav-item-active" : ""
          }`}
        >
          <Scale size={18} />
          <p class="nav-item-label">Journalist's Creed</p>
        </a>
        <a
          href="/oath"
          class={`group nav-item ${
            props.path === "/oath" ? "nav-item-active" : ""
          }`}
        >
          <Code2 size={18} />
          <p class="nav-item-label">Programmer's Oath</p>
        </a>
      </div>
    </nav>
  );
}