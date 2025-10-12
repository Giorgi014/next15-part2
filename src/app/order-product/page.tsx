"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick} className="cursor-pointer">Place order</button>
    </>
  );
}
