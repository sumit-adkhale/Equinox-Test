import React from "react";

function PreviousTrack({date}) {
  return (
    <>
      <h1 className="text-center">{date}</h1>
      <div className="border rounded-lg border-gray-400 p-1">
        <div className="flex ">
          <div className="text-right w-[30%] border-r-2 pr-5 relative">
          <div className="p-2 bg-zinc-800 absolute rounded-full right-[-9px] top-0"></div>
            <p className="text-md">Proposal Sent</p>
            <p className="text-sm">05:30 PM</p>
          </div>
          <div className="w-[70%] pl-5">
            <p className="text-md">Discussion Done</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <p className="text-sm">Follow Up: 11 Oct 23 10:30 AM</p>
            <p className="text-right text-xs">- Bhimkumar Prasad</p>
          </div>
        </div>
        <div className="flex ">
          <div className="text-right w-[30%] border-r-2 pr-5 relative">
          <div className="p-2 bg-zinc-800 absolute rounded-full right-[-9px] top-0"></div>
            <p className="text-md">Proposal Sent</p>
            <p className="text-sm">02:30 PM</p>
          </div>
          <div className="w-[70%] pl-5">
            <p className="text-md">Discussion Done</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <p className="text-sm">Follow Up: 11 Oct 23 10:30 AM</p>
            <p className="text-right text-xs">- Bhimkumar Prasad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviousTrack;
