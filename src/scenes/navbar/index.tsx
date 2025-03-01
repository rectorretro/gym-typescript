import { useEffect,useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage,
    setSelectedPage: (value:SelectedPage) => void
}

function Navbar({isTopOfPage,selectedPage,setSelectedPage}: Props) {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled,setIsMenuToggle] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "":"bg-primary-100 drop-shadow";
  return (
    <nav>
        <div className={`transition:background-color duration-500 ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE */}
                    <img src={Logo} alt="logo" />
                    {/*RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p className="cursor-pointer">Sing In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div>) : (
                      <button className="rounded-full bg-secondary-500 p-2"
                      onClick={() => setIsMenuToggle(!isMenuToggled)}
                      ><Bars3Icon className="h-6 w-6 text-white cursor-pointer"/></button>
                    )}
                </div>
            </div>
        </div>
        {/*MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full transition duration-500 w-[300px] bg-primary-100 drop-shadow-xl">
            {/*CLORES ICON*/}
            <div className="flex justify-end p-12 ">
              <button onClick={() => setIsMenuToggle(!isMenuToggled)} className="cursor-pointer">
                <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
              </button>
              
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
              </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar