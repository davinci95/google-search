import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="flex flex-col items-center h-[100vh]">
            <HomeHeader />
            <main className="flex grow justify-center">
                <div className="w-full flex flex-col px-5 mt-44 items-center">
                    <img src={Logo} alt="logo" className="w-[272px] h-[92px]"/>
                
                <SearchInput />
                <div className="flex gap-2 text-[#3c4043] mt-8">
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:shadow-md hover:border-[#dadce0]">Google Search</button>
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:shadow-md hover:border-[#dadce0]">I am Feeling the Best</button>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default Home;
