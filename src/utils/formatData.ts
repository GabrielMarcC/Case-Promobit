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

    return finalData;
  } else {
    console.error();
  }
};
