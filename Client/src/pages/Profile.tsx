import axios from "axios";
import { useEffect, useState } from "react";
// Radix UI
// import { Flex, Text, Button, Dialog, TextField } from "@radix-ui/themes";
// Props
import Profileinput from "../components/Props/Profileinput";
import Profilecustuminput from "../components/Props/Profilecustuminput";
// Icons
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
export default function Dashboard() {
  // Default User Data
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  // // Update User Data
  const [updateName, setUpdateName] = useState<string>("");
  const [updateEmail, setUpdateEmail] = useState<string>("");
  const [updatePassword, setUpdatePassword] = useState<string>("");
  const [updatePasswordAgain, setUpdatePasswordAgain] = useState<string>("");
  // // Check Token & Authorization
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  const Authorization = document.cookie
    .split(";")
    .find((row) => row.startsWith("Authorization="))
    ?.split("=")[1];

  // // Check if user is logged in
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

  // // Update Username
  const handleupdatename = async (e: any) => {
    e.preventDefault();
    // console.log(updateName);
    try {
      const response = await axios.patch(
        "http://localhost:3001/api/v1/updateuser",
        {
          name: updateName,
        },
        {
          headers: {
            Token: token?.split("=")[1],
            Authorization: Authorization,
          },
        }
      );
      // console.log(response);
      // redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  // Email Update
  const handleupdateemail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:3001/api/v1/updateuser",
        {
          email: updateEmail,
        },
        {
          headers: {
            Token: token?.split("=")[1],
            Authorization: Authorization,
          },
        }
      );
      // console.log(response);

      // redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  // Passowrd Update
  const handleupdatepassword = async (e: any) => {
    e.preventDefault();
    // console.log(updatePassword, updatePasswordAgain);
    try {
      const response = await axios.patch(
        "http://localhost:3001/api/v1/changepass",
        {
          password: updatePassword,
          conformPassword: updatePasswordAgain,
        },
        {
          headers: {
            Token: token?.split("=")[1],
            Authorization: Authorization,
          },
        }
      );
      // console.log(response);
      handlelogout();
    } catch (error) {
      console.log(error);
    }
  };
  // Delete User
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
        <section className="ring-1 ring-tertiary w-full max-w-[360px] md:max-w-[550px] rounded-md py-4 h-full flex flex-col items-center justify-center gap-5 duration-200">
          <h1>Account Info</h1>
          <span className="w-full mx-auto max-w-[300px] h-[1px] bg-tertiary"></span>
          <Profileinput
            titleplace={"Username"}
            userplaceholder={userName}
            Icon={User}
            defaultValue={userName}
            editngname="Name"
            setvalue={setUpdateName}
            fucntion={handleupdatename}
          />
          <Profileinput
            titleplace={"Email"}
            userplaceholder={userEmail}
            Icon={Mail}
            defaultValue={userEmail}
            editngname="Email"
            setvalue={setUpdateEmail}
            fucntion={handleupdateemail}
          />
          <Profilecustuminput
            titleplace={"Password"}
            Icon={KeyRound}
            defaultValue={userPassword}
            setvalue={setUpdatePassword}
            defaultValue1={userPassword}
            setvalue1={setUpdatePasswordAgain}
            fucntion={handleupdatepassword}
            editngname="Password"
            editngname1="Conform Password"
          />
          <section className="w-full flex items-center justify-between px-[30px]">
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red">Delete Account</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Delete Account</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? Do you want to delete this account?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button
                      onClick={handledeleteuser}
                      variant="solid"
                      color="red"
                    >
                      Delete Account
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
