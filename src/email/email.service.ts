import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { User } from 'src/users/models';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation() {
    try {
      const url = `example.com/auth/confirm?token=${'HOLATOKEN'}`;

      const messageInfo = await this.mailerService.sendMail({
        to: 'davidproyecto01@gmail.com',
        from: 'plataforma@arcavirtual.net',
        subject: 'Welcome to Nice App! Confirm your Email',
        template: './confirmation', // `.hbs` extension is appended automatically
        context: {
          name: 'Martin Perez',
          url,
        },
      });
      return messageInfo;
    } catch (error) {
      console.log(error);
      return 'Error sending email';
    }
  }

  async sendUserOrderDetail() {
    try {
      const messageInfo = await this.mailerService.sendMail({
        to: 'davidproyecto01@gmail.com',
        from: 'plataforma@arcavirtual.net',
        subject: 'Order details! Check your products',
        template: './order-details', // `.hbs` extension is appended automatically
        context: {
          name: 'Martin Perez',
          quantity: 5,
          items: [
            {
              item: 'Lagartija ejemplar color dorado',
              image:
                'https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg',
              quantity: 3,
              price: 100,
              subtotal: 300,
            },
            {
              item: 'Lagartija ejemplar 450 color naranja',
              image:
                'https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg',
              quantity: 2,
              price: 150,
              subtotal: 300,
            },
          ],
          total: 600.0,
        },
      });

      return messageInfo;
    } catch (error) {
      console.log(error);
      return 'Error sending email';
    }
  }

  async sendEmail() {
    try {
      const res = await this.mailerService.sendMail({
        from: 'plataforma@arcavirtual.net',
        to: 'martinperez290597@gmail.com',
        subject: 'HOLA',
        html: '<p>HOLA</p>',
      });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // async notifyEvaluationClassroom(
  //   evaluationClassroom: EvaluationClassroom,
  //   users: User[],
  // ) {
  //   try {
  //     const subject = 'NUEVA EVALUACIÓN';
  //     const evaluationDateHtml = `<p> Tiene la evaluación de nombre: ${evaluationClassroom.name} programada para la fecha y hora: ${evaluationClassroom.startDate}</p>`;
  //     const messageParentsHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //       <p>Un cordial saludo padre de familia, mediante este correo se le informa que su menor hij@: </p>
  //       `.concat(evaluationDateHtml);
  //     const messageStudentHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //     <p>Un cordial saludo estimado estudiante, mediante este correo se le informa que usted: </p>
  //     `.concat(evaluationDateHtml);
  //     const students = users.filter(user => user.type === UserType.STUDENT);
  //     students.forEach(async student => {
  //       const resStudents = await this.sendEmail(
  //         student.email,
  //         subject,
  //         messageStudentHtml,
  //       );
  //       const resParents = await this.sendEmail(
  //         student.parentEmail,
  //         subject,
  //         messageParentsHtml,
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async notifyNewEvent(event: Event, users: User[]) {
  //   try {
  //     const subject = 'NUEVO EVENTO';
  //     const eventDate = moment(event.start, 'YYYY-MM-DD').format('DD/MM/YYYY');
  //     const eventDateHtml = `<p> Tiene el evento de nombre: ${event.title}, programado para la fecha: ${eventDate}</p>`;
  //     const messageParentsHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //       <p>Un cordial saludo padre de familia, mediante este correo se le informa que su menor hij@: </p>
  //       `.concat(eventDateHtml);
  //     const messageStudentHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //     <p>Un cordial saludo estimado estudiante, mediante este correo se le informa que usted: </p>
  //     `.concat(eventDateHtml);
  //     const students = users.filter(user => user.type === UserType.STUDENT);
  //     students.forEach(async student => {
  //       const resStudents = await this.sendEmail(
  //         student.email,
  //         subject,
  //         messageStudentHtml,
  //       );
  //       const resParents = await this.sendEmail(
  //         student.parentEmail,
  //         subject,
  //         messageParentsHtml,
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async notifyDeletedEvent(event: Event, users: User[]) {
  //   try {
  //     const subject = 'EVENTO CANCELADO';
  //     const eventDate = moment(event.start, 'YYYY-MM-DD').format('DD/MM/YYYY');
  //     const eventDateHtml = `<p> Tiene el evento de nombre: ${event.title}, programado para la fecha: ${eventDate}</p>`;
  //     const messageParentsHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //       <p>Un cordial saludo padre de familia, mediante este correo se le informa que su menor hij@: </p>
  //       `.concat(eventDateHtml);
  //     const messageStudentHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //     <p>Un cordial saludo estimado estudiante, mediante este correo se le informa que usted: </p>
  //     `.concat(eventDateHtml);
  //     const students = users.filter(user => user.type === UserType.STUDENT);
  //     students.forEach(async student => {
  //       const resStudents = await this.sendEmail(
  //         student.email,
  //         subject,
  //         messageStudentHtml,
  //       );
  //       const resParents = await this.sendEmail(
  //         student.parentEmail,
  //         subject,
  //         messageParentsHtml,
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async notifyEditedEvent(event: Event, users: User[]) {
  //   try {
  //     const subject = 'EVENTO EDITADO';
  //     const eventDate = moment(event.start, 'YYYY-MM-DD').format('DD/MM/YYYY');
  //     const eventDateHtml = `<p> Tiene el evento de nombre: ${event.title}, programado para la fecha: ${eventDate}</p>`;
  //     const messageParentsHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //       <p>Un cordial saludo padre de familia, mediante este correo se le informa que su menor hij@: </p>
  //       `.concat(eventDateHtml);
  //     const messageStudentHtml = `<h3> MENSAJE DE LA PLATAFORMA ARCA DE PAPEL </h3>
  //     <p>Un cordial saludo estimado estudiante, mediante este correo se le informa que usted: </p>
  //     `.concat(eventDateHtml);
  //     const students = users.filter(user => user.type === UserType.STUDENT);
  //     students.forEach(async student => {
  //       const resStudents = await this.sendEmail(
  //         student.email,
  //         subject,
  //         messageStudentHtml,
  //       );
  //       const resParents = await this.sendEmail(
  //         student.parentEmail,
  //         subject,
  //         messageParentsHtml,
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async sendEmailPassword(receptor: string, message: string) {
  //   try {
  //     const greeting =
  //       '<p>Estimado usuario por este medio le enviamos su contraseña de la plataforma:  </p> ';
  //     const res = await this.mailerService.sendMail({
  //       from: 'plataforma@arcavirtual.net',
  //       to: receptor,
  //       subject: 'RECUPERAR CONTRASEÑA',
  //       html: greeting.concat(message),
  //     });
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
}
