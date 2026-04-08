import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { atualizarAutorDto, criarAutorDto } from './autores.dto';
import { get } from 'http';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listarAutores() {
    return this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  listarautor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: criarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }
  @Put('/atualizar-autor/:id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyrequest: atualizarAutorDto,
  ) {
    return this.autoresService.atualizarAutor(idAutor, bodyrequest);
  }
  @Delete('/deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return this.autoresService.deletarAutor(idAutor);
  }
}
