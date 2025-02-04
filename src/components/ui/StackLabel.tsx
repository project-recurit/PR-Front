const StackLabel = ({ stacks }: { stacks: string[] }) => {
  return (
    <>
      <p className="text-black-400">기술 스택</p>
      <div className="flex items-center">
        <div className="flex gap-x-4 ">
          {stacks.slice(0, 3).map((s) => (
            <div className="bg-red-50 px-8  py-2   rounded-full" key={s}>
              {s}
            </div>
          ))}
        </div>
        {stacks.length - 3 > 0 && (
          <p className="ml-4 ">{`외 ${stacks.length - 3}개`}</p>
        )}
      </div>
    </>
  );
};

export default StackLabel;
