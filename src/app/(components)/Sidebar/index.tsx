'use client'
import React from 'react'

const Sidebar = () => {
    const [showProjects, setShowProjects] = React.useState(true);  
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 overflow-y-auto bg-white w-64`;

  return (
    <div className={sidebarClassNames}>
      SidebarT
    </div>
  )
}

export default Sidebar
