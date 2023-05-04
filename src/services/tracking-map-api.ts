import { get } from "../utilities/http-utility";

export async function fetchPoints() {
  const endpointUrl = "/cars";

  return await get(endpointUrl);
}
