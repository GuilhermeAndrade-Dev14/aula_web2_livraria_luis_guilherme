import { IsString, IsNotEmpty, MinLength, MaxLength, IsNumber} from 'class-validator';
import { Transform } from 'class-transformer';

export class CriarLivroDto {
    @IsString({message: 'O titulo deve ser uma string'})
    @IsNotEmpty({message: 'O titulo é obrigatório'})
    @MinLength(3, {message: 'O titulo deve ter pelo menos 3 caracteres'})
    @MaxLength(100, {message: 'O titulo deve ter no máximo 100 caracteres'})    
    @Transform(({value}) => {
        const valor = typeof value;

        if (valor === 'string') {
            return value.trim();
        }
    })
        titulo: string;

    @IsString({message: 'A descrição deve ser uma string'})
    @IsNotEmpty({message: 'A descrição é obrigatório'})
    @MinLength(3, {message: 'A descrição deve ter pelo menos 3 caracteres'})
    @MaxLength(100, {message: 'A descrição deve ter no máximo 100 caracteres'})    
    @Transform(({value}) => {
        const valor = typeof value;

    if (valor === 'string') {
        return value.trim();
    }
})
descricao: string;
 
@IsNumber({}, {message: 'O idAutor deve ser um número'})
@IsNotEmpty({message: 'O idAutor é obrigatório'})
@Transform(({value}) => {
    const valor = typeof value;

    if (valor === 'string') {
        return Number(value);
    }
})
idAutor: number;
}