export const addData = (data) => {
  console.log(data)
  return {
    type: 'SAVE_DATA',
    data: data,
  }
}

export const test = (valor) => ({
  type: 'TEST',
  teste: valor
})
