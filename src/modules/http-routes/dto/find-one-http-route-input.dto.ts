import { IsUUID } from 'class-validator';

import { FindOneInput } from 'src/common/dto/find-one-input.dto';

export class FindOneHttpRouteInput extends FindOneInput {
  @IsUUID()
  readonly companyUuid: string;
}