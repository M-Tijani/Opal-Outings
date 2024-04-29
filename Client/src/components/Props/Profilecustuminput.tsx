import { Flex, Text, Button, Dialog, TextField } from "@radix-ui/themes";
import { LucideIcon, Pencil } from "lucide-react";

interface ProfilecustuminputProps {
  titleplace: string;
  Icon: LucideIcon;
  defaultValue?: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  defaultValue1?: string;
  setvalue1: React.Dispatch<React.SetStateAction<string>>;
  fucntion: any;
  editngname: string;
  editngname1: string;
}
export default function Profilecustuminput({
  titleplace,
  Icon,
  defaultValue,
  setvalue,
  defaultValue1,
  setvalue1,
  fucntion,
  editngname,
  editngname1,
}: ProfilecustuminputProps) {
  return (
    <>
      <form className="w-full " action="">
        <section className="max-w-[300px] md:max-w-[400px] mx-auto flex items-center justify-between">
          <h1>{titleplace}</h1>
          <div className="relative">
            <input
              className="ring-1 ring-tertiary shadow-md outline-none py-[6px] px-8 w-full max-w-[220px] md:max-w-[400px] md:px-[40px] rounded-md"
              type="text"
              disabled
              placeholder="********"
            />
            <div className="text-tertiary absolute top-[6px] left-1 md:left-[7px]">
              <Icon size={24} />
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="bg-sidecolor hover: p-1 text-white absolute top-1 right-[5px] rounded-md">
                  <Pencil size={20} />
                </div>
              </Dialog.Trigger>

              <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                  Make changes to your profile.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      {editngname}
                    </Text>
                    <TextField.Root
                      defaultValue={defaultValue}
                      type="password"
                      onChange={(e) => setvalue(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </label>
                </Flex>
                <Flex direction="column" gap="3">
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      {editngname1}
                    </Text>
                    <TextField.Root
                      defaultValue={defaultValue1}
                      type="password"
                      onChange={(e) => setvalue1(e.target.value)}
                      placeholder="Enter your full name"
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
                    <button
                      className="bg-sidecolor px-4 rounded-md hover:bg-sidecolorS duration-200 text-white"
                      onClick={fucntion}
                    >
                      Save
                    </button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </div>
        </section>
      </form>
    </>
  );
}
