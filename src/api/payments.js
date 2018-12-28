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
    },
    getPaymentsFromFirestore(){
        return firebase.db.collection("payments")
            .get()
            .then((querySnapshot) =>{
                return querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
            .catch((error) => {
                return `Error getting documents: ${error}`
            })
    }
}