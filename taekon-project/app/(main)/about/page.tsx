import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const teamMembers = [
  {
    id: 1,
    name: "Alibek To‘xtayev",
    position: "Loyiha Menejeri",
    age: 34,
    experience: "8 yil",
    bio: "Alibek murakkab loyihalarni muvaffaqiyatli boshqarishda katta tajribaga ega. U jamoani samarali boshqarish va mijozlar ehtiyojlarini tushunishda yetakchi hisoblanadi.",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Gulnoza Ergasheva",
    position: "Frontend Dasturchi",
    age: 27,
    experience: "4 yil",
    bio: "Gulnoza zamonaviy web texnologiyalari, ayniqsa React va Next.js bo‘yicha mutaxassis. U interfeyslarni chiroyli va foydalanuvchiga qulay tarzda yaratadi.",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 3,
    name: "Jasur Rashidov",
    position: "Backend Dasturchi",
    age: 30,
    experience: "6 yil",
    bio: "Jasur mikroxizmatlar, ma’lumotlar bazasi va API ishlab chiqishda yetuk. U Python va Node.js texnologiyalarida katta tajribaga ega.",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 4,
    name: "Madina Qodirova",
    position: "UI/UX Dizayner",
    age: 25,
    experience: "3 yil",
    bio: "Madina foydalanuvchi tajribasini chuqur tahlil qilib, vizual dizaynlarni yaratishda iqtidorli. Figma va Adobe XD bilan ishlaydi.",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 5,
    name: "Bekzod Ismoilov",
    position: "Marketing Mutaxassisi",
    age: 32,
    experience: "7 yil",
    bio: "Bekzod digital marketing strategiyalari va brend rivojlantirishda kuchli. U SEO, SMM va e-mail marketing yo‘nalishlarida ishlaydi.",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

const advantages = [
  {
    id: 1,
    icon: "🚀",
    question: "Nega bizning xizmatimiz tezkor va sifatli?",
    text: "Biz ilg‘or texnologiyalar va tajribali jamoa orqali sizga eng sifatli xizmatni taqdim etamiz.",
  },
  {
    id: 2,
    icon: "💼",
    question: "Bizning jamoamiz nima uchun professional?",
    text: "Har bir xodim o‘z sohasida yetuk mutaxassis va doimiy ravishda malakasini oshirib boradi.",
  },
  {
    id: 3,
    icon: "🔒",
    question: "Ma’lumotlarim xavfsizligi qanday ta’minlanadi?",
    text: "Biz maxfiylik siyosatiga qat’iy amal qilamiz va zamonaviy xavfsizlik choralari bilan himoyalaymiz.",
  },
  {
    id: 4,
    icon: "📈",
    question: "Nega biz doimiy rivojlanamiz?",
    text: "Bozor va texnologiyalar o‘zgarib boradi, biz ham ularga moslashamiz va sizga eng yaxshisini taqdim etamiz.",
  },
  {
    id: 5,
    icon: "🤝",
    question: "Mijozlarga qanday yondashuv ko‘rsatamiz?",
    text: "Har bir mijozning ehtiyojlari va istaklarini inobatga olib, shaxsiy yechimlar taklif qilamiz.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900/30 to-blue-900/30 text-foreground font-sans">
      <div className="space-y-12 p-6">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="max-w-4xl mx-auto">
            <ResizablePanelGroup
              direction="horizontal"
              className="rounded-lg border overflow-hidden"
            >
              {index % 2 === 0 ? (
                <>
                  <ResizablePanel defaultSize={40} minSize={30}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={60} minSize={40}>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                      <p>Yosh: {member.age}</p>
                      <p>Tajriba: {member.experience}</p>
                      <p className="text-sm text-gray-500">{member.bio}</p>
                    </div>
                  </ResizablePanel>
                </>
              ) : (
                <>
                  <ResizablePanel defaultSize={60} minSize={40}>
                    <div className="p-6 space-y-2 text-right">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                      <p>Yosh: {member.age}</p>
                      <p>Tajriba: {member.experience}</p>
                      <p className="text-sm text-gray-500">{member.bio}</p>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={40} minSize={30}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </ResizablePanel>
                </>
              )}
            </ResizablePanelGroup>
          </div>
        ))}

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {advantages.map((item, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start space-x-2">
                    <span className="text-2xl">{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
