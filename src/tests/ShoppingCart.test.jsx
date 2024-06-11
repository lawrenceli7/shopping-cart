import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShoppingCart from "../components/ShoppingCart";

describe("ShoppingCart Component", () => {
  it("should render the shopping cart title", () => {
    render(<ShoppingCart cart={[]} />);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("should display a message when the cart is empty", () => {
    render(<ShoppingCart cart={[]} />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("should render items in the cart", () => {
    const cartItems = [
      { title: "Item 1", price: 10, quantity: 2 },
      { title: "Item 2", price: 15, quantity: 1 },
    ];
    render(<ShoppingCart cart={cartItems} />);

    expect(screen.getByText("Item 1 - 2 x $10")).toBeInTheDocument();
    expect(screen.getByText("Item 2 - 1 x $15")).toBeInTheDocument();
  });

  it("should calculate and display the total price", () => {
    const cartItems = [
      { title: "Item 1", price: 10, quantity: 2 },
      { title: "Item 2", price: 15, quantity: 1 },
    ];
    render(<ShoppingCart cart={cartItems} />);

    expect(screen.getByText("Total: $35.00")).toBeInTheDocument();
  });

  it("should render the checkout button", () => {
    render(<ShoppingCart cart={[]} />);
    expect(
      screen.getByRole("button", { name: /checkout/i })
    ).toBeInTheDocument();
  });
});
