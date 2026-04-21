import { Feature } from "@/types/feature";
import { BookOpen, Users, Hand, Heart, UserCheck, Music, PartyPopper, HelpCircle } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: "11 Surahs + Ayat-ul-Kursi",
    description:
      "Learn essential Surahs and Ayat-ul-Kursi with clear pronunciation to help children memorize and recite easily.",
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8" />,
    title: "10 Authentic Ahadith",
    description:
      "A collection of authentic Ahadith with simple Urdu translation for easy understanding.",
  },
  {
    id: 3,
    icon: <Hand className="w-8 h-8" />,
    title: "15+ Daily Duas",
    description:
      "Important daily duas for different occasions to help kids build strong Islamic habits.",
  },
  {
    id: 4,
    icon: <Heart className="w-8 h-8" />,
    title: "Durood Ibrahimi",
    description:
      "Learn and recite the beautiful Durood Shareef with proper pronunciation.",
  },
  {
    id: 5,
    icon: <UserCheck className="w-8 h-8" />,
    title: "Ashra Mubashrah",
    description:
      "Learn the names of the ten blessed companions promised Jannah.",
  },
  {
    id: 6,
    icon: <Music className="w-8 h-8" />,
    title: "Islamic Songs & Nasheeds",
    description:
      "Enjoy meaningful Urdu and Arabic Islamic songs and nasheeds.",
  },
    {
    id: 7,
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Eid Takbeer",
    description:
      "Celebrate Eid by learning and listening to the proper Takbeer.",
  },
  {
    id: 8,
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Interactive Q&A Learning",
    description:
      "Fun questions and answers to help children learn Islamic knowledge in an engaging way.",
  },
];

export default featuresData;
