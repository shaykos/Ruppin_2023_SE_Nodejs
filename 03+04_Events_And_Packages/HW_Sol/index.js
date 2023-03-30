const { EventHandler } = require('./utils/EventHandler');
const { GetRandNumber, Create, Read } = require('./functions');

async function Main() {

    //יצירת קבצים לקריאה
    for (let i = 1; i <= 5; i++) {
        await Create(i, `text${i}`);
    }

    //יצירת אירוע 
    EventHandler.CreateEvent('ReadFile', async () => {
        let n = GetRandNumber();
        let data = await Read(n);
        console.log('data => ', data);

        //הפעלת אירוע
        EventHandler.RunEvent('EndProgram');
    });

    //יצירת אירוע
    EventHandler.CreateEvent('EndProgram', async () => {
        for (let i = 1; i <= 5; i++) {
            let txt = await Read(i);
            console.log(`${txt}\n`);
            console.log('**********\n');
        }
    });

    //יצירת טיימר עד להפעלת האירוע הנדרש
    let time = 5;
    let interval = setInterval(() => {
        console.log(time--);
        if (time == 0) {
            clearInterval(interval);
            EventHandler.RunEvent('ReadFile');
        }
    }, 1000);


}
Main();