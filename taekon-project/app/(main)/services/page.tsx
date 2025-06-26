"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Bot,
  FileText,
  Globe,
  LayoutDashboard,
  Megaphone,
  Server
} from "lucide-react";

const services = [
  {
    title: "Web-sayt yaratish",
    desc: "Zamonaviy va responsiv veb-saytlar: landing, blog, e-commerce.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  },
  {
    title: "Telegram botlar",
    desc: "Avtomatlashtirilgan botlar: buyurtma, API integratsiya.",
    icon: <Bot className="w-6 h-6 text-green-600" />,
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
  },
  {
    title: "Server xizmatlari",
    desc: "VPS sozlash, deployment, xavfsizlik, monitoring.",
    icon: <Server className="w-6 h-6 text-purple-600" />,
    img: "https://images.unsplash.com/photo-1581091870622-2d949d0d3b0b",
  },
  {
    title: "Kontent ishlab chiqarish",
    desc: "Blog, video, grafikalar bilan auditoriyani jalb qiling.",
    icon: <FileText className="w-6 h-6 text-red-500" />,
    img: "https://images.unsplash.com/photo-1611926653458-09294f5a2951",
  },
  {
    title: "Marketing / SMM",
    desc: "SMM strategiya, reklama, brend xabardorligini oshirish.",
    icon: <Megaphone className="w-6 h-6 text-pink-500" />,
    img: "https://images.unsplash.com/photo-1601987077220-3b0f3b6be3c1",
  },
  {
    title: "UI/UX dizayn",
    desc: "Foydalanuvchi tajribasini oshiradigan zamonaviy interfeyslar.",
    icon: <LayoutDashboard className="w-6 h-6 text-yellow-500" />,
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900/30 to-blue-900/30 text-foreground font-sans">
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Xizmatlarimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
        <Card key={idx} className="overflow-hidden hover:shadow-xl transition h-full">
  <img src={service.img} alt={service.title} className="h-40 w-full object-cover" />
  <CardContent className="p-4 flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center space-x-2 mb-2">
        {service.icon}
        <h2 className="text-xl font-semibold">{service.title}</h2>
      </div>
      <p className="text-gray-600 text-sm flex-grow">{service.desc}</p>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Batafsil</Button>
        </TooltipTrigger>
        <TooltipContent>Bu xizmat haqida ko‘proq ma’lumot oling</TooltipContent>
      </Tooltip>
      {idx === 0 || idx === 4 ? <Badge>Ommabop</Badge> : null}
    </div>
  </CardContent>
</Card>

        ))}
      </div>
    </div>
        </div>
  );
}
