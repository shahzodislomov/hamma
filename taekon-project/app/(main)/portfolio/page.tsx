'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import ImageFor from "@/public/ImageForAll.png";
import Image from "next/image";
import { useState } from "react";
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Vebsayti",
    description: "Mahsulotlar katalogi, savat, to‘lov integratsiyasi.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback:
      "Saytingiz tez ishlaydi va foydalanuvchi uchun qulay. Rahmat!",
    tools: ["Next.js", "Tailwind", "Stripe"],
    link: "http://t.me/wgsm3",
  },
  {
    id: 2,
    title: "Telegram Buyurtma Boti",
    description:
      "Buyurtma qilish, to‘lov, va yetkazib berishni avtomatlashtirish.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback: null,
    tools: ["Python", "Aiogram", "PostgreSQL"],
    link: "http://t.me/wgsm3",
  },
  {
    id: 3,
    title: "E-commerce Vebsayti",
    description: "Mahsulotlar katalogi, savat, to‘lov integratsiyasi.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback:
      "Saytingiz tez ishlaydi va foydalanuvchi uchun qulay. Rahmat!",
    tools: ["Next.js", "Tailwind", "Stripe"],
    link: "http://t.me/wgsm3",
  },
  {
    id: 4,
    title: "Telegram Buyurtma Boti",
    description:
      "Buyurtma qilish, to‘lov, va yetkazib berishni avtomatlashtirish.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback: null,
    tools: ["Python", "Aiogram", "PostgreSQL"],
    link: "http://t.me/wgsm3",
  },
  {
    id: 5,
    title: "E-commerce Vebsayti",
    description: "Mahsulotlar katalogi, savat, to‘lov integratsiyasi.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback:
      "Saytingiz tez ishlaydi va foydalanuvchi uchun qulay. Rahmat!",
    tools: ["Next.js", "Tailwind", "Stripe"],
    link: "http://t.me/wgsm3",
  },
  {
    id: 6,
    title: "Telegram Buyurtma Boti",
    description:
      "Buyurtma qilish, to‘lov, va yetkazib berishni avtomatlashtirish.",
    image: ImageFor,
    video: "videos/VideoOfYoru.mp4",
    clientFeedback: null,
    tools: ["Python", "Aiogram", "PostgreSQL"],
    link: "http://t.me/wgsm3",
  },
];

function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900/30 to-blue-900/30 text-foreground font-sans">
      <div className="mx-auto max-w-[1200px] py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, i) => (
          <Card
            key={i}
            className="overflow-hidden shadow-sm border hover:shadow-lg transition"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover hover:scale-110 duration-1000 ease-in-out transition-transform"
                width={600}
                height={300}
              />
            )}
            <CardContent className="p-4 space-y-4">
              <div className="text-left space-y-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(true);
                }}
              >
                Batafsil
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sheet faqat bitta marta ochiladi */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:w-[500px]">
          {selectedItem && (
            <>
              <SheetHeader>
                <SheetTitle>{selectedItem.title}</SheetTitle>
                <SheetDescription>{selectedItem.description}</SheetDescription>
              </SheetHeader>

              <div className="py-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Foydalanilgan texnologiyalar:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools.map((tool: string, i: number) => (
                      <span
                      key={i}
                      className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700"
                      >
                      {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedItem.video && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Video Preview:</h4>
                    <video
                      controls
                      className="rounded-md w-full max-h-64 object-contain"
                    >
                      <source src={selectedItem.video} type="video/mp4" />
                      Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
                    </video>
                  </div>
                )}

                {selectedItem.clientFeedback && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Mijoz fikri:</h4>
                    <p className="italic text-gray-600">&quot;{selectedItem.clientFeedback}&quot;</p>
                  </div>
                )}
              </div>

              <SheetFooter className="pt-4 flex flex-col gap-2">
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">Saytga o&apos;tish</Button>
                  </a>
                )}
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setSelectedItem(null)}
                  >
                    Yopish
                  </Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default PortfolioPage;
