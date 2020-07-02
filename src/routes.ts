import { Request, Response} from 'express'
import createUser from './services/CreateUser'


export function helloWorld(request: Request, response: Response){

    const user = createUser({
        email: 'eduardorodrigues@gmail.com',
        password: '1234',
        techs: ['Node.js',
         'ReactJS',
          'React Native',
          {title: 'JavaScript', experience: 100},
         ],
    });
console.log
    return response.json({ message: 'Hello World'});

}