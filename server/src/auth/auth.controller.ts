import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { JwtAuthGuard } from './passport/jwt-auth.guard';
import { Public } from 'src/decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailService: MailerService
  ) { }

  @Post("login")
  @Public()
  @UseGuards(LocalAuthGuard)
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }


  @Post("register")
  @Public()
  register(@Body() registerDto: CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }

  //@UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  @Get('mail')
  @Public()
  testmain(){
    this.mailService
      .sendMail({
        to: 'quochuy120124@gmail.com', // list of receivers
        // from: 'noreply@nestjs.com', // sender address
        subject: 'Lê Quốc Huy', // Subject line
        text: 'welcome', // plaintext body
        template : "register", // HTML body content
        context:{
          name: "Lê Quốc Huy",
          activationCode: 123456
        }
      })
      
    return "This is a test mail";
  }
}



