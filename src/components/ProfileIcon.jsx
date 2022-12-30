import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#f3f4f6] cursor-pointer">
                <TbGridDots size={20} color="#5f6368"/>
            </span>
            <span className="h-10 w-10 flex justify-center items-center relative">
                <img src={ProfileRing} className="absolute"/>
                <span className="h-8 w-8 rounded-full overflow-hidden">
                    <img src={Profile} className="h-full w-full object-cover"/>
                </span>
            </span>
        </div>
    )
};

export default ProfileIcon;
