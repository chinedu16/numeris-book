import React from "react";

const InvoiceComponent: React.FC = () => {
  return (
    <div className="w-3/5 bg-white border rounded-3xl p-8">
      {/* Header */}
      <div className=" justify-between items-start p-6 bg-pink-100 rounded-3xl">
        <div className="flex justify-between text-[#697598]">
          <div className="space-y-1">
            <h3 className="leading-loose mb-2 text-[#697598] text-sm uppercase">
              Sender
            </h3>
            <h2 className="text-lg font-bold text-[#1F1F23]">
              Fabulous Enterprise
            </h2>
            <p className="text-sm">+386 989 271 3115</p>
            <p className="text-sm">1331 Hart Ridge Road 48436 Gaines, MI</p>
            <p className="text-sm">info@fabulousenterprise.co</p>
          </div>
          <div className="space-y-1">
            <h3 className="leading-loose mb-2 text-[#697598] text-sm uppercase">
              Customer
            </h3>
            <h2 className="text-lg font-bold text-[#1F1F23]">
              Olaniyi Ojo Adewale
            </h2>
            <p className="text-sm">+386 989 271 3115</p>
            <p className="text-sm">info@fabulousenterprise.co</p>
          </div>
        </div>

        {/* Invoice Details */}

        <h3 className="leading-loose mb-2 mt-8 text-[#697598] text-sm uppercase">
          Invoice details
        </h3>
        <div className=" flex justify-between">
          <div>
            <p className="text-sm mb-1 leading-loose text-[#666F77]">
              INVOICE NO
            </p>
            <p className="font-bold text-[#1F1F23]">1023902390</p>
          </div>
          <div>
            <p className="text-sm mb-1 leading-loose text-[#666F77]">
              ISSUE DATE
            </p>
            <p className="font-bold text-[#1F1F23]">March 30th, 2023</p>
          </div>
          <div>
            <p className="text-sm mb-1 leading-loose text-[#666F77]">
              DUE DATE
            </p>
            <p className="font-bold text-[#1F1F23]">May 19th, 2023</p>
          </div>
          <div>
            <p className="text-sm mb-1 leading-loose text-[#666F77]">
              BILLING CURRENCY
            </p>
            <p className="font-bold text-[#1F1F23]">USD ($)</p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="mt-8">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="font-bold text-gray-600 pb-4">Items</th>
              <th className="font-bold text-gray-600 pb-4">Qty</th>
              <th className="font-bold text-gray-600 pb-4">Price</th>
              <th className="font-bold text-gray-600 pb-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4">
                Email Marketing <br />
                <span className="text-xs text-gray-500">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </span>
              </td>
              <td className="py-4">10</td>
              <td className="py-4">$1,500</td>
              <td className="py-4">$15,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Video looping effect</td>
              <td className="py-4">6</td>
              <td className="py-4">$1,110,500</td>
              <td className="py-4">$6,663,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">
                Graphic design for emails <br />
                <span className="text-xs text-gray-500">
                  Tsit voluptatem accusantium
                </span>
              </td>
              <td className="py-4">7</td>
              <td className="py-4">$2,750</td>
              <td className="py-4">$19,250.00</td>
            </tr>
            <tr>
              <td className="py-4">Video looping effect</td>
              <td className="py-4">6</td>
              <td className="py-4">$1,110,500</td>
              <td className="py-4">$6,663,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Subtotal and Total */}
      <div className="mt-8  flex justify-end text-right">
        <div className="w-3/5">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">SUBTOTAL</p>
            <p className="font-bold">$6,697,200.00</p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">DISCOUNT (2.5%)</p>
            <p className="font-bold">$167,430.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">TOTAL AMOUNT DUE</p>
            <p className="text-3xl font-bold">$6,529,770.00</p>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mt-8 border rounded-3xl  p-4">
        <h3 className="text-sm text-[#697598] uppercase font-bold mb-2">
          PAYMENT INFORMATION
        </h3>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">Account Name</h5>
            <p className="font-semibold text-[#1F1F23]">1023902390</p>
          </div>
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">account number</h5>
            <p className="font-semibold text-[#1F1F23]">March 30th, 2023</p>
          </div>
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">Ach routing no</h5>
            <p className="font-semibold text-[#1F1F23]">May 19th, 2023</p>
          </div>
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">Bank Name</h5>
            <p className="font-semibold text-[#1F1F23]">USD ($)</p>
          </div>
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">bank address</h5>
            <p className="font-semibold text-[#1F1F23]">1023902390</p>
          </div>
          <div className="space-y-2">
            <h5 className="uppercase text-[#666F77] text-sm">account number</h5>
            <p className="font-semibold text-[#1F1F23]">March 30th, 2023</p>
          </div>
          
        </div>
      </div>

      {/* Note */}
      <div className="mt-8">
        <p className="text-gray-600 text-sm">Thank you for your patronage</p>
      </div>
    </div>
  );
};

export default InvoiceComponent;
