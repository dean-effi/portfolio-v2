export default function SectionHeading({ name }: { name: string }) {
  return (
    <div className="mx-auto mb-[52px] flex w-[305px] items-center gap-4 sm:mb-[72px] sm:w-[525px] md:mb-[97px] md:w-[620px] lg:mb-[187px] lg:w-[850px] xl:mb-[200px] xl:w-[1110px] 2xl:w-[1333px] 2xl:gap-5">
      <div className="h-1 w-full bg-gray-50"></div>
      <h2 className="text-xl font-normal lg:text-2xl 2xl:text-3xl">
        {name}
      </h2>
      <div className="h-1 w-full bg-gray-50"></div>
    </div>
  );
}
