import React from "react";
import Link from "next/link";
import { Container } from "./styled";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <p>© Pedro Passos - {currentYear}</p>
      <nav>
        <Link href="https://github.com/PedroPassos87" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>{" | "}
        <Link href="https://www.linkedin.com/in/pedropassos07/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>{" | "}
        <a href="mailto:peagacarreira@gmail.com">Email</a>
      </nav>
    </Container>
  );
};
