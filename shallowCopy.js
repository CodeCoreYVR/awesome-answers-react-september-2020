const questions = [
  {
    a: 'a',
    b: 'b',
    c: 'c'
  },
  {
    d: 'd',
    e: 'e',
    f: 'f'
  },
  {
    g: 'g',
    h: 'h',
    i: 'i'
  }
]

let qCopy = JSON.parse(JSON.stringify(questions));
qCopy[3] = 'hello'
qCopy[0].a = 1;
console.log(qCopy);
console.log('-----------')
console.log(questions);