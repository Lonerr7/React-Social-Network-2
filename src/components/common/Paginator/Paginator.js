import React from 'react';
import s from './Paginator.module.scss';

const Paginator = (props) => {
  const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageLength);

  const pageNumbers = [];
  for (let i = 1; i <= totalPagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.pageNumbers__box}>
      {pageNumbers.map((p) => (
        <span
          onClick={() => {
            props.onPageChanged(p);
          }}
          className={props.currentPage === p ? s.active + ' ' + s.page : s.page}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
