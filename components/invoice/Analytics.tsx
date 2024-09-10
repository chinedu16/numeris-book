// components/InvoiceAction.tsx
import Image from "next/image";
import Overview from "../../public/overview.svg";

const Activities: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="mt-6 grid grid-cols-4 gap-8">
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-10 h-10" src={Overview} alt="overview" />
          <div className="mt-4 flex space-x-2 items-center">
            <h3 className="text-[#697598] uppercase leading-loose">
              total paid
            </h3>
            <div className="bg-[#B6FDD3] w-[80px] text-center text-[#373B47] rounded-full font-bold flex justify-center items-center py-2">
              1,289
            </div>
          </div>
          <div className="text-[#1F1F23] mt-2 text-[28px]">
            <span className="font-bold ">$4,120,102.</span>
            <span className="text-sm text-[#697598]">76</span>
          </div>
        </div>
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-10 h-10" src={Overview} alt="overview" />
          <div className="mt-4 flex space-x-2 items-center">
            <h3 className="text-[#697598] uppercase leading-loose">
            total overdue
            </h3>
            <div className="bg-[#FFB7BD] w-[60px] text-center text-[#373B47] rounded-full font-bold flex justify-center items-center py-2">
            13
            </div>
          </div>
          <div className="text-[#1F1F23] mt-2 text-[28px]">
            <span className="font-bold ">$23,000.</span>
            <span className="text-sm text-[#697598]">13</span>
          </div>
        </div>
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-10 h-10" src={Overview} alt="overview" />
          <div className="mt-4 flex space-x-2 items-center">
            <h3 className="text-[#697598] uppercase leading-loose">
            total draft
            </h3>
            <div className="bg-[#D9D9E0] w-[60px] text-center text-[#373B47] rounded-full font-bold flex justify-center items-center py-2">
            08
            </div>
          </div>
          <div className="text-[#1F1F23] mt-2 text-[28px]">
            <span className="font-bold ">$12,200.</span>
            <span className="text-sm text-[#697598]">00</span>
          </div>
        </div>
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-10 h-10" src={Overview} alt="overview" />
          <div className="mt-4 flex space-x-2 items-center">
            <h3 className="text-[#697598] uppercase leading-loose">
            total unpaid
            </h3>
            <div className="bg-[#F8E39B] w-[60px] text-center text-[#373B47] rounded-full font-bold flex justify-center items-center py-2">
            06
            </div>
          </div>
          <div className="text-[#1F1F23] mt-2 text-[28px]">
            <span className="font-bold ">$87,102.</span>
            <span className="text-sm text-[#697598]">00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
