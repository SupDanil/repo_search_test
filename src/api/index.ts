import DOMAIN from '../consts/Domain';

class ApiCall {

  domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  private async perform(
    url: string,
    setError: (error: boolean) => void,
    method = 'GET',
  ) {
    try {
      const response = await fetch(`${this.domain}/${url}`, {
        method,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseString = await response.text();
      const json = responseString === '' ? {} : JSON.parse(responseString);
      return json;
    } catch  {
      // @ts-ignore
      setError(true)
    }
  }

  public async get(path: string, setError: (error: boolean) => void,) {
    const response = await this.perform(path, setError);
    return response;
  }
}

export default new ApiCall(DOMAIN);
