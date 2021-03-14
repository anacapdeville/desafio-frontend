const addData = (data) => {
  console.log(data)
  return {
    type: 'SAVE_DATA',
    data: data,
  }
}

export default addData;
