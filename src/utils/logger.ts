import logger, { pino } from "pino";

import dayjs from "dayjs";
const log = pino({
    transport: {
      target: './pino-pretty-transport',
      options: {
        colorize: true
      }
    },
  })
export default log