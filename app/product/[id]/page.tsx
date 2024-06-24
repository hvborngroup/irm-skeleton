"use client"

import ProductDetails from "@/components/productDetails";

export default function Product({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <ProductDetails prodId={params.id} />

    </main>
  );
}
