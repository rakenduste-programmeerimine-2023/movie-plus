import React from "react";
import { getMovies } from "@/API/api";
import AuthButton from "@/components/AuthButton";
import SearchPage from "@/components/SearchPage";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";


interface PageProps {
    searchParams: { query: string };
}

async function Page({ searchParams }: PageProps) {
    const searchText = searchParams.query;
    const movies = await getMovies();

    return (
        <div className="f">
            <nav className="w">
                <div className="wj">
                    <HeaderComponent />
                    <AuthButton />
                </div>
            </nav>
            <SearchPage searchText={searchText} search={movies} />
            <footer className="wi">
                <div className="wp">
                    <div className="h">
                        <FooterComponent />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Page;
