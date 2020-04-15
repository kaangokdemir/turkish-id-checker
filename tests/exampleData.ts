const strings: String[] = [
  '15973515680',
  '48434802890',
  '89866475924',
  '64676450200',
  '15844521246',
  '30222258880',
  '34945632804',
  '12730220580',
  '63446795756',
  '78254264738',
]

const numbers: Number[] = [
  15973515680,
  48434802890,
  89866475924,
  64676450200,
  15844521246,
  30222258880,
  34945632804,
  12730220580,
  63446795756,
  78254264738,
]

const unacceptedTypes: any[] = [
  new Date(),
  ['15973515680'],
  { id: 15844521246 },
  false,
  null,
  undefined,
]

const ExampleIdNumbers = {
  strings,
  numbers,
  unacceptedTypes,
}

module.exports = ExampleIdNumbers
