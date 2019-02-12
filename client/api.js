import request from 'superagent'

const namesUrl = 'http://localhost:3000/api/v1/names/'

export function getNames (callback) {
  request
    .get(namesUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function addName (name, callback) {
  request
    .post(namesUrl)
    .send(name)
    .end((err, res) => {
      callback(err)
    })
}
