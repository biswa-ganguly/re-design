const AmazingCard = ({ title, description, tags }) => {
  return (
    <div className="w-[550px] h-[500px] lg:w-[620px] lg:h-[560px] rounded-[32px] border-[3px] border-[#6735EA] flex flex-col gap-5 py-4 px-4 items-center">
      <div className="w-[520px] h-[270px] lg:w-[588px] lg:h-[320px] bg-[#FECE02] rounded-[16px] transform transition-transform duration-500 hover:scale-95 hover:rotate-2 hover:translate-x-1 hover:translate-y-1"></div>

      <div className="flex gap-3 w-full">
        {tags?.map((arra, index) => (
          <p
            key={index}
            className="w-fit rounded-[16px] bg-[#FECE02] py-[6px] px-[12px] font-medium"
          >
            {arra}
          </p>
        ))}
      </div>
      <div className="px-2">
        <h1 className="font-archivo text-[32px]">{title}</h1>
        <p className="font-inter text-[16px] font-normal leading-[160%] text-[#0d0d0d99]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmazingCard;