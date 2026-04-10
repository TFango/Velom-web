import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Editorial from "@/components/Editorial";
import BannerBolso from "@/components/BannerBolso";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div id="content-start" style={{ position: "absolute", top: 0, height: 1, pointerEvents: "none" }} />
        <Featured />
        <Editorial />
        <BannerBolso />
        <Footer />
      </div>
    </>
  );
}
