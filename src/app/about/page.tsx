import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { skillsModel } from "../models/skillsModel";

const skills: Array<skillsModel> = [
  { id: 1, skillName: ".Net Framework", score: 8, classification: "Dev" },
  { id: 2, skillName: "React", score: 6, classification: "Dev" },
  { id: 3, skillName: "ASP .NET Core", score: 8, classification: "Dev" },
  { id: 4, skillName: "TypeScript", score: 6, classification: "Dev" },
  { id: 5, skillName: "C#", score: 8, classification: "Dev" },
  { id: 6, skillName: "OOPS", score: 9, classification: "Dev" },
  { id: 7, skillName: "SQL", score: 5, classification: "Dev" },
  { id: 8, skillName: "Entity Framework", score: 8, classification: "Dev" },
  { id: 9, skillName: "Git", score: 8, classification: "Other" },
  { id: 10, skillName: "Robot Framework", score: 9, classification: "Test" },
  { id: 11, skillName: "AWS", score: 5, classification: "Test" },

];
const totalScore: number = 10;

const ProgressBar: React.FC<skillsModel> = ({ id, skillName, score }) => {
  return (
    <div key={id} className="grid grid-cols-6 md:w-[450px] my-1 space-y-1">
      <div className="col-span-2 font-mono capitalize text-ellipsis overflow-hidden whitespace-nowrap">
        {skillName}
      </div>
      <div className="col-span-4 relative w-full h-5 bg-gray-600 rounded-sm">
        <div
          className={`absolute top-0 left-0 h-full bg-gray-300 rounded-sm transition-all duration-300`}
          style={{ width: `${score * totalScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-grow mx-5 md:mx-10 mt-20">
        <h1 className="text-5xl font-bold text-headings">Skills</h1>
        <div className="border-t border-zinc-600 py-6 mt-2"></div>
        {skills.map(({ id, skillName, score }) => (
          <ProgressBar
            key={id}
            id={id}
            skillName={skillName}
            score={score}
            classification={""}
          />
        ))}
      </div>
      <div className="flex-grow mx-5 md:mx-10 mt-10 pb-20">
        <h1 className="text-5xl font-bold text-headings">Experience</h1>
        <div className="border-t border-zinc-600 py-6 mt-2"></div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Software Engineer</h3>
            <p className="text-blue-400">GE HealthCare</p>
          </div>
          <span className="text-slate-400">Dec 2021 - Present</span>
        </div>
        <div className="space-y-4 text-slate-300">
          <p>
            Building and enhancing healthcare imaging solutions that impact
            patient care. Leading development of the Enterprise Archive Application, a critical PACs component of the VNA (Vendor Neutral
            Archive) system for medical image Archiving.
          </p>

          <div>
            <h4 className="text-white font-medium mb-2">Key Contributions:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                Developed clinical workflow features, including digital pathology, and resolved defects in the
                Enterprise Archive application, built on .NET Framework 4.8, while maintaining 95100% code
                coverage through rigorous unit testing.
              </li>
              <li>
                Implemented solutions for complex business challenges, achieving a 95% reduction in manual
                installation tasks through automation, reducing installation time by over 60%.
              </li>
              <li>
                Led the full lifecycle development of an internal support web application using React and ASP.NET
                Core 8.0. Responsibilities included requirements gathering, architecture design, full-stack
                development, and deployment, ensuring optimal performance and robust security.
              </li>
              <li>
                Spearheaded the development of a WPF (Windows Presentation Foundation) application with
                MVVM architecture, significantly enhancing monitoring and analytics capabilities, covering 8090%
                of system workflows.
              </li>
              <li>
                Pioneered an enhanced DevOps implementation using AWS services, including AWS CodePipeline
                and AWS CodeBuild, resulting in a 60% reduction in build and deployment times.
              </li>
              <li>
                Facilitated seamless data transfer between products at the solution level using AWS services such
                as AWS EventBridge and Lambda.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                 ".NET", "WPF", "ASP.NET Core", ".NET Framework", "Angular", "TypeScript", "MSSQL", "SQLite", "HTML",
                 "CSS", "AWS", "Entity Framework", "Git", "Rest API", "React", "Javascript", "WCF", "Powershell", "Crash Dump Analysis"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
