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

      {currentPage !== 1 && (
        <button className="pagination-button" disabled>
          {currentPage - 1}
        </button>
      )}
      <button disabled className="current-page pagination-button">
        {currentPage}
      </button>
      {restPages > 0 && (
        <button disabled className="pagination-button">
          {currentPage + 1}
        </button>
      )}
      {restPages - 1 > 0 && <p>...</p>}
      {restPages - 1 > 0 && <p>{restPages - 1}</p>}
      <button
        disabled={restPages === 0}
        className="button-hover pagination-button"
        onClick={() => props.changePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
