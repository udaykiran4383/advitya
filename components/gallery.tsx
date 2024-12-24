import CreatorCard from "@/components/creator-card";

const creators = [
  {
    name: "AAMIR KHAN",
    title: "Social Impact Leader & Actor",
    followers: "16.5M",
    image: "amir.png", // Path as string
  },
  {
    name: "SHRADDHA KAPOOR",
    title: "Bollywood Actress & Philanthropist",
    followers: "50M",
    image: "sk.jpg",
  },
  {
    name: "DIA MIRZA",
    title: "Actress & Environmental Activist",
    followers: "12M",
    image: "dia.jpg",
  },
  {
    name: "JOHN ABRAHAM",
    title: "Actor, Producer & Activist",
    followers: "30M",
    image: "john.jpg",
  },
  {
    name: "DR. KIRAN BEDI",
    title: "Former Police Officer & Social Reformer",
    followers: "5M",
    image: "kb.jpg",
  },
  {
    name: "SONAM WANGCHUK",
    title: "Innovator & Education Reformer",
    followers: "3M",
    image: "sonamk.jpg",
  },
  {
    name: "SONAM KAPOOR",
    title: "Bollywood Actress & Activist",
    followers: "25M",
    image: "sk2.jpg",
  },
  {
    name: " KAILASH KHER",
    title: "Musician & Cultural Ambassador",
    followers: "10M",
    image: "Kailash-Kher.jpg",
  },
  
  {
    name: "IAS RISHI GARG",
    title: "Indian Administrative Officer & Motivator",
    followers: "1.5M",
    image: "AS.png",
  },
  {
    name: "DR. RADHAKRISHNAN PILLAI",
    title: "Author, Speaker & Leadership Expert",
    followers: "3.5M",
    image: "Drrk.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-yellow-100 p-4 sm:p-8">
      <h1 className="heading py-12">
        PAST <span className="text-purple">SPEAKERS</span>
      </h1>
      <div className="mx-auto grid max-w-7xl gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {creators.map((creator, index) => (
          <div key={index} className="h-full">
            <CreatorCard
              name={creator.name}
              title={creator.title}
              image={creator.image} // Pass the image path as a string
            />
          </div>
        ))}
      </div>
    </div>
  );
}
