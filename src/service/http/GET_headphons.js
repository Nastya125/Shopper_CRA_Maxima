import { request } from "./http";

async function GET_headphons() {
    const response = await request('headphons', ["GET"])
    return response
}

export default GET_headphons;
