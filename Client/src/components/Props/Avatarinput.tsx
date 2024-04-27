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
        <section className="flex w-full items-center justify-center gap-2">
          <section className="text-tertiary font-semibold text-2xl bg-primary w-[60px] h-[60px] flex items-center justify-center rounded-full my-2 select-none border-none ring-1 ring-primary">
            <h1>{firstletter}</h1>
          </section>
          <section className="text-white text-[12px]">
            <h1>{name}</h1>
            <h1>{email}</h1>
          </section>
        </section>
      </section>
    </>
  );
}
