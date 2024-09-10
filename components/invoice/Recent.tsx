import React from "react";

interface Invoice {
  id: string;
  number: string;
  dueDate: string;
  amount: string;
  status: string;
}

interface RecentProps {
  onInvoiceClick: (invoice: Invoice) => void; // Function to be passed from parent
}

const Recent: React.FC<RecentProps> = ({ onInvoiceClick }) => {
  // Example invoice data organized by date
  const invoicesToday = [
    {
      id: "1",
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
    },
    {
      id: "2",
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Overdue",
    },
  ];

  const invoicesDec8th = [
    {
      id: "3",
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Draft",
    },
    {
      id: "4",
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Pending Payment",
    },
    {
      id: "5",
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
    },
  ];

  // Function to handle click on an invoice
  const handleInvoiceClick = (invoice: Invoice) => {
    onInvoiceClick(invoice); // Call parent function
  };

  return (
    <div className="bg-white px-8 py-12 rounded-3xl w-3/5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-[#1F1F23] font-bold">Recent Invoices</h3>
        <button className="rounded-full border-2 text-[#003EFF] font-semibold px-10 py-6 uppercase text-sm">
          View All invoices
        </button>
      </div>

      {/* Section for Today */}
      <div className="mt-8">
        <h4 className="uppercase text-sm font-semibold text-[#1F1F23] mb-10">
          today - 27th November, 2022
        </h4>
        <div className="px-6 space-y-6">
          {invoicesToday.map((invoice) => (
            <div
              key={invoice.id}
              className="flex justify-between mt-8 cursor-pointer"
              onClick={() => handleInvoiceClick(invoice)}
            >
              <h4 className="font-bold text-[#373B47]">
                Invoice - {invoice.number}
              </h4>
              <div>
                <p className="uppercase leading-loose text-xs text-[#666F77]">
                  Due date{" "}
                </p>
                <p className="text-[#697598] font-bold">{invoice.dueDate}</p>
              </div>
              <div>
                <h4 className="text-[#373B47] font-bold"> {invoice.amount}</h4>
                <div className="flex justify-end">
                  <div
                    className={`uppercase text-center text-[10px] font-bold w-fit border px-4 py-2 mt-3 rounded-full ${
                      invoice.status === "Paid"
                        ? "bg-[#B6FDD3] border-[#129043] text-[#129043]"
                        : "bg-[#FF566333] border-[#FF5663] text-[#FF5663]"
                    }`}
                  >
                    {invoice.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section for 8th December, 2022 */}
      <div className="mt-8">
        <h4 className="uppercase text-sm font-semibold text-[#1F1F23] mb-10">
          8th december, 2022
        </h4>
        <div className="px-6 space-y-6">
          {invoicesDec8th.map((invoice) => (
            <div
              key={invoice.id}
              className="flex justify-between mt-8 cursor-pointer"
              onClick={() => handleInvoiceClick(invoice)}
            >
              <h4 className="font-bold text-[#373B47]">
                Invoice - {invoice.number}
              </h4>
              <div>
                <p className="uppercase leading-loose text-xs text-[#666F77]">
                  Due date{" "}
                </p>
                <p className="text-[#697598] font-bold">{invoice.dueDate}</p>
              </div>
              <div>
                <h4 className="text-[#373B47] font-bold"> {invoice.amount}</h4>
                <div className="flex justify-end">
                  <div
                    className={`uppercase text-center text-[10px] font-bold w-fit border px-4 py-2 mt-3 rounded-full ${
                      invoice.status === "Paid"
                        ? "bg-[#B6FDD3] border-[#129043] text-[#129043]"
                        : invoice.status === "Draft"
                        ? "bg-[#373B4733] border-[#373B47] text-[#373B47]"
                        : "bg-[#D98F0033] border-[#D98F00] text-[#D98F00]"
                    }`}
                  >
                    {invoice.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
