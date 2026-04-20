import React from "react";
import {
  FiUserCheck,
  FiSettings,
  FiZap,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

type Step = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    label: "Signed up",
    value: 100,
    icon: <FiUserCheck size={16} />,
  },
  {
    label: "Setup",
    value: 80,
    icon: <FiSettings size={16} />,
  },
  {
    label: "Aha moment",
    value: 60,
    icon: <FiZap size={16} />,
  },
  {
    label: "Activated",
    value: 40,
    icon: <FiCheckCircle size={16} />,
  },
  {
    label: "Active",
    value: 80,
    icon: <FiActivity size={16} />,
  },
];

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500 rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

const BentoTopSectionCompanyCard = () => {
  return (
    <div className="w-[320px] p-5 bg-white rounded-xl shadow-md border border-gray-100 scale-75">
      {/* Header */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Company activation</p>
        <h2 className="text-3xl font-semibold text-gray-900 mt-1">40%</h2>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Icon */}
            <div className="text-gray-500">{step.icon}</div>

            {/* Label */}
            <div className="w-[90px] text-sm text-gray-600">
              {step.label}
            </div>

            {/* Progress */}
            <div className="flex-1">
              <ProgressBar value={step.value} />
            </div>

            {/* Percentage */}
            <div className="w-[40px] text-right text-sm text-indigo-500 font-medium">
              {step.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoTopSectionCompanyCard;