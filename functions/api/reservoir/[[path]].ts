// A proxy API endpoint to redirect all requests to `/api/reservoir/*` to
// MAINNET: https://api.reservoir.tools/{endpoint}/{query-string}
// RINKEBY: https://api-rinkeby.reservoir.tools/{endpoint}/{query-string}
// and attach the `x-api-key` header to the request. This way the
// Reservoir API key is not exposed to the client.

// https://developers.cloudflare.com/pages/platform/functions/
export const onRequest = [async (context) => {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const RESERVOIR_API_KEY = env.RESERVOIR_API_KEY
  const RESERVOIR_API_BASE = env.NEXT_PUBLIC_RESERVOIR_API_BASE

  const { path } = params
  const { search } = new URL(request.url)
  const { method, body } = request;

  // Isolate the query object
  delete params.path

  let endpoint: string = ''

  // convert the path array into a path string: [a, b] -> 'a/b'
  if (typeof path === 'string') {
    endpoint = path
  } else {
    endpoint = path.join('/')
  }

  if(search){
    endpoint = endpoint + search;
  }

  // Construct the API url: `https://api.reservoir.tools/{endpoint}/{query-string}`
  const url = new URL(endpoint, RESERVOIR_API_BASE)

  // setParams(url, params)

  try {
    const options: RequestInit | undefined = {
      method,
    }

    const headers = new Headers()

    if (RESERVOIR_API_KEY) headers.set('x-api-key', RESERVOIR_API_KEY)

    if (body) {
      headers.set('Content-Type', 'application/json')
      options.body = JSON.stringify(body)
    }

    options.headers = headers

    const response = await fetch(url.href, options)

    let data: any

    const contentType = response.headers.get('content-type')

    if (contentType?.includes('application/json')) {
      data = await response.json()
    } else {
      data = await response.text()
    }

    if (!response.ok) throw data

    // 200 OK
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    // 400 Bad Request
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
]