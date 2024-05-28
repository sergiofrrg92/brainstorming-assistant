import { Injectable } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { GenerateIdeaDto } from './dto/generate-idea.dto';
import { generateResponse } from './apis/openai.api';

@Injectable()
export class IdeasService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createIdeaDto: CreateIdeaDto) {
    return 'This action adds a new idea';
  }

  findAll() {
    return `This action returns all ideas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idea`;
  }

  async generateIdea(generateIdeaDto: GenerateIdeaDto) {
    const { prompt } = generateIdeaDto;
    const idea = await generateResponse(prompt);
    return idea;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateIdeaDto: UpdateIdeaDto) {
    return `This action updates a #${id} idea`;
  }

  remove(id: number) {
    return `This action removes a #${id} idea`;
  }
}
