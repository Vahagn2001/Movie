import { render, screen } from "@testing-library/react"
import { HomeBanner } from "./HomeBanner"

jest.mock("../SearchForm/SearchForm", ()=>({
    default: () => <div>SearchForm</div>,
    __esModule: true
}))

describe("HomeBanner", () => {
    it("should render SearchForm and h1", () => {
        render(<HomeBanner />);
        expect(screen.getByText("SearchForm")).toBeInTheDocument();
        expect(screen.getByRole("heading",{name:"Welcome. Millions of movies, TV shows and people to discover. Explore now."})).toBeInTheDocument()
    })
    
})