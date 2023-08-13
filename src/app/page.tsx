"use client";
import {
  Button,
  Container,
  Logo,
  Menu,
  MobileMenu,
  Wrapper,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Menu />
      <MobileMenu />
      <Container className="py-20">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold text-center">
            LOREM UPSUM DOLOR SITT AMET
          </h1>
          <p>Lorem ipsom dolor sit amet</p>
          <Button className="bg-palette-red hover:bg-black hover:text-white">
            Create story
          </Button>
        </div>
      </Container>
      <Container className="bg-palette-pink py-16">
        <div className="flex-col items-center justify-center text-center space-y-4">
          <Wrapper className="mx-auto">
            <h1 className="text-2xl font-bold">Lorem ipsum</h1>
          </Wrapper>
          <p>Lorem ipsom dolor sit amet</p>
        </div>
      </Container>
      <Container className="bg-palette-green">
        <div className="md:flex md:space-x-4">
          {[0, 1, 2].map((index) => (
            <Wrapper
              className="text-center hover:text-white hover:bg-black hover:scale-105 ease-in-out duration-200 relative"
              key={index}
            >
              <span className="absolute -top-5 text-3xl md:-top-5 left-0 right-0">
                📍
              </span>
              <h3 className="text-2xl font-bold text-center">
                Teir {index + 1}
              </h3>
              <ul className="flex-col items-center space-y-2">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index} className="">
                    Lorem ipsum dolor
                  </li>
                ))}
              </ul>
            </Wrapper>
          ))}
        </div>
      </Container>
      <Container className="bg-palette-yellow">
        <Logo />
      </Container>
    </main>
  );
}
