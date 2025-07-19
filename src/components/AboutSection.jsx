import { ShieldCheck, Terminal, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Md. Khairul Islam — Competitive Programmer & Cybersecurity Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m an aspiring Computer Science student from JKKNIU with a deep
              passion for competitive programming, cybersecurity, and building impactful
              digital solutions. I love solving algorithmic challenges and have been actively involved
              in contests like ICPC and internal university competitions.
            </p>

            <p className="text-muted-foreground">
              I'm also passionate about creating secure, efficient applications and believe
              in continuous learning to stay ahead in the evolving tech space.
              My projects reflect a blend of security, creativity, and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/MdKhairulIslam_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Competitive Programming</h4>
                  <p className="text-muted-foreground">
                    Solving complex problems on platforms like Codeforces, AtCoder, and LeetCode.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cybersecurity</h4>
                  <p className="text-muted-foreground">
                    Exploring system security, ethical hacking, and data protection best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic & Project Work</h4>
                  <p className="text-muted-foreground">
                    Leading university projects, building apps with Java, Firebase, and React.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
