var supertest = require("supertest");
const assert = require('assert');
const {expect} = require('chai');
const chai = require('chai');
const api = supertest('http://www.omdbapi.com/?i=tt3896198&apikey=2b0a68a1')
function getData(apiKey, keyword){return api.get('/').set('Content-Type','application/json').query({'apikey':apiiKey, 's':keyword})
}
describe('Test scenario:get omdbapi',()=>{
it('Test Step: get all film with Galaxy name', async()=>{
const response = await
getData('2b0a68a1','galaxy');
expect(response.status).to.equal(200)
});
});