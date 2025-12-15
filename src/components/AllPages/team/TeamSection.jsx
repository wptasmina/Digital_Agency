

import team1 from '../../../assets/pages/team/team1.jpg';
import team2 from '../../../assets/pages/team/team2.png';
import team3 from '../../../assets/pages/team/team3.png';
import team4 from '../../../assets/pages/team/team4.png';
import team5 from '../../../assets/pages/team/team5.png';
import team6 from '../../../assets/pages/team/team6.png';
import team7 from '../../../assets/pages/team/team7.png';
import team8 from '../../../assets/pages/team/team8.png';
import TeamCard from './TeamCard';

const teamMembers = [
  { image: team1, name: "Maria Gomez", role: "Business Consultant" },
  { image: team2, name: "John Carter", role: "Marketing Strategist" },
  { image: team3, name: "Emily Watson", role: "Creative Director" },
  { image: team4, name: "David Smith", role: "SEO Expert" },
  { image: team5, name: "Sophia Lee", role: "Brand Manager" },
  { image: team6, name: "Michael Brown", role: "Web Developer" },
  { image: team7, name: "Daniel Wilson", role: "Project Manager" },
  { image: team8, name: "Olivia Taylor", role: "UI/UX Designer" },
];

export default function TeamSection() {
  return (
    <section className="Container py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Heading */}
        {/* <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
          <div>
            <p className="text-[13px] font-medium tracking-[5%] text-[#19324D] uppercase mb-2">
              OUR TEAM MEMBER
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#19324D]">
              Meet the People Who Make <br className="hidden md:block" /> It Happen
            </h2>
          </div>

          <p className="max-w-md text-[#5F758C] text-sm leading-relaxed">
            You are a startup looking to launch with impact or an established brand aiming to scale, our packages are designed to deliver creativity.
          </p>
        </div> */}

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
}
