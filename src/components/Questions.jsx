import React, { useState } from 'react';

export default function Questions() {
  const [activeButton, setActiveButton] = useState('Eligibility');
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (button) => {
    setActiveButton(button);
    setExpanded(expanded === button ? null : button);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'Eligibility':
        return (
          <>
            <p
              className="text-[#1A73E8] text-base font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle('Eligibility')}
            >
              <span className="mr-3">
                Do I need to have prior Product Management and Project Management experience to enroll in the program?
              </span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${expanded === 'Eligibility' ? '' : 'transform rotate-180'}`}
              >
                <path
                  d="M1.40976 7.40997L5.99976 2.82997L10.5898 7.40997L11.9998 5.99997L5.99976 -2.67029e-05L-0.000244141 5.99997L1.40976 7.40997Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </p>
            {expanded === 'Eligibility' && (
              <p className="mr-3 mt-3 font-normal text-sm">
                No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
              </p>
            )}
          </>
        );
      case 'How To Use?':
        return (
          <>
            <p
              className="text-[#1A73E8] text-base font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle('How To Use?')}
            >
              <span className="mr-3">How do I use the platform effectively?</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${expanded === 'How To Use?' ? '' : 'transform rotate-180'}`}
              >
                <path
                  d="M1.40976 7.40997L5.99976 2.82997L10.5898 7.40997L11.9998 5.99997L5.99976 -2.67029e-05L-0.000244141 5.99997L1.40976 7.40997Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </p>
            {expanded === 'How To Use?' && (
              <p className="mr-3 mt-3 font-normal text-sm">
                To use the platform effectively, follow the guidelines provided in the help section. Ensure that you complete all necessary steps as outlined.
              </p>
            )}
          </>
        );
      case 'Terms & Conditions':
        return (
          <>
            <p
              className="text-[#1A73E8] text-base font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle('Terms & Conditions')}
            >
              <span className="mr-3">What are the terms and conditions?</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${expanded === 'Terms & Conditions' ? '' : 'transform rotate-180'}`}
              >
                <path
                  d="M1.40976 7.40997L5.99976 2.82997L10.5898 7.40997L11.9998 5.99997L5.99976 -2.67029e-05L-0.000244141 5.99997L1.40976 7.40997Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </p>
            {expanded === 'Terms & Conditions' && (
              <p className="mr-3 mt-3 font-normal text-sm">
                The terms and conditions can be found in the legal section of the website. Please review them carefully before using the platform.
              </p>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="text-center mt-[5%] text-lg font-medium">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </div>

      <div className="flex justify-between font-normal mt-[2%] mr-[13%] ml-[13%]">
        <div className="relative w-[22%]">
          <button
            className={`w-full h-14 mb-4 ${activeButton === 'Eligibility' ? 'text-[#1A73E8] bg-white border-[#E2E8F0] drop-shadow-xl' : 'text-[#737373] bg-white border-2 border-[#737373]'} font-bold py-2 px-4 rounded-md border-gray-300`}
            onClick={() => setActiveButton('Eligibility')}
          >
            Eligibility
          </button>
          <button
            className={`w-full h-14 mb-4 ${activeButton === 'How To Use?' ? 'text-[#1A73E8] bg-white border-[#E2E8F0] drop-shadow-xl' : 'text-[#737373] bg-white border-2 border-[#737373]'} font-bold py-2 px-4 rounded-md border-gray-300`}
            onClick={() => setActiveButton('How To Use?')}
          >
            How To Use?
          </button>
          <button
            className={`w-full h-14 mb-4 ${activeButton === 'Terms & Conditions' ? 'text-[#1A73E8] bg-white border-[#E2E8F0] drop-shadow-xl' : 'text-[#737373] bg-white border-2 border-[#737373]'} font-bold py-2 px-4 rounded-md border-gray-300`}
            onClick={() => setActiveButton('Terms & Conditions')}
          >
            Terms & Conditions
          </button>
        </div>

        <div className="relative pl-8 w-[76%]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
