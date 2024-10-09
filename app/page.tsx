import Navbar from "@/components/auth/navbar";

export default function Home() {
  return (
  <>
    <Navbar />
    <div className="mt-5 text-center">
      <h1 className="text-purple-600 text-5xl">Welcome to WebShop</h1>
      <p className="text-pink-500 mt-5">- Made by Arti Dhobale</p>
    </div>
  </>
  );
}
