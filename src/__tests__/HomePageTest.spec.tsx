import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";

describe("ユーザーはブログのタイトルを見ることができる", () => {
  it("should render title", () => {
    render(<App />);
    expect(screen.getByTestId("blog-title")).toBeInTheDocument();
  });
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("ユーザーは投稿のタイトルを見ることができる", () => {
  it("should render title", async() => {
    render(<App />);
    expect(screen.getAllByTestId("post-title")).toHaveTextContent("hoge")
  });
});