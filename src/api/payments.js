import firebase from '../configFirebase'

export default {
    insertPayment(payment){
        return firebase.db.collection("payments").doc(`${payment.id}`)
        .set({
            name: payment.name,
            description: payment.description,
            date: payment.date,
            amount: payment.amount,
        })
        .then(function() {
            return "Payment successfully written!";
        })
        .catch(function(error) {
            return `Error writing payment: ${error}`;
        });
    }
}