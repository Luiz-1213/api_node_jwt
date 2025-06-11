import { IController, IRequest, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController {
  async handle({ accountId }: IRequest): Promise<IResponse> {
    console.log(accountId);
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
