import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (values: SelectedPage) => void;
}

function ActionButton({children,setSelectedPage}: Props) {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 transition duration-150 hover:bg-primary-500  hover:text-white cursor-pointer"
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
        </AnchorLink>
  )
}

export default ActionButton