import React, {useEffect, useState} from "react";
import axios from "axios";
import {CardLoaders} from "../loaders/cardLoader";
import Pagination from "./pagination";
import Details from "./capsuleDetail";

export default function Data() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [serialFilter, setSerialFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;
  const indexOfLastItem = active * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filterData = (filterFn) => {
    setLoading(true);
    if (!filterFn) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(filterFn);
      setFilteredData(filtered);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const axiosInstance = axios.create({
        baseURL: "http://localhost/spacex",
      });

      try {
        const res = await axiosInstance.get("/capsules.php");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    filterData((capsule) =>
      statusFilter ? capsule.status.startsWith(statusFilter) : true
    );
  }, [statusFilter, data]);

  useEffect(() => {
    filterData((capsule) =>
      serialFilter ? capsule.capsule_serial.startsWith(serialFilter) : true
    );
  }, [serialFilter]);

  useEffect(() => {
    filterData((capsule) =>
      typeFilter ? capsule.type.startsWith(typeFilter) : true
    );
  }, [typeFilter]);

  const handleFilterChange = (event, filterSetter) => {
    const ref = event.target.value;
    filterSetter(ref);
  };

  const handlePageChange = (page) => {
    setActive(page);
  };

  const renderData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="bg-[linear-gradient(195.95deg,#202326_.7%,#191c1e_97.41%)] py-20">
      <div className="max-w-6xl mx-auto ">
        <div className="text-white flex flex-col justify-center items-center mb-5">
          <h1 className="text-5xl mb-4 uppercase font-bold">
            View our Capsules
          </h1>
          <p>Everything you need to make human double planetary</p>
        </div>
        <div className=" text-white p-10 font-sans">
          <form className="grid grid-cols-3 gap-8">
            <input
              onChange={(e) => handleFilterChange(e, setStatusFilter)}
              id="statusFilter"
              value={statusFilter}
              placeholder="Search by status"
              className="h-full w-full border border-white rounded-lg p-3 placeholder:text-white bg-transparent"
            />

            <input
              onChange={(e) => handleFilterChange(e, setSerialFilter)}
              id="serialFilter"
              value={serialFilter}
              placeholder="Search by serial"
              className="h-full w-full border border-white rounded-lg p-3 placeholder:text-white bg-transparent"
            />

            <input
              onChange={(e) => handleFilterChange(e, setTypeFilter)}
              id="typeFilter"
              value={typeFilter}
              placeholder="Search by type"
              className="h-full w-full border border-white rounded-lg p-3 placeholder:text-white bg-transparent"
            />
          </form>
        </div>

        {loading ? (
          <CardLoaders />
        ) : (
          <div className="grid grid-cols-2 gap-6 text-white">
            {renderData?.map((capsule) => {
              return (
                <div
                  className="shadow-[0_10px_48px_0_rgba(0,0,0,.25)] rounded-2xl backdrop-blur border border-white/20 overflow-hidden"
                  key={capsule.capsule_serial}
                >
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between">
                      <p className="font-semibold text-xl mb-2">
                        {capsule.capsule_serial}
                      </p>
                      <p>{capsule.status}</p>
                    </div>
                    <p className="text:lg">
                      <b>Type: </b>
                      {capsule.type}
                    </p>
                    <div className="">
                      <p>Details: {capsule.details}</p>
                      <Details serial={capsule.capsule_serial} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <Pagination
          active={active}
          setActive={handlePageChange}
          dataLength={filteredData.length}
        />
      </div>
    </section>
  );
}
