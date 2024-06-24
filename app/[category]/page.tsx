"use client"

import GalleryVertical from "@/components/galleryVertical"
import FiltersSidepanel from "@/components/filtersSidepanel"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row">
        <FiltersSidepanel />
        <GalleryVertical products={products}  />
      </div>    
    </main>
  );
}

