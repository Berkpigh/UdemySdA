import { ReactNode } from "react";

type PropswithChildren<P = unknown> = P & { children: ReactNode };

// type MonPropsCustomWithChildren = PropswithChildren & { item: string };

export const LayoutComponent = (props: CustomWithChildren) => {
  return (
    <>
      <div>
        <h1>Layout !</h1>
        <div>{props.children}</div>
      </div>
    </>
  );
};
