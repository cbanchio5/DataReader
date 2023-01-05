export const dateStringToDate = (dateString: string) : Date => {
  const datePars = dateString.split('/').map((val: string) : number => {
return parseInt(val)
  });

  return new Date(datePars[2], datePars[1] - 1, datePars[0])
}
