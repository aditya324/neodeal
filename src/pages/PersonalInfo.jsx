
import React, { useState } from "react";
import profilePlaceholder from "../assets/profile 1.png";
import coverPlaceholder from "../assets/cover.png";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCircleQuestion } from "react-icons/fa6";

const PersonalInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [saveDefaultAddress, setSaveDefaultAddress] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "firstName":
        if (value.trim() === "") {
          return "First Name is required";
        }
        break;
      case "lastName":
        if (value.trim() === "") {
          return "Last Name is required";
        }
        break;
      case "phoneNumber":
        if (value.trim() === "") {
          return "Phone Number is required";
        } else if (!/^\d{10}$/.test(value.trim())) {
          return "Phone Number must be exactly 10 digits";
        }
        break;
      case "email":
        if (value.trim() === "") {
          return "Email is required";
        } else if (!validateEmail(value)) {
          return "Invalid email format";
        }
        break;
      default:
        break;
    }
    return "";
  };

  const handleInputChange = (fieldName, value) => {
    const error = validateField(fieldName, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));

    switch (fieldName) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address1":
        setAddress1(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "city":
        setCity(value);
        break;
      case "postal":
        setPostal(value);
        break;
      case "state":
        setState(value);
        break;
      case "country":
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Profile image size exceeds 5MB limit.");
      return;
    }
    if (file && !file.type.startsWith("image/")) {
      alert("Profile image must be an image file.");
      return;
    }
    setProfileImage(file);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.size > 5 * 1024 * 1024 || file.size < 1 * 1024 * 1024)) {
      alert("Cover image size must be between 1MB and 5MB.");
      return;
    }
    if (file && !file.type.startsWith("image/")) {
      alert("Cover image must be an image file.");
      return;
    }
    setCoverImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formErrors).forEach((fieldName) => {
      const error = validateField(
        fieldName,
        e.target.elements[fieldName].value
      );
      if (error) {
        errors[fieldName] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // ---------------------------------form submission logic-----------------------------------
    console.log({
      firstName,
      lastName,
      phoneNumber,
      email,
      address1,
      address2,
      city,
      postal,
      state,
      country,
      saveDefaultAddress,
      profileImage,
      coverImage,
    });
    clearForm();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setPostal("");
    setState("");
    setCountry("");
    setSaveDefaultAddress(false);
    setProfileImage(null);
    setCoverImage(null);
    setFormErrors({});
  };

  return (
    <div className="bg-gray-200 xl:px-32 lg:px-14 px-3 py-5">
      <div className="flex justify-between">
        <p className="text-blue font-semibold text-xl">Personal Info</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-5 mt-3 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {/* Left section */}
        <div className="lg:col-span-2 lg:p-5 lg:border-l-2 lg:border-l-gray-300 lg:pl-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-base font-bold text-textGrey"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Mr. John"
                className={`mt-2 outline-none h-12 rounded-3xl pl-5 ${
                  formErrors.firstName && "border-red-500"
                }`}
                value={firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              {formErrors.firstName && (
                <small className="text-red-500">{formErrors.firstName}</small>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-base font-bold text-textGrey"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Wick"
                className={`mt-2 outline-none h-12 rounded-3xl pl-5 ${
                  formErrors.lastName && "border-red-500"
                }`}
                value={lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              {formErrors.lastName && (
                <small className="text-red-500">{formErrors.lastName}</small>
              )}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-base font-bold text-textGrey"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                placeholder="876543219"
                className={`mt-2 outline-none h-12 rounded-3xl pl-5" ${
                  formErrors.email && "border-red-500"
                }`}
                value={phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
              {formErrors.phoneNumber && (
                <small className="text-red-500">{formErrors.phoneNumber}</small>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-bold text-textGrey"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mrjohnwick@gmail.com"
                className={`mt-2 outline-none h-12 rounded-3xl pl-5 ${
                  formErrors.email && "border-red-500"
                }`}
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {formErrors.email && (
                <small className="text-red-500">{formErrors.email}</small>
              )}
              <small className="mt-2 outline-none ml-5 text-textGrey text-sm font-normal">
                Your email for <span className="text-purple">neo</span>{" "}
                <span className="text-blue">deals</span> notifications
              </small>
            </div>
          </div>
          <h2 className="mt-8 font-bold text-base text-purple">Address</h2>
          <div className="mt-5">
            <div className="flex flex-col">
              <label
                htmlFor="address1"
                className="text-base font-bold text-textGrey"
              >
                Address 1
              </label>
              <small className="mt-1 text-textGrey text-sm font-normal">
                House no , Building , Area
              </small>
              <input
                type="text"
                id="address1"
                placeholder=""
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={address1}
                onChange={(e) => handleInputChange("address1", e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col">
              <label
                htmlFor="address2"
                className="text-base font-bold text-textGrey"
              >
                Address 2
              </label>
              <small className="mt-1 text-textGrey text-sm font-normal">
                Landmark , Street
              </small>
              <input
                type="text"
                id="address2"
                placeholder=""
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={address2}
                onChange={(e) => handleInputChange("address2", e.target.value)}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:mt-10 mt-2">
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="text-base font-bold text-textGrey"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Hubli"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="postal"
                className="text-base font-bold text-textGrey"
              >
                Postal
              </label>
              <input
                type="number"
                id="postal"
                placeholder="876540"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={postal}
                onChange={(e) => handleInputChange("postal", e.target.value)}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label
                htmlFor="state"
                className="text-base font-bold text-textGrey"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Karnataka"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={state}
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="text-base font-bold text-textGrey"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="India"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
                value={country}
                onChange={(e) => handleInputChange("country", e.target.value)}
              />
            </div>
          </div>
          <div className="mt-10 h-12 rounded-3xl bg-white relative p-2 flex items-center">
            <input
              type="checkbox"
              id="saveDefaultAddress"
              checked={saveDefaultAddress}
              onChange={(e) => setSaveDefaultAddress(e.target.checked)}
              className="w-6 h-6 mr-3"
            />
            <h2 className="text-sm sm:text-base">Save as my default address</h2>
          </div>
        </div>

        {/* Right section */}
        <div className="lg:p-5">
          <div className="flex items-center justify-between">
            <p className="text-lg flex items-center font-bold text-textGrey tracking-wide">
              Update Profile&nbsp; <FaCircleQuestion />
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
              id="profileImageInput"
            />
            <label htmlFor="profileImageInput" className="cursor-pointer">
              <HiOutlinePencilAlt className="text-textGrey text-xl" />
            </label>
          </div>

          <p className="w-56 text-gray-500 mt-1">
            Profile of at least Size{" "}
            <span className="text-textGrey">300x300.</span> Gifs work too.{" "}
            <span className="text-textGrey">Max 5mb.</span>
          </p>

          <div className="flex items-end mt-3">
            <img
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : profilePlaceholder
              }
              alt=""
              className="w-52 h-52 object-cover rounded-full"
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <p className="text-lg flex items-center font-bold text-textGrey tracking-wide">
              Cover Photo&nbsp; <FaCircleQuestion />
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="hidden"
              id="coverImageInput"
            />
            <label htmlFor="coverImageInput" className="cursor-pointer">
              <HiOutlinePencilAlt className="text-textGrey text-xl" />
            </label>
          </div>

          <p className="w-56 text-gray-500 mt-2">
            Cover of at least Size{" "}
            <span className="text-textGrey">1170x920</span>
          </p>

          <div className="flex items-end lg:w-72 h-20">
            <img
              src={
                coverImage ? URL.createObjectURL(coverImage) : coverPlaceholder
              }
              alt=""
              className="h-16 xl:w-72 object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5 mt-5 w-full">
          <button
            type="submit"
            className="w-56 sm:h-12 h-10 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold"  >
            Save Address
          </button>
          <button
            type="submit"
            className="w-56 sm:h-12 h-10 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
