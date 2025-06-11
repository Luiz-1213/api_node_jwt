import { IController, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController {
  async handle(): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: '1', name: 'zezinho' },
          { id: '2', name: 'luizinho' },
          { id: '1', name: 'joaozinho' },
        ],
      },
    };
  }
}
