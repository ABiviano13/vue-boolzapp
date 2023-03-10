const { createApp } = Vue;

contacts = [
    {
        name: "T'Challa",
        avatar: './img/blackpanther.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },

    {
        name: 'Natasha Romanoff',
        avatar: './img/blackwidow.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },

    {
        name: 'Steve Rogers',
        avatar: './img/capitanamerica.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },

    {
        name: 'Carol Darvers',
        avatar: './img/captainmarvel.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },

    {
        name: 'Peter Parker',
        avatar: './img/peterparker.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },

    {
        name: 'Shuri ',
        avatar: './img/shuri.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },

    {
        name: 'Thanos',
        avatar: './img/thanos.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },

    {
        name: 'Tony Stark',
        avatar: './img/tonystark.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
] 

const currentIndex = 0;


createApp({
    data() {
        return {
            arrayContacts: contacts,
            currentContact: currentIndex, 
            inputValueMessage: '',
            inputValueContact: ''
        }
    },
    methods: {
        setCurrentContact(index){
            // console.log('cliccato')
            this.currentContact = index;
            this.resetMessage()
        },

        addMessage(index){
            const textInputMessage = this.inputValueMessage.trim();

            if(textInputMessage === ''){
                this.resetMessage()
                return
            };

            // const date = this.getDateAsAString('dd/LL/yyyy HH:mm:ss');
            const activeContact = this.currentContact;

            const newMessage = {
                date: '10/01/2020 15:55:00',
                message: textInputMessage,
                status: 'sent'
            };

            // console.log(newMessage);

            this.arrayContacts[activeContact].messages.push(newMessage);
            this.resetMessage();

            setTimeout(this.responseMessage, 2000, activeContact);

        },

        resetMessage(){
            this.inputValueMessage = '';
        },

        responseMessage(index){
            const textResponseMessage = {
                date: '10/01/2020 15:55:00',
                message: 'Okay',
                status: 'received'
            };
            // console.log(textResponseMessage);

            this.arrayContacts[index].messages.push(textResponseMessage);
        },

        isHidden(contact) {
            // const { name } = contact.toLowerCase();
            const name = contact.name.toLowerCase();
            console.log(name, this.inputValueContact);

            const textInputContact = this.inputValueContact.trim().toLowerCase();

            const result = !name.includes(textInputContact);
            console.log(result);

            return result
        }

        // getDateAsAString(format = 'dd/LL/yyyy'){
        //     const now = DateTime.now();
        //     return now.toFormat(format);
        // },
    }
}).mount('#app')

window.addEventListener('keyup', (enter) => {
	if (enter.key === 'Enter') {
		// console.log('enter')
	}
})



