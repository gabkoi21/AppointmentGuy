import { useState } from "react";
import { userProfile } from "../../data/userProfileData";

// Main Container Component

// Navigation Buttons Component
const PageNavButtons = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="mt-5 flex gap-4">
        {/* This is the profile button */}
        <button
          onClick={() => setActiveTab("profile")}
          className={`rounded-md px-3 py-1 hover) => setActiveTab("security")}
          className={`rounded-md px-3 py-1 hover);
};

// Reusable Input Field Component
const UserInputField = ({ label, value, isEditing, onChange }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-roboto font-light text-gray-600">
        {label}
      </label>
      <input
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={!isEditing}
        className={`w-full rounded-md border border-gray-300 p-2 outline-none transition-colors duration-200 focus);
};

// User Profile Component
const UserProfile = ({ userObj, isEditing, onUpdateField, handleSave }) => {
  const {} = userObj;
  return (
    <div className="mt-6 w-full">
      <div className="rounded-xl bg-white">
        <div>
          <div className="space-y-4">
            <UserInputField
              label="Name"
              value={userObj.name}
              isEditing={isEditing}
              onChange={(value) => onUpdateField("name", value)}
            />
            <UserInputField
              label="Email Address"
              value={userObj.email}
              isEditing={isEditing}
              onChange={(value) => onUpdateField("email", value)}
            />
            <UserInputField
              label="Phone Number"
              value={userObj.phone}
              isEditing={isEditing}
              onChange={(value) => onUpdateField("phone", value)}
            />
            <UserInputField
              label="Home Address"
              value={userObj.Address}
              isEditing={isEditing}
              onChange={(value) => onUpdateField("Address", value)}
            />
            <UserInputField
              label="Role"
              value={userObj.role}
              isEditing={false}
              onChange={() => {}}
            />
          </div>

          {isEditing && (
            <button className="mt-5 rounded-md bg-green-700 px-6 py-2 text-white transition-colors duration-200 hover)}
        </div>
      </div>
    </div>
  );
};

// Profile Information Component
const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userProfile[0]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfileData(userProfile[0]);
  };

  const handleUpdateField = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="mt-5 rounded-lg border border-gray-200 bg-white px-8 py-10 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-black">Profile Information</h3>
          <span className="block text-sm text-gray-500">
            Update your account profile information here.
          </span>
        </div>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="rounded-md bg-teal-500 px-4 py-2 text-white transition-colors duration-200 hover) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="rounded-md bg-gray-200 px-6 py-2 text-gray-700 transition-colors duration-200 hover)}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-xl font-medium text-gray-600">
          {profileData.name.charAt(0)}
        </span>
      </div>

      <UserProfile
        userObj={profileData}
        isEditing={isEditing}
        onUpdateField={handleUpdateField}
        handleSave={handleSave}
      />
    </div>
  );
};

// Update Password Information Component
const UpdatePasswordInformation = () => {
  return (
    <div className="mt-5 rounded-lg border border-gray-200 bg-white px-8 py-10 shadow-xl">
      <div>
        <h3 className="text-2xl font-bold text-black">Security Settings</h3>
        <span className="block text-sm text-gray-500">
          Manage your account security settings here.
        </span>
      </div>
      <UpdatePassword />
    </div>
  );
};

// Update Password Component
const UpdatePassword = () => {
  return (
    <div className="mt-6 w-full">
      <div className="rounded-xl bg-white">
        <div className="space-y-4">
          <div className="mb-4">
            <label className="mb-2 block font-roboto font-light text-gray-600">
              Current Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 p-2 outline-none transition-colors duration-200 focus);
};

const AdminProfileContainer = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="flex">
      <aside className="h-screen md);
};

export default AdminProfileContainer;
