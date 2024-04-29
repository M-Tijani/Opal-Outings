interface AvatarinputProps {
  email: string;
  name: string;
  firstletter: string;
}

export default function Avatarinput({
  email,
  name,
  firstletter,
}: AvatarinputProps) {
  return (
    <>
      <section className="w-full flex flex-col gap-2">
        <section className="w-fit flex items-center gap-2 justify-start mt-2 ml-[10px]">
          <section className="bg-tertiary w-[50px] h-[50px] rounded-full flex items-center justify-center">
            <h1 className="text-white">{firstletter}</h1>
          </section>
          <section className="text-[12px]">
            <h1>{name}</h1>
            <h1>{email}</h1>
          </section>
        </section>
      </section>
    </>
  );
}
