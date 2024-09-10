// pages/dashboard/index.js

import * as React from "react";
import Layout from "../components/Layout";

import Analytics from "../components/invoice/Analytics";
import InvoiceAction from "../components/invoice/InvoiceAction";
import Recent from "../components/invoice/Recent";
import Activities from "../components/invoice/Activities";
import InvoiceComponent from "../components/invoice/InvoiceComponent";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const Invoice = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="mt-2 mb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Invoice</h2>
          <div className="space-x-6">
            <button className="rounded-full bg-white text-[#697598] font-semibold px-10 py-5 uppercase text-sm">
              see what’s new
            </button>
            <button className="rounded-full bg-[#003EFF] font-semibold text-white px-10 py-5 uppercase text-sm">
              Create
            </button>
          </div>
        </div>

        <Analytics />
        <InvoiceAction />

        <div className="mt-6 flex space-x-8">
          <Recent onInvoiceClick={handleClickOpen} />
          <Activities />
        </div>
      </div>

      <Dialog
        fullWidth={fullWidth}
        maxWidth="xl"
        open={open}
        onClose={handleClose}
      >
        <div className="p-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[#1F1F23] text-3xl font-bold">
                Invoice - 1023494 - 2304{" "}
              </h2>
              <p className="mt-1 text-[#697598]">
                View the details and activity of this invoice
              </p>
            </div>
            <div className="space-x-6">
              <button className="rounded-full bg-white text-[#003EFF] border border-[#E3E6EF] font-semibold px-10 py-5 uppercase text-sm">
                Download as pdf
              </button>
              <button className="rounded-full bg-[#003EFF] font-semibold text-white px-10 py-5 uppercase text-sm">
                Send invoice
              </button>
              <button className="rounded-full bg-white text-[#697598] border border-[#E3E6EF] font-semibold px-10 py-5 uppercase text-sm">
                More
              </button>
            </div>
          </div>

          <div
            className={`uppercase text-center text-[10px] font-bold w-fit border px-4 py-2 mt-3 rounded-full bg-[#003EFF33] border-[#003EFF] text-[#003EFF]`}
          >
            PARTIAL PAYMENT
          </div>

          <div className="border p-6 my-8 space-x-6 flex w-fit items-center rounded-3xl">
            <div className="text-[#666F77]">Reminders</div>
            <div
              className={`flex items-center uppercase text-center text-[10px] font-bold w-fit border p-4 rounded-full bg-[#E6FFF0] text-[#373B47]`}
            >
              14 days before due date{" "}
              <svg
                className="ml-6"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 3.99998L3.58 6.82998L9.25 1.16998"
                  stroke="#2DB260"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className={`flex items-center uppercase text-center text-[10px] font-bold w-fit border p-4 rounded-full bg-[#E6FFF0] text-[#373B47]`}
            >
              7 days before due date{" "}
              <svg
                className="ml-6"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 3.99998L3.58 6.82998L9.25 1.16998"
                  stroke="#2DB260"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className={`uppercase text-center text-[10px] font-bold w-fit border p-4 rounded-full bg-white border-[#E3E6EF] text-[#373B47]`}
            >
              3 days before due date
            </div>
            <div
              className={`uppercase text-center text-[10px] font-bold w-fit border p-4 rounded-full bg-white border-[#E3E6EF] text-[#373B47]`}
            >
              24 hrs before due date
            </div>
            <div
              className={`uppercase text-center text-[10px] font-bold w-fit border p-4 rounded-full bg-white border-[#E3E6EF] text-[#373B47]`}
            >
              On the due date
            </div>
          </div>

          <div className="mt-6 flex space-x-14">
            <InvoiceComponent />
            <Activities type="modal" />
          </div>
        </div>

        
      </Dialog>
    </Layout>
  );
};

export default Invoice;