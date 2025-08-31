import Image from "next/image";
import Link from "next/link";
import FeatureHighlight from "./FeatureHighlight";

const features = [
  {
    url: "/copilot.png",
    header: "Lawbox Copilot",
    text: "An AI paralegal inside Outlook 365 that understands your matters and clients. It summarizes long threads into key facts, deadlines, and requested actions; drafts clear, court-ready replies with citations to the source email and attachments; and surfaces what’s urgent in a focused “Today” view so you act quickly. All processing is tenant-isolated with audit trails and role-based controls for peace of mind.",
  },
  {
    url: "/cases.png",
    header: "Automated Tagging/Case Folders",
    text: "Zero-effort organization for every message, new or old. Incoming email is automatically classified by matter/client and routed into the correct folder with consistent naming; legacy inboxes can be back-filled in bulk by case number, party, or docket references. Apply retention policies and litigation holds automatically so compliance never depends on manual filing.",
  },
  {
    url: "/notifications.png",
    header: "Notifications & Reminders",
    text: "Never miss a deadline or critical reply. Lawbox detects dates and obligations from filings and correspondence, sets follow-ups on unanswered threads, and elevates privileged or security-risk messages to the top of your queue. Smart filters cut the noise while ensuring time-sensitive items trigger clear, actionable reminders you can trust.",
  },
  {
    url: "/attorney.png",
    header: "Day-to-Day Attorney",
    text: "Your daily control center inside Outlook—no context switching. One-click actions let you save to matter, log time, assign to a teammate, or start a checklist from any message; firm-approved templates keep communications consistent across practice areas. A “Safe Window” adds second-layer spam/phish screening and attachment safeguards before you open or forward sensitive content.",
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
        <h1 className="flex flex-col w-3/4 mx-auto text-4xl text-center">
          <span className="">SMART FEATURES BUILT</span> FOR THE WAY LAWYERS
          WORK
        </h1>
      </div>

      <div className="flex flex-col justify-center mt-[5rem]">
        {features.map((feature, index) => (
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
