const AmazingCard = ({ title, description, tags, image }) => {
  return (
    <div className="md:w-[550px] md:h-[500px] lg:w-[620px] lg:h-[560px] w-[360px] h-[500px] rounded-[32px] border-[4px] border-[#6735EA] flex flex-col gap-5 py-4 px-5 items-center">
      <div className="rounded-[16px] transform transition-transform duration-500 hover:scale-95 hover:rotate-2 hover:translate-x-1 hover:translate-y-1">
        <img
          src={image}
          alt={title}
          className="md:w-[520px] md:h-[270px] lg:w-[588px] lg:h-[320px] w-[350px] h-[200px] rounded-[16px]"
        />
      </div>

      <div className="flex gap-3 w-full">
        {tags?.map((array, index) => (
          <p
            key={index}
            className="w-fit rounded-[16px] bg-[#FECE02] py-[6px] px-[12px] font-medium"
          >
            {array}
          </p>
        ))}
      </div>
      <div className="px-2">
        <h1 className="font-archivo md:text-[32px] text-[24px]">{title}</h1>
        <p className="font-inter text-[16px] font-normal leading-[160%] text-[#0d0d0d99]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmazingCard;
