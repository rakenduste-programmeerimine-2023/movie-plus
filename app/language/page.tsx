"use client";

import supabase from '@/utils/supabase/supabase';
import Link from 'next/link';
import { useState } from 'react';

export default function FeedBackPage() {
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("language")
      .insert([{ email, country, language}])
      .select();

      console.log('erorr', error)

    if (data) {
      console.log(data);
      setSuccessMessage(
        "Successfully sent message. We will get back to you as soon as possible."
      );
      setEmail("");
      setCountry("");
      setLanguage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />

        <label className="text-md" htmlFor="text">
          Your country
        </label>
        <input
          className="rounded-md px-4 py-4 bg-inherit border mb-6 w-full h-24"
          type="text"
          name="text"
          placeholder="Riik"
          value={country}
          onChange={(e)=> setCountry(e.target.value)}
          required
        />

        <label className="text-md" htmlFor="text">
          What language do you watch movies in most?
        </label>
        <input
          className="rounded-md px-4 py-4 bg-inherit border mb-6 w-full h-24"
          type="text"
          name="text"
          placeholder="Mis keeles te filme kõige rohkem vaadate?"
          value={language}
          onChange={(e)=> setLanguage(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}