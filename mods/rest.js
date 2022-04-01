

class Rest {
  async FETCH(url, method, data, options) {
    const defaultOptions = {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
        // 'navigator-onLine': navigator.onLine
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    };
    try {
      const response = await fetch(url, {
        method: method,
        ...(options == undefined ? defaultOptions : options),
        body: data == undefined ? undefined : JSON.stringify(data)
      });
      return response.json();
    }catch(error){
      console.error(error);
      return {success: false, error }
    }
  }
}

export { Rest };
