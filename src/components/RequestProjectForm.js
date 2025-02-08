import React, { useState } from 'react';

const RequestProjectForm = () => {
  const [inputs, setInputs] = useState([
    { label: 'Full Name', value: '' },
    { label: 'Company/Buisness Name', value: '' },
    { label: 'Your Budget', value: '' },
    { label: 'Project Title', value: '' },
    { label: 'Project Description', value: '' },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const handleInputChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep < inputs.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleFinalSubmit = () => {
    setSubmitButtonClicked(true);
    // Perform final form submission logic here
  };

  return (
    <div className="pt-24">
    <h2 className="font-bold text-8xl text-[#ff6b6b] mb-[-32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-8">
    Start Your <span className="text-[#ffd166] dark:text-[#ff6b6b]">Project</span>
  </h2>
  <h4 className="font-semibold text-2xl mt-10 w-full text-center">
  Tell us about your project and get started today.
  </h4>

    <div className="flex flex-col justify-center items-center mt-8">
      <div className="w-full bg-black text-green-500 rounded-t-lg p-2">
        <span className="mr-1">guest@Identity:</span>
        <span className="mr-1">~$</span>
        <span className="mr-1">request-project</span>
      </div>
      <div className="w-full justify-center items-center bg-black text-white rounded-b-lg px-16 sm:px-2 xs:px-2 py-2">
        {!showSummary ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {inputs.map((input, index) => (
                <React.Fragment key={index}>
                  {currentStep >= index && (
                    <div>
                      <label className="text-green-500">{input.label}:</label>
                      {input.label === 'Project Description' ? (
                        <textarea
                          value={input.value}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full bg-black text-green-500 p-1 pl-2 rounded-md border border-green-500"
                          placeholder={`Enter ${input.label}`}
                        />
                      ) : (
                        <input
                          type="text"
                          value={input.value}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-96 sm:w-56 bg-black text-green-500 p-1 pl-2 rounded-md border border-green-500"
                          placeholder={`Enter ${input.label}`}
                        />
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <button type="submit" className="bg-green-500 px-4 py-2 rounded-md">
              {currentStep === inputs.length - 1 ? 'Next' : 'Next'}
            </button>
          </form>
        ) : (
          <div className="summary">
            <h2 className="text-green-500 mb-2">Summary:</h2>
            {inputs.map((input, index) => (
              <p key={index}>
                <span className="text-green-500">{input.label}:</span> {input.value}
              </p>
            ))}
            {!submitButtonClicked && (
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="bg-green-500 px-4 py-2 rounded-md mt-4"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default RequestProjectForm;