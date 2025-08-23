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
      <div className="w-full mb-[4%] p-8 relative ">
        <div
          data-scroll
          data-scroll-class="is-in"
          data-scroll-speed="0.12"
          data-scroll-repeat
          className="p-8 relative max-w-6xl mx-auto  flex gap-x-16 rounded-xl  show"
        >
          <div className="absolute z-10 w-full h-full rounded-xl top-0 left-0   p-6"></div>

          <Image
            src={highlightURL}
            alt="features"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl"
          />
          <div className="w-1/2">
            <h2>{header}</h2>
            <p className="text-base mt-16 leading-4">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
