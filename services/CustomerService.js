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
const getCustomerByNic = async (nic) => {
    try {
        const realm = await Realm.open({
            schema: [CustomerSchema],
        });

        const customer = realm.objects('Customer').filtered(`nic="${nic}"`);
        realm.close();
        return customer[0];
    } catch (e) {
        console.log(e);
        return null;
    }
}

const deleteCustomerByNic = async (nic) => {
    try {
        const realm = await Realm.open({
            schema: [CustomerSchema],
        });

        const customer = realm.objects('Customer').filtered(`nic="${nic}"`);
        realm.write(() => {
            realm.delete(customer);
        });
        realm.close();
        console.log('Customer Deleted!');
    } catch (e) {
        console.log(e);
    }
}

const findAllCustomers = async () => {
    try {
        const realm = await Realm.open({
            schema: [CustomerSchema],
        });

        const customers = realm.objects('Customer');
        realm.close();
        return customers;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const updateCustomer = async (nic,updateCustomer) => {
    try {
        const realm = await Realm.open({
            schema: [CustomerSchema],
        });
        const customer = realm.objects('Customer').filtered(`nic="${nic}"`);
        realm.write(() => {
            Object.keys(updateCustomer).forEach((key)=>{
                customer[0][key]=updateCustomer[key];
            });
        });
        realm.close();
        console.log('customer Updated');
    } catch (e) {
        console.log(e);
    }
}

export {saveCustomer, getCustomerByNic, deleteCustomerByNic, findAllCustomers, updateCustomer}
