import { render, screen } from "@testing-library/react"
import { SearchCart } from "./SearchCart"

describe("IMAGE_URL", ()=> {
    it("must be render IMAGE_URL", ()=>{
        render(<SearchCart item={{poster_path:"spider-man.jpg",original_title:"spider-man"}}/>)
        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src","https://media.themoviedb.org/t/p/w188_and_h282_bestv2/spider-man.jpg");
        expect(screen.getByRole("img")).toHaveAttribute("alt","spider-man");
        
    })
    
})