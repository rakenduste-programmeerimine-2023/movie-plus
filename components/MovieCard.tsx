"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function MovieCard({
  poster_path,
  title,
  id
}: {
  poster_path: string;
  title: string;
  id: string
}) {
  return (
    <Link href={`/description/${id}`}>
      <Image
        width={230}
        height={230}
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt={title}
      />
      <div className="text-center font-thin">{title}</div>
    </Link>
  );
}