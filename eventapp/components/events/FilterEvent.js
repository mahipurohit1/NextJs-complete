import { useRouter } from "next/router";
import React, { useRef } from "react";

function FilterEvent() {
  const inputMonth = useRef();
  const inputYear = useRef();
  const router = useRouter();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const year = inputYear.current.value;
    const month = inputMonth.current.value;
    router.push(`/events/${year}/${month}`);
  };
  return (
    <form action="" onSubmit={onSubmitHandler}>
      <label htmlFor="months">Months</label>
      <select name="month" id="month" ref={inputMonth}>
        <option value="0">jan</option>
        <option value="1">feb</option>
        <option value="2">mar</option>
        <option value="3">apr</option>
        <option value="4">may</option>
        <option value="5">jun</option>
        <option value="6">jul</option>
        <option value="7">aug</option>
        <option value="8">sep</option>
        <option value="9">oct</option>
        <option value="10">nov</option>
        <option value="11">dec</option>
      </select>
      <label htmlFor="Year">Year</label>
      <select name="year" id="year" ref={inputYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <button className="btn">Filter</button>
    </form>
  );
}

export default FilterEvent;
