import { BaseProvider, HasId } from "./base-provider";

export interface Contact extends HasId {
    name: string;
    address: string
    phone: string;
}


export class ContactProvider extends BaseProvider<Contact> {

    constructor() {
        super([
            {
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            },{
                id: 'cont-1234',
                name: 'Jørgen Clevin',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            }
        ]);
    }

}