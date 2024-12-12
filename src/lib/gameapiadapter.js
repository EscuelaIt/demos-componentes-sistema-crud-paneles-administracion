import { ResponseApiAdapter } from '@dile/crud/lib/ResponseApiAdapter';

export class GameApiAdapter extends ResponseApiAdapter {
  getElementList() {
    return this.response.data.result.data;
  }
}