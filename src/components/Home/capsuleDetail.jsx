import React, {Fragment, useState} from "react";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {XCircleIcon} from "@heroicons/react/24/outline";
import moment from "moment";

export default function Details({serial}) {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    fetchData();
    setIsOpen(true);
  }

  const fetchData = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost/spacex",
    });

    try {
      const res = await axiosInstance.get(
        `/capsule-detail.php?serial=${serial}`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <p
        onClick={openModal}
        className="underline font-semibold italic cursor-pointer"
      >
        View more details
      </p>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-80"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[562px] transform overflow-auto max-h-[88vh] rounded-2xl bg-[#009dac] backdrop-blur p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between w-full pb-4 border-b border-b-black"
                  >
                    <h3 className="text-lg text-gray font-bold text-center">
                      {data.capsule_serial}
                    </h3>
                    <XCircleIcon
                      onClick={closeModal}
                      className="w-6 h-6 cursor-pointer"
                    />
                  </Dialog.Title>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <div className="flex flex-col gap-1">
                      <b>I.D:</b>
                      <span>{data.capsule_id}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Landings:</h4>
                      <p>{data.landings}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Launch Date:</h4>
                      <p>
                        {moment(data.original_launch).format(
                          "MM-DD-YYYY hh:mmA"
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Launch Unix:</h4>
                      <p>{data.original_launch_unix}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Re-use count:</h4>
                      <p>{data.reuse_count}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Status:</h4>
                      <p>{data.status}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Type</h4>
                      <p>{data.type}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">Details</h4>
                      <p>{data.details}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 pt-4 border-t border-t-black">
                    <h4 className="font-bold text-xl">MISSIONS:</h4>
                    {data.missions?.map((mission) => {
                      return (
                        <div
                          key={mission.name}
                          className="grid grid-cols-2 gap-6"
                        >
                          <h4 className="font-bold text-lg">
                            Mission Name:
                            <span className="font-normal ml-2">
                              {mission.name}
                            </span>
                          </h4>
                          <h4 className="font-bold text-lg">
                            Amount of Flight:
                            <span className="font-normal ml-2">
                              {mission.flight}
                            </span>
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
