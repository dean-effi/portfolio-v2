export default function SectionHeading({ name }: { name: string }) {
  return (
    <div className="mx-auto flex w-[305px] items-center gap-4 sm:w-[525px] md:w-[620px] lg:w-[850px] xl:w-[1110px] 2xl:w-[1333px] 2xl:gap-5">
      <div className="h-1 w-full bg-gray-50"></div>
      <h2 className="text-xl font-normal lg:text-2xl 2xl:text-3xl">
        {name}
      </h2>
      <div className="h-1 w-full bg-gray-50"></div>
    </div>
  );
}
