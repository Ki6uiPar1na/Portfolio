import { useState } from "react";
import { Trophy, ShieldCheck, TerminalSquare, X } from "lucide-react";

const contestData = [
  {
    id: 1,
    title: "4th Place in Hackathon-2025",
    description:
      "16 May was the final round of the World Telecommunication and Information Society Day Hackathon 2025 CTF. In the preliminary round (held on 12th May), 192 teams participated and only the top 35 made it to the onsite final at MIST. The whole event was organized by Military Institute of Science and Technology and BTRC. Glad to say we got selected in the prelims and managed to secure 4th place in the final round. The CTF organized by MIST is always amazing — and this one was no exception.The final round was a great experience. Even though the prelims were tough and we barely made it to the safe zone, we made a strong comeback in the final. From the very start, we dominated the leaderboard and held our ground till the end. Yes, we missed the top spot, but getting 4th place out of the 35 finalist teams still feels like a solid achievement.Huge shoutout to my teammates Tausif Mayeen, Md. Khairul Islam Tushar, and Firuze Tasnim Sneha.This wouldn’t have been possible without your effort and teamwork. Also, today was the prize-giving ceremony at BTRC. The prizes were handed over by the honorable Asif Mahmud Shojib Bhuiyan, Adviser for Local Government, Rural Development and Cooperatives of Bangladesh.  Had a great time there too. r3p4r0_r3b3ls rocks!! And JKKNIU legacy continues💥",
    icon: Trophy,
    image: "/img/CTF/hackathon-2025.jpeg",
    viewUrl: "https://www.facebook.com/photo/?fbid=10159888593007764&set=a.10159888592992764",
  },
  {
    id: 2,
    title: "5th - Red Sentry CTF 2025",
    description:
      "🚩 Red Sentry CTF 2025 – Top 5 Finish! 🏁I’m thrilled to share that I secured 5th place out of the top cybersecurity minds in the Red Sentry CTF, scoring 1550 points! 🥳",
    icon: Trophy,
    image: "/img/CTF/red-sentry-ctf-2025.png",
    viewUrl: "#ctf",
  },
  {
    id: 3,
    title: "23rd - Cyber Raid 2025",
    description: "My team JKKNIU L@L P1p4a secured 23rd place in Cyber Raid 2025 at MIST, organized by IT Directorate Bangladesh Army. Before that we make it top 40 over 225 teams.",
    icon: Trophy,
    image: "/img/CTF/cyber-raid-2025.png",
    viewUrl: "#hackathon",
  },
  {
    id: 4,
    title: "147th - Knight CTF 2025",
    description:
      "🚩 KNIGHTCTF 2025 Conquered!🏰⚔️ An international CTF, 1000+ registered teams. 'JKKNIU L@L P1p4a', we secured 147th place among 750+ participated teams! 💪🔥🏅 Total Points: 1600 ",
    icon: Trophy,
    image: "/img/CTF/knight-ctf-2025.png",
    viewUrl: "#hackathon",
  },
  {
    id: 5,
    title: "N3XT L3V3L CTF - 31st Place",
    description:
      "I’m excited to share that our team Res!l!ent An0n!m0us Warr!0rs - RAW took part in N3XT_L3V3L CTF and finished in 31st place with 4,328 points.",
    icon: Trophy,
    image: "/img/CTF/nextLevelCtf.png",
    viewUrl: "#hackathon",
  },
  {
    id: 6,
    title: "EWU CTF 2024 - 12th Place",
    description:
      `Our team, JKKNIU L@L P1p4a, proudly secured 12th place in the EWU National RoboFest 2024 Capture The Flag Competition hosted by East West University! 🥇

This accomplishment reflects the dedication, teamwork, and problem-solving skills that every member brought to the table. We’re grateful for the opportunity to compete against some of the best teams in the nation.

My team members are:
✪ Mobasshirah Mridula apu
✪ Rokeya Akter 
✪ Umma Lutfia Afroze

hashtag#RoboFest2024
hashtag#CaptureTheFlag
hashtag#JKKNIU
#https://lnkd.in/gMHUJTQw`,
    icon: Trophy,
    image: "/img/CTF/ewuCTF2024.png",
    viewUrl: "#hackathon",
  },
  {
    id: 7,
    title: "Programming Hero Presents National Hackathon",
      description:
      `Alhamdulillah 
Another achievement!! My team, "Checkmate Beta," was selected for onsite participation in "Programming Hero presents National Hackathon"

Team members are:
1. Shahriar Hasnat Shafin Ahmed 
2. Md Abu Omayer Babu 
3. Rokeya Akter 

Keep us on your prayer 

hashtag#EWU hashtag#hackathon hashtag#competition.`,
    icon: Trophy,
    image: "/img/hackathon/ewu2024.png",
    viewUrl: "#hackathon",
  }
];

export const ContestsSection = () => {
  const [expanded, setExpanded] = useState({});
  const [activeViewId, setActiveViewId] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openFullscreen = (id) => {
    setActiveViewId(id);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeFullscreen = () => {
    setActiveViewId(null);
    document.body.style.overflow = ""; // restore scroll
  };

  const activeContest = contestData.find((c) => c.id === activeViewId);

  return (
    <>
      <section
        id="contest"
        className="min-h-screen py-24 px-4 bg-secondary/30 flex items-center"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            My <span className="text-primary">Contests</span> Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contestData.map(({ id, title, description, icon: Icon, image, viewUrl }) => (
              <div
                key={id}
                className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                {/* Cover Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>

                  <p
                    className={`text-muted-foreground flex-grow overflow-hidden transition-all ${
                      expanded[id] ? "max-h-full" : "max-h-[4.5rem]"
                    }`}
                    style={{ lineHeight: "1.5rem" }}
                  >
                    {description}
                  </p>

                  <button
                    onClick={() => toggleExpand(id)}
                    className="mt-3 text-sm text-primary font-medium self-start"
                  >
                    {expanded[id] ? "See Less" : "See More"}
                  </button>

                  {/* View Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => openFullscreen(id)}
                      className="cosmic-button w-full text-center"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
      {activeContest && (
        <div
          className="fixed inset-0 z-50 bg-black flex flex-col overflow-auto p-8"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          onClick={closeFullscreen}
        >
          <div
            className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg relative p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/20 transition"
              aria-label="Close fullscreen view"
            >
              <X className="h-6 w-6 text-primary" />
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={activeContest.image}
                alt={activeContest.title}
                className="w-full md:w-1/2 object-cover rounded-lg"
                loading="lazy"
              />

              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-6">
                  <activeContest.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">{activeContest.title}</h2>
                </div>

                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {activeContest.description}
                </p>

                {activeContest.viewUrl && (
                  <a
                    href={activeContest.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block cosmic-button px-6 py-3"
                  >
                    Visit Link
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
