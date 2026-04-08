import ProductPage from "@/components/ProductPage";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Producto — VELOM",
};

export default function Page() {
  return (
    <>
      <ProductPage />
      <ProductGrid />
      <Footer />
    </>
  );
}
