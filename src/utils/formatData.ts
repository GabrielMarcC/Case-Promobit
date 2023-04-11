export const formatData = (data: string) => {
  if (data) {
    const dataObj = new Date(data);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("pt-BR", options);
    const newFormatData = formatter.format(dataObj);
    const splitData = newFormatData.split(" ");
    const finalData = `${splitData[0]} ${splitData[2]
      .toUpperCase()
      .replace(".", " ")} ${splitData[4]}`;

    let dataReceived = new Date(data);
    const day = dataReceived.getDate();
    const month = dataReceived.getMonth() + 1;
    const year = dataReceived.getFullYear();
    const fullYear = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    const dataOpts = {
      finalData,
      year,
      fullYear,
    };

    return dataOpts;
  } else {
    throw new Error("The 'data' parameter cannot be empty.");
  }
};
