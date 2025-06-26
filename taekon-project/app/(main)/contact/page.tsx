"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [mail, setMail] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900/30 to-blue-900/30 text-foreground font-sans">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Tabs defaultValue="contact">
          <TabsList>
            <TabsTrigger value="contact">Aloqa</TabsTrigger>
            <TabsTrigger value="location">Manzil</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Biz bilan bog‘lanish</CardTitle>
                <CardDescription>Iltimos, formani to‘ldiring</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Ism</Label>
                  <Input id="name" placeholder="Ismingiz" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Xabar</Label>
                  <Textarea
                    id="message"
                    placeholder="Xabaringizni yozing..."
                    rows={4}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    mail.endsWith("@gmail.com")
                      ? toast("sizning habaringiz yuborildi! ", {
                          description: mail,
                          action: {
                            label: "undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      : toast.error("iltimos @gmail.com bilan tugating")
                  }
                >
                  Yuborish
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Manzil</CardTitle>
                <CardDescription>Bizning joylashuv</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47953.11209574345!2d69.2043969!3d41.2994958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4a232b6e1b1%3A0x1b4ddcb9c216cb16!2sTashkent!5e0!3m2!1sen!2s!4v1685703123456!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Bog‘lanish</CardTitle>
                <CardDescription>Telefon va ijtimoiy tarmoqlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-foreground w-5 h-5" />
                  <span>+998 90 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <RiMapPin2Fill className="text-foreground w-5 h-5" />
                  <span>Toshkent, Uzbekistan</span>
                </div>
                <div className="flex gap-4 pt-4 text-foreground text-xl">
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram className="hover:text-sky-500" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hover:text-pink-500" />
                  </a>
                  <a
                    href="https://youtube.com/@yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="hover:text-red-500" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
