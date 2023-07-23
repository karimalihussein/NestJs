import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.username == 'admin') {
            throw new Error('Admin is not allowed');
        }
        return value;
    }
}