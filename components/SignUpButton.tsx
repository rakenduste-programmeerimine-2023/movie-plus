import Link from 'next/link';

export default function SignUpButton() {
  return (
    <Link href="/signup">
      <div className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border absolute top-0 left-0 m-4 ml-[2.5cm] font-thin">
        Sign up
      </div>
    </Link>
  );
}
