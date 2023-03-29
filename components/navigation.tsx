import { FC } from "react";
import Link from "next/link";
import { Pages } from "../pages.config";
import { PrevArrow, NextArrow } from "../assets/arrows";

interface INavigation {
  name: string;
}

const Navigation: FC<INavigation> = ({ name }) => {
  const currentPage = Pages.findIndex((page) => page[0] === name);
  const prev = Pages[currentPage - 1];
  const next = Pages[currentPage + 1];

  return (
    <main className="nx-flex nx-justify-between nx-items-center nx-mt-16 nx-pt-4 nx-border-t nx-text-3xl nx-border-neutral-200/70 dark:nx-border-neutral-800 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400`">
      {prev ? (
        <Link
          href={`${prev[1]}`}
          className="nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 md:nx-text-lg ltr:nx-pr-4 rtl:nx-pl-4"
        >
          {PrevArrow} {prev[0]}
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          href={`${next[1]}`}
          className="nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 md:nx-text-lg ltr:nx-pr-4 rtl:nx-pl-4"
        >
          {next[0]} {NextArrow}
        </Link>
      )}
    </main>
  );
};

export default Navigation;
