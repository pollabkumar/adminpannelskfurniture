import { IoMdSearch } from "react-icons/io";

const Searchbox = () => {
    return (
        <div className="searchBox position-relative d-flex align-items-center">
            <IoMdSearch className="mr-2"></IoMdSearch>
            <input type="text" placeholder="Search...."/>
        </div>
    )
}

export default Searchbox;