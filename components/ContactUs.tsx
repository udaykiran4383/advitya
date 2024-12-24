"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const contacts = {
  "Overall Coordinators": [
    {
      name: "Shlok Zanwar",
      role: "Overall Coordinator",
      email: "shlok.abhyuday@gmail.com",
      phone: "9371025117",
      image: "/Shlok.jpeg",
    },
    {
      name: "Suranjan Lahane",
      role: "Overall Coordinator",
      email: "suranjan.abhyuday@gmail.com",
      phone: "9422017526",
      image: "/Sula.jpg",
    },
  ],
  " For any Website and Technical  Queries": [
    {
      name: "Uday Sahu",
      role: "Web Manager",
      email: "uday.abhyuday@gmail.com",
      phone: "9381406475",
      image: "/uday.jpeg",
    },
    {
      name: "Komal Sai",
      role: "Web Manager",
      email: "komal.abhyuday@gmail.com",
      phone: "9030854787",
      image: "/rks.jpg",
    },
  ],
  " For any Campaigns related Queries ": [
    {
      name: "Rahul Dara",
      role: "Campaigns Manager",
      email: "rahul.abhyuday@gmail.com",
      phone: "9001565305",
      image: "/rahul.jpg",
    },
    {
      name: "Siddhant Jebale",
      role: "Campaigns Manager",
      email: "siddhant.abhyuday@gmail.com",
      phone: "8530713777",
      image: "/Siddhant.jpg",
    },
    {
      name: "Maya Choudhary",
      role: "Campaigns Manager",
      email: "maya.abhyuday@gmail.com",
      phone: "9950619827",
      image: "/maya.jpg",
    },
    {
      name: "Kedar Sharma",
      role: "Campaigns Manager",
      email: "kedar.abhyuday@gmail.com",
      phone: "9015464532",
      image: "/kedar.jpg",
    },
  ],
  " For any Events and Fellowships related Queries": [
    {
      name: "Samyak Zade",
      role: "Events Manager",
      email: "samyak.abhyuday@gmail.com",
      phone: "9067203066",
      image: "/samyak.jpg",
    },
    {
      name: "Ishita Gurjar",
      role: "Events Manager",
      email: "ishita.abhyuday@gmail.com",
      phone: "9929054694",
      image: "/ishita.jpg",
    },
    {
      name: "Manasvi Kushwaha",
      role: "Events Manager",
      email: "manasvi.abhyuday@gmail.com",
      phone: "8962675833",
      image: "/manaswi.jpg",
    },
  ],
  "For any Marketing related Queries": [
    {
      name: "Pranjal Khatod",
      role: "Marketing Manager",
      email: "pranjal.abhyuday@gmail.com",
      phone: "9307273816",
      image: "/pk.jpg",
    },
    {
      name: "Prathu Tandon",
      role: "Marketing Manager",
      email: "prathu.abhyuday@gmail.com",
      phone: "7300901300",
      image: "/pt.jpg",
    },
  ],
  "For any Media and Public Relations Queries ": [
    {
      name: "Pramod Sai",
      role: "Media Manager",
      email: "pramod.abhyuday@gmail.com",
      phone: "8919642307",
      image: "/pram.jpg",
    },
    {
      name: "Ritika",
      role: "Media Manager",
      email: "ritika.abhyuday@gmail.com",
      phone: "9599265453",
      image: "/ritika.jpg",
    },
    {
      name: "Garvit Kulhari",
      role: "Media Manager",
      email: "garvit.abhyuday@gmail.com",
      phone: "9664169359",
      image: "/garvit.jpg",
    },
  ],
  Competitions: [
    {
      name: "Ramya Ranjan",
      role: "Competitions Manager",
      email: "ramya.abhyuday@gmail.com",
      phone: "8456961919",
      image: "/ramya.jpg",
    },
    {
      name: "Hardik Agrawal",
      role: "Competitions Manager",
      email: "hardik.abhyuday@gmail.com",
      phone: "8209205908",
      image: "/hardik.jpg",
    },
  ],
  Operations: [
    {
      name: "Shubham",
      role: "Operations Manager",
      email: "shubham.abhyuday@gmail.com",
      phone: "9540930439",
      image: "/shubha.jpg",
    },
    {
      name: "Prashant",
      role: "Operations Manager",
      email: "prashant.abhyuday@gmail.com",
      phone: "9696721493",
      image: "/prashant.jpg",
    },
  ],
  Creatives: [
    {
      name: "Tanvi Makhar",
      role: "Creatives Manager",
      email: "tanvi.abhyuday@gmail.com",
      phone: "8605661520",
      image: "/tanvi.jpg",
    },
    {
      name: "Rohit Singh",
      role: "Creatives Manager",
      email: "rohit.abhyuday@gmail.com",
      phone: "8829914374",
      image: "/rohit.jpg",
    },
  ],
};

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="heading">
          <span className="text-purple mb-12">CONTACT US</span>
        </h1>

        {Object.entries(contacts).map(([section, people]) => (
          <div key={section} className="mb-16">
            <h1 className="heading">
              <span className="text-purple mb-8 text-center">{section}</span>
            </h1>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                people.length > 3
                  ? "lg:grid-cols-3 xl:grid-cols-4"
                  : people.length === 3
                  ? "lg:grid-cols-3"
                  : "max-w-3xl mx-auto"
              } gap-8 justify-items-center items-center`}
            >
              {people.map((contact) => (
                <div
                  key={contact.email}
                  className={`bg-black/5 rounded-2xl p-6 transition-all duration-300 hover:bg-black/10 text-center w-full ${
                    people.length <= 3 ? "max-w-[280px]" : "max-w-[280px]"
                  } h-[400px] flex flex-col justify-between`}
                >
                  <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl">
                    <Image
                      src={
                        contact.image || "/placeholder.svg?height=400&width=400"
                      }
                      alt={contact.name}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>

                  <div className="text-center text-white flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {contact.name}
                      </h4>
                      <p className="text-white/90 mb-4">{contact.role}</p>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href={`mailto:${contact.email}`}
                        className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{contact.email}</span>
                      </Link>

                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <Link
                          href={`tel:+91${contact.phone.replace(/\s/g, "")}`}
                          className="hover:text-blue-400 transition-colors"
                        >
                          {contact.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
