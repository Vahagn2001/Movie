import { render, screen } from "@testing-library/react";
import { TrendingMovie } from "./TrendingMovie";

jest.mock("react-router-dom", () => ({
    Link: (props) => <a {...props} href={props.to} />
}));

describe("TrendingMovie", () => {
    it("should render correct elements", () => {

        render(<TrendingMovie movie={{ id: "1" , title: "title", overview: "overview", poster_path:"spider-man.jpg"}} />);
        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src","https://media.themoviedb.org/t/p/w440_and_h660_face/spider-man.jpg");
        expect(screen.getByRole("img")).toHaveAttribute("alt",  "title");
        expect(screen.getByRole("heading", {name: "title"})).toBeInTheDocument();
        expect(screen.getByText("overview")).toBeInTheDocument();
    })
})