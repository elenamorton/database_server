const expect  = require('chai').expect
const chai = require('chai')
//const chaiHttp = require('chai-http')
const server = require('../server')
//chai.use(chaiHttp)

describe('Server', () => {
  describe('/set?somekey=somevalue', () => {
    it('successfully connect with status 200'), (done) => {
      chai.request(server)
        .post('/set?somekey=somevalue')
        .end( (error, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
    }


  })
})
