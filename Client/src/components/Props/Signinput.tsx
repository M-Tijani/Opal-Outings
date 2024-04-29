interface SigninputProps {
  title: string;
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  placeholder: string;
}

export default function Signinput({
  title,
  value,
  setvalue,
  type,
  placeholder,
}: SigninputProps) {
  return (
    <>
      <section>
        <div className="relative w-full mt-7">
          <input
            className="bg-inputcolor w-full h-[44px] rounded-md outline-none px-5 border-none ring-1 focus:ring-2 ring-tertiary"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <label className="absolute bottom-11 left-6 font-semibold">
            {title}
          </label>
        </div>
      </section>
    </>
  );
}
