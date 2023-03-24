export const formatData = (data: string): string => {
  const dataObj = new Date(data);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("pt-BR", options);
  const newFormatData = formatter.format(dataObj);
  const finalData = newFormatData.split(" ");
  return `${finalData[0]} ${finalData[2].toUpperCase().replace(".", " ")} ${
    finalData[4]
  }`;
};
