import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	browserSessionPersistence,
} from 'firebase/auth';

import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyA9FlFfrUkzM0m6_r2HBggVDpEar45n8OI',
	authDomain: 'ai-gpt-8518b.firebaseapp.com',
	projectId: 'ai-gpt-8518b',
	storageBucket: 'ai-gpt-8518b.appspot.com',
	messagingSenderId: '313573749089',
	appId: '1:313573749089:web:48c0e98ecf49d750695520',
	measurementId: 'G-SMZMTCE74T',
};

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);
const DB = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

const signInWithGoogle = async () => {
	try {
		const userColection = collection(DB, 'users');
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(userColection, where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(userColection, {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (email, password, rememberMe) => {
	try {
		if (!rememberMe) {
			await auth.setPersistence(browserSessionPersistence);
		}
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const { user } = res;

		await addDoc(collection(DB, 'users'), {
			uid: user.uid,
			name: name,
			authProvider: 'local',
			email: user.email,
		});
		alert('Register Successfully !');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = async () => {
	await signOut(auth);
	localStorage.removeItem('user');
	window.location.replace('/');
};

export {
	auth,
	DB,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};
export default firebaseApp;
