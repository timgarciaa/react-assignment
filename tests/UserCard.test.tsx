import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "@/components/UserCard";
import User from "@/types/user.type";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }),
  });
});

const mockUser: User = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

describe("UserCard", () => {
  test("renders user card with correct information", () => {
    render(
      <UserCard
        user={mockUser}
        deleteCard={jest.fn()}
        editCard={jest.fn()}
        index={0}
        toggleHeart={jest.fn()}
      />
    );

    // Check if the user's name is rendered
    const nameElement = screen.getByText(mockUser.name);
    expect(nameElement).toBeInTheDocument();

    // Check if the user's email is rendered
    const emailElement = screen.getByText(mockUser.email);
    expect(emailElement).toBeInTheDocument();

    // Check if the user's phone number is rendered
    const phoneElement = screen.getByText(mockUser.phone);
    expect(phoneElement).toBeInTheDocument();

    // Check if the user's website is rendered
    const websiteElement = screen.getByText(`http://${mockUser.website}`);
    expect(websiteElement).toBeInTheDocument();
  });
});
