import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from './email.service';

@Module({
  controllers: [],
  providers: [EmailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'mail.arcadepapel.net',
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'plataforma@arcadepapel.net',
          pass: 'plataformaarcaemail',
        },
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
      options: {
        partials: {
          dir: join(__dirname, 'templates/partials'),
          options: {
            strict: true,
          },
        },
      },
    }),
  ],
  exports: [EmailService],
})
export class EmailModule {}
