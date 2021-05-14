import { createClientAsync } from 'soap';

import fieldValidator from '../utils/validateFields.js';

const wsdl = "http://www.dneonline.com/calculator.asmx?wsdl";

export default class CalcController {

  async sum(request, response) {
    const soapClient = await createClientAsync(wsdl).catch(() => {
      return response.status(400).json({
        "erro": "falha ao criar soap client",
      });
    });
    const { firstValue, secondValue } = request.body;

    if (!fieldValidator([firstValue, secondValue], "sum")) {
      return response.status(400).json({
        "erro": "houve uma falha ao prosseguir com a operação",
        "mensagem": "Por favor utilize valores inteiros válidos"
      });
    }
    
    await soapClient.Add({ intA: firstValue, intB: secondValue }, (err, result) => {
      if (err) {
        return response.status(400).json({
          "erro": "falha ao executar a soma"
        });
      }
      return response.status(200).json({ response: result.AddResult });
    });
  }

  async subtract(request, response) {
    const soapClient = await createClientAsync(wsdl).catch(() => {
      return response.status(400).json({
        "erro": "falha ao criar soap client",
      });
    });
    const { firstValue, secondValue } = request.body;

    if (!fieldValidator([firstValue, secondValue], "subtract")) {
      return response.status(400).json({
        "erro": "houve uma falha ao prosseguir com a operação",
        "mensagem": "Por favor utilize valores inteiros válidos"
      });
    }
  
    await soapClient.Subtract({ intA: firstValue, intB: secondValue }, (err, result) => {
      if (err) {
        return response.status(400).json({
          "erro": "falha ao executar a subtração"
        });
      }
      return response.status(200).json({ response: result.SubtractResult });
    });
  }

  async multiply(request, response) {
    const soapClient = await createClientAsync(wsdl).catch(() => {
      return response.status(400).json({
        "erro": "falha ao criar soap client",
      });
    });
    const { firstValue, secondValue } = request.body;

    if (!fieldValidator([firstValue, secondValue], "multiply")) {
      return response.status(400).json({
        "erro": "houve uma falha ao prosseguir com a operação",
        "mensagem": "Por favor utilize valores inteiros válidos"
      });
    }
  
    await soapClient.Multiply({ intA: firstValue, intB: secondValue }, (err, result) => {
      if (err) {
        return response.status(400).json({
          "erro": "falha ao executar a multiplicação"
        });
      }
      return response.status(200).json({ response: result.MultiplyResult });
    });
  }

  async divide(request, response) {
    const soapClient = await createClientAsync(wsdl).catch(() => {
      return response.status(400).json({
        "erro": "falha ao criar soap client",
      });
    });
    const { firstValue, secondValue } = request.body;

    if (!fieldValidator([firstValue, secondValue], "divide")) {
      return response.status(400).json({
        "erro": "houve uma falha ao prosseguir com a operação",
        "mensagem": "Por favor utilize valores inteiros válidos"
      });
    }
  
    await soapClient.Divide({ intA: firstValue, intB: secondValue }, (err, result) => {
      if (err) {
        return response.status(400).json({
          "erro": "falha ao executar a divisão"
        })
      }
      return response.status(200).json({ response: result.DivideResult });
    });
  }
}