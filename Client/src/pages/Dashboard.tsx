import { useEffect } from "react";

export default function Dashboard() {
  // Check Token & Authorization
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  useEffect(() => {
    if (!token) {
      window.location.href = "/Signin";
    }
  });
  return (
    <>
      <section className="w-full h-full flex items-center justify-center pt-[70px]">
        <h1>HOME</h1>
      </section>
    </>
  );
}
