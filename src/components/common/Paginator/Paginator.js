import React from 'react';
import s from './Paginator.module.scss';
import Pagination from 'react-js-pagination';

const Paginator = (props) => {
  const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageLength);

  const pageNumbers = [];

  for (let i = 1; i <= totalPagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.pageNumbers__box}>
      <Pagination
        activePage={props.currentPage}
        itemsCountPerPage={props.pageLength}
        totalItemsCount={totalPagesCount}
        pageRangeDisplayed={10}
        activeClass={s.active}
        onChange={(pageNumber) => {
          props.onPageChanged(pageNumber);
        }}
        innerClass={s.pageNumbers__box}
      />
    </div>
  );
};

export default Paginator;
