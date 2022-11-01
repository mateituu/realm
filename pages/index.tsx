import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { AnchorButton, NextLinkButton } from "../components/stateless/Button";
import Logo from "../components/stateless/Logo";
import PostCard from "../components/stateless/PostCard";
import ProjectCard from "../components/stateless/ProjectCard";
import { getPostSlugs, getProjectSlugs } from "../utils/utils";

const slug = {
  title: "Landing",
  description: "IrvanMA's secret hideout.",
};

export default function Home(props: any) {
  const [isUpToDate, setIsUpToDate] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      wb.addEventListener("installed", (e: any) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`Event ${e.type} is triggered.`);
          console.log(e);
        }
      });

      wb.addEventListener("controlling", (e: any) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`Event ${e.type} is triggered.`);
          console.log(e);
        }
      });

      wb.addEventListener("activated", (e: any) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`Event ${e.type} is triggered.`);
          console.log(e);
        }
      });
      const promptNewVersionAvailable = (e: any) => {
        setIsUpToDate(false);
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);
      wb.addEventListener("message", (e: any) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`Event ${e.type} is triggered.`);
          console.log(e);
        }
      });
      wb.register();
    }
  });

  return (
    <BaseLayout {...slug}>
      {!isUpToDate && (
        <div
          className="fixed top-0 left-0 w-full py-2 flex justify-center items-center bg-red-400 z-50 transition-all"
          style={{
            visibility: isUpToDate ? "hidden" : "visible",
            opacity: isUpToDate ? 0 : 1,
          }}
        >
          <p className="font-bold text-gray-900">
            A newer version of this web app is available, please reload to
            update.
          </p>
        </div>
      )}
      <section className="w-full min-h-screen grid place-content-center place-items-center gap-5 py-24 container-responsive">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Logo />
          <section className="min-h-full px-5 py-2 flex flex-col gap-3">
            <p className="w-fit text-3xl font-bold border-b-2 border-red-400 border-opacity-50">
              Irvan Malik Azantha&apos;s Realm
            </p>
            <p>
              Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 19 y&apos;o
              man currently studying on Universitas Sriwijaya. I live in
              Palembang, Indonesia. I&apos;m a self taught developer that loves
              to learn new things.
            </p>
            <div className="flex gap-3">
              <AnchorButton href="https://github.com/irvanmalik48">
                <span>GitHub Profile</span>
              </AnchorButton>
              <AnchorButton href="https://linkedin.com/in/irvanmalik48">
                <span>LinkedIn Profile</span>
              </AnchorButton>
            </div>
          </section>
        </div>
        <p className="text-2xl font-bold w-fit mx-auto border-b-2 mt-5 border-red-400 border-opacity-50">
          Recent Posts
        </p>
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {props.posts.slice(0, 6).map((post: any, index: any) => (
            <PostCard key={index} meta={post} />
          ))}
        </div>
        <NextLinkButton href="/posts">More Posts</NextLinkButton>
        <p className="text-2xl font-bold w-fit mx-auto border-b-2 mt-5 border-red-400 border-opacity-50">
          Recent Projects
        </p>
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {props.projects.slice(0, 4).map((post: any, index: any) => (
            <ProjectCard key={index} meta={post} />
          ))}
        </div>
        <NextLinkButton href="/projects">More Projects</NextLinkButton>
      </section>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postSlugs = getPostSlugs().sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const projectSlugs = getProjectSlugs();

  return {
    props: {
      posts: postSlugs,
      projects: projectSlugs,
    },
  };
};
