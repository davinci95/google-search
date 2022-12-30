import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams()
    const [searchQuery, setSearchQuery] = useState(query || "")
    const navigate = useNavigate()
    
    const queryHandler = (event) => {
        if(event?.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`)
        }
    }

    return (
        <div 
            id="searchBox" 
            className="h-[46px] md:w-[584px] flex items-center border rounded-full m-5 border-[#dfe1e5] gap-3 hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 px-4">
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input 
                type="text"
                onChange={(e) => {setSearchQuery(e.target.value)}}
                onKeyUp={queryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-none text-black/[0.87]"
            />

            <div className="flex gap-3 items-center">
                {searchQuery && <IoMdClose size={24} color="#70757a" className="cursor-pointer border-r-2 " onClick={() => setSearchQuery("")}/>}
                <img src={MicIcon} className="h-6 w-6"/>
                <img src={ImageIcon} className="h-6 w-6"/>
            </div>

        </div>
    )
};

export default SearchInput;
