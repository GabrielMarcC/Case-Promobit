export const formatData = (data: string) => {
  if (!data) {
    return null;
  }

  const dataObj = new Date(data);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const finalData = (): string => {
    const formatter = new Intl.DateTimeFormat("pt-BR", options);
    const newFormatDate = formatter.format(dataObj);
    const splitDate = newFormatDate.split(" ");
    const formatDate = `${splitDate[0]} ${splitDate[2]
      .toUpperCase()
      .replace(".", " ")} ${splitDate[4]}`;

    return formatDate;
  };

  const yearFullYear = () => {
    const dataReceived = new Date(data);
    const day = dataReceived.getDate();
    const month = dataReceived.getMonth() + 1;
    const year = dataReceived.getFullYear();
    const fullYear = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return { year, fullYear };
  };

  return {
    finalData,
    yearFullYear,
  };
};
