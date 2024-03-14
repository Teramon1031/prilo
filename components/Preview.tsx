import { FC } from "react";
import { Pane } from "./Pane";
import { Slide } from "./Slide";

export const Preview: FC = () => {
  return (
    <Pane>
      {/* <H2 className="sticky top-16 z-40 bg-white pt-2">Preview</H2> */}
      <div className="mt-3 grid grid-row gap-5">
        <Slide>あああ</Slide>
        <Slide>いいい</Slide>
        <Slide>ううう</Slide>
      </div>
    </Pane>
  );
};
