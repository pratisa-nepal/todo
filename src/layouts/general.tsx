import Header from "@/components/header"
import React from "react"

interface IGeneralLayoutProps {
    children: React.ReactNode
}

function GeneralLayout({ children }: IGeneralLayoutProps) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default GeneralLayout