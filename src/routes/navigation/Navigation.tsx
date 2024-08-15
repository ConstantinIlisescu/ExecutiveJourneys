import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import NavLinksMobile from "@/components/NavLinksMobile";
import Container from "@/components/ui/container";

const Navigation = () => {
  return (
    <header className=" py-3  backdrop-blur">
      <Container>
        <div className="flex justify-between">
          <Logo />
          <NavLinks />
          <NavLinksMobile />
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
