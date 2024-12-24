import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">COMPETITIONS</span>
      </h1>
      <div
        className="my-20 grid gap-4 w-full
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          items-center justify-center"
      >
        <Card
          title="Prize money:5Lakh"
          icon={<AceternityIcon order="Action plan" />}
          des="Action Plan is the flagship Social Entrepreneurship Competition of Abhyuday, IIT Bombay, empowering young minds to address grassroots problems with sustainable business models. Since 2012, it has fostered growth through expert guidance and is set to become Asia's leading Social Entrepreneurship platform."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Prize money:10K"
          icon={<AceternityIcon order="Union budget" />}
          des="Your financial prowess meets social responsibility in the coolest way possible. Get into the shoes of the legislature and get a chance to construct your country’s union budget. Being the President make sure to defend that well in front of bureaucrats and diplomats"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Prize money:10K"
          icon={<AceternityIcon order="Mock parliament " />}
          des="Mock Parliament(Adhikaar) - National Inter-College Debate, promoting critical thinking & public awareness on pressing social issues. Getting the youth involved in debates about social issues and political arena to make them more aware of the process and Lok Sabha."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Prize money:10K"
          icon={<AceternityIcon order="Case study " />}
          des="The Case Study Competition by Abhyuday, IIT Bombay, in collaboration with Hand in Hand India, challenges participants to provide innovative solutions to real-world social issues. Teams of up to 3 members select from 10 problem statements, prepare a 12-15 slide presentation, and deliver a 10-minute pitch, followed by a Q&A. Top 3 teams win ₹10,000 and incentives worth ₹50,000."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>{" "}
        <Card
          title="Prize money:15K"
          icon={<AceternityIcon order="Oasis - olympiad " />}
          des="Empowers students (classes 5-10) to address global challenges like water conservation, waste management, and climate action. Focusing on sustainable development and the UN SDGs, OASIS encourages creativity and social responsibility. Participants compete for prizes and incentives, promoting environmental awareness and innovation."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[
              [125, 211, 252], // Sky Blue
              [59, 130, 246], // Deep Blue
              [37, 99, 235], // Indigo
            ]}
          />
        </Card>{" "}
        <Card
          title="Prize money:20K"
          icon={<AceternityIcon order="Socio Hackathon  " />}
          des="Blockchain Hackathon on Digital Literacy and Digital Secureness invites participants to develop blockchain-based solutions promoting online safety, data privacy, and equitable digital access. Aimed at fostering digital literacy and secure practices, the event offers a platform for innovation. With ₹20,000 in prize money and exciting incentives, this hackathon presents a chance to showcase skills and drive real-world impact."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[
              [253, 216, 240], // Pastel Pink
              [219, 234, 254], // Soft Blue
              [221, 243, 228], // Light Green
            ]}
          />
        </Card>
        {/* Additional cards can be added here */}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
   dark:border-white/[0.2] max-w-xs w-full mx-auto p-2 relative lg:h-[25rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
