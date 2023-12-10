function Footer() {
  return (
    <div className="flex-1 w-full flex flex-col gap-30 items-left place-content-end">
      <h1>© {new Date().getFullYear()} All rights reserved</h1>
    </div>
  );
}

export default Footer;