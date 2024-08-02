import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explore, Home, Mountain, MountainDetail, NotFound, Schedule, Wishlist } from "pages";
import { Footer, Navigation } from "components";
import "./app.scss";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes className="App min-h-screen flex flex-col">
                <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
                <Route exact path={process.env.PUBLIC_URL + "/mountain"} element={<Mountain />} />
                <Route exact path={process.env.PUBLIC_URL + "/explore"} element={<Explore />} />
                <Route exact path={process.env.PUBLIC_URL + "/mountain/:child"} element={<MountainDetail />} />
                <Route exact path={process.env.PUBLIC_URL + "/mountain/:child/:subChild"} element={<MountainDetail />} />
                <Route exact path={process.env.PUBLIC_URL + "/wishlist"} element={<Wishlist />} />
                <Route exact path={process.env.PUBLIC_URL + "/schedule"} element={<Schedule />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

