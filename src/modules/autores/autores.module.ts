import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { AutoresRepository } from './autores.repository';

@Module({
  exports: [],
  controllers: [AutoresController],
  providers: [AutoresService, AutoresRepository],
})
export class AutoresModule {}
