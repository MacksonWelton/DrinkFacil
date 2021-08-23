import { render, screen } from "@testing-library/react";
import Card from ".";

test("render image, title and description", () => {
  render(<Card imgSrc="" title="Titulo" description="Descrição" />);

  const image = screen.getByRole("img");
  const title = screen.getByTitle("Titulo");
  const description = screen.getByText("Descrição");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
