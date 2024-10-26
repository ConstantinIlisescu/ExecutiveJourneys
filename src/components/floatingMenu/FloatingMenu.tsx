import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/button/Button";
import Container from "@/components/ui/container";
import NavLinks from "../navLinks/NavLinks";

const FloatingMenu = () => {
  return (
    <div className="fixed top-6 w-full z-20">
      <Container>
        <div className="flex justify-end align-middle items-center">
          <Accordion
            type="single"
            collapsible
            className="max-w-[350px] bg-light-dark py-1 px-2 rounded-3xl"
          >
            <AccordionItem value="item-1">
              <div className="flex justify-between">
                <Button children="Quick Quote" href="/quote" />
                <AccordionTrigger className="ml-10" />
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
