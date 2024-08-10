import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

jest.mock("react-router", () => ({
    Outlet: () => <div>Outlet</div>
}));

describe("Header", () => {
    it("should be render", () => {
        render(<Header />);
        expect(screen.getByText("Outlet")).toBeInTheDocument()
    })
})