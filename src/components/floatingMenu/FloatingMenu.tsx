import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/button/Button";
import Container from "@/components/ui/container";
import NavLinks from "../navLinks/NavLinks";
import { useEffect, useState } from "react";

const FloatingMenu = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  const handleScroll = () => {
    // Clear the active item to close all accordions on scroll
    if (activeItem) {
      setActiveItem("");
    }
  };

  useEffect(() => {
    // Attach the scroll event listener only when an item is active (open)
    if (activeItem) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Clean up the scroll event listener on component unmount or when no item is active
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeItem]);

  return (
    <div className="fixed top-6 w-full z-20">
      <Container>
        <div className="flex justify-end align-middle items-center">
          <Accordion
            type="single"
            collapsible
            className="max-w-[350px] bg-light-dark p-2 rounded-3xl"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value)}
          >
            <AccordionItem value="item-1">
              <div className="flex justify-between">
                <Button children="Quick Quote" href="/quote" />
                <AccordionTrigger
                  isOpen={activeItem === "item-1"}
                  className="ml-10"
                />
              </div>
              <AccordionContent>
                <NavLinks />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default FloatingMenu;
