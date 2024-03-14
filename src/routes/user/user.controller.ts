import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService;
    ) {}

    signup() {

    }

    login() {

    }

    me() {

    }

    @Get()
    getUser() {
        return this.userService.getUser();
    }
}
