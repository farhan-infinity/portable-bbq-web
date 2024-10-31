/* eslint-disable react/prop-types */
import React from "react";
import FirstImage from "../../../assets/images/1.jpeg";
import SecondImage from "../../../assets/images/2.jpeg";
import ThirdImage from "../../../assets/images/3.jpeg";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  FileBadge,
  ImageIcon,
  LocateIcon,
  Logs,
  Upload,
} from "lucide-react"; // Use any icon component library you prefer

const ProductEdit = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 text-gray-800 lg:px-8">
      {/* Header */}
      <header className="flex items-center space-x-2 text-purple-700">
        <button className="p-1">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl">
          Edit Portable Barbecue Grill
        </h1>
      </header>

      {/* Product Section */}
      <Section title="Product" icon={<Logs size={18} />}>
        <ListItem
          label="Product name"
          value="Lorem ipsum"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Description"
          value="Lorem ipsum"
          border="border-b border-b-gray-200"
        />
        <ListItem label="Category" value="Lorem ipsum" />
      </Section>

      {/* Photos Section */}
      <Section
        title="Photos"
        actionText="Add new"
        icon={<ImageIcon size={18} />}
      >
        <div className="flex space-x-2 p-3 bg-white rounded-md overflow-x-auto lg:space-x-4 lg:p-4">
          <img
            src={FirstImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
          <img
            src={SecondImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
          <img
            src={ThirdImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
        </div>
      </Section>

      {/* Location Section */}
      <Section title="Location" icon={<LocateIcon size={18} />}>
        <ListItem
          label="Fillmore Street, Suite 1047, San Francisco"
          value="CA"
        />
      </Section>

      {/* Availability Section */}
      <Section
        title="Availability"
        actionText="Add new"
        icon={<Calendar size={18} />}
      >
        <ListItem label="Sat at Mon" value="Weekly, Monthly" />
      </Section>

      {/* Price Preferences Section */}
      <Section title="Price Preferences" icon={<FileBadge size={18} />}>
        <ListItem
          label="Daily"
          value="$8"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Weekly"
          value="$33"
          border="border-b border-b-gray-200"
        />
        <ListItem label="Monthly" value="$100" />
      </Section>

      {/* Sharing Preferences Section */}
      <Section title="Sharing Preferences" icon={<Upload size={18} />}>
        <Toggle
          label="General Marketplace"
          border="border-b border-b-gray-200"
        />
        <ListItem label="Communities" value="2 selected" />
      </Section>
    </div>
  );
};

const Section = ({ title, children, actionText, icon }) => (
  <section className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="opacity-50">{icon}</div>
        <h2 className="font-medium text-gray-600 text-sm lg:text-lg">
          {title}
        </h2>
      </div>
      {actionText && (
        <button className="text-purple-700 text-sm lg:text-base">
          {actionText}
        </button>
      )}
    </div>
    <div className="bg-white rounded-md">{children}</div>
  </section>
);

const ListItem = ({ label, value, border }) => (
  <div className="px-4">
    <div
      className={`flex justify-between items-center py-3 text-sm lg:text-base ${border}`}
    >
      <span>{label}</span>
      <div className="flex flex-row gap-2">
        <span className="text-gray-500">{value}</span>
        <span className="opacity-50">
          <ChevronRight />
        </span>
      </div>
    </div>
  </div>
);

const Toggle = ({ label, border }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <div className="px-4 bg-white rounded-md">
      <div
        className={`flex justify-between items-center py-3 text-sm lg:text-base ${border}`}
      >
        <span>{label}</span>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
            isEnabled ? "bg-[#9333EA]" : "bg-gray-200"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
              isEnabled ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductEdit;
