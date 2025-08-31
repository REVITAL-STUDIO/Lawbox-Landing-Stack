import Image from "next/image";
import FeatureHighlight from "./FeatureHighlight";

const features = [
  {
    url: "/copilot.png",
    header: "Lost in email threads?",
    text: "Your AI legal assistant inside Outlook. Summarize long chains, draft quick responses, and pull key facts like dates or deadlines instantly. Stop scrolling—Copilot highlights what matters in seconds.",
  },
  {
    url: "/cases.png",
    header: "Handle inbox chaos",
    text: "Detects case names, clients, and matter numbers automatically, filing emails into the right folder. Your inbox stays organized by case—without you lifting a finger.",
  },
  {
    url: "/notifications.png",
    header: "Never miss a deadline",
    text: "Smart reminders flag critical filings and opposing counsel updates. Lawbox ensures you never overlook a deadline hidden in your inbox.",
  },
  {
    url: "/attorney.png",
    header: "Cut admin overload",
    text: "From client follow-ups to scheduling and invoice reminders, Lawbox drafts the routine responses so you can review and send in seconds—saving hours every week.",
  },
];

export default function Features() {
  return (
    <div className="w-full text-white  flex flex-col">
      <div
        data-scroll
        data-scroll-class="is-in"
        data-scroll-speed="0.03"
        data-scroll-repeat
        className="flex flex-col gap-6 text-center relative mx-auto  mt-[4rem] show"
      >
        <Image
          src="/featurelogo.png"
          alt="features"
          width={100}
          height={100}
          className="object-contain mx-auto mb-4 "
        />
        <h1 className="flex flex-col xl:w-full w-3/4 mx-auto text-4xl text-center">
          <span className="">SMART FEATURES BUILT</span> FOR THE WAY LAWYERS
          WORK
        </h1>
      </div>

      <div className="flex flex-col justify-center mt-[5rem]">
        {features.map((feature) => (
          <FeatureHighlight
            key={feature.url}
            highlightURL={feature.url}
            header={feature.header}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
}
