import React from "react";

const Invoices = () => {
  const obj = [
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Update Status",
      color: "#8134AF",
      txt: "white",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          height={"1.5em"}
          fill="gray"
        >
          <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
        </svg>
      ),
    },
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Unpaid",
      txt: "gray",
      color: "#F2F2F2",
    },
    {
      name: "Income Trend",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Disputed",
      txt: "red",
      color: "#FFB1B1",
    },
    {
      name: "Income Trend",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Paid",
      txt: "green",
      color: "#9CEFB8",
    },
    {
      name: "Income Trend",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Paid",
      txt: "green",
      color: "#9CEFB8",
    },
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Partially Paid",
      color: "#FFFAE5",
      txt: "#FFCC00",
    },
    {
      name: "Income Trend",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Paid",
      txt: "green",
      color: "#9CEFB8",
    },
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Overdue",
      txt: "red",
      color: "#FFB1B1",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          height={"1.5em"}
          fill="gray"
        >
          <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
        </svg>
      ),
    },
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Awaited",
      color: "#FFFAE5",
      txt: "#FFCC00",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          height={"1.5em"}
          fill="gray"
        >
          <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
        </svg>
      ),
    },
    {
      name: "Client Name",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Draft",
      color: "#F2F2F2",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          height={"1.5em"}
          fill="gray"
        >
          <path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" />
        </svg>
      ),
    },
    {
      name: "Income Trend",
      price: "₹1,25,000, Due: 2024-06-15",
      btn: "Paid",
      txt: "green",
      color: "#9CEFB8",
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full  text-lg">
      <div className="flex justify-between items-center text-[#999999]">
        <h1 className="">Your Invoices</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          height={"1.25em"}
          fill="#1F1F1F"
        >
          <path d="M480 224C492.9 224 504.6 231.8 509.6 243.8C514.6 255.8 511.8 269.5 502.7 278.7L342.7 438.7C330.2 451.2 309.9 451.2 297.4 438.7L137.4 278.7C128.2 269.5 125.5 255.8 130.5 243.8C135.5 231.8 147.1 224 160 224L480 224z" />
        </svg>
      </div>
      {obj.map((item, id) => {
        return (
          <div
            key={id}
            className="flex flex-row justify-between text-sm border border-neutral-300 px-2 py-4 rounded-xl"
          >
            <div className="flex flex-col">
              <span className="text-[#6B7280]">{item.name}</span>
              <span className="text-[#999999] text-xs">
                ₹1,25,000, Due: 2024-06-15
              </span>
            </div>
            <div className="flex flex-row gap-1 items-center w-fit">
              <button
                className="py-2 px-4  rounded-3xl gap-4 text-xs min-w-[54px] cursor-pointer"
                style={{ color: `${item.txt}`, background: `${item.color}` }}
              >
                {item.btn}
              </button>
              <span>{item?.svg}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Invoices;
