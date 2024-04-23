interface ProfileinputProps {
  placeholder: string;
  titte: string;
}

export default function Profileinput({
  placeholder,
  titte,
}: ProfileinputProps) {
  return (
    <>
      <section className="flex flex-col items-start w-full ">
        <div className="flex justify-between items-center w-full max-w-[250px] md:max-w-[420px] mx-auto">
          <h1 className="text-base font-medium text-white">{titte}</h1>
          <input
            className="input_desble"
            type="text"
            placeholder={placeholder}
            disabled
          />
        </div>
      </section>
    </>
  );
}
