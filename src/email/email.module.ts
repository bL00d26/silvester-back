import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

import { EmailService } from './email.service';

@Module({
  controllers: [],
  providers: [EmailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
  ],
  exports: [EmailService],
})
export class EmailModule {}
