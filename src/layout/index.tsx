import * as React from "react";


export interface AdminProps {
  children: React.ReactNode;
}

export default function Layout(props: AdminProps) {
  return <div className="layout">
    
    {props.children}

    </div>;
}
