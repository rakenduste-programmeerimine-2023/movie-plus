import SignUpButton from "../components/SignUpButton";
import AboutUsButton from "../components/AboutUsButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default async function Index() {
  const cookieStore = cookies();
  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-black">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AboutUsButton />
          <SignUpButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
        <div className="hj absolute top-0 right-0">
          <Header />
        </div>
      </nav>
      <Footer />
    </div>
  );
}
