import { BaseProvider, HasId } from "./base-provider";

export interface Order extends HasId {
    contactName: string;
    contactId: string;
    address: string
    phone: string;
}


export class OrderProvider extends BaseProvider<Order> {

    constructor() {
        super([
            {
                id: 'cont-1234',
                contactName: 'Jørgen Clevin',
                contactId: '12312321',
                address: 'Sebbelinsgade 4, 1234 Superby',
                phone: '+4522334455'
            }
        ]);
    }

}