import { LucideIcon } from "lucide-react";

interface ProfileinputProps {
  titleplace: string;
  userplaceholder: string;
  Icon: LucideIcon;
  editngname: string;
  defaultValue?: string;
  fucntion: any;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}
import { Flex, Text, Button, Dialog, TextField } from "@radix-ui/themes";
// Icons
import { Pencil } from "lucide-react";
export default function Profileinput({
  titleplace,
  userplaceholder,
  Icon,
  defaultValue,
  setvalue,
  fucntion,
  editngname,
}: ProfileinputProps) {
  return (
    <>
      <form className="w-full " action="">
        <section className="text-white max-w-[300px] mx-auto flex items-center justify-between">
          <h1>{titleplace}</h1>
          <div className="relative">
            <input
              className="bg-tertiaryInput placeholder:text-white outline-none py-[6px] px-8 w-full max-w-[220px] rounded-md"
              type="text"
              disabled
              placeholder={userplaceholder}
            />
            <div className="text-white absolute top-[6px] left-1">
              <Icon size={24} />
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="bg-sidecolor hover: p-1 text-white absolute top-1 right-[10px]  rounded-md">
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
                      onChange={(e) => setvalue(e.target.value)}
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
                    {/* <Button type="submit">Save</Button> */}
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
