import React from "react";
import { IPagination } from "../../pages/search";
import "./styles.css";

// pagination={pagination} setPagination={setPagination} number: number;
interface IPagi {
  number: number;
  offset: number;
  totalResults: number;
  changePage: (action: any) => void;
}
const Pagination = (props: IPagi) => {
  return (
    <div className="pagination-container">
      {props.offset !== 1 && (
        <button
          className="button-hover"
          onClick={() => props.changePage("previous")}
        >
          Previous
        </button>
      )}
      {props.offset !== 1 && <button disabled>{props.offset - 1}</button>}
      <button disabled className="current-page">
        {props.offset}
      </button>
      <button disabled>{props.offset + 1}</button>
      <p>...{Math.floor(props.totalResults / props.number - props.offset)}</p>
      <button className="button-hover" onClick={() => props.changePage("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
