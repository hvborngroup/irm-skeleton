"use client"

import Checkout from "@/components/checkout"
import DeliveryOptions from "@/components/deliveryOptions"

export default function Cart() {
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <DeliveryOptions />
        <Checkout />      
      </div>
    </main>
  );
}
