import { google } from "googleapis";
import keys from "../../../key.json";

export default function handler(req: any, res: any) {

    console.log("Hello World");

    try {
        const client = new google.auth.JWT(
            keys.client_email, undefined, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE

            const optDE = {
                spreadsheetId: '1Jf7ha6F0O_HM7CpvkZxGce9MbrqSx059c7XH-NX3Tks',
                range: 'de!A1:A4'
            };

            let dataDE = await gsapi.spreadsheets.values.get(optDE);

            return res.status(400).send(JSON.stringify({error: false, data: dataDE.data.values}));
        });

    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e}));
    }
}
