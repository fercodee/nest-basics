import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller()
export class AppController {

  constructor(private membersRepository: MembersRepository) { }

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    
    await this.membersRepository.create(name, memberFunction)
  }
}
