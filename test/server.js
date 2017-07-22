const expect  = require('chai').expect
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
chai.use(chaiHttp)

describe('Server', () => {
  describe('/set?somekey=somevalue', () => {
    it('successfully connect with status 200', (done) => {
      chai.request(server)
        .get('/set?somekey=somevalue')
        .end( (error, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
    })
  })
  describe('/set', () => {
    it('does not change the database if no query is mode on set route', (done) => {
      chai.request(server)
        .get('/set')
        .end( (error, response) => {
          expect(response.text).to.equal('Error: no query has been made')
          done()
        })
    })
  })

  describe('/get?key=somekey', () => {
    it('successfully connect with status 200', (done) => {
      chai.request(server)
        .get('/set?somekey=somevalue')
        .then(() => {
          chai.request(server)
            .get('/get?key=somekey')
            .end( (error, response) => {
              expect(response.statusCode).to.equal(200)
              done()
            })
        })
    })
  })

})
