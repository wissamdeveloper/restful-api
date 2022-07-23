import {Express, Request, Response} from 'express'

import { createSessionSchema } from './schema/session.schema';
import { createUserHandler } from './controller/user.controller';
import { createUserSchema } from './schema/user.schema';
import { createUserSessionHandler } from './controller/session.controller';
import validateResource  from './middleware/validateResource'

function routes(app:Express){
    app.get("/healthcheck",(req: Request, res: Response) => res.sendStatus(200));
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);
    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);

}
export default routes