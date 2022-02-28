

class Rest {
  async FETCH(url, method, data, options) {
    const defaultOptions = {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    };
    const response = await fetch(url, {
      method: method,
      ...(options == undefined ? defaultOptions : options),
      body: data == undefined ? undefined : JSON.stringify(data)
    });
    return response.json();
  }
}

export { Rest };
