import { ResponseApiAdapter } from '@dile/crud/lib/ResponseApiAdapter';

export class TodoResponseApiAdapter extends ResponseApiAdapter {
  getData() {
    return this.response;
  }
}