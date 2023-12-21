import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import SignUpButton from "@/components/SignUpButton";

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
    <div className="f">
      <nav className="w">
        <div className="w">
          {isSupabaseConnected && <AuthButton />}
        </div>
        <SignUpButton />
        <div className="h-16 absolute top-0 right-0">
          <Header />
        </div>
      </nav>
    </div>
  );
}


