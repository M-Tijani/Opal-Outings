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

  const Authorization = document.cookie
    .split(";")
    .find((row) => row.startsWith("Authorization="))
    ?.split("=")[1];

  // Check if user is logged in
  useEffect(() => {
    if (!token) {
      window.location.href = "/Signin";
    }
  });
  //
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/profile",
        {},
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );

      setUserName(response.data.user.name);
      setUserEmail(response.data.user.email);
      setUserPassword("********");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-full flex items-center justify-center pt-[90px]">
        <section className="bg-primary w-full max-w-[300px] h-full flex flex-col items-center justify-center rounded-md gap-3 py-10">
          <div>
            <h1 className="text-xl font-semibold text-white">Profile</h1>
          </div>
          <section className="flex flex-col items-start w-full">
            <div className="flex justify-between items-center w-full max-w-[250px] mx-auto">
              <h1 className="text-base font-medium text-white">Username</h1>
              <input
                className="placeholder:text-white w-full max-w-[150px] rounded-md outline-none py-1 px-2"
                type="text"
                placeholder={userName}
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col items-start w-full">
            <div className="flex justify-between items-center w-full max-w-[250px] mx-auto">
              <h1 className="text-base font-medium text-white">Email</h1>
              <input
                className="placeholder:text-white w-full max-w-[150px] rounded-md outline-none py-1 px-2"
                type="text"
                placeholder={userEmail}
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col items-start w-full">
            <div className="flex justify-between items-center w-full max-w-[250px] mx-auto">
              <h1 className="text-base font-medium text-white">Password</h1>
              <input
                className="placeholder:text-white w-full max-w-[150px] rounded-md outline-none py-1 px-2"
                type="text"
                placeholder={userPassword}
                disabled
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
