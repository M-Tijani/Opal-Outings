// Props
import Contactinput from "../components/Props/Contactinput";
export default function Mail() {
  return (
    <>
      <section className="bg-white ring-1 ring-tertiary w-full max-w-[360px] md:max-w-[500px] lg:max-w-[700px] mx-auto rounded-md gap-4 h-full py-6 flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <h1 className="text-xl font-semibold">Contact our Team</h1>
        <span className="w-full h-[2px] rounded-full max-w-[330px] mx-auto bg-tertiary"></span>
        <section className="w-full flex flex-col gap-4">
          <Contactinput
            title="First Name :"
            setvalue={() => {}}
            type="text"
            placeholder="Example : Ma......"
          />
          <Contactinput
            title="Last Name :"
            setvalue={() => {}}
            type="text"
            placeholder="Example : Ti......"
          />
          <Contactinput
            title="Email :"
            setvalue={() => {}}
            type="email"
            placeholder="Example : ....@example.com"
          />
          <div className="w-full items-center justify-between px-[20px]">
            <textarea
              className="w-full px-2 py-[4px] ring-1 ring-tertiary hover:ring-2 rounded-md outline-none duration-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              placeholder="Type your message here"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button className="w-full max-w-[330px] md:max-w-[465px] lg:max-w-[665px]  mx-auto py-2 bg-tertiary hover:bg-tertiaryInput duration-200 text-white rounded-md">
            Send
          </button>
        </section>
      </section>
    </>
  );
}
