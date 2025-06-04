const logos = [
  "The Washington Post", "TechCrunch", "Bloomberg", "GIZMODO", "Forbes", "The Telegraph",
  "The Washington Post", "TechCrunch", "Bloomberg", "GIZMODO", "Forbes", "The Telegraph"
];

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4 overflow-x-hidden">
      <div className="inline-block animate-marquee">
        {logos.map((name, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-2xl font-semibold text-[#0F172A] opacity-70"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
