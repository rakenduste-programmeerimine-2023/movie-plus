import Link from "next/link";
import React from "react";

export default function AboutUsButton() {
    return (
      <div>
        <Link href="/aboutUs">
          <button className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border absolute top-0 left-0 m-4 ml-[2.5cm] font-thin">About us</button>

        </Link>
      </div>
    )
}