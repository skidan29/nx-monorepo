import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getData(): string {
        return JSON.stringify('Hello API');
    }
}
