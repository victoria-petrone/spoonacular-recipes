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
const Pagination = ({ number, offset, totalResults, ...props }: IPagi) => {
  //  const page =

  // const pages = Math.floor(totalResults / number); //total pages
  const currentPage = offset === 0 ? 1 : Math.floor(offset / number) + 1;
  const restPages = Math.floor((totalResults - offset) / number);
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        className="button-hover"
        onClick={() => props.changePage("previous")}
      >
        Previous
      </button>

      {currentPage !== 1 && <button disabled>{currentPage - 1}</button>}
      <button disabled className="current-page">
        {currentPage}
      </button>
      <button disabled>{currentPage + 1}</button>
      {restPages > 0 && <p>...{restPages}</p>}
      <button
        disabled={restPages === 0}
        className="button-hover"
        onClick={() => props.changePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
