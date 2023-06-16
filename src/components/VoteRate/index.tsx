type VoteRate = {
  vote_average: number;
};

export const VoteRate = ({ vote_average }: VoteRate) => {
  const percent = new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(vote_average / 10);

  return (
    <div className="flex items-center relative w-fit justify-center">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" className="bg" />
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="100"
          className="indicator"
          style={{
            strokeDasharray: 100,
            strokeDashoffset:
              vote_average >= 0 && vote_average <= 10
                ? 100 - vote_average * 10
                : 0,
          }}
        />
      </svg>
      <span className="absolute font-Roboto font-bold text-base tracking-[-0.5%] text-[#14FF00]">
        {percent}
      </span>
    </div>
  );
};
