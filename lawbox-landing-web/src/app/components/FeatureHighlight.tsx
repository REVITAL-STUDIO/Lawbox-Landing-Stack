import Image from "next/image";
import Link from "next/link";

type FeatureHighlightProps = {
  highlightURL: string;
  header: string;
  text: string;
};

export default function FeatureHighlight({
  highlightURL,
  header,
  text,
}: FeatureHighlightProps) {
  return (
    <>
      <div className="w-full mb-[4%] xl:p-8 relative ">
        <div
          data-scroll
          data-scroll-class="is-in"
          data-scroll-speed="0.12"
          data-scroll-repeat
          className="p-8 relative max-w-6xl mx-auto  xl:flex gap-x-16 rounded-xl  show"
        >
          <div className="absolute z-10 w-full h-full rounded-xl top-0 left-0   p-6"></div>

          <Image
            src={highlightURL}
            alt="features"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl mx-auto"
          />
          <div className="xl:w-1/2 w-full text-center xl:text-left">
            <h2 className="mt-8 xl:mt-0 xl:text-3xl text-2xl w-3/4 mx-auto xl:mx-0">
              {header}
            </h2>
            <p className="text-base mt-16 leading-4">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
