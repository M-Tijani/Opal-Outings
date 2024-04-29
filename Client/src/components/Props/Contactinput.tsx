interface ContactinputProps {
  title: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  placeholder: string;
}

export default function Contactinput({
  title,
  setvalue,
  type,
  placeholder,
}: ContactinputProps) {
  return (
    <>
      <section className="w-full max-w-[315px] md:max-w-[455px] lg:max-w-[655px] items-start ml-6">
        <div className=" w-full flex items-center justify-between">
          <h1 className="text-[12px] font-medium md:text-[14px]">{title}</h1>
          <input
            className="w-full max-w-[240px] md:max-w-[355px] lg:max-w-[555px]  px-2 py-[4px] ring-1 ring-tertiary hover:ring-2 rounded-md outline-none duration-200 shadow-md"
            type={type}
            onChange={(e) => setvalue(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      </section>
    </>
  );
}
