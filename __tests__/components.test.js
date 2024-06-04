// components.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import {Heading} from "../app/components/Heading";

import Button from "../app/components/Button";

describe("heading component", () => {
  test("renders a heading", () => {
    render(<Heading />);

    const heading = screen.getByRole("heading", {
      name: /testing next\.js applications/i,
    });

    expect(heading).toBeInTheDocument();
  });
 
  
});

const defaultButtonProps = {
    onClick: jest.fn(),
    text: "Submit",
  };

describe("button component", () => {
  it("renders a button", () => {
    render(<Button {...defaultButtonProps} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });


  it("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();  // Mock function
    render(<  Button {...defaultButtonProps} onClick={onClick}/>);
    
    
    const button = screen.getByRole("button");
  
    fireEvent.click(button);
  
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  
});


