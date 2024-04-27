import React,{useState} from "react";
import {View,TextInput,Button} from "react-native";
import {saveCustomer} from "./services/CustomerService";

const SaveCustomerForm = () => {
  const [customer,setCustomer]=useState({
      nic:'',
      name:'',
      address:'',
      salary:'',
  })

    const handleChange=(key,value)=>{
      setCustomer({...customer,[key]:value})
    }

    const handleSave=()=>{
      saveCustomer(customer)
    }

    return(
        <View style={{padding:20}}>
            <TextInput
                style={styles.input}
                placeholder={'nic'}
                value={customer.nic}
                onChangeText={(text)=>handleChange('nic',text)}/>
            <TextInput
                style={styles.input}
                placeholder={'name'}
                value={customer.name}
                onChangeText={(text)=>handleChange('name',text)}/>
            <TextInput
                style={styles.input}
                placeholder={'address'}
                value={customer.address}
                onChangeText={(text)=>handleChange('address',text)}/>
            <TextInput
                style={styles.input}
                placeholder={'salary'}
                value={customer.salary}
                onChangeText={(text)=>handleChange('salary',text)}/>
            <Button title={'Save Customer'} onPress={handleSave}/>
        </View>
    )

}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        padding:10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:3
    }
})

export default SaveCustomerForm;
