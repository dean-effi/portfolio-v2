export default function SectionHeading({ name }: { name: string }) {
  return (
    <div className="max-cont mx-auto mt-10 flex items-center gap-4 sm:mt-12 md:mt-[172px] 2xl:gap-5">
      <div className="h-1 w-full bg-gray-50"></div>
      <h2 className="text-xl font-normal lg:text-2xl 2xl:text-3xl">
        {name}
      </h2>
      <div className="h-1 w-full bg-gray-50"></div>
    </div>
  );
}
