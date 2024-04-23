import axios from "axios";
import { useEffect, useState } from "react";
// Radix UI
import { Flex, Text, Button, Dialog, TextField } from "@radix-ui/themes";
// Props
import Profileinput from "../components/Props/Profileinput";
export default function Dashboard() {
  // Default User Data
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  // Update User Data
  const [updateName, setUpdateName] = useState<string>("");
  const [updateEmail, setUpdateEmail] = useState<string>("");
  // const [updatePassword, setUpdatePassword] = useState<string>("");
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
  // Fetch User Data
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

  // Update User Data and Delete User
  const handleupdateuser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:3001/api/v1/updateuser",
        {
          name: updateName,
          email: updateEmail,
        },
        {
          headers: {
            Token: token?.split("=")[1],
            Authorization: Authorization,
          },
        }
      );
      // redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handledeleteuser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "http://localhost:3001/api/v1/deleteuser",
        {
          headers: {
            Token: token?.split("=")[1],
            Authorization: Authorization,
          },
        }
      );
      handlelogout();
      // redirect to signin page
      window.location.href = "/Signin";
    } catch (error) {
      console.log(error);
    }
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const handlelogout = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setIsUserLoggedIn(false);
    window.location.href = "/";
  };
  return (
    <>
      <section className="w-full h-full flex items-center justify-center pt-[90px]">
        <section className="bg-primary w-full max-w-[320px] md:max-w-[470px] rounded-md py-4 h-full flex flex-col items-center justify-center gap-3">
          <div>
            <h1 className="text-xl font-semibold text-white">Profile</h1>
          </div>

          <Profileinput placeholder={userName} titte="Name" />
          <Profileinput placeholder={userEmail} titte="Email" />
          <Profileinput placeholder={userPassword} titte="Password" />

          {/* Edit Profile / Email & Name */}
          <section className="w-full flex justify-start pl-5">
            <form action="">
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="input-btn px-4">Edit profile</button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                  <Dialog.Title>Edit profile</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    Make changes to your profile.
                  </Dialog.Description>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Name
                      </Text>
                      <TextField.Root
                        defaultValue={userName}
                        onChange={(e) => setUpdateName(e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Email
                      </Text>
                      <TextField.Root
                        defaultValue={userEmail}
                        onChange={(e) => setUpdateEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </label>
                  </Flex>
                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button
                        onClick={(e) => handledeleteuser(e)}
                        variant="soft"
                        color="red"
                      >
                        Delete
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button onClick={(e) => handleupdateuser(e)}>Save</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
