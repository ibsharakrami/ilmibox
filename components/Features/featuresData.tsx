import { Feature } from "@/types/feature";
import {
  BookOpen,
  Users,
  Hand,
  Heart,
  UserCheck,
  Music,
  PartyPopper,
  HelpCircle,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BookOpen />,
    tag: "Quran",
    title: "11 Surahs + Ayat-ul-Kursi",
    description:
      "Learn essential Surahs and Ayat-ul-Kursi with clear pronunciation to help children memorize and recite easily.",
    featured: true,
    highlights: ["Clear pronunciation", "Easy to memorize", "Ayat-ul-Kursi included"],
  },
  {
    id: 2,
    icon: <Users />,
    tag: "Hadith",
    title: "10 Authentic Ahadith",
    description:
      "A collection of authentic Ahadith with simple Urdu translation for easy understanding.",
    accent: "bg-sky-100 text-sky-700",
  },
  {
    id: 3,
    icon: <Hand />,
    tag: "Daily Duas",
    title: "15+ Daily Duas",
    description:
      "Important daily duas for different occasions to help kids build strong Islamic habits.",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    icon: <Heart />,
    tag: "Salawat",
    title: "Durood Ibrahimi",
    description:
      "Learn and recite the beautiful Durood Shareef with proper pronunciation.",
    accent: "bg-rose-100 text-rose-600",
  },
  {
    id: 5,
    icon: <UserCheck />,
    tag: "Sahabah",
    title: "Ashra Mubashrah",
    description:
      "Learn the names of the ten blessed companions promised Jannah.",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    id: 6,
    icon: <Music />,
    tag: "Nasheeds",
    title: "Islamic Songs & Nasheeds",
    description:
      "Enjoy meaningful Urdu and Arabic Islamic songs and nasheeds.",
    accent: "bg-teal-100 text-teal-700",
  },
  {
    id: 7,
    icon: <PartyPopper />,
    tag: "Eid",
    title: "Eid Takbeer",
    description:
      "Celebrate Eid by learning and listening to the proper Takbeer.",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    id: 8,
    icon: <HelpCircle />,
    tag: "Quiz",
    title: "Interactive Q&A Learning",
    description:
      "Fun questions and answers to help children learn Islamic knowledge in an engaging way.",
    accent: "bg-indigo-100 text-indigo-700",
  },
];

export default featuresData;
