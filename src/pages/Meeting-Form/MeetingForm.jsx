import React, { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    position: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const gulfCountryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+973", country: "Bahrain" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+974", country: "Qatar" },
    { code: "+968", country: "Oman" },
    { code: "+965", country: "Kuwait" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.countryCode) newErrors.countryCode = "Country code is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://re-design-backend.onrender.com/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          companyName: "",
          position: "",
          email: "",
          countryCode: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setErrors({ server: errorData.message || "Something went wrong!" });
      }
    } catch (error) {
      setErrors({ server: "Network error, please try again later." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };
  

  const inputClasses = (fieldName) => `
    mt-1 block w-full rounded-lg border 
    ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'} 
    bg-white px-4 py-2 text-black shadow-sm
    focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200
    transition-all duration-200
  `;

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="border-l-4 border-yellow-400 pl-4 mb-8">
          <h2 className="text-3xl font-bold text-black">Book a Meeting</h2>
          <p className="text-gray-600 mt-2">Fill in the details below to schedule your consultation</p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="text-green-500 h-5 w-5" />
            <span className="text-green-700">Meeting request submitted successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses('name')}
                placeholder="John Doe"
              />
              {errors.name && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClasses('companyName')}
                placeholder="Company Ltd."
              />
              {errors.companyName && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.companyName}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Position *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={inputClasses('position')}
                placeholder="Senior Manager"
              />
              {errors.position && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.position}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses('email')}
                placeholder="john@company.com"
              />
              {errors.email && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Country Code *
              </label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className={inputClasses('countryCode')}
              >
                <option value="">Select</option>
                {gulfCountryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} ({country.country})
                  </option>
                ))}
              </select>
              {errors.countryCode && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.countryCode}
                </div>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={inputClasses('phoneNumber')}
                placeholder="555 123 4567"
              />
              {errors.phoneNumber && (
                <div className="mt-1 flex items-center text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses('message')} resize-none`}
              placeholder="Please share any specific topics you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3 px-4 rounded-lg text-sm font-semibold text-black
              transition-all duration-200
              ${isSubmitting 
                ? 'bg-yellow-200 cursor-not-allowed' 
                : 'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600'
              }
              shadow-lg hover:shadow-xl
            `}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              'Schedule Meeting'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;