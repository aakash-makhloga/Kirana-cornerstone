
import React from "react";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "lucide-react";

interface ShareOnWhatsAppProps {
  text: string;
  url?: string;
}

const ShareOnWhatsApp = ({ text, url = window.location.href }: ShareOnWhatsAppProps) => {
  const handleShare = () => {
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    
    const whatsappUrl = `https://wa.me/?text=${encodedText} ${encodedUrl}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button 
      onClick={handleShare} 
      variant="outline" 
      className="flex items-center gap-2 w-full mt-2 bg-green-500 hover:bg-green-600 text-white border-green-600"
    >
      <WhatsappIcon className="h-4 w-4" /> 
      Share with WhatsApp
    </Button>
  );
};

export { ShareOnWhatsApp };
