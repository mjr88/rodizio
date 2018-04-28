import firebase from 'firebase'
import cfg from './fbconfig'
import 'firebase/firestore'

export default firebase.initializeApp(cfg).firestore()
