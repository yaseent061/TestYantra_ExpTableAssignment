import React from "react"
import "./Pagination.css"

export const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a href="!#" onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
