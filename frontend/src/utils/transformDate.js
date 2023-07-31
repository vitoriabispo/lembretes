export default function transformDate(arr) {
  const data = [];
  for (const chave in arr) {
    if (arr.hasOwnProperty(chave)) {
      data.push({
        date: chave,
        reminders: arr[chave]
      })
    }
  }
  return data;
}