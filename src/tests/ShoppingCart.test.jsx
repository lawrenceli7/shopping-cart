import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShoppingCart from "../components/ShoppingCart";

describe("ShoppingCart Component", () => {
  it("should render the shopping cart title", () => {
    const { asFragment } = render(<ShoppingCart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display a message when the cart is empty", () => {
    const { asFragment } = render(<ShoppingCart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render items in the cart", () => {
    const cartItems = [
      { title: "Item 1", price: 10, quantity: 2 },
      { title: "Item 2", price: 15, quantity: 1 },
    ];
    const { asFragment } = render(<ShoppingCart cart={cartItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should calculate and display the total price", () => {
    const cartItems = [
      { title: "Item 1", price: 10, quantity: 2 },
      { title: "Item 2", price: 15, quantity: 1 },
    ];
    const { asFragment } = render(<ShoppingCart cart={cartItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the checkout button", () => {
    const { asFragment } = render(<ShoppingCart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
