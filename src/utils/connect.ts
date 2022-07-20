import config from "config"
import logger from "./logger";
import mongoose from "mongoose"

async function connect(){
    const dbUri = config.get<string>("dbUri")
    try{ await mongoose.connect(dbUri)
        logger.info('Connected to DB')
    }catch(error) {
        logger.error("Could not connect to db")
        process.exit(1)
    }
}
export default connect