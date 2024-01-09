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
    <Link href={`/description/${id}`} passHref>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          width={210}
          height={210}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={title}
        />
        <div className="text-center font-thin" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
      </div>
    </Link>
  );
}
