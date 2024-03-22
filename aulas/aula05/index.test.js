const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);                                            //REQUEST = SOLICITAR

describe('Teste da API /produtos', function() {                           //DESCRIBE = DESCREVER
  test('Deve retornar 200 e um JSON no GET /produtos', async () => {      //ASYNC = ASSINCRONO
    const response = await request.get("/produtos");                      //RESPONSE = RESPOSTA, AWAIT = AGUARDAR, GET = PEGAR......CONST RESPOSTA AGUARDA PEGAR A SOLICITAÇÃO
    expect(response.status).toBe(200);                                    //EXPECT = ESPERAR, TOBE = SER ......ESPERANDO RESPOSTA STATUS SER 200
    expect(response.headers['content-type']).toMatch(/json/);             //CONTENT = CONTENTE, TYPE = TIPO, TOMATCH = PARA COMBINAR
  })

  test('Deve retornar 201 e um JSON no POST /produtos', async () => {
    const response = await request.post("/produtos")
      .send({nome: "Banana", preco: 15.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 200 e um JSON no GET /produtos/id', async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 404 e um JSON no GET /produtos/id', async () => {
    const response = await request.get("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  //O PRIMEIRO CONTEUDO POST QUE ESTAVA AQUI NESTE ESPAÇO FOI ENVIADO PARA CIMA, ABAIXO DO GET PARA O TESTE DAR OK

  test('Deve retornar 422 e um JSON no POST /produtos', async () => {
    const response = await request.post("/produtos").send({});            //SEND = ENVIAR, {} = VAZIO
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 200 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put("/produtos/1")
      .send({nome: "Uva globo", preco: 21.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 404 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 204 e vazio no DELETE /produtos/id', async () => {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});                                    //TO EQUAL = IGUALAR, {} = VAZIO
  })

  test('Deve retornar 404 e um JSON no DELETE /produtos/id', async () => {
    const response = await request.delete("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })
});