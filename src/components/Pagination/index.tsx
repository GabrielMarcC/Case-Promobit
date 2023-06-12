type PaginationProp = {
  handleChangePage: React.MouseEventHandler<HTMLUListElement>;
};

export const Pagination = ({ handleChangePage }: PaginationProp) => {
  return (
    <div className="flex flex-row justify-center items-center p-11 gap-5">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <div className="flex justify-center items-center" key={index}>
            <ul
              className="cursor-pointer"
              onClick={(event) => handleChangePage(event)}
              data-index={index}
            >
              <li className="text-[#5C16C5] font-bold text-base hover:text-[20px]">
                {index}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
