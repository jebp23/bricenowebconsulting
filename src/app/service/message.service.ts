import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MessageService {
  
  constructor(private http: HttpClient) { }
  
  sendMessage(body){
    return this.http.post('https://bricenowebconsulting.herokuapp.com/formApi', body);  
  }
}

/* 
    const CLIENT_ID='317858752894-jbje31oh7pc30l3al6kl129k2mnq279k.apps.googleusercontent.com';
    const CLIENT_SECRET='LF0qv1-FwH1PXq6o9eoprp1A';
    const REDIRECT_URI='https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN='1//04yHt6RuEegGACgYIARAAGAQSNwF-L9Ir5qAF72bljOpBFlEvnDOHI_ZeUItjIKBfjfplG9pHJSxcUZyhbAdDjFq_RxrLIu1RR2E';
    
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    function sendMail(){
        try{
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type:'OAuth2',
                    user: 'jebp2389@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken            
                }
            });
*/