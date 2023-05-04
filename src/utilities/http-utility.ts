import config from "../config";

const { trackingMapApiUrl } = config;

function getFullEndpointUrl(endpointUrl: string) {
  return trackingMapApiUrl + endpointUrl;
}

export async function get(endpointUrl: string) {
  const url = getFullEndpointUrl(endpointUrl);
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return await response.json();
}
