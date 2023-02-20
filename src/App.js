import React from "react";

import NavBar from "./components/NavBar";
import ProfileDescription from "./components/ProfileDescription";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";
import ServiceDescription from "./components/ServiceDescription";
import ServiceCard from "./components/ServiceCard";
import PortfolioSection from "./components/PortfolioSection";

import Images from "./constants/Images";
import Icons from "./constants/Icons";

function App() {
  return (
    <main className="bg-white p-2 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <NavBar icons={Icons} />
        <ProfileDescription />
        <SocialMedia icons={Icons} />
        <Profile images={Images} />
      </section>
      <section className="mt-10">
        <section>
          <ServiceDescription title={"services i offer"} />
        </section>
        <section className="md:grid md:grid-cols-3 md:gap-10">
          <ServiceCard picture={Images.design} title={"beautiful design"} />
          <ServiceCard picture={Images.code} title={"optmized code"} />
          <ServiceCard
            picture={Images.consulting}
            title={"consulting skills"}
          />
        </section>
      </section>
      <section>
        <ServiceDescription title="portfolio" />
        <PortfolioSection images={Images} />
      </section>
    </main>
  );
}

export default App;
