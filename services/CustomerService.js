import Realm from 'realm';

const CustomerSchema = {
    name: 'Customer',
    properties: {
        nic: 'string',
        name: 'string',
        address: 'string',
        salary: 'double'
    }
}

const saveCustomer = async (customer) => {
    try {
        const realm = await Realm.open({
            schema: [CustomerSchema],
        });

        realm.write(() => {
            realm.create('Customer', customer);
        });
        realm.close();
        console.log('customer saved');
    } catch (e) {
        console.log(e);
    }
}

export {saveCustomer}
