import { render, screen } from "@testing-library/react"
import SearchForm from "./SearchForm"
import userEvent from '@testing-library/user-event'
import { useNavigate } from "react-router"

jest.mock("react-router", () => ({
    useNavigate: jest.fn()
}));

describe("SearchForm", () => {
    it("should navigate to search page", async () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);
        const user = userEvent.setup();
        render(
            <SearchForm />
        );
        await user.type(screen.getByRole("textbox"), "Spider Man");
        await user.click(screen.getByRole("button"));
        expect(navigate).toHaveBeenCalledWith("/search?q=Spider Man")
    })

})