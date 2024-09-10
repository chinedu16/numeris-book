import Image from "next/image";
import Person from "../../public/person.svg";
import React from "react";

// Define the structure of an activity
interface Activity {
  id: number;
  title: string;
  timestamp: string;
  description: string;
  user: string;
}

// Define the props structure, with an optional 'type' prop
interface AnalyticsProps {
  type?: "modal"; // Optional prop with 'modal' as its only value
}

// Define the Analytics component
const Analytics: React.FC<AnalyticsProps> = ({ type }) => {
  // Sample array of activities
  const activities: Activity[] = [
    {
      id: 1,
      title: "Invoice creation",
      timestamp: "Yesterday, 12:05 PM",
      description: "Created invoice",
      user: "00239434/Olaniyi Ojo Adewale",
    },
    {
      id: 2,
      title: "Payment Received",
      timestamp: "Today, 09:30 AM",
      description: "Received payment for invoice",
      user: "00239435/Taiwo Ademola",
    },
    {
      id: 3,
      title: "Invoice creation",
      timestamp: "Yesterday, 01:20 PM",
      description: "Created invoice",
      user: "00239436/Adebola Williams",
    },
    {
      id: 4,
      title: "Invoice creation",
      timestamp: "Today, 10:15 AM",
      description: "Created invoice",
      user: "00239437/Adewale Ojo",
    },
  ];

  return (
    <div className={`bg-white ${type === "modal" ? "p-0" : "px-8 py-12"} rounded-3xl w-2/5`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-[#1F1F23] font-bold">
          {type === "modal" ? "Invoice Activity" : "Recent Activities"}
        </h3>
        {/* Conditionally hide the button if type is 'modal' */}
        {type !== "modal" && (
          <button className="rounded-full border-2 text-[#003EFF] font-semibold px-10 py-6 uppercase text-sm">
            View all
          </button>
        )}
      </div>
      <div className="mt-8 space-y-8">
        {/* Loop through activities and render each one */}
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <Image src={Person} alt="Person icon" />
            <div>
              <h5 className="text-lg font-bold">{activity.title}</h5>
              <p className="text-[#697598] text-sm">{activity.timestamp}</p>
              <div className="bg-[#F6F8FA] mt-2 rounded-2xl p-4">
                <span className="text-[#697598]">{activity.description} </span>
                <span className="font-bold">{activity.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
