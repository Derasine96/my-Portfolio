import React from "react";

function ProgressBars() {
  return (
    <div className="flex flex-col lg:space-y-14 md:space-y-12 sm:space-y-[42px] lg:pl-6 md:pl-1">
      <progress className="progress progress-error w-84 mt-5" value="90" max="100"></progress>
      <progress className="progress progress-error w-84" value="75" max="100"></progress>
      <progress className="progress progress-error w-84" value="90" max="100"></progress>
      <progress className="progress progress-error w-84" value="90" max="100"></progress>
      <progress className="progress progress-error w-84" value="70" max="100"></progress>
      <progress className="progress progress-error w-84" value="75" max="100"></progress>
      <progress className="progress progress-error w-84" value="85" max="100"></progress>
    </div>
  );
}

export default ProgressBars;
