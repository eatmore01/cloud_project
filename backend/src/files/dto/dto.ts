import { ApiProperty } from '@nestjs/swagger';

export class MoveFileDto {
  @ApiProperty({ description: 'Name of the target bucket', required: true })
  targetBucket: string;
}