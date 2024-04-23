interface PricingcardProps {
  price: string;
  title: string;
  image?: string;
}

export default function Pricingcard({ price, title, image }: PricingcardProps) {
  return (
    <>
      <section>
        <section className="w-full max-w-[300px] bg-primary py-4 rounded-md flex flex-col gap-2">
          <img
            className="w-full max-w-[270px] px-4 mx-auto rounded-md"
            src={image}
            alt=""
          />
          <div className="flex items-center justify-between px-4 text-white font-medium">
            <h1>{title}</h1>
            <h1>
              Price: <span>{price}</span>
            </h1>
          </div>
        </section>
      </section>
    </>
  );
}
