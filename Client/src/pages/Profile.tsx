import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  // Check Token & Authorization
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  useEffect(() => {
    if (!token) {
      window.location.href = "/Signin";
    }
  });

  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/profile",
        {
          Cookies: { token: token?.split("=")[1] },
        }
      );
      console.log(response.data);
      setUserPassword("********");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userName);
  console.log(userEmail);
  console.log(userPassword);
  return (
    <>
      <section className="w-full h-full flex items-center justify-center pt-[90px] text-white">
        <div className="Boxholder">
          <h1 className="text-xl font-semibold ">Profile</h1>
          <div className="flex items-center space-x-[30px]">
            <h1>Name</h1>
            <input
              className="rounded-md outline-none py-1 px-2"
              disabled
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
