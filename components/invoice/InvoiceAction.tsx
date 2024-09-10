// components/InvoiceAction.tsx
import Image from "next/image";
import Money from "../../public/money.svg";
import Settings from "../../public/setting.svg";
import Beneficiaries from "../../public/beneficiaries.svg";


const InvoiceAction: React.FC = () => {
  return (
    <div className="mt-10">
      <h2>Invoice Actions</h2>
      <div className="mt-6 grid grid-cols-3 gap-8">
        <div className="bg-[#003EFF] text-white px-10 py-8 rounded-3xl">
          <Image className="w-20 h-20" src={Money} alt="overview" />
          <h3 className="mt-4 text-[22px] font-semibold">Create New Invoice</h3>
          <p className="mt-2 text-[#F6F8FA] text-sm">Create new invoices easily </p>
        </div>
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-20 h-20" src={Settings} alt="overview" />
          <h3 className="mt-4 text-[22px] text-[#373B47] font-semibold">Change Invoice settings</h3>
          <p className="mt-2 text-[#697598] text-sm">Create new invoices easily </p>
        </div>
        <div className="bg-white text-white px-10 py-8 rounded-3xl">
          <Image className="w-20 h-20" src={Beneficiaries} alt="overview" />
          <h3 className="mt-4 text-[22px] text-[#373B47] font-semibold">Manage Customer list</h3>
          <p className="mt-2 text-[#697598] text-sm">Add and remove customers </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAction;
