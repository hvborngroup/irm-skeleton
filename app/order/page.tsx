"use client"

import OrderSummary from "@/components/orderSummary"

export default function Order() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <OrderSummary />      
      </div>
    </main>
  );
}
