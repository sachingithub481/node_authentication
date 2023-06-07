const nodeMailer = require('../config/nodemailer');

exports.resetPassMail = (user) => {

    try {
            // console.log('inside newComment mailer');

//for sending ejs in mail
    let htmlString =nodeMailer.renderTemplate({user: user}, '/user/usermailer.ejs');

    let info = nodeMailer.transporter.sendMail({      
         from : process.env.user_email,
         to : user.email,
         subject :'Reset Your Password !',
         html : htmlString
     }, function(err, data) {
         if(err){
             console.log('Error', err)
         } else {
             console.log('Email Send', data);
         }
     });
     if(!info) {
         console.log('Error in sending mail !');
         return;
     }
     console.log('Message send :', info);
     return
    } catch (error) {
        console.log('Error', error)
    }
};

